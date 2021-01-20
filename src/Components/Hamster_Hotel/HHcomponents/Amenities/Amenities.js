import { Container, Row, Col } from 'react-bootstrap';
import {Offers} from './Offers'
import service24 from '../../images/24hour.png'
import breakfast from '../../images/breakfast.png'
import valet from '../../images/valet.png'
import pool from '../../images/pool.png'

export const AmenitiesSection = () =>{
    return(
        <div>
            <Container fluid className="amenities-background">
                <Row className="amenities-row-margin">
                    <Col className="text-center mb-5" lg={12}>
                    <h1 className="mb-5">Amenities</h1>
                    <p>Here at La Petite Masion, we invite you to enjoy our services in hopes that you have the most
                    relaxing stay we can provide.</p>
                    
                    </Col>
                    <Col lg={3}>
                    <Offers img={service24} txt="24 Hour Room Service" imgHeight="130rem"/>
                    </Col>
                    <Col lg={3}>
                    <Offers img={breakfast} txt="Complimentary Breakfast" imgHeight="130rem"/>
                    </Col>
                    <Col lg={3}>
                    <Offers img={valet} txt="Valet Parking" imgHeight="130rem"/>
                    </Col>
                    <Col lg={3}>
                    <Offers img={pool} txt="Beachside Pool" imgHeight="130rem"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}