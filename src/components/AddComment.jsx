import { Form, Row, Button, Container, Alert } from 'react-bootstrap'
import {Component} from 'react'

class AddComment extends Component{
    
    state={
        comment : {
            comment:'',
            rate:1, //default value
            elementId: null //asin of book 
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.asin !== this.props.asin){
            this.setState({
                comment:{
                    ...this.state.comment,
                    elementId: this.props.asin
                }
            })
        }
    }
    //Fetching POST 
    postComment = async (e) =>{
        e.preventDefault()
        const url = 'https://striveschool-api.herokuapp.com/api/comments'
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTU0M2FhY2FhMjAwMTU1MmExOWYiLCJpYXQiOjE2NDE4MjcxNDQsImV4cCI6MTY0MzAzNjc0NH0.dj7MeqyybbIoATeI6yoAJV91SYAG5N7bY5FAdG6Gbb4"
        try {
            let response = await fetch(url,{
                method:'POST',
                body:JSON.stringify(this.state.comment),
                headers:{
                    'Content-type': 'application/json',
                    Authorization: token
                }
            })
            console.log(response)
            if(response.ok){
                Alert('Comment Posted')
            }else{
                Alert('Comment Failed')
            }
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <Container>
                <Row>
                    <Form onSubmit={this.postComment}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Add Comment</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3}
                                type='text'
                                value={this.state.comment.comment}
                                onChange={e => this.setState({
                                    ...this.state.comment,
                                    comment: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Rate</Form.Label>
                                <Form.Control as="select"
                                value={this.state.comment.rate}
                                onChange={e => this.setState({
                                    ...this.state.comment,
                                    rate:e.target.value })}
                                >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant='success' type='submit'>Send Comment</Button>
                    </Form>
                </Row> 
            </Container>     
        )
    }
}
export default AddComment