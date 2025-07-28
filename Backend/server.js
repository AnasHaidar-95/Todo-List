import mongoose from 'mongoose';
import { config } from './config/index.js';
import app from './app.js';

(async () => {
  try {
    await mongoose.connect(config.dbUrl);
    console.log('✅  MongoDB connected');
    app.listen(config.port, () => console.log(`🚀  Server on :${config.port}`));
  } catch (error) {
    console.error('💥  Mongo connection failed', error);
    process.exit(1);
  }
})();