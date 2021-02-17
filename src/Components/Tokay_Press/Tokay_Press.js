import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {TPHome} from "./pages/HomePage"
import {FeaturedPage} from "./pages/Featured"
import {TpNav} from "./parts/TpNav"
import {TpFooter} from "./parts/TpFooter"
import {Contact_Info} from './parts/Sections/Connect'
import {LocationSection} from './parts/Sections/Location'
import {RWNavBar} from '../Shared/ReactWebsiteNavBar'

export class TokayPressPage extends React.Component{
  


  render(){
    return(
      <div className="TP-Font">
        <RWNavBar/>
        <TpNav/>
        <Router>
          <Switch>
            <Route exact path="/Tokay_Press/Featured" component={FeaturedPage}/>
            <Route exact path="/Tokay_Press/Home" component={TPHome}/>
          </Switch>
        </Router>
        <Contact_Info/>
        <LocationSection/>
        <TpFooter/>
      </div>
    )
  }
}