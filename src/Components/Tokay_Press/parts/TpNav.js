import { Button, Navbar, Nav, NavDropdown, Container, Col } from 'react-bootstrap';
import Logo from '../../../images/TPimages/TokayLogo.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {IMG} from '../../Shared/img'



export const TpNav = () => {
    return (
        <div>
            <Container fluid className="navblur">
                <Navbar bg="" expand="lg" className="container">
                    <a href="/Tokay_Press/Home">
                    <IMG src={Logo} className="py-2 d-none d-sm-flex" alt="The Tokay Press Logo" width="250px" />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link href="/Tokay_Press/Featured">
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <p className="TP-a navLinks">Featured</p>
                                </Col>
                            </Nav.Link>
                            <Nav.Link href="/Tokay_Press/Home#About">
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <p className="TP-a navLinks">About</p>
                                </Col>
                            </Nav.Link>
                            <Nav.Link href="#Contact">
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <p className="TP-a navLinks">Contact</p>
                                </Col>
                            </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}