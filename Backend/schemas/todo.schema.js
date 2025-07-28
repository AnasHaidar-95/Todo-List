import { z } from 'zod';

export const createTodoSchema = z.object({
  content: z.string().min(1).max(200),
  finished: z.boolean().optional().default(false),
});

export const updateTodoSchema = createTodoSchema.partial();