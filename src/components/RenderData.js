import Comment from "./Comment"
import './RenderData.css'

function RenderData (props){
    return(
        <div className="Render-data">
            {props.comment.map(element=>{
                return <Comment date={element.date} 
                        text={element.text} 
                        author={element.author} 
                        key={Math.random().toString()}/>
                })}
        </div>
    )
}
export default RenderData