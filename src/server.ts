import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

server.listen(3000, () => console.log('connected'));
