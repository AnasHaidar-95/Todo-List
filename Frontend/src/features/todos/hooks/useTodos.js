import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { todosApi } from '../../../api/todos.api';

const KEY = ['todos'];

export const useTodos = () =>
  useQuery({ queryKey: KEY, queryFn: todosApi.fetchAll });

export const useCreateTodo = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: todosApi.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useUpdateTodo = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => todosApi.update(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useDeleteTodo = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: todosApi.delete,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};