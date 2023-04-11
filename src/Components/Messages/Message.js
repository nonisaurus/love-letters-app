import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

function Message(props) {

    return (
      <div>
        <div>
            <h2>{props.username}</h2>
        </div>
        <div>
            <p>{props.comment}</p>
        </div>
        <div>
          {localStorage.getItem("username") === props.username ? (< EditBtn id={props.id}/>) : null }
          {localStorage.getItem("username") === props.username ? (< DeleteBtn   id={props.id}
                                                                                deleteMessage={props.deleteMessage}/>) : null }
            
            
        </div>
      </div>
    );
  }
  
export default Message;