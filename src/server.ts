import http from 'http';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  res.status(200).json({ status: 'ok', data: 'Hello World' });
});

const server = http.createServer(app);

const port = parseInt(process.env.PORT || '3000', 10);
const host = process.env.HOST || 'localhost';

server.listen(port, host, () => {
  console.log(`Server started: http://${host}:${port}`);
});

// 19款 911 卡拉雷s
