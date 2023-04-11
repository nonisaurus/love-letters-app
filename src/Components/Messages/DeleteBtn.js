function DeleteBtn(props) {
    return (
      <>
        <button onClick={(e) => {e.preventDefault(); props.deleteMessage(props.id)}}>Delete</button>
      </>
    );
  }
  
export default DeleteBtn;