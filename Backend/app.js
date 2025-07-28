import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/index.js';
import todoRoutes from './routes/todo.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use(async(_req, _res, next) => {
  next(new (await import('./utils/ApiError.js')).ApiError(404, 'Route not found'));
});

app.use(errorHandler);

export default app;