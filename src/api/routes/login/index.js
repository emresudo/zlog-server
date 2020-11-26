import route from "../../../service/index.js";
import Config from "../../../config/index.js";
import { Message, AppError, AppResponse } from "./response.js";
import { User } from "../../../model/User/index.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email == "" || email == undefined) {
      throw new AppError(Message.EMAIL_REQUIRED);
    }

    if (password == "" || password == undefined) {
      throw new AppError(Message.PASSWORD_REQUIRED);
    }

    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    const valid = email.match(regEx);
    if (!valid) throw new AppError(Message.EMAIL_FORMAT_WRONG);

    const user = await User.findOne({ email });
    if (!user) throw new AppError(Message.USER_INFO_NOT_MATCH);

    const loggedIn = await bcrypt.compare(password, user.password);
    if (!loggedIn) throw new AppError(Message.USER_INFO_NOT_MATCH);

    const webToken = jwt.sign(
      {
        email: user.email,
        fullname: user.fullname,
        username: user.username,
        profilePhoto: user.profilePhoto,
        role: "member",
      },
      Config.secretKey,
      { expiresIn: "7d" }
    );

    const resMessage = new AppResponse(Message.LOGIN_SUCCESS);
    const response = { ...resMessage, webToken };
    res
      .cookie("SessionID", webToken, {
        maxAge: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        httpOnle: true,
      })
      .status(resMessage.statusCode)
      .json(response);
  } catch (error) {
    res.status(error.statusCode).json(error);
  }
};

route.post("/login", login);

export { login };
