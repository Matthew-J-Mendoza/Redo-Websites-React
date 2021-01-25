import { Button, Col, Container, Row } from 'react-bootstrap';
import Logo from "../../../images/prImages/MuzzlesLogo.png"

export const PrNav = () => {
    return (
        <div >
            <br/>
            <Container fluid className="indexFormat mb-4 d-none d-lg-block">
                <Row>
                    <Col sm={3}>
                        <a href="/Puppy_Restaruant/">
                            <img src={Logo} width="70%" />
                        </a>
                    </Col>
                    <Col sm={9}>
                        <ul className="Pr-a nav justify-content-end fugaz mt-4">
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link active" href="/Puppy_Restaruant/About">About</a>
                            </li>
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link" href="/Puppy_Restaruant/Menu">Menu</a>
                            </li>
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link" href="/Puppy_Restaruant/Catering">Catering</a>
                            </li>
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link" href="/Puppy_Restaruant/Photo">Photo</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="indexFormat d-lg-none">
                <Row>
                    <Col sm={3}>
                        <a href="/Puppy_Restaruant/">
                            <img src={Logo} width="300%" />
                        </a>
                    </Col>
                    <Col sm={12}>
                        <ul className="Pr-a nav flex-column fugaz">
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link active" href="/Puppy_Restaruant/About">About</a>
                            </li>
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link" href="./menu.html">Menu</a>
                            </li>
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link" href="/Puppy_Restaruant/Catering">Catering</a>
                            </li>
                            <li className="Pr-a nav-item">
                                <a className="Pr-a nav-link" href="/Puppy_Restaruant/Photo">Photo</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}