import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import { topGames } from '../Data/GamesData'
import { TgNavBar } from "../Parts/tbNav";
import { CardsTg } from "../Parts/tbCards";

// import Ds3_Thumb from '../../../../images/tgImages/'
// import Ds3_Thumb from '../../../../images/tgImages/'



import { TopPicks } from '../Parts/TopPick'

export const GamePage = () => {
    return (
        <div>
            <TgNavBar Anime={true} />
            <Container>
                <Row>
                    <Col sm={12}>
                        <h1 className=" toptitle">All game articles listed by rank based on our own enjoyment of the game:</h1>
                        <br />
                        <h1 className="textleft"><u>The Creators' Favorite</u></h1>
                    </Col>
                    <Col sm={12}>
                        <TopPicks  MattsPick={topGames.Nier} ChandlersPick={topGames.Destiny}/>
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
                            <CardsTg game={topGames.DS3}/>
                            <CardsTg game={topGames.WarFrame} />
                            <CardsTg game={topGames.RoR2} />
                            <CardsTg game={topGames.GW2} />
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                        <h2><u>Mendoza's Picks::</u></h2>
                            <CardsTg game={topGames.BloodBorne} />
                            <CardsTg game={topGames.Minecraft}  />
                            <CardsTg game={topGames.RL} />
                            <CardsTg game={topGames.SS} />
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
