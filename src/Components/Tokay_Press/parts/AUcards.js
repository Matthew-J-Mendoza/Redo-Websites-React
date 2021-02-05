import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import img from '../../../images/TPimages/Design.png'



export const AUcards = () => {
    return (
        <Col xs={4} className="d-flex justify-content-center">
            <Card style={{ width: '25rem' }} className="design-card text-center">
                <Card.Img variant="top" src={img} className="rounded-circle my-4 design-img" />
                <Card.Body>
                    <Card.Title className="mb-3 Tp-h1">Design</Card.Title>
                    <Button variant="primary" className="design-btn TP-btn px-5 my-4">More About Design</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}