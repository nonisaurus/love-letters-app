import React from 'react';
import PostNewMessage from './PostNewMessage';
import Message from './Message';
import { getAllMessages, updateMesageById, deleteMessageById, createMessage} from '../API/api';

class MessageBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.deleteMessage = this.deleteMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
    }

    // Get all messages and display them
    componentDidMount () {
        getAllMessages()
        .then((response) => {
            const messages = response.data.message
            this.props.setMessages(messages);
        })
        .catch((error) => {
            console.log('something went wrong to display all messages >>', error)
        })
    }

    //  Create message 
    handleSubmit = (message) => {
        if (message.length > 0) {
            createMessage(message)
            .then((response) => {
                let newMessage = {
                    "comment": response.data.message.comment, 
                    "userId": {_id: response.data.message.userId, username: localStorage.getItem("username")},
                    "_id": response.data.message._id
                }
            let newAllMessages = this.props.messages.concat(newMessage);
            this.props.setMessages(newAllMessages)
        })  
        .catch(e => console.log(`error: SAVE >>> ${e}`))
        }
    }

    // Update message
    updateMessage = (commentId, comment) => {
        updateMesageById(commentId, comment)
        .then((response) => {
            console.log('response >', response)})  
        .catch(e => console.log(`error: UPDATE MESSAGE >>> ${e}`))
    }

    // Delete message
    deleteMessage = (id) => {
            deleteMessageById(id)
            .then((response) => {
                let newAllMessages = this.props.messages.filter((message) => {
                    return message._id !== id
                })
                this.props.setMessages(newAllMessages)
            })
            .catch(e => console.log(`Error in message delete ${e}`)) 
    }


  render() {
    const allMessages = this.props.messages.map((message, index) => (
        <Message
            username={message.userId.username}
            comment={message.comment}
            key={message._id}
            id={message._id}
            userId={message.userId}
            deleteMessage={this.deleteMessage}
            updateMessage={this.updateMessage}
            messages={this.props.messages}
        />
    )).reverse();

    return (
        <div>
            <h1>Message Board</h1>
            <PostNewMessage handleSubmit={this.handleSubmit} />
            {this.props.messages.length > 0 ? allMessages : <h2>No messages yet</h2>}
        </div>
    );
  }
}

export default MessageBoard;