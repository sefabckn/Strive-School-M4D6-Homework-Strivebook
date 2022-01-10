
import { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component{
      
    state={
            comment:[]
        }
     
        componentDidUpdate = async (prevProps)=> {
            if(prevProps.asin !== this.props.asin){
                const url = 'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin
                try {
                    let response = await fetch(url, {
                        headers:{
                            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTU0M2FhY2FhMjAwMTU1MmExOWYiLCJpYXQiOjE2NDE4MjcxNDQsImV4cCI6MTY0MzAzNjc0NH0.dj7MeqyybbIoATeI6yoAJV91SYAG5N7bY5FAdG6Gbb4",
                        }
                    })
                    console.log(response)
                    if(response.ok){
                        let commentData = await response.json()
                        this.setState({comment:commentData})
                    }
                } catch (error) {
                    <Alert>{error}</Alert>
                }
            }
        }

        render(){
            return(
                <> <Container>
                        <Row>
                            <CommentList commentDisplay = {this.state.comment}/>
                            <AddComment asin={this.props.asin}/>
                        </Row>
                    </Container>
                </>
            )
        }
}
export default CommentArea