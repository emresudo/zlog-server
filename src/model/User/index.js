import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: String,
    password: String,
    username: String,
    email: String,
    profilePhoto: String,
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

export { User };
