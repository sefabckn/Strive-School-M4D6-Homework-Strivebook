
import { ListGroup } from "react-bootstrap"

const SingleComment = ({comment}) =>{

    return(
        <ListGroup.Item>
            {comment.comment}
        </ListGroup.Item>
    )
}

export default SingleComment