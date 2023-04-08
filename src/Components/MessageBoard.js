import React from 'react';
import MessagePost from './MessagePost';
import MessageBoardMessages from './MessageBoardMessages';
import { getAllMessages } from './apiMessages';
import { deleteMessageById } from './apiMessages';

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
            console.log(response)
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
            console.log(response)
            let newAllMessages = this.props.messages.filter((message) => {
                return message._id !== id
            })
            this.props.setMessages(newAllMessages)
        })
        .catch(e => console.log(`error: DELETE >>> ${e}`)) 
    }


  render() {
    const allMessages = this.props.messages.map((message, index) => (
        <MessageBoardMessages
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
            <MessagePost />
            {this.props.messages.length > 0 ? allMessages : <h2>No messages yet</h2>}
        </div>
    );
  }
}

export default MessageBoard;