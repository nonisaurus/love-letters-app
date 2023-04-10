import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';
import Profile from './Components/Profile/Profile';
import Play from './Components/Play/Play';
import MessageBoard from './Components/Messages/MessageBoard';
import SignIn from './Components/SigninAndOut/Signin';
import SignUp from './Components/SigninAndOut/Signup';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      messages: []
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

              <nav>
                <ul>
                  <li><Link to="/">Welcome</Link></li>
                  <li><Link to="/api/user">Profile</Link></li>
                  <li><Link to="/api/card">Play</Link></li>
                  <li><Link to="/api/messageboard">Messageboard</Link></li>
                  <li><Link to="/api/signin">Signin</Link></li>
                  <li><Link to="/api/signup">Signup</Link></li>
                </ul>
              </nav>

              <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route path="/api/user" element={<Profile />} />
                <Route path="/api/card" element={<Play />} />
                <Route path="/api/messageboard" element={<MessageBoard 
                                                          messages={this.state.messages} 
                                                          setMessages={this.setMessages}/>} />
                <Route path="/api/signin" element={<SignIn />} />
                <Route path="/api/signup" element={<SignUp />} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
              </Routes>
              
          </Router>
        </div>
      );
  }
  
}

export default App;
