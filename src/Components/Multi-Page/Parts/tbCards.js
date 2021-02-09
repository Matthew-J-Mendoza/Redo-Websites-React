
import { Button, Nav, Navbar, NavDropdown, Col, Container, Row,Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const CardsTg = (Props)=>{
    return(
                    <Col xs={12} className="mb-5">
                        <Card className="cardBGColor text-light TGcard">
                            <Card.Img className="cardimg" variant="top" src={Props.game.Thumbnail} alt="Pick-Img"/>
                            <Card.Body>
                            <h2 class="card-title cardTitleText">{Props.game.title}</h2>
                            <h3 class="card-text ">{`${Props.game.Author}'s #${Props.game.Tier} Pick`}</h3>
                                <div className="text-center">
                                    <Button as={Link} to={Props.game.Pathway} onClick={scrollTop} className="text-center cardbtn"  variant="primary">Learn More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
    )
}
function scrollTop(){
    window.scrollTo(0, 0)
}