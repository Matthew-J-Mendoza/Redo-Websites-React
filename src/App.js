// import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Puppy_Restaruant} from "./Components/Puppy_restaruant/Puppy_Resturaunt"
import {HubPage} from "./Components/HUB/Hub"
import {HamsterHotel} from "./Components/Hamster_Hotel/Hamster_hotel"
import {Two_Nerds} from './Components/Multi-Page/Two_Nerds'
import {TokayPressPage} from './Components/Tokay_Press/Tokay_Press'

class App extends React.Component {
  render(){
    return (
      < div>
        

      <Router>
      
      
        <Switch>
  
          <Route exact path="/" component={HubPage}/>
          
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
