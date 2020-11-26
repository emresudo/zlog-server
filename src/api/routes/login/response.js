import AppError from "../../../util/api/applicationError.js";
import AppResponse from "../../../util/api/applicationResponse.js";

const Message = {
  EMAIL_REQUIRED: {
    code: "EMAIL_REQUIRED",
    message: "E-posta alanı boş olamaz.",
    statusCode: 400,
  },
  PASSWORD_REQUIRED: {
    code: "PASSWORD_REQUIRED",
    message: "Parola alanı boş olamaz.",
    statusCode: 400,
  },
  EMAIL_FORMAT_WRONG: {
    code: "EMAIL_FORMAT_WRONG",
    message: "E-posta formatı yanlış, lütfen kontrol edin.",
    statusCode: 400,
  },
  USER_INFO_NOT_MATCH: {
    code: "USER_INFO_NOT_MATCH",
    message: "Girdiğiniz bilgiler ile eşleşen kullanıcı bulunamadı.",
    statusCode: 401,
  },
  LOGIN_SUCCESS: {
    code: "LOGIN_SUCCESS",
    message: "Başarıyla giriş yaptınız.",
    statusCode: 201,
  },
};

export { Message, AppError, AppResponse };
