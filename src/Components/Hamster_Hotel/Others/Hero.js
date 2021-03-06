import { Container, Row} from "react-bootstrap"


export const ImgHero =()=>{
    return(
        <Container fluid className="hero-image">
            <Row className="container-header">
                <div className="hero-text text-center">
                <p className="top-text">Run on the wheel of luxury</p>
                <p>Explore everything the beach has to offer in our relaxing resort</p>
                </div>
            </Row>
        </Container>
    )
}