class AppError extends Error {
  constructor(options, overrides) {
    super();
    Object.assign(options, overrides);

    if (!options.message) {
      throw new Error("AppError: error message required.");
    }

    if (!options.code) {
      throw new Error("AppError: error code required.");
    }

    this.name = "AppError";
    this.code = options.code;
    this.message = options.message;
    this.errors = options.errors;
    this.meta = options.meta;
    this.statusCode = options.statusCode;
  }
}

export default AppError;
