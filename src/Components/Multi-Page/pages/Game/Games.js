import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Container, Row,Col } from 'react-bootstrap';

import {topGames} from '../../Data/GamesData'
import { TgNavBar } from "../../Parts/tbNav";
import { CardsTg } from "../../Parts/tbCards";

import Ds3_Thumb from '../../../../images/tgImages/DarkS2.PNG'
console.log(topGames[0].title)

export const GamePage = () => {
    return (
        <div>
            <TgNavBar/>
           
            <Container>
                <Row>
                    <Col lg={6}>
                        <CardsTg  game={topGames.DS3} src={Ds3_Thumb} />
                        <CardsTg  game={topGames.WarFrame} src={Ds3_Thumb} />
                        <CardsTg  game={topGames.RoR2} src={Ds3_Thumb} />
                        <CardsTg  game={topGames.GW2} src={Ds3_Thumb} />
                    </Col>
                    <Col lg={6}>
                        <CardsTg  game={topGames.BloodBorne} src={Ds3_Thumb} />
                        <CardsTg  game={topGames.Minecraft} src={Ds3_Thumb} />
                        <CardsTg  game={topGames.RL} src={Ds3_Thumb} />
                        <CardsTg  game={topGames.SS} src={Ds3_Thumb} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
