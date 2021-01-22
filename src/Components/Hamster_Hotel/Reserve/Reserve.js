import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import {ReserveInput} from './input'

export const ReserveSection = () =>{
    return(
        <div>
            <Container className="reserve-container">
                <Row className="reserve-mini-nav d-flex justify-content-center">
                    <Col lg={12}>
                    <h1 className="text-center mt-4 mb-5">Reserve Room</h1>
                    </Col>
                    <Col lg={2}>
                    <ReserveInput label="Check-in"/>
                    </Col>
                    <Col lg={2}>
                    <ReserveInput label="Check-out"/>
                    </Col>
                    <Col lg={2}>
                    <ReserveInput label="Number of Guests"/>
                    </Col>
                    <Col lg={2}>
                    <ReserveInput label="Room Type"/>
                    </Col>
                    <Col lg={2} className="reserve-button-col">
                    <Button variant="primary" className="btn-sm reserve-button"><b>Check Availability</b></Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="reservebottom">
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}