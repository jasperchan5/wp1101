import WebSocket from 'ws';
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv-defaults';
import express from 'express';
import Message from './models/messages.js'
import { sendStatus } from './wssConnect.js';

dotenv.config();
const url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("mongo db connection created"));
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const db = mongoose.connection;
db.once('open',() => {
    wss.on('connection', (ws) => {
        ws.onmessage = async (byteString) => {
            const {data} = byteString;
            const [task, payload] = JSON.parse(data);
            switch(task){
                case 'input': {
                    const {name, body} = payload;
                    const message = new Message({name, body})
                    // Save to DB
                    try{
                        await message.save();
                    }
                    catch(e){
                        throw new Error("Message DB save error: " + e);
                    }
                    sendData(["output", [payload]]);
                    sendStatus({
                        type: 'success',
                        msg: 'Message sent.'
                    }, ws);
                    break;
                }
            }
            await Message.save(); 
        }
        sendData(['output',[payload]])
    })
    const PORT = process.env.port || 4000;
    server.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
})
