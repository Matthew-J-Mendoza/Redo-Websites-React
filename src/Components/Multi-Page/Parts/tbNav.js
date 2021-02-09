import { Button, Nav, Navbar, NavDropdown, Col, Container, Row,Card } from 'react-bootstrap';




export const TgNavBar = () =>{
    return(
        <div>
            <Navbar   bg="dark" expand="lg" variant="dark" >
                <Navbar.Brand href="#home"><h2>Two Nerds</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="nav-link active">Anime</Nav.Link>
                        <Nav.Link href="/Multi-Page/Games" className="nav-link">Games</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}