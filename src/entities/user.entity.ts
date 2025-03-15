import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema({
  name: { type: String, required: [true, "Username is required"] },
  email: { 
    type: String, 
    unique: true, 
    match: [/.+\@.+\..+/, "Please enter a valid email address"], 
    trim: true 
  },
  password: { type: String , required: true },
  createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);

