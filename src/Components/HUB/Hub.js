import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  let body = document.getElementById('body')



export const HubPage =()=>{
    return(
        <div className="text-center">
        <h1>Hub Page</h1>
        <Button as={Link}  to={"/Multi-Page"}>Multi-Page</Button>{' '}
        <Button as={Link}  to={"/Hamster_Hotel"}>Hamster_Hotel</Button>{' '}
        <Button as={Link}  to={"/Puppy_Restaruant"}>Puppy_Restaruant</Button>{' '}
        <Button as={Link}  to={"/Tokay_Press"}>Tokay_Press</Button>
        </div>
    )
}
setInterval(function(){ 
    if(window.location.pathname === '/'){
      body.className="bg-light"
    }else if(window.location.pathname.includes('/Multi-Page')){
        body.className="bg-secondary"
    }
   }, 100);