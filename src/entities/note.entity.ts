import { model, Schema} from 'mongoose';
import { INote } from '../interfaces/note.interface';

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  tagId: { type: Schema.Types.ObjectId, ref: 'Tag', default: null },
  },
  { timestamps: true }
);

export const Note = model<INote>('Note', noteSchema);
