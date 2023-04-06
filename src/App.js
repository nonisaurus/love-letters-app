import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Welcome from './Components/Welcome';
import Profile from './Components/Profile';

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
          <div>
            <nav>
              <ul>
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/api/play">Play</Link></li>
                <li><Link to="/api/messageboard">Messageboard</Link></li>
                <li><Link to="/api/signin">Signin</Link></li>
                <li><Link to="/api/signup">Signup</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/api/card" component={Play} />
              <Route path="/api/message" component={Messageboard} />
              <Route path="/api/login" component={Login} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
          







        </div>
      );
  }
  
}

export default App;
