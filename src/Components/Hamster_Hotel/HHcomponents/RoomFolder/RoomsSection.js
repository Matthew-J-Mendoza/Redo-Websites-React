import {Container,Row,Col} from 'react-bootstrap';
import {RoomCard} from './Cards'
import RoomImg1 from "../../images/room1.jpg"
import RoomImg2 from "../../images/room3.jpg"
import RoomImg3 from "../../images/room2.jpg"

import {QueensRoom, KingRoom, BeachSuit} from './CardData'
export const Rooms = () =>{
    return(
        <div className="mt-5 rooms-background">
            <h1 className="text-center text-light">Our Rooms</h1>
            <Container>
                <Row>
                    <Col lg={12}>
                    <Row>
                        <Col lg={4}>
                        <RoomCard img={RoomImg1} data={QueensRoom} align='room-card-btn btn-align'/>
                        </Col>
                        <Col lg={4}>
                        <RoomCard img={RoomImg2} data={KingRoom} align='room-card-btn btn-align'/>
                        </Col>
                        <Col lg={4}>
                        <RoomCard img={RoomImg3} data={BeachSuit} align='room-card-btn'/>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
