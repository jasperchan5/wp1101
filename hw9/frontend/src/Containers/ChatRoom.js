import React, { useState } from "react";
import { Input, Button, Tag } from "antd";
import "../App.css"

export default ({ me, messages, bodyRef, body, setBody, displayStatus, sendMessage, clearMessages, userName }) => {
    
    return(
        <>
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
        </>
    )
}