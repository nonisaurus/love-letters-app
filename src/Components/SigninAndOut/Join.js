import React from 'react'
import SignIn from './Signin'
import SignUp from './Signup'
import Container from 'react-bootstrap/Container';


class Join extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

  render() {
    return (
      <Container className='text-center'>
            <h1>Join!</h1>
            <div>
                <SignIn userSignedIn={this.props.userSignedIn}/>
                <SignUp  />
            </div>
      </Container>
    );
  }
}

export default Join;