import { Component } from "react";
import Badge from 'react-bootstrap/Badge'
class MyBadge extends Component {
    render(){
        return(
            <div>
             <Badge pill variant={this.props.color}>{this.props.text}</Badge>
            </div>
        )
    }
}
export default MyBadge