import { TgNavBar } from "../Parts/tnNav";
import { Container, Row, Col } from 'react-bootstrap';
import {IMG} from '../../Shared/img'


export const Articlepage = (Props) => {
    return (
        <div>
            <TgNavBar Games={true} Anime={true} />
            <Container fluid>
                <Row>
                    <Col sm={12} className="center">
                        <IMG className="my-5 Article-img" src={Props.Media.Banner} alt="Banner" />
                    </Col>
                    <Col sm={12} className="center my-5">
                        <h1 className="article-h1">{Props.Title === "FMA: Brotherhood" ? "FullMetal Alchemest Brotherhood" : Props.Title}</h1>
                    </Col>
                    <Col sm={12} className="my-5">
                        <h2><u><b>Review Video</b></u></h2>
                    </Col>
                    <Col sm={12} className="center mb-5">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Review Video" width="1903" height="806" src={Props.Media.Video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="Article-Video "></iframe>
                        </div>
                    </Col>
                    <Col sm={12} className="center mt-5 article-h2" >
                        <h2 className="header2"><u><b>{`${Props.Media.Author}'s Review`}</b></u></h2>
                    </Col>
                    <Col sm={12} className="article-P-tag">
                        <p>{Props.Media.Review}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}