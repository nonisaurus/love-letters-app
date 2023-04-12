import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

class Message extends React.Component{

  constructor(props){
      super(props)
      this.state = {
          buttonName: 'edit',
          commentField: '',
          isDisabled: 'yes'
      }
  }

  handleCommentInput = (event) => {
    this.setState({
      commentField: event.target.value
    })
  }

  updateButton = (changeButtonTo) => {
     if (changeButtonTo === 'edit'){
      this.setState({
        buttonName: 'edit'
      })
    }else if ( changeButtonTo === 'save'){
      this.setState({
        buttonName: 'save'
      })
    }
  }

  render () {
        return (
        <>
          <form>
            <label>
              <h2>{this.props.username}</h2>
              <input type="text" name="name" disabled={this.state.buttonName === 'edit' ? true : false} defaultValue={this.props.comment} onChange={this.handleCommentInput} />
            </label>
          </form>
          <div>
            {localStorage.getItem("username") === this.props.username ? 
            (< EditBtn  id={this.props.id}
                        comment={this.state.commentField}
                        updateMessage={this.props.updateMessage}
                        updateButton={this.updateButton}
                        buttonName={this.state.buttonName}
                        />) : null }
            {localStorage.getItem("username") === this.props.username ? (
            < DeleteBtn  id={this.props.id}
                         deleteMessage={this.props.deleteMessage}/>) : null }
          </div>
        </>
      );
    }
  }
  
export default Message;