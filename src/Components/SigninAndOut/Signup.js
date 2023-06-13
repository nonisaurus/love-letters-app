import React from 'react';
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
      console.log('handle sign up >>>')
      console.log('getuserbyname >>>', this.state.username)
      getUserByUsername(this.state.username)
      .then((response) => {
        console.log('first then')
        console.log('response >>> ', response)
        if(response.data.user.username) {
            if(this.state.username.length >= 6) {
                this.setState({
                    signUpMessage: "Username already exists! Please try another."
                })
            }
        }
      })
      .catch((error) => {
        console.log('error in handleSignUP >>>', error)
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
      <>
        <h1>Sign Up</h1>
        <div>
            <label >Username: </label>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input><br/>
            <label >Password: </label>
            <input  type="text" value={this.state.password} onChange={this.handlePasswordChange}></input><br/>
            <button onClick={this.handleSignUp}>Sign up!</button>
            <p>{this.state.signUpMessage}</p>
        </div>
        {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" value={this.state.username} onChange={this.handleUsernameChange} />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <Button variant="primary" type="submit" onClick={this.handleSignUp}>
            Submit
          </Button>
          <p>{this.state.signUpMessage}</p>
          </Form.Group>
        </Form> */}
      </> 
    );
  }
}

export default SignUp;