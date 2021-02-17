// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar,Nav, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Puppy_Restaruant} from "./Components/Puppy_restaruant/Puppy_Resturaunt"
import {HubPage} from "./Components/HUB/Hub"
import {HamsterHotel} from "./Components/Hamster_Hotel/Hamster_hotel"
import {Two_Nerds} from './Components/Multi-Page/Two_Nerds'
import {TokayPressPage} from './Components/Tokay_Press/Tokay_Press'
let Body = document.getElementById('body')
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        num1: window.location.pathname
        
    }
  }
  backGround(){
    this.setState({num: window.location.pathname})
    console.log(this.state.num1)
  }
  render(){
    return (
      < div>
        

      <Router className="">
      
      
        <Switch>
  
          <Route exact path="/">
          <HubPage />
          </Route>
          <Route path="/Hamster_Hotel" component={HamsterHotel}/>
          
          
          

          
          
          <Route path="/Multi-Page" component={Two_Nerds}/>
          <Route path="/Puppy_Restaruant" component={Puppy_Restaruant}/>
          <Route path="/Tokay_Press/" component={TokayPressPage}/>
          
  
        </Switch>
      </Router>
      <div className="GlobalNavSpace"/>
      </ div>
    )
  }
}

export default App;
