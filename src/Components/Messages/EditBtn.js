function EditBtn(props) {
    return (
      <>
      {props.buttonName === 'edit' ?  
      (<button onClick={(e) => {e.preventDefault(); props.updateButton('save');}}>Edit</button>) :  
      (<button onClick={(e) => {e.preventDefault(); props.updateButton('edit'); props.updateMessage(props.id, props.comment)}}>Save</button>)}
       
      </>
    );
  }
  
export default EditBtn;