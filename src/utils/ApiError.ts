class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: number,
  ) {
    super(message);
  }
}

class BadRequest extends ApiError {
  constructor(message = 'Bad Request') {
    super(400, message);
  }
}

class NotFound extends ApiError {
  constructor(message = 'Not Found') {
    super(404, message);
  }
}

class InternalServerError extends ApiError {
  constructor(message = 'Internal Server Error') {
    super(500, message);
  }
}

export { ApiError, BadRequest, NotFound, InternalServerError };
