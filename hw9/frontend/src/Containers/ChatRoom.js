import React, { useState } from "react";
import { Input, Button, Tag, Tabs } from "antd";
import { useMutation } from '@apollo/client';
import { CREATE_CHATBOX_MUTATION, CREATE_MESSAGE_MUTATION } from "../graphql";
import ChatBox from "./ChatBox";
import ChatModal from "./ChatModal";
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

    const [startChat] = useMutation(CREATE_CHATBOX_MUTATION);
    const [sendMessage] = useMutation(CREATE_MESSAGE_MUTATION);

    const addChatBox = () => {
        setModalVisible(true);
    }

    return(
        <>
                <Title>
                    <h1>{me}'s Chat Room</h1>
                    {/* <Button type="primary" danger onClick={clearMessages}>
                        Clear
                    </Button> */}
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
                        {chatBoxes.map((friend) => {
                            <Tabs.TabPane tab = {friend} closable={true} key={friend}>
                                <ChatBox me={me} friend={friend} key={friend}></ChatBox>
                            </Tabs.TabPane>
                        })}
                    </Wrapper>
                    <ChatModal
                    visible={modalVisible}
                    onCreate={async({ name, friend }) => {
                        await startChat({
                            variables: {
                                name1: me,
                                name2: friend
                            },
                        })

                        setActiveKey(createChatBox(name));
                        setModalVisible(false);
                    }}
                    onCancel={() => {
                        setModalVisible(false);
                    }}
                ></ChatModal>
                </> 
                <Input.Search
                // Save and store the text body
                value={messageInput}
                onChange={(e) => {setMessageInput(e.target.value)}}
                enterButton="Send"
                placeholder="Enter message here..."
                
                // When "Send", call sendMessage()
                onSearch={(msg) => {
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