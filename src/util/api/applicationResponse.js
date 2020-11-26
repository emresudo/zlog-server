class AppResponse {
  constructor(options, overrides) {
    Object.assign(options, overrides);

    if (!options.message) {
      throw new Error("AppResponse: error message required.");
    }

    if (!options.code) {
      throw new Error("AppResponse: error code required.");
    }

    this.name = "AppResponse";
    this.type = options.type;
    this.code = options.code;
    this.message = options.message;
    this.errors = options.errors;
    this.meta = options.meta;
    this.statusCode = options.statusCode;
  }
}

export default AppResponse;
