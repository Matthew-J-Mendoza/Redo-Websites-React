import { Button, Container,Row,Col } from 'react-bootstrap';
//import HH_Thumbnail from '../../../images/hhImages/Logo.png'
import HH_Thumbnail from '../../../images/TPimages/TokayLogo.svg'
import {
    Link
  } from "react-router-dom";
  import {IMG} from '../../Shared/img'



export const WebsiteCards =(props)=>{
    return(
        <>
        <Col xs={12} lg={3} className="d-flex justify-contnet-center" as={Link}  to={props.link}>
            <Row className={`Hub-Cards m-1 mr-auto ml-auto ${props.type}card text-${props.textColor}`}>
            <Col xs={12} className="text-center">
            <IMG src={props.src} className="HubCardImg " alt="Website Logo"/>
            
            
            </Col>
            </Row>
        </Col>
        </>
    )
}










// <Col lg={6} xs={12} className="d-flex justify-content-center">
//           <Row className="Hub-Cards pb-2">
//             <Col xs={12} className="d-flex justify-content-center">
//               <img src={HH_Thumbnail} className="Hub_Img"/>
//             </Col>
//             <Col>
//             <h1>Hamster Hotel</h1>
//             <h2>October 2020</h2>
//             <Button>Visit Site</Button>
//             </Col>
//           </Row>
//           </Col>