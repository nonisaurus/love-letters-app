import React from 'react';

const EditProfile = (props) => { 
    return (
        props.isEdit === 'edit' ?
        (<button onClick={(e) => {e.preventDefault(); props.handleEditState('save')}}>Edit profile details</button>) : 
        (<button onClick={(e) => {e.preventDefault(); props.handleEditState('edit')}}>Save profile details</button>)
    ) 
}

export default EditProfile;
