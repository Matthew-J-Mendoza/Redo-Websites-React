
import { Button, Nav, Navbar, NavDropdown, Col, Container, Row,Card } from 'react-bootstrap';


export const CardsTg = (Props)=>{
    return(
                    <Col xs={12} className="mt-5">
                        <Card className="cardBGColor text-light">
                            <Card.Img className="cardimg" variant="top" src={Props.src} />
                            <Card.Body>
                            <h2 class="card-title cardTitleText">{Props.game.title}</h2>
                            <h3 class="card-text ">{`${Props.game.Author}'s #${Props.game.Tier} Pick`}</h3>
                                <div className="text-center">
                                    <Button className="text-center cardbtn"  variant="primary">Learn More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
    )
}