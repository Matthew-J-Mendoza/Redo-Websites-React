import { Button, Navbar, Nav, NavDropdown, Container, Col } from 'react-bootstrap';
import Logo from '../../../images/TPimages/TokayLogo.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export const TpNav = () => {
    return (
        <div>
            <Container fluid className="navblur">
                <Navbar bg="" expand="lg" className="container">
                    <a href="/Tokay_Press/Home">
                    <img src={Logo} class="py-2 d-none d-sm-flex" alt="The Tokay Press Logo" width="250px" />
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link href="a">
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <a href="/Tokay_Press/Featured" className="TP-a navLinks">Featured</a>
                                </Col>
                            </Nav.Link>
                            <Nav.Link>
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <a className="TP-a navLinks">About</a>
                                </Col>
                            </Nav.Link>
                            <Nav.Link>
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <a className="TP-a navLinks">Contact</a>
                                </Col>
                            </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}