import { Component } from "react";
import Alert from 'react-bootstrap/Alert'

class WarningSign extends Component{
    render(){
        return (
        <div>
            <Alert variant='danger'>
                This is a {this.props.text} —check it out!
            </Alert>
        </div>)
    }
} 
export default WarningSign