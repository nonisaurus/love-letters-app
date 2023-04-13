import React from 'react';
import { Button } from 'react-bootstrap';
const EditProfile = (props) => { 
    return (
        props.isEdit === 'edit' ?
        (<Button onClick={(e) => {e.preventDefault(); props.handleEditState('save')}}>Edit profile details</Button>) : 
        (<Button onClick={(e) => {e.preventDefault(); props.handleEditState('edit'); props.updateProfile(localStorage.getItem('user'))}}>Save profile details</Button>)
    ) 
}

export default EditProfile;
