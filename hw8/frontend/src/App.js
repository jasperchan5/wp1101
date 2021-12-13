import './App.css'
import { Button, Input, message, Tag } from 'antd'
import useChat from './useChat';
import { useRef, useState, useEffect } from 'react';

function App() {
  // Define states and methods
  const {status, messages, sendMessage, clearMessages} = useChat();
  const [userName,setUserName] = useState('');
  const [body,setBody] = useState(''); // Text body
  const [login,setLogin] = useState(false);
  const [me,setMe] = useState('');

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
  
  if(login){
    return (
      <div className="App">
        <div className="App-title">
          <h1>{me}'s Chat Room</h1>
          <Button type="primary" danger onClick={clearMessages}>
            Clear
          </Button>
        </div>
        <div className="App-messages">
          {messages.length === 0
          // Initial or when cleared
          ?(<p style={{ color: '#ccc' }}>No messages...</p>)
          // Print each message {name, textBody}
          :(messages.map(({name,body}, i) => {
            return <p key={i}>
              <Tag color="blue">{name}</Tag> {body}
            </p>
          }
          ))}
        </div>
        <Input.Search
          // Set ref
          ref={bodyRef}
          // Save and store the text body
          value={body}
          onChange={(e) => {setBody(e.target.value)}}
          enterButton="Send"
          placeholder="Type a message here..."
          
          // When "Send", call sendMessage()
          onSearch={(msg) => {
            if(!msg){
              displayStatus({
                type: 'error',
                msg: 'Please enter a message body'
              })
              return;
            }
            sendMessage({name: userName, body: msg});
            setBody('');
          }}
        ></Input.Search>
      </div>
    )
  }
  else{
    return(
      <div className='App'>
        <div className="App-title">
          <h1>Log In to Chat Room</h1>         
        </div>
        <div style={{height: "50px"}}></div>
        <Input.Search
          enterButton="Sign In"
          placeholder="Enter username"
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          onSearch={(msg) => {
            if(!msg){
              displayStatus({
                type: 'error',
                msg: 'Please enter a username'
              })
              return;
            }
            setMe(msg)
            setLogin(true)
          }}
        ></Input.Search>
      </div>
    )
  }
}

export default App
