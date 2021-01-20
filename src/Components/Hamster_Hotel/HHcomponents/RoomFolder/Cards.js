import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//Temp 
import RoomImg from "../../images/room1.jpg"


export const RoomCard = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={RoomImg} />
                <Card.Body>
                    <h2 className="card-title">Queen Room</h2>
                    <p className="card-text"><b>850 SQ FT room city view</b></p>
                    <Card.Text>
                        <p>• One queen size bed</p>
                        <p>• Seed Bar, fireplace and large blacony</p>
                        <p>• Small kitchen with a refrigerator and stove</p>
                    </Card.Text>
                    <Button variant="primary" className="room-card-btn">Reserve</Button>
                </Card.Body>
            </Card>
        </div>
    )
}