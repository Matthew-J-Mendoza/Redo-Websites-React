import { Container, Row, Col, Form } from 'react-bootstrap';
import {IMG} from '../../Shared/img'

export const Offers = (Props)=>{
    return(
        <div>
                <Row className="mb-5">
                    <Col lg={12} className="mt-4 mb-5">
                    <IMG src={Props.img} alt={Props.alt} height='110rem'/>
                    </Col>
                    <Col lg={12}>
                    <p className="amenities-desc"><b>{Props.txt}</b></p>
                    </Col>
                </Row>
        </div>
    )
}