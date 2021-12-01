import './App.css'
import { Button, Input, message, Tag } from 'antd'
import useChat from './useChat';
import { useRef, useState } from 'react';

function App() {
  // Define states and methods
  const {status, messages, sendMessage,clearMessages} = useChat();
  const [userName,setUserName] = useState('');
  const [body,setBody] = useState('') // Text body
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

        }
        default:{
          message.error(content);
          break;
        }
      }
    }
  }
  useEffect(() => {displayStatus(status)},[status]);
  const bodyRef = useRef(null);
  return (
    <div className="App">
      <div className="App-title">
        <h1>Simple Chat</h1>
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
          <p className="App-messages" key={i}>
            <Tag color="blue">{name}</Tag> {body}
          </p>
        }))}
      </div>
      <Input
        // Save and store the username
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            bodyRef.current.focus();
          }
        }}
        style={{ marginBottom: 10 }}
      ></Input>
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
          if(!msg || !userName){
            displayStatus({
              type: 'error',
              msg: 'Please enter a username and a message body'
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

export default App
