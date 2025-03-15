import express, { Application } from 'express';
import cors from 'cors';
import rootRouter from './routes/root.route';
import cookieParser from 'cookie-parser';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', rootRouter)

// app.get('/', (req: Request, res: Response) => {
//   const a = 10;

//   console.log(a);
//   res.send(a);
// });

export default app;
