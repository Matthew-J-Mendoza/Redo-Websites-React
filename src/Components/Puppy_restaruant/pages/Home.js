import { Container, Row, Col } from 'react-bootstrap'

import homeSingle from '../../../images/prImages/homeSingle.jpg'
import HomeImage from '../../../images/prImages/HomeImage.jpg'
import {IMG} from '../../Shared/img'

export const HomePage =()=>{
    return(
            <>
            <Container fluid className="homeHero mb-5 indexFormat">
                <Row>
                    <Col/>
                </Row>
            </Container>
            <Container fluid className="indexFormat">
                <Row>
                    <Col sm={12} lg={5}>
                    <IMG src={homeSingle} alt="Food" width="100%" height="100%"/>
                    </Col>
                    <Col sm={12} lg={7}>
                    <Row>
                    <Col sm={12} className="msgText pt-3 pb-5">
                    <h2 className="fugazeRegFont">Muzzles Sandwiches and Grill</h2>
                    <p className="muzzlesSandwichText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </Col>
                    <Col sm={12} className="d-flex justify-content-center f">
                    {/* <img src={HomeImage} alt="Home Image" className="f"></img> */}
                    
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}