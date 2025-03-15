import { z } from 'zod';
import { idValidator } from './helper.validator';

export const tagValidator = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Max 255 characters'),
  userId: idValidator,
});