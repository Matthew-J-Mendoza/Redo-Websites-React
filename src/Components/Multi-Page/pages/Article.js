import { TgNavBar } from "../Parts/tbNav";
import { Container, Row, Col } from 'react-bootstrap';



export const Articlepage = (Props) => {
    return (
        <div>
            <TgNavBar />
            <Container fluid>
                <Row>
                    <Col sm={12} className="center">
                        <img className="my-5 Article-img" src={Props.Media.Banner} alt="Banner" />
                    </Col>
                    <Col sm={12} className="center my-4">
                        <h1 className="article-h1">{Props.Title === "FMA: Brotherhood" ? "FullMetal Alchemest Brotherhood" : Props.Title}</h1>
                    </Col>
                    <Col sm={12} className="my-5">
                        <h2><u><b>Review Video</b></u></h2>
                    </Col>
                    <Col sm={12} className="center mb-5">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Review Video" width="1903" height="806" src={Props.Media.Video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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