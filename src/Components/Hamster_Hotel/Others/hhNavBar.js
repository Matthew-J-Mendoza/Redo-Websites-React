
import { Navbar, Nav,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HHstyle.css'
import Logo from "../../../images/hhImages/Logo.png"
import {IMG} from '../../Shared/img'
import { NavHashLink as NavLink } from 'react-router-hash-link';

export const HHnav = () =>{
    return(
            <Navbar bg="dark" variant="dark" expand="lg" className="navlayout ">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Brand className="mr-auto ml-auto" href="#home"><IMG src={Logo} alt="sm-Logo" className="d-lg-none d-flex justify-content-center" width="50%" /></Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-auto">
    <Container fluid className="d-none d-lg-block">
        <Row className='x' >
            <Col>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Overview">Overview</Nav.Link>
            </Col>
            <Col>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Rooms">Rooms</Nav.Link>
            </Col>
            <Col lg={0}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Packages">Packages</Nav.Link>
            </Col>
            <Col>
            <IMG src={Logo} alt="Navbar-Logo" className="pt-2" />
            </Col>
            <Col>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Amenities">Amenities</Nav.Link>
            </Col>
            <Col>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Contact">Contact</Nav.Link>
            </Col>
            <Col>
            <Nav.Link className="links box" as={NavLink} to="/Hamster_Hotel/#Reserve">Reserve</Nav.Link>
            </Col>
        </Row>
    </Container>
    <Container fluid className=" d-lg-none">
        <Row className='x text-center' >
            <Col xs={12}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Overview">Overview</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Rooms">Rooms</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Packages">Packages</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Amenities">Amenities</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Contact">Contact</Nav.Link>
            </Col>
            <Col xs={12}>
            <Nav.Link className="links" as={NavLink} to="/Hamster_Hotel/#Reserve">Reserve</Nav.Link>
            </Col>
        </Row>
    </Container>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}