import React from 'react';
import MessagePost from './MessagePost';
import { getAllMessages } from './apiMessages';

class MessageBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: []
        }
    }

    componentDidMount () {
        getAllMessages()
        .then((response) => {
            console.log('resp', response)
        })
        .catch((error) => {
            console.log('something went wrong', error)
        })
    }

    handleSubmit = (event) => {

    }



  render() {

    return (
      <div>
            <h1>Message Board</h1>
            <MessagePost 
            handleSubmit = {this.handleSubmit} 
            comment = {this.state.comments}/>
      </div>
    );
  }
}

export default MessageBoard;