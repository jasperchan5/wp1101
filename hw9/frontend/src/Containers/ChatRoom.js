import React, { useState } from "react";
import { Input, Button, Tag, Tabs } from "antd";
import { useMutation } from '@apollo/client';
import { CREATE_CHATBOX_MUTATION, CREATE_MESSAGE_MUTATION } from "../graphql";
import ChatBox from "./ChatBox.js";
import ChatModal from "./ChatModal.js";
import useChatBox from "../Hooks/useChatBox.js";
import Title from "../Components/Title.js"
import styled from "styled-components";
import "../App.css"

const Wrapper = styled(Tabs)`
    width: 100%;
    height: 300px;
    background: eeeeee52;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
    display: flex;
`;

export default ({ me, displayStatus }) => {
    const [messageInput, setMessageInput] = useState('');
    const [activeKey, setActiveKey] = useState('');
    const { chatBoxes, createChatBox, removeChatBox } = useChatBox();
    const [modalVisible, setModalVisible] = useState(false);
    const [name,setName] = useState("");

    const [startChat] = useMutation(CREATE_CHATBOX_MUTATION);
    const [sendMessage] = useMutation(CREATE_MESSAGE_MUTATION);

    const addChatBox = () => setModalVisible(true);
    

    return(
        <>
                <Title>
                    <h1>{me}'s Chat Room</h1>
                </Title>
                <>
                    <Wrapper
                        tabBarStyle={{height: "36px"}}
                        type="editable-card"
                        activeKey={activeKey}
                        onChange={(key) => {
                            setActiveKey(key);
                        }}
                        onEdit={(targetKey, action) => {
                            if(action === "add") addChatBox();
                            else if(action === "remove"){
                                setActiveKey(removeChatBox(targetKey,activeKey));
                            }
                        }}
                    >
                        {/* {console.log(activeKey)} */}
                        {chatBoxes.map((friend) => 
                            <Tabs.TabPane tab = {friend} closable={true} key={friend}>
                                <ChatBox me={me} friend={friend} key={friend}></ChatBox>
                            </Tabs.TabPane>
                        )}
                    </Wrapper>
                    <ChatModal
                    visible={modalVisible}
                    onCreate={async () => {
                        // console.log(name);
                        await startChat({
                            variables: {
                                name1: me,
                                name2: name
                            },
                        })
                        // console.log("Start chat success");
                        setActiveKey(createChatBox(name));
                        // console.log("Create chatbox success");
                        setModalVisible(false);
                    }}
                    onCancel={() => setModalVisible(false)}
                    setName={setName}
                ></ChatModal>
                </> 
                <Input.Search
                // Save and store the text body
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                enterButton="Send"
                placeholder="Enter message here..."
                
                // When "Send", call sendMessage()
                onSearch={(msg) => {
                    console.log("Print: ",me,activeKey,msg);
                    if(!msg){
                        displayStatus({
                            type: 'error',
                            msg: 'Please enter a message body'
                        })
                        return;
                    }
                    sendMessage({ variables: {from: me, to: activeKey, message: msg }});
                    setMessageInput('');
                }}
                ></Input.Search>
        </>
    )
}