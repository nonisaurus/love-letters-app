import React from 'react'
import SignIn from './Signin'
import SignUp from './Signup'

class Join extends React.Component {
  render() {
    return (
      <div>
            <h1>Join!</h1>
            <div>
                < SignIn />
                <SignUp />
            </div>
            
      </div>
    );
  }
}

export default Join;