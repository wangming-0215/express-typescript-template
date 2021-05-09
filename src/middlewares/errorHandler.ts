/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../utils';

function errorHandler(
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Something went wrong';
  res.status(statusCode).json({
    status: 'error',
    code: error.code || statusCode,
    errors: message,
  });
}

export default errorHandler;
