import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"
const CommentList = ({commentDisplay})=>{
    return(
        <ListGroup>{
            commentDisplay.map( comment => (
                <SingleComment comment={comment} /*key={comment.asin}*/ />
            ))} 
        </ListGroup>
    )   
}
export default CommentList