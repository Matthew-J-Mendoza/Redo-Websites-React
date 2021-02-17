import { Navbar,Nav, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export const RWNavBar=()=>{
    return(
        <Navbar bg="dark" fixed='bottom' variant='dark' className="d-flex justify-content-center">
        <Nav.Link href="/Multi-Page" className="d-lg-block d-none text-light" >Two Nerds</Nav.Link>
        <Nav.Link href="/Hamster_Hotel" className="d-lg-block d-none text-light" >La Petite Masion</Nav.Link>
        <Nav.Link href="/Puppy_Restaruant" className="d-lg-block d-none text-light" >Muzzles</Nav.Link>
        <Nav.Link href="/Tokay_Press/Home" className="d-lg-block d-none text-light" >Tokay Press</Nav.Link>
        <Nav.Link href="/" className="d-lg-block d-none text-light" >HUB</Nav.Link>
        <DropdownButton className="d-lg-none"
        as={ButtonGroup}
        key='up'
        id={`dropdown-button-drop-up`}
        drop='up'
        variant="light"
        title={` Directory `}
      >
        <Dropdown.Item as={Link} to="/Multi-Page" >Two Nerds</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Hamster_Hotel" >La Petite Masion</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Puppy_Restaruant" >Muzzles</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Tokay_Press/Home" >Tokay_Press</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item >Tokay Press</Dropdown.Item>
      </DropdownButton>
  </Navbar>
    )
}