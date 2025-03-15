import { Request, Response } from 'express';
import { registerUser, findUser, removeUser } from '../services/user.service';
import { idValidator } from '../validators/helper.validator';
import { userValidator } from '../validators/user.validator';

export const createUser = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const valid = userValidator.parse({ name, email, password });
    const user = await registerUser(valid.name, valid.email, valid.password);
    res.status(201).send(user);
  } catch (error) {
    res.status(400)
      .send(`Could not create account: ${error}`);
  } 
}

export const getUserByEmail = async (
  req: Request, 
  res: Response)
  : Promise<void> => {
  try {
    const validEmail = userValidator.shape.email.parse(req.body.email);
    const user = await findUser(validEmail);
    res.status(200).send(user);
  } catch (error) {
    res.status(400)
      .send(`Could not find user: ${error}`);
  }
}

export const deleteUser = async (
  req: Request, 
  res: Response)
  : Promise<void> => { 
  try {
    const valid = idValidator.parse(req.userId);
    const user = await removeUser(valid);
    res.status(200).send(user);
  } catch (error) {
    res.status(400)
      .send(`Could not delete user: ${error}`);
  }
}