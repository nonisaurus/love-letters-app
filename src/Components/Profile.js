import React from 'react';
import axios from 'axios';
import apiUrl from "../apiConfig";

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
            inputField: [],
            value: '',
            isEdit: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEdit() {
        this.setState({
            isEdit: true
        })
      }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isEdit: false
        })
    }

  render() {

    return (
      <div>
        <div>
            <h1>Profile</h1>
        </div>
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    {!this.state.isEdit ? (
                        <>
                            <button type="button" onClick={this.handleEdit}>Edit</button>
                        </>
                    ) : (
                        <>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleSubmit} />
                            <input type="submit" value="Save" />
                        </>
                    )}
                </label>
                <label>
                    Email:
                    {!this.state.isEdit ? (
                        <>
                            <button type="button" onClick={this.handleEdit}>Edit</button>
                        </>
                    ) : (
                        <>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleSubmit} />
                            <input type="submit" value="Save" />
                        </>
                    )}
                </label>
            </form>

            <h5>Username</h5>
            <h5>Email</h5>
            <h5>Password</h5>
            <h5>First Name</h5>
            <h5>Last Name</h5>
            <h5>Date of birth</h5>
            <h5>Bio</h5>
            <h5>Points</h5>
        </div>
      </div>
    );
  }
}

export default Profile;