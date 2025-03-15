import { z } from 'zod';
import { isValidObjectId } from 'mongoose';

export const idValidator = z.string().refine((val) => isValidObjectId(val), {
  message: "Invalid id",
});

export const tagIdValidator = z.string().refine((val) => isValidObjectId(val), {
  message: "Invalid tagId",}).nullable()