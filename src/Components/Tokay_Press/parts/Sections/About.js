import { Container, Row, Col, Form } from 'react-bootstrap'

import {AUcards} from "../AUcards"


export const AboutSection =()=>{
    return(
        <div className="anchor AboutUs">
            <Container fluid className="d-none d-lg-block  pb-5">
                <Container>
                    <Row className="d-flex justify-content-center">
                    <Col xs={12} className="text-center my-5">
                    <h1>About Us</h1>
                    </Col>
                    </Row>

                    <Row>
                    <AUcards/>
                    <AUcards/>
                    <AUcards/>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}