import { Container, Row, Col } from 'react-bootstrap';


export const Offers = (Props)=>{
    return(
        <div>
                <Row className="mb-5">
                    <Col lg={12} className="mt-4 mb-5">
                    <img src={Props.img} height='110rem'/>
                    </Col>
                    <Col lg={12}>
                    <h4 className="amenities-desc"><b>{Props.txt}</b></h4>
                    </Col>
                </Row>
        </div>
    )
}