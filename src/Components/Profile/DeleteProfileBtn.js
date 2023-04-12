import React from 'react';
import { useNavigate } from "react-router-dom";


const DeleteProfileBtn = (props) => { 

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    return (<button  onClick={(e) => {e.preventDefault(); props.deleteProfile(); routeChange()}}>Delete Profile for good</button>)
}

export default DeleteProfileBtn