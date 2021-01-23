import { TgNavBar } from "../Parts/tbNav";
import { Container, Row, Col } from 'react-bootstrap';

import banner from '../../../images/tgImages/DarkS2.PNG'

export const Articlepage = () => {
    return (
        <div>
            <TgNavBar />
            <Container fluid>
                <Row>
                    <Col sm={12} className="center">
                        <img className="my-5 Article-img" src={banner} />
                    </Col>
                    <Col sm={12} className="center my-5 ">
                        <h1 className="article-h1">Dark Souls 3</h1>
                    </Col>
                    <Col sm={12} className="my-5">
                        <h2><u><b>Review Video</b></u></h2>
                    </Col>
                    <Col sm={12} className="center mb-5">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe width="1903" height="806" src="https://www.youtube.com/embed/b6MXWZ4mheo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Col>
                    <Col sm={12} className="center mt-5 article-h2" >
                        <h2 class="header2"><u><b>Chandler's Review</b></u></h2>
                    </Col>
                    <Col sm={12} className="article-P-tag">
                        <p>Unfortunately the only Dark Souls game that I have played. However this game is still one of the greatest that
                        I have played. This game mostly runs off of the atmosphere that it gives off and the gameplay loop that
                        reinforces that atmosphere. This game, from the start, gives you a feeling of dread, despair, darkness,
                        hopelessness, and the feeling that you, as the player character, are nothing to this world. That doesn't sound
                        like that much fun at all, but the game presents all of those negative factors as a challenge. Will you give
                        into this despair and hopelessness and refuse to explore the game? Will you let that game tell you that you are
                        nothing, or will you go defeat the lords of cinder? Its up to you to find your favorite way of fighting the
        dregs of this world and continue (or end) this twisted world.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}