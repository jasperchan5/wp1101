// return the found user
const checkUser = (db, name, errFunc) => {
    if(!name){
        throw new Error("Missing user name for " + errFunc);
    }
    return db.User.findOne({name});
}

// make sure calling checkUser beforehand
const newUser = (db, name) => {
    return new db.User({name}).save();
}

const makeName = () => {

}

const checkChatBox = (db, name, errFunc) => {
    if(!name){
        throw new Error("Missing chatBox name for " + errFunc);
    }
    return db.ChatBox.findOne({name});
}

const checkMessage = (db, msg, errFunc) => {
    if(!msg){
        throw new Error("Missing message for " + errFunc);
    }
    return db.UserModel.findOne({msg});
}

const newMessage = (db, msg) => {
    return new db.Message({msg}).save();
}   

const newChatBox = (db, name) => {
    return new db.ChatBox({name: name}).save();
}

export { makeName, newUser, newMessage, newChatBox, checkUser, checkMessage, checkChatBox}