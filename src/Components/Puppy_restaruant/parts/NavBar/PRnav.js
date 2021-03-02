import { Col, Container, Row,Nav } from 'react-bootstrap';
import Logo from "../../../../images/prImages/MuzzlesLogo.png"
import {IMG} from '../../../Shared/img'
import {
    Link
} from "react-router-dom";

import { PRlinks } from "./navLinks";


export const PrNav = () => {
    return (
        <div>
            <br/>
            <Container fluid className="indexFormat mb-4 d-none d-lg-block">
            <Row>
                <Col xs={3}>
                    <Link to="/Puppy_Restaruant/">
                        <IMG src={Logo} alt="Logo" />
                    </Link>
                </Col>
                <Col xs={9} className="d-flex justify-content-end align-items-center">
                    <PRlinks/>
                </Col>
            </Row>
        </Container>
        <Container fluid className="d-lg-none indexFormat">
        <Row>
            <Col xs={3}>
            <Link to="/Puppy_Restaruant/">
                        <IMG src={Logo} alt="Logo" />
                    </Link>
            </Col>
            <Col xs={12} className="d-flex  flex-column">
            <Nav.Link as={Link} to="/Puppy_Restaruant/About" className="fugaz-Link" >About</Nav.Link>
            <Nav.Link as={Link} to="/Puppy_Restaruant/Menu" className="fugaz-Link" >Menu</Nav.Link>
            <Nav.Link as={Link} to="/Puppy_Restaruant/Catering" className="fugaz-Link" >Catering</Nav.Link>
            <Nav.Link as={Link} to="/Puppy_Restaruant/Photo" className="fugaz-Link" >Photo</Nav.Link>
                </Col>
        </Row>
        </Container>
        </div>
    )
}
