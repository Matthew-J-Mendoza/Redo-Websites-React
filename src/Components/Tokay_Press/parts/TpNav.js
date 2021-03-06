import { Navbar, Nav,Container, Col } from 'react-bootstrap';
import Logo from '../../../images/TPimages/TokayLogo.svg'
  import {IMG} from '../../Shared/img'
  
import { NavHashLink as NavLink } from 'react-router-hash-link';

export const TpNav = (props) => {
    return (
        <div>
            <Container fluid className="navblur">
                <Navbar bg="" expand="lg" className="container">
                    <NavLink to="/Tokay_Press/Home/#HomeC">
                    <IMG src={Logo} className="py-2 d-none d-sm-flex" alt="The Tokay Press Logo" width="250px" />
                    <IMG src={Logo} className="py-2 d-sm-none" alt="The Tokay Press Logo" width="150px" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link as={NavLink} to="/Tokay_Press/Featured/#FeatuedCarousel">
                                <Col xs={12} className="col-md text-right text-md px-4">
                                <p className="TP-a navLinks" >Featured</p>
                                </Col>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/Tokay_Press/Home/#About" >
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