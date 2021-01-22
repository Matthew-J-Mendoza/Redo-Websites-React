import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Nav, Navbar, NavDropdown, Col, Container, Row,Card } from 'react-bootstrap';
import Img from "../../Components/images/WF2.PNG"
import {topGames} from '../../Data/GamesData'
console.log(topGames.DS3.title)
export const GamePage = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" >
                <Navbar.Brand href="#home"><h2>Two Nerds</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="nav-link active">Anime</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Games</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            {/* ---------------------------------------------------------------------------- */}
            <Container>
                <Row>
                    <Col xs={6}>
                        <Card className="cardBGColor text-light">
                            <Card.Img className="cardimg" variant="top" src={Img} />
                            <Card.Body>
                            <h2 class="card-title cardTitleText">Dark Souls 3</h2>
                            <h3 class="card-text ">Chandler's #2 Pick</h3>
                                <div className="text-center">
                                    <Button className="text-center cardbtn"  variant="primary">Learn More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
