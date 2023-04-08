import React from 'react';
import MessagePost from './MessagePost';
import MessageBoardMessages from './MessageBoardMessages';
import { getAllMessages } from './apiMessages';

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



  render() {
    const allMessages = this.props.messages.map((message, index) => (
        <MessageBoardMessages
            username={message.userId.username}
            comment={message.comment}
            time={message.createdAt}
            key={index}
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