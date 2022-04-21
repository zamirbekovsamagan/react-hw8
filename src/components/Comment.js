import CommentDate from "./CommentDate"
import CommentWrapper from "./CommentWrapper"
import UserInfo from "./UserInfo"
import './Comment.css'

function Comment (props){
    return(
        <div className="Comment">
            <UserInfo author={props.author}/>
            <CommentWrapper className="Text-and-date">
                <div className="Comment-text">{props.text}</div>
                <CommentDate date={props.date}/>
            </CommentWrapper>
        </div>
    )
}

export default Comment