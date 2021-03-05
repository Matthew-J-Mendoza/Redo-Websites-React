import { TgNavBar } from "../Parts/tnNav";
import { Container, Row, Col } from 'react-bootstrap';
import {IMG} from '../../Shared/img'


export const Articlepage = (Props) => {
    return (
        <div>
            <TgNavBar Games={true} Anime={true} />
            <Container fluid>
                <Row>
                    <Col sm={12} className="center d-none d-lg-block">
                        <IMG className="mb-3" width="700rem" height="300rem" src={Props.Media.Banner} alt="Banner" />
                    </Col>
                    <Col sm={12} className="center d-lg-none">
                        <IMG className="my-5" width="350rem" height="200rem" src={Props.Media.Banner} alt="Banner" />
                    </Col>
                    <Col sm={12} className="center my-5">
                        <h1 className="article-h1">{Props.Title === "FMA: Brotherhood" ? "FullMetal Alchemest Brotherhood" : Props.Title}</h1>
                    </Col>
                    <Col sm={12} className="my-5 text-center">
                        <h2><u><b>Review Video</b></u></h2>
                    </Col>
                    <Col sm={12} className="center mb-5">
                        <div className="embed-responsive embed-responsive-16by9 d-lg-none">
                            <iframe title="Review Video" width="1903" height="806" src={Props.Media.Video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="Article-Video "></iframe>
                        </div>
                        <div className="d-none d-lg-block">
                        <iframe width="900" height="506" src={Props.Media.Video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="SmallIframe"></iframe>
                        </div>
                    </Col>
                    <Col sm={12} className="center mt-5" >
                        <h2 className=" text-center"><u><b>{`${Props.Media.Author}'s Review`}</b></u></h2>
                    </Col>
                    <Col sm={12} className="article-P-tag pb-3">
                        <p>{Props.Media.Review}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}