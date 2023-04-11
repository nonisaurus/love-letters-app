import React from 'react'
import SignIn from './Signin'
import SignUp from './Signup'

class Join extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

  render() {
    return (
      <div>
            <h1>Join!</h1>
            <div>
                < SignIn userSignedIn={this.props.userSignedIn}/>
                <SignUp  />
            </div>
            
      </div>
    );
  }
}

export default Join;