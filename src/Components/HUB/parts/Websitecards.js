import { Button, Container,Row,Col } from 'react-bootstrap';
import HH_Thumbnail from '../../../images/Hub-Images/HH_Thumbnail.png'





export const WebsiteCards =()=>{
    return(
        <>
        <Col lg={3} xs={12} className="d-flex justify-content-center">
          <Row className="Hub-Cards pb-2">
            <Col xs={12} className="d-flex justify-content-center">
              <img src={HH_Thumbnail} className="Hub_Img"/>
            </Col>
            <Col>
            <h1>Hamster Hotel</h1>
            <h2>October 2020</h2>
            <Button>Visit Site</Button>
            </Col>
          </Row>
          </Col>
        </>
    )
}