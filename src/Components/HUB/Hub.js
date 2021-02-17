import { Button, Container,Row,Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './styleHUB.css'
  import HH_Logo from '../../images/hhImages/Logo.png'
  import TP_Logo from '../../images/TPimages/TokayLogo.svg'
  import PR_Logo from '../../images/prImages/MuzzlesLogo.png'
  import TN_Logo from '../../images/Hub-Images/Two_Nerds_Logo.png'
  import {WebsiteCards} from './parts/Websitecards'
  let body = document.getElementById('body')
let LastPath = window.location.pathname;

export const HubPage =()=>{
    return(
        <div>
        <div className="text-center mb-5">
          <h1>Welcome to my React Redo of my previously designed websites</h1>
          <h2>By Matthew Mendoza</h2>
          <h3>Select a webiste you wish to visit</h3>
        </div>
        {/* <Button as={Link}  to={"/Multi-Page"}>Multi-Page</Button>{' '}
        <Button as={Link}  to={"/Hamster_Hotel"}>Hamster_Hotel</Button>{' '}
        <Button as={Link}  to={"/Puppy_Restaruant"}>Puppy_Restaruant</Button>{' '}
        <Button as={Link}  to={"/Tokay_Press/Home"}>Tokay_Press</Button> */}
        <Container fluid >
        <Row className="d-flex align-self-center">

          <WebsiteCards  type="TN" date="September 2020" textColor="light" src={TN_Logo} link="/Multi-Page"/>
          <WebsiteCards  type="HH" date="October 2020" textColor="light" src={HH_Logo} link="/Hamster_Hotel"/>
          <WebsiteCards  type="PR" date="November 2020" textColor="dark" src={PR_Logo} link="/Puppy_Restaruant"/>
          <WebsiteCards  type="TK" date="November 2020" textColor="dark" src={TP_Logo} link="/Tokay_Press/Home"/>
        </Row>
        </Container>
        </div>
    )
}
//This checks
// setInterval(function(){ 
    
//       if(window.location.pathname === '/'){
//         body.className="bg-light"
//       }else if(window.location.pathname.includes('/Multi-Page')){
//           body.className="bg-secondary"
//       }else if(window.location.pathname.includes('/Puppy_Restaruant')){
//         body.className="Puppy_Resturant_BG"
//     }
   
//    }, 100);