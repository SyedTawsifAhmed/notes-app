import { Router } from 'express';
import { createUser, getUserByEmail, deleteUser } from '../controllers/user.controller';
// import { authMiddleware } from '../middleware/auth.middleware';

const userRouter = Router();

if (process.env.NODE_ENV === 'development') {
  userRouter.post('/', createUser);
  userRouter.get('/:email', getUserByEmail);
  userRouter.delete('/:userId', deleteUser);
}

export default userRouter;