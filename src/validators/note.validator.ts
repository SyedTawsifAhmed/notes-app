import { z } from 'zod';
import { tagIdValidator, idValidator } from './helper.validator';

export const noteValidator = z.object({
  title: z.
    string().
    min(1, 'Title is required').
    max(255, 'Max 255 characters'),
  content: z.
    string().
    min(1, 'Content is required').
    max(20000, 'Max 20000 characters'),
  userId: idValidator,
  tagId: tagIdValidator.optional(),
});