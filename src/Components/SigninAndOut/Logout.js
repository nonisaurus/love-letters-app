import React from 'react'
import { logOutRoute } from '../API/api'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

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
      <Container className='text-center'>            
          <h1>Logout</h1> 
          <p>Sad to see you go. Click on the log out button to leave.</p>   
          {/* <button onClick={this.logOut}> Log out </button>      */}
          <Button variant="primary" onClick={this.logOut}> Log out </Button>
      </Container>
    );
  }
}

export default Logout;