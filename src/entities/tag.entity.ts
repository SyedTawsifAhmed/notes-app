import { model, Schema } from 'mongoose';
import { ITag } from '../interfaces/tag.interface';

const tagSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
  }, 
  { timestamps: true }
);

export const Tag = model<ITag>('Tag', tagSchema);       