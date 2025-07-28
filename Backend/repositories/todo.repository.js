import { Todo } from '../models/todo.model.js';

export class TodoRepository {
  static create(data) {
    return Todo.create(data);
  }
  static findAll() {
    return Todo.find();
  }
  static findById(id) {
    return Todo.findById(id);
  }
  static updateById(id, data) {
    return Todo.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }
  static deleteById(id) {
    return Todo.findByIdAndDelete(id);
  }
}