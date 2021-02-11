import { Button, Container,Row,Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './styleHUB.css'
  import HH_Thumbnail from '../../images/Hub-Images/HH_Thumbnail.png'
  import {WebsiteCards} from './parts/Websitecards'
  let body = document.getElementById('body')
let LastPath = window.location.pathname;

export const HubPage =()=>{
    return(
        <div className="text-center">
        <h1>Hub Page</h1>
        <Button as={Link}  to={"/Multi-Page"}>Multi-Page</Button>{' '}
        <Button as={Link}  to={"/Hamster_Hotel"}>Hamster_Hotel</Button>{' '}
        <Button as={Link}  to={"/Puppy_Restaruant"}>Puppy_Restaruant</Button>{' '}
        <Button as={Link}  to={"/Tokay_Press/Home"}>Tokay_Press</Button>
        <Container fluid >
        <Row>

          <WebsiteCards/>
          <WebsiteCards/>
          <WebsiteCards/>
          <WebsiteCards/>

        </Row>
        </Container>
        </div>
    )
}
//This checks
setInterval(function(){ 
    
      if(window.location.pathname === '/'){
        body.className="bg-light"
      }else if(window.location.pathname.includes('/Multi-Page')){
          body.className="bg-secondary"
      }else if(window.location.pathname.includes('/Puppy_Restaruant')){
        body.className="Puppy_Resturant_BG"
    }
   
   }, 100);