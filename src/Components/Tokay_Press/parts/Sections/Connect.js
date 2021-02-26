import { Container, Row, Col } from 'react-bootstrap'
import fBook from '../../../../images/TPimages/fb_logo.svg'
import insta from '../../../../images/TPimages/ig_logo.svg'
import twitter from '../../../../images/TPimages/twitter_logo.svg'
import {SocialMedia} from '../socialMedia'
import {EmailForms} from '../EmailForm'
export const Contact_Info = () =>{
    return(
        <Container fluid className="connectHolder boxShadow pt-5">
            <Container id="Contact">
            <Row className="pb-5 text-center text-md-left">
                <Col xs={12} md={6} className="pr pr-md-5">
                <h2 className="pb-0 pb-lg-5 Tp-h2">
						Connect with Us!</h2>
					<hr className="Tp-hr"/>
                    <SocialMedia logo={fBook} username="Tokay Press" alt="facebook logo" href="https://www.facebook.com/tokaypress" />
                    <hr className="Tp-hr"/>
                    <SocialMedia logo={insta} username="@tokaypress" alt="instagram logo" href="https://www.instagram.com/tokaypress/"/>
                    <hr className="Tp-hr"/>
                    <SocialMedia logo={twitter} username="@tokaypress" alt="twitter logo" href="https://www.twitter.com/tokaypress/"/>
                    <hr className="pb-5 Tp-hr" />
                </Col>
                <Col xs={12} md={6}>
                <h2 className="Tp-h2">Have a Project?</h2>
					<p>We specialize in custom solutions and we would love to hear about and work with you on your next
						idea!</p>
                        <EmailForms/>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}