import { Container, Row, Col } from "react-bootstrap"
import hamsterhome from "../images/hamsterhome.jpg"
import Finest from "../images/awardfinest.png"
import Faction from "../images/awardsatisfaction.png"
import Genuine from "../images/awardgenuine.png"
import {AwardImg} from "./awards"

export const Welcome = () => {
    return (
        <div>
            <Container id="Overview" className="mt-4">
                <Row>
                    <Col lg={4}>
                        <img src={hamsterhome} width="90%" />
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={12}>
                                <h1>Welcome to a hamster's paradise</h1>
                                <br />
                            </Col>
                            <Col lg={12}>
                            <p class="welcome-paragraph">Nestled in the heart of Cavia California, La Petite Maison is a
                            luxury hotel designed for the
                            small mammal with extravagence in mind. Escape to the warm comforts of stunning rooms, a
                            relaxing spa, and a pool with a beach side view</p>
                        <br/>
                        <p className="welcome-paragraph">Inspired by the warm beauty of the California Coast, we invite you
                            to enhoy the rich
                            accommidations along with our unmatched luxury. Discover the satisfaction of indulging in
                            our quality rooms, and thank you for choosing La Petite Masion.</p>
                            </Col>
                            <Col lg={4}>
                            <AwardImg awardType={Finest}/>
                            </Col>
                            <Col lg={4}>
                            <AwardImg awardType={Faction}/>
                            </Col>
                            <Col lg={4}>
                            <AwardImg awardType={Genuine}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

{/* <div id="Overview" class="container welcome-container">
        <div class="row welcomerow">
            <div class="col-4 d-none d-lg-block">
                <img class="img-margin" src="./images/hamsterhomejpg.jpg" alt="" width="105%" height="100%" >
            </div>
            <div class="col-12 d-lg-none d-flex justify-content-center ">
                <img class="img-margin" src="./images/hamsterhomejpg.jpg" alt="" width="50%"  >
            </div>
            <div class="col">
                <div class="row  ">
                    <div class="col-12 d-none d-lg-block ">
                        <h1 class="opac">Welcome to a hamster's paradise</h1>
                        <br>
                    </div>
                    <div class="col-12 d-lg-none welcome-text">
                        <h1>Welcome to a hamster's paradise</h1>
                        <br>
                    </div>

                    <div class="col-12">
                        <p class="welcome-paragraph">Nestled in the heart of Cavia California, La Petite Maison is a
                            luxury hotel designed for the
                            small mammal with extravagence in mind. Escape to the warm comforts of stunning rooms, a
                            relaxing spa, and a pool with a beach side view</p>
                        <br>
                        <p class="welcome-paragraph">Inspired by the warm beauty of the California Coast, we invite you
                            to enhoy the rich
                            accommidations along with our unmatched luxury. Discover the satisfaction of indulging in
                            our quality rooms, and thank you for choosing La Petite Masion</p>
                    </div>
                    <div class="col-4 my-4">
                        <img src="./images/awardfinest.png" alt="" width="100%">
                    </div>
                    <div class="col-4 my-4">
                        <img src="./images/awardsatisfaction.png" alt="" width="80%">
                    </div>
                    <div class="col-4 my-4">
                        <img src="./images/awardgenuine.png" alt="" width="90%">
                    </div>
                </div>
            </div>

        </div>
    </div> */}