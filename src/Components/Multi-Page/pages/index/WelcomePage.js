import { Button, Navbar,Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const Choose = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" expand="lg" className="text-light">
                <h2 className="titleFix">Cool guy easter egg</h2>
                <h2 className="abs-center-x">By Mendoza and Sean</h2>
            </Navbar>
            <Container fluid className=" contain-title center">
                    <Row>
                        <Col xs={12}>
                        <h1 className="h1Txt">Welecome to the Two Nerds Website for our top picks of games to play and animes to watch!</h1>
                        </Col>
                        <Col xs={12}>
                        <h3 className="text-light paddingSmall">What catagory would you like to explore first?</h3>
                        </Col>
                        <Col xs={12}>
                        <Button  as={Link} to="/Multi-Page/Animes" className="titleButtonFix">Animes</Button>
                        </Col>
                        <Col xs={12}>
                        <Button  as={Link} to="/Multi-Page/Games" className="titleButtonFix">Games</Button>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}