import { Container, Row, Col, Form } from 'react-bootstrap'
import img from '../../../../images/TPimages/Design-Img1.png'



export const TemplateSlide =(props)=>{
    return(
        <Container fluid className={`${props.slideType}-card-slides pb-5`}>
            <Container>
                <Row className="pt-5">
                <Col xs={12} lg={7} className="slide-format">
                    <h1 className="Yeseva-font">{props.slideType[0].toUpperCase()+props.slideType.slice(1)}</h1>
                    <br/>
                    {props.slideText}
                </Col>
                <Col xs={12} lg={5} className="pb-5"> 
                <Row>
                    <Col xs={12} className="pb-3">
                        <img src={props.img1} className="img-thumbnail slide-img"/>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center">
                        <img src={props.img2} className="img-thumbnail slide-img"/>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center">
                        <img src={props.img3} className="img-thumbnail slide-img"/>
                    </Col>
                </Row>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}