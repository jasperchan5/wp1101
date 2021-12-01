import './App.css'
import { Button, Input, Tag } from 'antd'
import useChat from './useChat';
import { useState } from 'react';

function App() {
  // Define states and methods
  const {status, messages, sendMessage} = useChat();
  const [userName,setUserName] = useState('');
  const [body,setBody] = useState('') // Text body
  return (
    <div className="App">
      <div className="App-title">
        <h1>Simple Chat</h1>
        <Button type="primary" danger >
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
        style={{ marginBottom: 10 }}
      ></Input>
      <Input.Search
        // Save and store the text body
        value={body}
        onChange={(e) => {setBody(e.target.value)}}
        enterButton="Send"
        placeholder="Type a message here..."
        
        // When "Send", call sendMessage()
        onSearch={(msg) => {
          sendMessage({name: userName, body: msg});
          setBody('');
        }}
      ></Input.Search>
    </div>
  )
}

export default App
