import React from 'react';
import axios from 'axios';
import apiUrl from '../../apiConfig';
import { logInRoute } from '../API/api';

class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      signInMessage: ''
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

  handleSignInMessage = (event) => {
    this.setState({
      signInMessage: event.target.value
    })
  }

  handleSignin = () => {
    logInRoute(this.state.username, this.state.password)
        .then((response) => {
          console.log('handlesignin response', response)
            localStorage.setItem("jwt", response.token);
            localStorage.setItem("user", response.userId);
            this.props.userSignedIn()
            this.setState({
              username: '',
              password: '',
              signInMessage: 'Successful sign in'
            })
        })
        .catch((error) => {
            console.log('handlesignin error', error);
        });
  }


  render() {
    return (
      <div>
            <h1>Sign In</h1>
            <div>
                <label >Username: </label>
                <input type="text" onChange={this.handleUsernameChange}></input><br/>
                <label >Password: </label>
                <input  type="text" onChange={this.handlePasswordChange}></input><br/>
                <button onClick={this.handleSignin}>Sign in!</button>
                <p >{this.state.signInMessage}</p>
            </div>
      </div>
    );
  }
}

export default SignIn;