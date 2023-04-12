import React from 'react';

class PostNewMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    clearInputValue = () => {
      this.setState({
        inputValue: ''
      })
    }
  
  render() {
    return (
      <div>
        <form>
            <label>
            Leave your comment here:
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </label>
            <input type="button" value="Post" onClick={(e) => {e.preventDefault(); this.props.handleSubmit(this.state.inputValue); this.clearInputValue()}}/>
        </form>
      </div>
    );
  }
}

export default PostNewMessage;