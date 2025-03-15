import { Request, Response } from 'express';
import { hash, compare } from 'bcryptjs';
import { registerUser, 
  findUser, 
  checkUserExists 
} from '../services/user.service';
import { userValidator } from '../validators/user.validator';
import { setCookie } from '../helper/cookie';
import jwt from 'jsonwebtoken';
import config from '../app/config';

export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const valid = userValidator.parse({ name, email, password });
    await checkUserExists(valid.email);
    const hashedPassword = await hash(valid.password, 10);
    const user = await registerUser(valid.name, valid.email, hashedPassword);
    const token = jwt.sign({ id: user._id }, config.javaWebToken, { expiresIn: '1h' });
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send(`Could not register: ${error}`);
  }
}

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validEmail = userValidator.shape.email.parse(req.body.email);
    const validPassword = userValidator.shape.password.parse(req.body.password);
    const user = await findUser(validEmail);
    const isValid = await compare(validPassword, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, config.javaWebToken, { expiresIn: '1h' });
    setCookie(res, token);
    res.status(200).send('Successfully logged in');
  } catch (error) {
    res.status(400).send(`Could not login: ${error}`);
  }
}

export const logout = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.clearCookie('token');
    res.status(200).send('Logged out');
  } catch (error) {
    res.status(400).send(`Could not logout: ${error}`);
  }
}