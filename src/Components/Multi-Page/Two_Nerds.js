import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Choose} from './pages/index/WelcomePage'
import './styleTG.css'
import {GamePage} from "./pages/Game/Games"
export class Two_Nerds extends React.Component{

  render(){

    return(

<div className="TwoGuysBg">
  
        <Router>
          <Route exact path="/Multi-Page/">
          <Choose/>
          </Route>
          <Route path="/Multi-Page/Games">
          <GamePage/>
          </Route>
  
  
        </Router>
  
</div>
    )
  }
}