import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../app/config';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
  ): void => {
    if (!req.cookies || !req.cookies.token) {
      res.status(401).send('Unauthorized: No token provided');
      return;
    }
    const token = req.cookies.token;
    try {
      const decoded = jwt.verify(
        token, 
        config.javaWebToken
      ) as { userId: string };
      req.userId = decoded.userId;
      next();
    } catch (error) {
      res.status(401).send('Unauthorized: Invalid token');
    }
}