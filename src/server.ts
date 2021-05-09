import http from 'http';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import { NotFound } from './utils';
import { errorHandler } from './middlewares';

dotenv.config();

const app = express();

// 中间件
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.static('/public'));
app.use(express.urlencoded({ extended: true }));

app.all('*', (req, res, next) => {
  next(new NotFound());
});

// error handling
app.use(errorHandler);

const server = http.createServer(app);

const port = parseInt(process.env.PORT || '3000', 10);
const host = process.env.HOST || 'localhost';

server.listen(port, host, () => {
  console.log(`Server started: http://${host}:${port}`);
});

// 19款 911 卡拉雷s
