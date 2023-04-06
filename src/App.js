import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Welcome from './Components/Welcome';
import Profile from './Components/Profile';
import Play from './Components/Play';
import MessageBoard from './Components/MessageBoard';
import SignIn from './Components/Signin';
import SignUp from './Components/Signup';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
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
                <Route path="/api/messageboard" element={<MessageBoard />} />
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
