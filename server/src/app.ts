import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetsRouter from './router/tweets';
import menuRouter from './router/menu';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { Server } from 'socket.io';

const app = express();
console.log(process.env.TEST);

const corsOpt = {
  origin: 'http://127.0.0.1:5173',
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOpt));
app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

mongoose
  .connect(process.env.MONGO_DB_URL!, { dbName: 'CoffeeShop' })
  .then(() => console.log('MongoDB has been connected!'))
  .catch((error) => {
    throw error;
  });

// cookie secret key
app.use(cookieParser(`process.env.SESS`));
// 만약 세션이 아니라 쿠키만 쓴다면 아래 코드..
// 스크립팅 불가능하게 하는 XSS 공격 대비 토큰
// app.get(
//   '/api/getXSSToken',
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const XSS_TOKEN = await bcrypt.hash(process.env.XSS_TOKEN, 1);
//       res.cookie('XSS_TOKEN', XSS_TOKEN, {
//         maxAge: 3.6e6 * 34,
//         httpOnly: true,
//         sameSite: 'none',
//         secure: true,
//       });
//       res.status(200).json(`X토큰 생성!!`);
//     } catch (error) {
//       res.status(500).json(error);
//       // console.log(error);
//     }
//   }
// );

// CSRF 공격 불가능하게 하는 CSRF 공격 대비 토큰!
// 반드시 클라이언트 브라우저 메모리에 저장할 것!
// app.get(
//   '/api/getCSRFToken',
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const CSRF_TOKEN = await bcrypt.hash(process.env.CSRF_TOKEN, 1);
//       res.status(201).json(CSRF_TOKEN);
//     } catch (error) {
//       res.status(500).json(error);
//       // console.log(error);
//     }
//   }
// );

// app.use(
//   session({
//     secret: `process.env.SESS`,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       maxAge: 3.6e6 * 34,
//       secure: true,
//     },
//     // store: MongoStore.create({
//     //   dbName: 'session',
//     //   mongoUrl: 'process.env.MONGO_DB_URL',
//     //   autoRemove: 'disabled',
//     // }),
//   })
// );

// app.use('/api/tweets', tweetsRouter);
// app.get(
//   '/api/test',
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       res.status(200).json('test');
//     } catch (error) {
//       next(error);
//     }
//   }
// );

app.use('/api/menu', menuRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong!';

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Hi Seong Eun Lee!');
  console.log('Started!');
});

// const io = new Server(server, {
//   cors: corsOpt,
// });

// io.on('connection', (socket) => {
//   // socket은 각 클라이언트마다 배치된 것임.
//   // when connect
//   console.log(`A user connected! SocketID = ${socket.id}`);
//   socket.emit('getMessage', `SocketID = ${socket.id}`);

//   // join room
//   socket.on('joinRoom', (room) => {
//     socket.join(room);
//     io.emit('joinRoomNum', `Joined Room Num ${room}`);
//   });

//   // leave room
//   socket.on('leaveRoom', (room) => {
//     socket.leave(room);
//     io.emit('leaveRoomNum', `Leaved Room Num ${room}`);
//   });

//   // send and get message
//   socket.on('sendMessage', (newMessage) => {
//     // 특정 클라이언트, 특정 room 에게만 메시지를 전송한다
//     // 아래는 특정 room 으로 전달
//     io.to(newMessage.room).emit('getMessage', newMessage);

//     // 접속된 모든 클라이언트에게 메시지를 전송한다
//     io.emit('getMessage', newMessage);

//     // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
//     socket.emit('getMessage', newMessage);

//     // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
//     socket.broadcast.emit('getMessage', newMessage);
//   });

//   // delete message
//   socket.on('afterDelMsg', (afterDel) => {
//     io.to(afterDel.room).emit('getAfterDelMsg', afterDel.afterDelBol);
//   });

//   // edit message
//   socket.on('afterEditMsg', (afterEdit) => {
//     console.log(afterEdit);
//     io.to(afterEdit.room).emit('getAfterEditMsg', afterEdit.afterEditBol);
//   });
// });
