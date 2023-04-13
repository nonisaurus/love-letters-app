import React from 'react';
import { logInRoute } from '../API/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
          // console.log("response.token:", response.token);
          // console.log('response.token LOCAL STORAGE',window.localStorage.getItem("jwt", response.token))
          window.localStorage.setItem("jwt", response.token);
          
          // console.log("response.userId:", response.userId);
          // console.log('response.ID LOCAL STORAGE', window.localStorage.getItem("user", response.userId))
          window.localStorage.setItem("user", response.userId);
          
          // console.log("response.username:", response.username);
          // console.log('response.USERNAME LOCAL STORAGE',window.localStorage.getItem("username", response.username))
          window.localStorage.setItem("username", response.username);

          // const jwt = localStorage.getItem("jwt");
          // // console.log('jwt', jwt);

          // const user = localStorage.getItem("user");
          // console.log('user', user);

          // const username = localStorage.getItem("username");
          // console.log('username',username);

            this.props.userSignedIn()
            this.setState({
              username: '',
              password: ''
            })
        })
        .catch((error) => {
            console.log('handlesignin error', error);
            this.setState({
              signInMessage: 'Something went wrong.. try again!'
            })
        });
  }


  render() {
    return (
      <>
            <h1>Sign In</h1>
            <div>
                <label >Username: </label>
                <input type="text" onChange={this.handleUsernameChange}></input><br/>
                <label >Password: </label>
                <input  type="text" onChange={this.handlePasswordChange}></input><br/>
                <button onClick={this.handleSignin}>Sign in!</button>
                <p >{this.state.signInMessage}</p>
            </div>
            {/* <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={this.handleUsernameChange} />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                <Button variant="primary" type="submit" onClick={this.handleSignin}>
                Submit
              </Button>
              </Form.Group>
            </Form> */}
      </>
    );
  }
}

export default SignIn;