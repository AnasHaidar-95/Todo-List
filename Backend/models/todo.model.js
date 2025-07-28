import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content:  { type: String, required: true, trim: true },
    finished: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);