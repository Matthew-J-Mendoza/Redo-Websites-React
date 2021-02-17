import { Container, Row, Col } from 'react-bootstrap';
import {Offers} from './Offers'
import service24 from '../../../images/hhImages/24hour.png'
import breakfast from '../../../images/hhImages/breakfast.png'
import valet from '../../../images/hhImages/valet.png'
import pool from '../../../images/hhImages/pool.png'

export const AmenitiesSection = () =>{
    return(
        <div id="Amenities" className="mt-5">
            <Container fluid className="amenities-background">
                <Row className="amenities-row-margin">
                    <Col className="text-center mb-5" lg={12}>
                    <h1 className="mb-5 Dosis">Amenities</h1>
                    <p>Here at La Petite Masion, we invite you to enjoy our services in hopes that you have the most
                    relaxing stay we can provide.</p>
                    
                    </Col>
                    <Col lg={3}>
                    <Offers img={service24} alt="24hr Service" txt="24 Hour Room Service" />
                    </Col>
                    <Col lg={3}>
                    <Offers img={breakfast} alt="Breakfast" txt="Complimentary Breakfast"/>
                    </Col>
                    <Col lg={3}>
                    <Offers img={valet} alt="Valet" txt="Valet Parking" />
                    </Col>
                    <Col lg={3}>
                    <Offers img={pool} alt="Pool" txt="Beachside Pool" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}