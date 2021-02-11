import { Col } from "react-bootstrap"
import image from '../../../images/prImages/photo01.jpg'


export const Thumbnail =(Props)=>{
    return(
        <Col sm={12} md={4} lg={3}>
        <img src={Props.img} className="photo-img" alt="Thumbnials" width="100%"/>
        </Col>
    )
}