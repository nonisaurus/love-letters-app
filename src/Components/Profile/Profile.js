import React from 'react';
import EditableProfile from './EditableProfile';
import ReadOnlyProfile from './ReadOnlyProfile';
import EditProfile from './EditProfile';
import DeleteProfile from './DeleteProfile';
import { getUserById } from '../API/api';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            bio: '',
            points: '',
            isEdit: 'edit'
        }

        this.handleEditState = this.handleEditState.bind(this);

    }

    componentDidMount () {
        getUserById(localStorage.getItem("user"))
        .then((response) => {
            this.setState({
                username: response.data.user.username,
                email: response.data.user.email,
                password: response.data.user.password,
                firstName: response.data.user.firstName,
                lastName: response.data.user.lastName,
                dateOfBirth: response.data.user.DOB,
                bio: response.data.user.bio,
                points: response.data.user.points
            })
        })
        .catch((error) => {
            console.log('something went wrong in profile >>>', error)
        })
    }

    handleEditState(event) {
        if (event === 'edit'){
            this.setState({
            isEdit: 'edit'
        })
        } else if (event === 'save'){
            this.setState({
                isEdit: 'save'
            })
        }
    }




  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.state.isEdit === 'edit' ? 
        (<ReadOnlyProfile   username={this.state.username}
                            email={this.state.email}
                            password={this.state.password}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            dateOfBirth={this.state.dateOfBirth}
                            bio={this.state.bio}
                            points={this.state.points}/>) :  
        (<EditableProfile />)}
        
       
        <EditProfile    handleEditState={this.handleEditState} 
                        isEdit={this.state.isEdit}/>
        <DeleteProfile />

    </div>
    );
  }
}

export default Profile;