import '../App.css'
import { message } from 'antd'
import useChat from '../Hooks/useChat';
import { useRef, useState, useEffect } from 'react';
import SignIn from './SignIn';
import ChatRoom from './ChatRoom';

const LOCALSTORAGE_KEY = "save-me";

function App() {

  const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);

  // Define states and methods
  const {status, messages, sendMessage, clearMessages} = useChat();
  const [userName,setUserName] = useState('');
  const [body,setBody] = useState(''); // Text body
  const [login,setLogin] = useState(false);
  const [me,setMe] = useState(savedMe || '');

  useEffect(() => {
    if(login){
      localStorage.setItem(LOCALSTORAGE_KEY,me);
    }
  }, [login, me]);

  const displayStatus = (payload) => {
    if(payload.msg){
      const {type, msg} = payload;
      const content = {
        content: msg, duration: 0.5
      }
      switch(type){
        case 'success':{
          message.success(content);
          break;
        }
        case 'error':{
          message.error(content);
          break;
        }
        default: break;
      }
    }
  }

  useEffect(() => {
    displayStatus(status)
  },[status]);

  const bodyRef = useRef(null);
  
  return(login
  ?
  <ChatRoom me={me} messages={messages}
    displayStatus={displayStatus} 
    clearMessages={clearMessages} userName={userName} />
  :
  <SignIn setUserName={setUserName} displayStatus={displayStatus} me={me} setMe={setMe} setLogin={setLogin}/>)
}

export default App
