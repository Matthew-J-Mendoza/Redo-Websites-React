import { Container, Row, Col} from 'react-bootstrap'
import {IMG} from '../../../Shared/img'



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
                        <IMG src={props.img1} className="img-thumbnail slide-img" alt="Image 1"/>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center">
                        <IMG src={props.img2} className="img-thumbnail slide-img" alt="Image 2"/>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center">
                        <IMG src={props.img3} className="img-thumbnail slide-img" alt="Image 3"/>
                    </Col>
                </Row>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}