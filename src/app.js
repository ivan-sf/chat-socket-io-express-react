import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import tasksRouter from './routes/tasks.routes.js';
import http from 'http';
import {PORT} from './config.js'
import {Server as SocketServer} from 'socket.io';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log("dirname->",__dirname)
const app = express();
const server = http.createServer(app)
const io = new SocketServer(server,{
    cors:{
        origin:"*",
    }
})

app.set('port',PORT);

app.use(cors({
    origin:"*",
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/task', tasksRouter);
io.on('connection',(socket)=>{
    socket.on('message',(message)=>{
        socket.broadcast.emit('message',{
            body: message,
            from: 'user1'
        })
    })
})
app.use(express.static(join(__dirname, "../client/build")));
server.listen(app.get('port'));
console.log("server on port", app.get('port'));
export default app;
