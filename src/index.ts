import express from 'express'
import {createServer} from 'http'
import {WebSocketServer} from 'ws'
const app = express();

const server = createServer(app);

const wss = new WebSocketServer({server})

wss.on("connection",async (ws,req)=>{
    ws.on("message",(message)=>{
        console.log("received ", message)
        ws.send(`hello, you send ${message}`)
    });
})
app.get("/health",(req,res)=>{
    res.json({msg:"you request health endPoint"})
})
server.listen(8000,()=>{
    console.log('start')
})

