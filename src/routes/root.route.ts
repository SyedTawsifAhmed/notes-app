import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import userRouter from './user.route';
import tagRouter from './tag.route';
import noteRouter from './note.route';
import authRouter from './auth.router';

const rootRouter = Router();

rootRouter.use('/auth', authRouter)
rootRouter.use('/user', userRouter);
rootRouter.use('/tag', authMiddleware, tagRouter);
rootRouter.use('/note', authMiddleware, noteRouter);

export default rootRouter;