import React from 'react';
import PostNewMessage from './PostNewMessage';
import Message from './Message';
import { getAllMessages } from '../API/api';
import { deleteMessageById } from '../API/api';
import { createMessage } from '../API/api';
import { getUserById } from '../API/api';

class MessageBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }

        this.deleteMessage = this.deleteMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            deleteMessageById(id)
            .then((response) => {
                console.log('delete response', response)
                let newAllMessages = this.props.messages.filter((message) => {
                    return message._id !== id
                })
                this.props.setMessages(newAllMessages)
            })
            .catch(e => console.log(`Error in message delete ${e}`)) 
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
          let newAllMessages = [newMessage, ...this.props.messages]
          this.props.setMessages(newAllMessages)
          })  
          .catch(e => console.log(`error: SAVE >>> ${e}`))
      }
      }



  render() {
    const allMessages = this.props.messages.map((message, index) => (
        <Message
            username={message.userId.username}
            comment={message.comment}
            key={index}
            id={message._id}
            deleteMessage={this.deleteMessage}
        />
    ));

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