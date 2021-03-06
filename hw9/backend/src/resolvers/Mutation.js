import uuidv4 from 'uuid/v4.js';
import { makeName, newUser, newMessage, newChatBox, checkUser, checkMessage, checkChatBox } from './utility.js';

const Mutation = {
  async createMessage(parent, { from, to, message }, { db, pubsub }, info){
    console.log("Enter");
    const { chatBox, sender } = await checkMessage(
      db,
      from,
      to,
      message,
      "createMessage"
    );
    if(!chatBox) throw new Error("ChatBox not found for createMessage");
    if(!sender) throw new Error("User not found: " + from);

    const chatBoxName = makeName(from, to);
    console.log(chatBoxName);
    const newMsg = await newMessage(db, sender, message);
    chatBox.messages.push(newMsg);
    await chatBox.save();

    pubsub.publish(`chatBox ${chatBoxName}`,{
      message: { mutation: "CREATED", message: newMsg}
    });
    return newMsg;
  },
  async createChatBox(parent, {name1,name2}, {db,pubsub}, info){
    if(!name1 || !name2){
      throw new Error("Missing chatBox name for CreateChatBox");
    }
    if(!(await checkUser(db, name1, "CreateChatBox"))){
      console.log("User does not exist for CreateChatBox: " + name1);
      await newUser(db,name1);
    }
    const chatBoxName = makeName(name1,name2);
    let chatBox = await checkChatBox(db, chatBoxName, "createChatBox");
    if(!chatBox){
      chatBox = await newChatBox(db, chatBoxName);
    }
    return chatBox;
  }
};

export default Mutation;
