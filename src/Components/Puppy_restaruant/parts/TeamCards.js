import { Card, Col } from 'react-bootstrap';


export const TeamBio = (Props) => {
    return (
            <Col sm={12} lg={4} className="cardSpacing d-flex justify-content-center ">
                <Card  >
                    <Card.Img variant="top" src={Props.Profile} alt="Puppy Profile Pic" />
                    <Card.Body>
                        <Card.Title className="fugazTitle"><h2>{Props.Name}</h2></Card.Title>
                        <Card.Text className="montaukF Team-Text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus. Feugiat
                            scelerisque varius morbi enim. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Odio
                            facilisis mauris sit amet massa vitae.
    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
    )
}