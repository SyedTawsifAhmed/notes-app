import { User } from "../entities/user.entity";

export const registerUser = async (
  name: string, 
  email: string, 
  password: string
  ) => {
  try {
    const createdAt = new Date();
    const updatedAt = new Date();
    const newUser = new User({ name, email, password, createdAt, updatedAt });
    if (!newUser) {
      throw new Error('Could not create new user');
    }
    return await newUser.save();
  } catch (error) {
    throw error;
  }
}

export const findUser = async (
  email: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {  
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
}

export const checkUserExists = async (
  email: string) => {
  try {
    const user = await User.exists({ email });
    if (user) {
      throw new Error('User already exists');
    }
  } catch (error) {
    throw error; 
  }
}

export const removeUser = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
}