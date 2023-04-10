import React from 'react';
import PostNewMessage from './PostNewMessage';
import Message from './Message';
import { getAllMessages } from '../API/api';
import { deleteMessageById } from '../API/api';

class MessageBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        
        }
    }

    // Get all messages and display them
    componentDidMount () {
        getAllMessages()
        .then((response) => {
            this.props.setMessages(response.data.message)
        })
        .catch((error) => {
            console.log('something went wrong', error)
        })
    }

    // Delete message
    deleteMessage = (id) => {
        console.log('delete message >>>', id)
        deleteMessageById(id)
        .then((response) => {
            console.log('delete response', response)
            let newAllMessages = this.props.messages.filter((message) => {
                console.log('message _id', message._id)
                console.log('message id >>', id)
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
            time={message.createdAt}
            key={index}
            id={message._id}
            deleteMessage={this.deleteMessage}
        />
    ));

    return (
        <div>
            <h1>Message Board</h1>
            <PostNewMessage />
            {this.props.messages.length > 0 ? allMessages : <h2>No messages yet</h2>}
        </div>
    );
  }
}

export default MessageBoard;