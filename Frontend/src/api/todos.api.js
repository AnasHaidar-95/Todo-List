import { api } from '../lib/axios';

export const todosApi = {
  fetchAll: () => api.get('/todos').then((r) => r.data.data),
  create: (content) =>
    api.post('/todos', { content }).then((r) => r.data.data),
  update: (id, payload) =>
    api.patch(`/todos/${id}`, payload).then((r) => r.data.data),
  delete: (id) => api.delete(`/todos/${id}`),
};