import React from 'react';
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
          window.localStorage.setItem("jwt", response.token);
          window.localStorage.setItem("user", response.userId);
          window.localStorage.setItem("username", response.username);
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