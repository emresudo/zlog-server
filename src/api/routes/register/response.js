import AppError from "../../../util/api/applicationError.js";
import AppResponse from "../../../util/api/applicationResponse.js";

const Message = {
  FULLNAME_REQUIRED: {
    code: "FULLNAME_REQUIRED",
    message: "İsim soyisim alanı boş olamaz.",
    statusCode: 400,
  },
  USERNAME_REQUIRED: {
    code: "USERNAME_REQUIRED",
    message: "Kullanıcı adı alanı boş olamaz.",
    statusCode: 400,
  },
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
  PASSWORD_CONFIRM_REQUIRED: {
    code: "PASSWORD_CONFIRM_REQUIRED",
    message: "Parola (tekrar) alanı boş olamaz.",
    statusCode: 400,
  },
  EMAIL_FORMAT_WRONG: {
    code: "EMAIL_FORMAT_WRONG",
    message: "E-posta formatı yanlış, lütfen kontrol edin.",
    statusCode: 400,
  },
  EMAIL_ALREADY_EXISTS: {
    code: "EMAIL_ALREADY_EXISTS",
    message: "Bu e-posta adresi ile üyelik zaten mevcut.",
    statusCode: 409,
  },
  USERNAME_ALREADY_EXISTS: {
    code: "USERNAME_ALREADY_EXISTS",
    message: "Bu kullanıcı adı kullanılmaktadır.",
    statusCode: 409,
  },
  REGISTER_UNKNOW_ERROR: {
    code: "REGISTER_UNKNOW_ERROR",
    message: "Bilinmeyen bir hata oluştu, lütfen daha sonra tekrar deneyin.",
    statusCode: 200,
  },
  REGISTER_SUCCESS: {
    code: "REGISTER_SUCCESS",
    message: "Başarıyla kayıt oldunuz.",
    statusCode: 200,
  },
};

export { Message, AppError, AppResponse };
