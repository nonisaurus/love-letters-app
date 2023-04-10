function Message(props) {
    return (
      <div>
        <div>
            <h2>{props.username}</h2>
        </div>
        <div>
            <p>{props.comment}</p>
            <p>{props.time}</p>
        </div>
        <div>
            <button>Edit</button>
            <button /* onClick={(e) => {e.preventDefault(); props.deleteMessage(props.id)}} */ >Delete</button>
        </div>
        
      </div>
    );
  }
  
export default Message;