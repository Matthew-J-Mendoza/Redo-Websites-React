import { Container, Row, Col } from 'react-bootstrap'
import {App} from './Modal'

import img from '../../../../images/TPimages/vet1.jpg'


export const PostCards = ()=>{
    return(
        <div>
            
                <Row className="featuredCard shadow-sm lightBlue mb-4">
            <Col xs={12} md={4} className="px-0 height282">
                <img className="height100 cardImageRadius" src={img} alt=""/>
            </Col>
            <Col xs={12} md={8} className="py-4 px-4 px-md-5">
                <h2>A Veteran's Day Shoutout</h2>
                <h3>November 11, 2020</h3>
                <hr className="Tp-hr"/>
                <p>Wishing everyone who has served our country a Happy Veteran's Day and a big thank you especially to
             very own Jon Peters, our pressman, who served in the Marines.</p>
                        <App contImg={img}/>
            </Col>
            </Row>
            <hr className="Tp-hr"/>
        </div>
    )
}