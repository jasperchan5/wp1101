import uuidv4 from 'uuid/v4.js';
import { makeName, newUser, newMessage, newChatBox, checkUser, checkMessage, checkChatBox } from './utilities.js';

const Mutation = {
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

export { Mutation as default };
