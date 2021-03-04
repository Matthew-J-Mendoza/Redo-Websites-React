import { Container, Row, Col } from "react-bootstrap"
import hamsterhome from "../../../images/hhImages/hamsterhome.jpg"
import Finest from "../../../images/hhImages/awardfinest.png"
import Faction from "../../../images/hhImages/awardsatisfaction.png"
import Genuine from "../../../images/hhImages/awardgenuine.png"
import {AwardImg} from "./awards"
import { IMG } from "../../Shared/img"

export const Welcome = () => {
    return (
        <div>
            <Container id="Overview" className="mt-4">
                <Row>
                    <Col lg={4} xs={12}>
                        <IMG src={hamsterhome} alt="Welcome Image" width="90%" className="d-flex justify-content-center"/>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={12}>
                                <h1 className="Dosis">Welcome to a hamster's paradise</h1>
                                <br />
                            </Col>
                            <Col lg={12}>
                            <p className="welcome-paragraph">Nestled in the heart of Cavia California, La Petite Maison is a
                            luxury hotel designed for the
                            small mammal with extravagence in mind. Escape to the warm comforts of stunning rooms, a
                            relaxing spa, and a pool with a beach side view</p>
                        <br/>
                        <p className="welcome-paragraph">Inspired by the warm beauty of the California Coast, we invite you
                            to enhoy the rich
                            accommidations along with our unmatched luxury. Discover the satisfaction of indulging in
                            our quality rooms, and thank you for choosing La Petite Masion.</p>
                            </Col>
                            <Col lg={4} xs={4}>
                            <AwardImg alt="Faction" awardType={Faction} width="80%"/>
                            </Col>
                            <Col lg={4} xs={4}>
                            <AwardImg alt="Finest" awardType={Finest} width="100%"/>
                            </Col>
                            <Col lg={4} xs={4}>
                            <AwardImg alt="Genuine" awardType={Genuine} width="90%"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

