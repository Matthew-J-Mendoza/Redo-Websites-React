import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../../../images/TPimages/TokayLogoFull.svg'
import {IMG} from '../../../Shared/img'


export const LocationSection =()=>{
    return(
        <div>
            <Container fluid className="mapHolder py-5 boxShadow">
                <Container>
                <Row>
                    <Col xs={12} sm={5} lg={3} sm={{ order: 1 }} className="d-flex d-sm-none" >
                    <Container fluid className="d-flex justify-content-center pb-4">
                    <IMG src={Logo} alt="Tokay Press Logo" width="150rem" />
                    </Container>
                    </Col>
                    <Col xs={12} lg={3} sm={6} xs={{ order: 1 }}   sm={{ order: 1 }} className="d-none d-sm-block ">
                    <IMG src={Logo} alt="Tokay Press Logo" width="70%" />
                    </Col>
                    {/* PUT SMALLER LOGO HERE */}

                    <Col xs={12} sm={6} lg={3} sm={{ order: 1 }} className="text-center text-sm-left">
                    <h2 className="Tp-h2">Visit Us!</h2>
					<p>948 W. Fremont St.
						<br/> Stockton, California 95203
					</p>
					<hr className="Tp-hr"/>
					<h2 className="Tp-h2">Email Us!</h2>
					<a className="TP-a" href="mailto: orders@tokaypress.com">orders@tokaypress.com</a>
					<br/>
					<hr className="Tp-hr"/>
					<h2 className="Tp-h2">Call Us!</h2>
					<p className="pb-4 p-lg-0">209.547.0377</p>
                    </Col>
                    <Col md={12} lg={6} xs={{ order: 12 }} sm={{ order: 1 }} >
                    <iframe title="a map of Tokay Press' location" className="map-border-white"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d961.5842225574262!2d-121.30544314753945!3d37.9554386669924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80900aaf021b69e3%3A0xf58fe15577b56c57!2sTokay%20Press%20Inc!5e0!3m2!1sen!2sus!4v1605246255566!5m2!1sen!2sus"
						width="100%" height="300px" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Col>
                </Row>
                </Container>
            </Container>
        </div>
    )
}