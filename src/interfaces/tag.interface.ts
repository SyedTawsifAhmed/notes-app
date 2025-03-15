import { Document, Types } from 'mongoose';

export interface ITag extends Document {
	name: string;
  userId: Types.ObjectId;
}