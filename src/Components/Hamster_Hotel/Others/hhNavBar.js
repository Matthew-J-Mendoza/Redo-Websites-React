
import { Navbar, Nav, NavDropdown,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HHstyle.css'
import Logo from "../../../images/hhImages/Logo.png"
export const HHnav = () =>{
    return(
            <Navbar bg="dark" variant="dark" expand="lg" className="navlayout ">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand className="mr-auto ml-auto" href="#home"><img src={Logo} alt="sm-Logo" className="d-lg-none d-flex justify-content-center" width="50%" /></Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-auto">
    <Container fluid className="d-none d-lg-block">
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
            <img src={Logo} alt="Navbar-Logo" />
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
    <Container fluid className=" d-lg-none">
        <Row className='x text-center' >
            <Col xs={12}>
            <Nav.Link className="links" href="#Overview">Overview</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" href="#link">Rooms</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" href="#link">Packages</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" href="#link">Amenities</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" href="#link">Contact</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" href="#link">Reserve</Nav.Link>
            </Col>
        </Row>
    </Container>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}