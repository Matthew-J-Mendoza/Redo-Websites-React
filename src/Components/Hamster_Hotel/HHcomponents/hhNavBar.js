
import { Navbar, Nav, NavDropdown,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HHstyle.css'
import Logo from "../images/Logo.png"
export const HHnav = () =>{
    return(
            <Navbar bg="dark" variant="dark" expand="lg" className="navlayout ">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-auto">
    <Container fluid>
        <Row className='x' >
            <Col>
            <Nav.Link className="links" href="#Overview">Overview</Nav.Link>
            </Col>
            <Col>
            <Nav.Link className="links" href="#link">Rooms</Nav.Link>
            </Col>
            <Col lg={0}>
            <Nav.Link className="links" href="#link">Packages</Nav.Link>
            </Col>
            <Col>
            <img src={Logo} />
            </Col>
            <Col>
            <Nav.Link className="links" href="#link">Amenities</Nav.Link>
            </Col>
            <Col>
            <Nav.Link className="links" href="#link">Contact</Nav.Link>
            </Col>
            <Col>
            <Nav.Link className="links box" href="#link">Reserve</Nav.Link>
            </Col>
        </Row>
    </Container>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}