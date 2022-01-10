import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const MyNavBar = (props) =>(
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)

export default MyNavBar