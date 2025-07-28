import { TodoRepository } from '../repositories/todo.repository.js';
import { ApiError } from '../utils/ApiError.js';

export class TodoService {
  static async createTodo(payload) {
    return TodoRepository.create(payload);
  }

  static async getTodos() {
    return TodoRepository.findAll();
  }

  static async getTodoById(id) {
    const todo = await TodoRepository.findById(id);
    if (!todo) throw new ApiError(404, 'Todo not found');
    return todo;
  }

  static async updateTodo(id, payload) {
    const todo = await TodoRepository.updateById(id, payload);
    if (!todo) throw new ApiError(404, 'Todo not found');
    return todo;
  }

  static async deleteTodo(id) {
    const todo = await TodoRepository.deleteById(id);
    if (!todo) throw new ApiError(404, 'Todo not found');
    return todo;
  }
}