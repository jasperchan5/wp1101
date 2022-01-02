import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChatBoxSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    messages: [{
        type: mongoose.Types.ObjectId, 
        ref: "Message"
    }]
});
const MessageSchema = new Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    body: {
        type: String,
        required: true
    }
});
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const ChatBoxModel = mongoose.model('chatBox',ChatBoxSchema);
const MessageModel = mongoose.model('message',MessageSchema);
const UserModel = mongoose.model('user',UserSchema);
export { ChatBoxModel, MessageModel, UserModel };