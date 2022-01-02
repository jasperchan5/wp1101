import { checkChatBox, makeName } from "./utility.js";

const Query = {
  chatBox: async (parent, { name1, name2 }, { db, pubsub }, info) => {
    const chatBoxName = makeName(name1,name2);
    let chatBox = await checkChatBox(db, chatBoxName, "queryChatBox");
    return chatBox;
  }
};

export { Query as default };
