import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import CommentArea from './CommentArea '
class SingleBook extends Component{
    state= {
        selected: false
    }
    render(){
        return(
            <Container>
                <Row>{
                        <Card style={{ width: '12rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={this.props.book.img}
                            onClick={()=> {this.setState({selected:!this.state.selected})}}//controlling state with each click. On second click value will change. true/false => false/true 
                            style={{border:`2px solid ${this.state.selected?"red":"white"}`}}
                            />
                            <Card.Body
                            >
                                <Card.Title>{this.props.book.category}</Card.Title>
                                <Card.Text>
                                {this.props.book.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>        
                    }</Row>
                    <Row>
                        <>
                            {
                                this.state.selected && <CommentArea asin={this.props.book.asin} />
                            }
                        </>
                    </Row>
            </Container>
        )
    }
   }
export default SingleBook