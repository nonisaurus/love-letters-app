import React from 'react'
import { logOutRoute } from '../API/api'

class Logout extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    logOut = (event) => {
        logOutRoute(localStorage.getItem('user'))
        .then((response) => {
            window.localStorage.clear();
            this.props.userSignedOut()
        })
    }

  render() {
    return (
      <div>
            <h1>Logout</h1> 
            <p>Sad to see you go. Click on the log out button to leave.</p>       
            <button onClick={this.logOut}> Log out </button>  
      </div>
    );
  }
}

export default Logout;