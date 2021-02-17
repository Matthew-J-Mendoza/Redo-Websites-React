
import { Container, Row, Col } from 'react-bootstrap';

import { topAnimes } from '../Data/AnimeData'
import { TgNavBar } from "../Parts/tnNav";
import { CardsTg } from "../Parts/tnCards";





import { TopPicks } from '../Parts/TopPick'

export const AnimePage = () => {
    return (
        <div>
            <TgNavBar Games={true} />
            <Container>
                <Row>
                    <Col sm={12}>
                        <h1 className=" toptitle">All anime articles listed by rank based on our own enjoyment of the anime:</h1>
                        <br />
                        <h1 className="textleft"><u>The Creators' Favorite</u></h1>
                    </Col>
                    <Col sm={12}>
                        <TopPicks  MattsPick={topAnimes.GoldenWind} ChandlersPick={topAnimes.RWBY}/>
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
                        <h2><u>Sean's Picks:</u></h2>
                            <CardsTg game={topAnimes.Naruto}/>
                            <CardsTg game={topAnimes.SchoolLive} />
                            <CardsTg game={topAnimes.FMA} />
                            <CardsTg game={topAnimes.DBZ} />
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                        <h2><u>Mendoza's Picks:</u></h2>
                            <CardsTg game={topAnimes.HxH} />
                            <CardsTg game={topAnimes.Gurren}  />
                            <CardsTg game={topAnimes.DrStone} />
                            <CardsTg game={topAnimes.DeathNote} />
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
