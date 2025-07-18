import { z } from 'zod';

export type Task = z.infer<typeof taskSchema>;
export type PartialTask = z.infer<typeof updateTaskSchema>;

export const taskSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.coerce.boolean().optional(),
});

export const createTaskSchema = taskSchema.omit({
  id: true,
});

export const updateTaskSchema = createTaskSchema.partial();

export const taskListSchema = z.array(taskSchema);
