
import { Navbar, Nav, NavDropdown,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HHstyle.css'

export const HHnav = () =>{
    return(
            <Navbar bg="dark" variant="dark" expand="lg" className="navlayout">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Container>
        <Row>
            <Col>
            <Nav.Link href="#link">Link</Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="#link">Link</Nav.Link>
            </Col>
            <Col>
            <img src="../images/pool.png" />
            </Col>
            <Col>
            <Nav.Link href="#link">Link</Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="#link">Link</Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="#link">Link</Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="#link">Link</Nav.Link>
            </Col>
        </Row>
    </Container>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}