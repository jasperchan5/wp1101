import Message from './models/messages.js'


const sendData = (data, ws) => {
    ws.send(JSON.stringify(data));
}

const sendStatus = (payload, ws) => {
    sendData(["status", payload], ws);
}

const initData = (ws) => {
    Message.find().sort({ created_at: -1 }).limit(100).exec((err, res) => {
        if(err) throw err;
        // Initialize app with existing messages
        sendData(['init',res],ws);
    })
}

export { sendData, sendStatus, initData }