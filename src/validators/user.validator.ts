import { z } from 'zod';

export const userValidator = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Max 255 characters'),
  email: z.
    string().
    email('Invalid email format').
    max(255, 'Max 255 characters'),
  password: z.
    string().
    min(8, 'Password must be at least 8 characters long').
    max(255, 'Max 255 characters'),
});