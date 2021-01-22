import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../../images/hhImages/Logo.png"


export const FooterHH = () =>{
    return(
        <Container fluid className="end-container">
            <Row className="d-flex justify-content-center">
              <Col lg={12} className="d-flex justify-content-center end-logo">
              <img src={Logo} />
              </Col>
              <Col lg={12}>
              <p className="end-text">123 Sunflower Seed Rd., Cavia, California 95205</p>
              </Col>
              <Col lg={12}>
              <p className="end-text">©LA PETITE MASION HOTELS LIMITED 1939-2018. ALL RIGHTS RESERVED.</p>
              </Col>
            </Row>
          </Container>
    )
}