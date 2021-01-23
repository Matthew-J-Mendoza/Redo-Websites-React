import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import { topGames } from '../../Data/GamesData'
import { TgNavBar } from "../../Parts/tbNav";
import { CardsTg } from "../../Parts/tbCards";

// import Ds3_Thumb from '../../../../images/tgImages/'
// import Ds3_Thumb from '../../../../images/tgImages/'
import Ds3_Thumb from '../../../../images/tgImages/DarkS2.PNG'
import WF2 from '../../../../images/tgImages/WF2.PNG'
import Guild2 from '../../../../images/tgImages/Guild2.PNG'
import BB2 from '../../../../images/tgImages/BB2.PNG'
import MC2 from '../../../../images/tgImages/MC2.PNG'
import RL2 from '../../../../images/tgImages/RL2.PNG'
import SS2 from '../../../../images/tgImages/SS2.PNG'
import { TopPicks } from '../../Parts/TopPick'

export const GamePage = () => {
    return (
        <div>
            <TgNavBar />
            <Container>
                <Row>
                    <Col sm={12}>
                        <h1 className=" toptitle">All game articles listed by rank based on our own enjoyment of the game:</h1>
                        <br />
                        <h1 className="textleft"><u>The Creators' Favorite</u></h1>
                    </Col>
                    <Col sm={12}>
                        <TopPicks />
                    </Col>
                    <Col sm={12} className="center mb-3 mt-4">
                    <h1>More picks below</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="pb-5">
                <Row>
                    <Col lg={6}>
                        <Row>
                        <h2><u>Sean's Picks</u></h2>
                            <CardsTg game={topGames.DS3} src={Ds3_Thumb} />
                            <CardsTg game={topGames.WarFrame} src={WF2} />
                            <CardsTg game={topGames.RoR2} src={RL2} />
                            <CardsTg game={topGames.GW2} src={Guild2} />
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                        <h2><u>Mendoza's Picks::</u></h2>
                            <CardsTg game={topGames.BloodBorne} src={BB2} />
                            <CardsTg game={topGames.Minecraft} src={MC2} />
                            <CardsTg game={topGames.RL} src={RL2} />
                            <CardsTg game={topGames.SS} src={SS2} />
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
