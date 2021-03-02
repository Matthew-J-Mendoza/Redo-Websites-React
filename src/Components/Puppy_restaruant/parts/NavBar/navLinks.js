
import { Nav} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";


export const PRlinks = (props) => {
    return (
        
                    <Nav as="ul" className={props.className} >
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/Puppy_Restaruant/About" className="fugaz-Link" >About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/Puppy_Restaruant/Menu" className="fugaz-Link" >Menu</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/Puppy_Restaruant/Catering" className="fugaz-Link" >Catering</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/Puppy_Restaruant/Photo" className="fugaz-Link" >Photo</Nav.Link>
                        </Nav.Item>
                    </Nav>

    )
}