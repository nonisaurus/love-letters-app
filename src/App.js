import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Welcome from './Components/Welcome/Welcome';
import Profile from './Components/Profile/Profile';
import Play from './Components/Play/Play';
import MessageBoard from './Components/Messages/MessageBoard';
import Join from './Components/SigninAndOut/Join';
import { getUserById } from './Components/API/api';
import Logout from './Components/SigninAndOut/Logout';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      auth: false,
      messages: [],
      username: '',
      user_id: ''
    }
  }

  //  get user
  getUser = () => {
    const userId = localStorage.getItem('user')
    getUserById(userId)
    .then((response) => {
      this.setState({
        user_id: response.data.user._id,
        username: response.data.user.username
      })
    })
  }

  // sign in
  userSignedIn = () => {
    this.getUser()
    this.setState({
      auth: true
    })
  }

  // sign out
  userSignedOut = () => {
    this.setState({
      auth: false
    })
  }

  // component life cycle method
  componentDidMount = () => {
    const token = localStorage.getItem("jwt")
    if(token !== null) {
      this.setState({
        auth: true
      });
    }
  }

  // a function to re render the messages state
  setMessages = (messages) => {
    this.setState({
        messages: messages
    })
}

  render () {
    return (
        <div className="App">
          <Router>

              <Navbar bg="light">
                <Container>

                  <Navbar.Brand><Link to="/">Welcome</Link></Navbar.Brand>
                  <Navbar.Brand><Link to="/api/user">Profile</Link></Navbar.Brand>
                  <Navbar.Brand><Link to="/api/card">Play</Link></Navbar.Brand>
                  <Navbar.Brand><Link to="/api/messageboard">Messageboard</Link></Navbar.Brand>
                  <Navbar.Brand><Link to="/api/login">{!this.state.auth ? 'Join' : 'Logout'}</Link></Navbar.Brand>
                </Container>
              </Navbar>

              <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route path="/api/user" element={this.state.auth ? 
                                                          (<Profile userSignedIn={this.userSignedIn}
                                                                    userSignedOut={this.userSignedOut} />) :
                                                          (<Navigate replace to = {"/"} />)} />
                <Route path="/api/card" element={this.state.auth ? 
                                                          (<Play />) :
                                                          (<Navigate replace to = {"/"} />)} />
                <Route path="/api/messageboard" element={this.state.auth ? 
                                                          (<MessageBoard  messages={this.state.messages} 
                                                                          setMessages={this.setMessages}
                                                                          getUser={this.getUser}
                                                                          username={this.state.username}/>) :
                                                          (<Navigate replace to = {"/"} />)} />
                <Route path="/api/login" element={!this.state.auth ? 
                                                  (<Join  userSignedIn={this.userSignedIn}
                                                          username={this.state.username}
                                                          user_id={this.state.user_id}
                                                          />) : 
                                                  (<Logout  userSignedIn={this.userSignedIn}
                                                            userSignedOut={this.userSignedOut}/>)}/>

              </Routes>
          </Router>
        </div>
      );
  }
  
}

export default App;
