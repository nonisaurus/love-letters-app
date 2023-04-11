import React from 'react';
import axios from 'axios';
import apiUrl from '../../apiConfig';
import { getUserByUsername } from '../../Components/API/api';
import { createUser } from '../../Components/API/api';


class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      signUpMessage: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSignUp = () => {
    if (this.state.username.length > 0 ) {
      getUserByUsername(this.state.username)
      .then((response) => {
        if(response.data.user.username) {
            if(this.state.username.length >= 6) {
                this.setState({
                    signUpMessage: "Username already exists! Please try another."
                })
            }
        }
      })
      .catch((error) => {
        if(this.state.username.length >= 6 && this.state.password.length >= 6) {
          createUser(this.state.username, this.state.password)      
          .then((response) => {
              this.setState({
                  signUpMessage: "Sign up successful! Please sign in!",
                  username: '',
                  password: ''
              })
              // this.props.onSignUpSuccess()
          })
      } else {
          this.setState({
              signUpMessage: "Username and password need to be at least 8 characters."
          })
      }
      })
    }
  }

  render() {
    return (
      <div className='signup'>
        <h1>Sign Up</h1>
        <div>
            <label >Username: </label>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input><br/>
            <label >Password: </label>
            <input  type="text" value={this.state.password} onChange={this.handlePasswordChange}></input><br/>
            <button onClick={this.handleSignUp}>Sign up!</button>
            <p>{this.state.signUpMessage}</p>
        </div>
      </div> 
    );
  }
}

export default SignUp;