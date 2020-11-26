import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  secretKey: process.env.TOKEN_SECRET,
};
