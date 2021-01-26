import { Col, Card, Row, Container } from "react-bootstrap"
import footerImg from '../../../images/prImages/CompanyLogo.png'


export const Footer =()=>{
    return(
        <div>
            <Container fluid className="indexFormat mt-5">
                <Row>
                    <Col sm={12} lg={6}  className="Footer-right ">
                    <img src={footerImg} alt=""  className="footer-Img"/>
                    </Col>
                    <Col sm={12} lg={6} lg={{ order: "first" }}  className="Footer-left" >
                    <p>1357 Mutt Street, Rottweiler CA. 12345</p>
                    </Col>
                    <Col sm={12} lg={6} className="Footer-left">
                    <p>Phone: 123-456-7890</p>
                    </Col>
                    <Col sm={12} lg={6} className="Footer-right">
                    <p>Copyright © Muzzles Restaurant</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}