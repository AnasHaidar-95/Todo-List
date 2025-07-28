import { TodoService } from '../services/todo.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const create = asyncHandler(async (req, res) => {
  const todo = await TodoService.createTodo(req.body);
  res.status(201).json({ status: 'success', data: todo });
});

const getAll = asyncHandler(async (_req, res) => {
  const todos = await TodoService.getTodos();
  res.json({ status: 'success', data: todos });
});

const getById = asyncHandler(async (req, res) => {
  const todo = await TodoService.getTodoById(req.params.id);
  res.json({ status: 'success', data: todo });
});

const update = asyncHandler(async (req, res) => {
  const todo = await TodoService.updateTodo(req.params.id, req.body);
  res.json({ status: 'success', data: todo });
});

const remove = asyncHandler(async (req, res) => {
  await TodoService.deleteTodo(req.params.id);
  res.status(204).send();
});

export const TodoController = { create, getAll, getById, update, remove };