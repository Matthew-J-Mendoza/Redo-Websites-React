import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {PrNav} from "./parts/PRnav"
import './stylePR.css'
import {PhotoPage} from './pages/Photos'
export const Puppy_Restaruant = () =>{
  return(
    <div>
      <PrNav/>
      <Router>
         <Route exact path="/Puppy_Restaruant/" />
        <Route exact path="/Puppy_Restaruant/About" />
        <Route exact path="/Puppy_Restaruant/Menu" />
        <Route exact path="/Puppy_Restaruant/Catering" />
        <Route exact path="/Puppy_Restaruant/Photo" component={PhotoPage}/>
      </Router>
    </div>
  )
}