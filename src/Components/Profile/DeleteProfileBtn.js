import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


const DeleteProfileBtn = (props) => { 

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }

    return (<Button  onClick={(e) => {e.preventDefault(); props.deleteProfile(); routeChange()}}>Delete Profile for good</Button>)
}

export default DeleteProfileBtn