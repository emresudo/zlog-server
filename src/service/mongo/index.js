import Config from "../../config/index.js";
import mongoose from "mongoose";

const databaseConnect = (async () => {
  await mongoose
    .connect(Config.databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((error) => {
      // TODO Error response for Client message
      throw new Error(error);
    });
})();

export { databaseConnect };
