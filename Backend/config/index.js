import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 2500,
  dbUrl: process.env.DATABASE_URL,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
};