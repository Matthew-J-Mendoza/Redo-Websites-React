// import logo from './logo.svg';
// import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {HubPage} from "./Components/HUB/Hub"
import {HamsterHotel} from "./Components/Hamster_Hotel/Hamster_hotel"
import {Two_Nerds} from './Components/Multi-Page/Two_Nerds'
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
      < div className="">
      
      <Router>
      
      
        <Switch>
  
          <Route exact path="/">
          <HubPage />
          </Route>
          <Route path="/Multi-Page" component={Two_Nerds}>
          
          </Route>
          <Route path="/Hamster_Hotel" component={HamsterHotel}>
          
          </Route>
          <Route path="/Puppy_Restaruant">
  
          </Route>
          <Route path="/Tokay_Press">
          </Route>
  
        </Switch>
      </Router>
      </ div>
    )
  }
}

export default App;
