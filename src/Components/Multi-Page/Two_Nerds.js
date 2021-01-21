import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Choose} from './pages/index/WelcomePage'
import './styleTG.css'

export class Two_Nerds extends React.Component{

  render(){

    return(

<div className="TwoGuysBg">
  
        <Router>
          <Route exact path="/Multi-Page/">
          <Choose/>
          </Route>
  
  
  
        </Router>
  
</div>
    )
  }
}