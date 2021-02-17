import { Button, Nav, Navbar, NavDropdown, Col, Container, Row,Card } from 'react-bootstrap';




export const TgNavBar = (props) =>{
    return(
        <div>
            <Navbar fixed='top'  bg="dark" expand="lg" variant="dark" >
                <Navbar.Brand href=""><h2>Two Nerds</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Multi-Page/Animes" className={`nav-link ${props.Anime === true ? 'active' : ''}`}>Animes</Nav.Link>
                        <Nav.Link href="/Multi-Page/Games" className={`nav-link ${props.Games === true ? 'active' : ''}`}>Games</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}