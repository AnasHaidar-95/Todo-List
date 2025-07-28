import { config } from '../config/index.js';

export const errorHandler = (err, _req, res, _next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    status: 'error',
    statusCode: status,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  });
};