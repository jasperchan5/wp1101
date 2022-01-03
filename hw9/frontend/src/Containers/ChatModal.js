import { Modal, Input } from 'antd'
import React, { useState } from 'react';

const ChatModal = ({ visible, onCreate, onCancel, setName }) => {
    return(
        <Modal title="Create a new chat room" visible={visible} onOk={onCreate} onCancel={onCancel} okText="Create">
            <p>Name</p>
            <Input onChange={(e) => setName(e.target.value)}></Input>
        </Modal>
    )
}

export default ChatModal;