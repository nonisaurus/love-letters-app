import React from 'react';
import EditableProfile from './EditableProfile';
import ReadOnlyProfile from './ReadOnlyProfile';
import EditProfileBtn from './EditProfileBtn';
import DeleteProfileBtn from './DeleteProfileBtn';
import { getUserById, updateUserById } from '../API/api';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: {
                username: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                bio: '',
                points: ''},
            isEdit: 'edit'
        }

        this.handleEditState = this.handleEditState.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // display profile info
    componentDidMount () {
        getUserById(localStorage.getItem("user"))
        .then((response) => {
            this.setState({
                user:{
                    username: response.data.user.username,
                    email: response.data.user.email,
                    password: response.data.user.password,
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName,
                    dateOfBirth: response.data.user.dateOfBirth,
                    bio: response.data.user.bio,
                    points: response.data.user.points
                }
            })
        })
        .catch((error) => {
            console.log('something went wrong in profile >>>', error)
        })
    }

    // save changed inputs
    handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.getAttribute('data-name');

        this.setState(prevState => ({
            user:{
                ...prevState.user,
                [key]: value
            }
        }))

    }

    // change state for disabled true and false for editing
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

    // edit profile info
    updateProfile = (id) => {
        updateUserById(id, this.state.user)
        .then((response) => {
            console.log('response >', response)
        })  
        .catch(e => console.log(`error: UPDATE PROFILE >>> ${e}`))
    }





  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.state.isEdit === 'edit' ? 
        (<ReadOnlyProfile   username={this.state.user.username}
                            email={this.state.user.email}
                            password={this.state.user.password}
                            firstName={this.state.user.firstName}
                            lastName={this.state.user.lastName}
                            dateOfBirth={this.state.user.dateOfBirth}
                            bio={this.state.user.bio}
                            points={this.state.user.points}/>) :  

        (<EditableProfile   username={this.state.user.username}
                            email={this.state.user.email}
                            password={this.state.user.password}
                            firstName={this.state.user.firstName}
                            lastName={this.state.user.lastName}
                            dateOfBirth={this.state.user.dateOfBirth}
                            bio={this.state.user.bio}
                            points={this.state.user.points}
                            handleChange={this.handleChange}
                            />)}
        
       
        <EditProfileBtn handleEditState={this.handleEditState} 
                        isEdit={this.state.isEdit}
                        updateProfile={this.updateProfile}/>
        <DeleteProfileBtn />

    </div>
    );
  }
}

export default Profile;