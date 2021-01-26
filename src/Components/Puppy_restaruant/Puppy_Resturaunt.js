import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {PrNav} from "./parts/PRnav"
import {Footer} from "./parts/PRfooter"
import './stylePR.css'
import {PhotoPage} from './pages/Photos'
import {AboutPage} from "./pages/About"
import {CateringPage} from "./pages/Catering"
import {HomePage} from './pages/Home'
import {MenuPage} from './pages/Menu'
export const Puppy_Restaruant = () =>{
  return(
    <div>
      <PrNav/>
      <Router>
         <Route exact path="/Puppy_Restaruant/" component={HomePage}  />
        <Route exact path="/Puppy_Restaruant/About" component={AboutPage} />
        <Route exact path="/Puppy_Restaruant/Menu" component={MenuPage} />
        <Route exact path="/Puppy_Restaruant/Catering" component={CateringPage} />
        <Route exact path="/Puppy_Restaruant/Photo" component={PhotoPage}/>
      </Router>
      <Footer/>
    </div>
  )
}