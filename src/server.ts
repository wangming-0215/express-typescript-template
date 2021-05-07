import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

console.log('hello world');

server.listen(3000, () => console.log('connected'));
