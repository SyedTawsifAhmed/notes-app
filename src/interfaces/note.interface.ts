import { Document, Types } from "mongoose";

export interface INote extends Document {
  title: string;
  content: string;
  userId: Types.ObjectId;
  tagId: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}