import Config from "../../config/index.js";
import express from "express";
import bodyParser from "body-parser";

const route = express();

const httpListener = (() => {
  try {
    route.listen(Config.port);
    console.log("API Server Started!");
  } catch (error) {
    throw new Error(error);
  }
})();

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

route.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

export { route };
