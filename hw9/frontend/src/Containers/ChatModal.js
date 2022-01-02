import { Modal, Input } from 'antd'

const ChatModal = ({ visible, onCreate, onCancel }) => {
    return(
        <Modal title="Create a new chat room" visible={visible} onOk={onCreate} onCancel={onCancel} okText="Create">
            <p>Name</p>
            <Input></Input>
        </Modal>
    )
}

export default ChatModal;