import React from 'react';

const EditableProfile = (props) => { 
    return (
        <>
        <h1>EDIT</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Username</td>
                        <td>
                            <input  type='text' 
                                    required 
                                    name='Username' 
                                    placeholder='provide username'
                                    defaultValue={props.username}
                                    data-name="username"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input  type='text' 
                                    required 
                                    name='Email' 
                                    placeholder='provide email'
                                    defaultValue={props.email}
                                    data-name="email"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input  type='password' 
                                    disabled 
                                    name='Password' 
                                    placeholder='cant change right now'
                                    defaultValue='******'
                                    data-name="password"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>
                            <input  type='text' 
                                    required 
                                    name='FirstName' 
                                    placeholder='provide first name'
                                    defaultValue={props.firstName}
                                    data-name="firstName"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>
                            <input  type='text' 
                                    required 
                                    name='LastName' 
                                    placeholder='provide last name'
                                    defaultValue={props.lastName}
                                    data-name="lastName"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Date of birth</td>
                        <td>
                            <input  type='text' 
                                    required 
                                    name='DOB' 
                                    placeholder='provide date of birth'
                                    defaultValue={props.dateOfBirth}
                                    data-name="dateOfBirth"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>
                            <input  type='text' 
                                    required 
                                    name='BIO' 
                                    placeholder='provide biography'
                                    defaultValue={props.bio}
                                    data-name="bio"
                                    onChange={(e)=>{props.handleChange(e)}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Points</td>
                        <td>
                            <input  disabled 
                                    name='Points'
                                    defaultValue={props.points}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default EditableProfile