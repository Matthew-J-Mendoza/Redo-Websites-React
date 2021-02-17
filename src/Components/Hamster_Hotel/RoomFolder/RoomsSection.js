import {Container,Row,Col} from 'react-bootstrap';
import {RoomCard} from './Cards'
import RoomImg1 from "../../../images/hhImages/room1.jpg"
import RoomImg2 from "../../../images/hhImages/room3.jpg"
import RoomImg3 from "../../../images/hhImages/room2.jpg"

import {QueensRoom, KingRoom, BeachSuit} from './CardData'
export const Rooms = () =>{
    return(
        <div className="mt-5 rooms-background" id="Rooms">
            <h1 className="text-center text-light room-header">Our Rooms</h1>
            <Container>
                <Row>
                    <Col lg={12}>
                    <Row>
                        <Col lg={4} className="">
                        <RoomCard img={RoomImg1} data={QueensRoom} />
                        </Col>
                        <Col lg={4}  className="">
                        <RoomCard img={RoomImg2} data={KingRoom} />
                        </Col>
                        <Col lg={4}  className="">
                        <RoomCard img={RoomImg3} data={BeachSuit} />
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
