import {Container,Row,Col} from 'react-bootstrap';
import {RoomCard} from './Cards'

export const Rooms = () =>{
    return(
        <div className="mt-5 rooms-background">
            <h1 className="text-center text-light">Our Rooms</h1>
            <Container>
                <Row>
                    <Col lg={12}>
                    <Row>
                        <Col lg={4}>
                        <RoomCard/>
                        </Col>
                        <Col lg={4}>
                        <RoomCard/>
                        </Col>
                        <Col lg={4}>
                        <RoomCard/>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}