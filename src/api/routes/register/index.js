import route from "../../../service/index.js";

import { Message, AppResponse, AppError } from "./response.js";
import { User } from "../../../model/User/index.js";

import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmPassword } = req.body;

    if (fullname == undefined || fullname == "")
      throw new AppError(Message.FULLNAME_REQUIRED);

    if (username == undefined || username == "")
      throw new AppError(Message.USERNAME_REQUIRED);

    if (email == undefined || email == "")
      throw new AppError(Message.EMAIL_REQUIRED);

    if (password == undefined || password == "")
      throw new AppError(Message.PASSWORD_REQUIRED);

    if (confirmPassword == undefined || confirmPassword == "")
      throw new AppError(Message.PASSWORD_CONFIRM_REQUIRED);

    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    const valid = email.match(regEx);
    if (!valid) throw new AppError(Message.EMAIL_FORMAT_WRONG);

    const emailExists = await User.findOne({ email });
    if (emailExists) throw new AppError(Message.EMAIL_ALREADY_EXISTS);

    const usernameExists = await User.findOne({ username });
    if (usernameExists) throw new AppError(Message.USERNAME_ALREADY_EXISTS);

    try {
      const UserModel = {
        fullname,
        username,
        email,
        password: await bcrypt.hash(password, 12),
      };
      await User.create(UserModel);
    } catch {
      throw new AppError(Message.REGISTER_UNKNOW_ERROR);
    }

    const response = new AppResponse(Message.REGISTER_SUCCESS);
    res.status(response.statusCode).json(response);
  } catch (error) {
    res.status(error.statusCode).json(error);
  }
};

route.post("/register", register);

export { register };
