import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {TPHome} from "./pages/HomePage"
import {TpNav} from "./parts/TpNav"
import {TpFooter} from "./parts/TpFooter"
import {Contact_Info} from './parts/Sections/Connect'
import {LocationSection} from './parts/Sections/Location'
import { Container } from "react-bootstrap";
export const TokayPressPage =()=>{
  return(
    <div>
      <Router>
      <TpNav/>
        <Switch>
          <Route path="/Tokay_Press/Home">
            <TPHome/>
          </Route>
          <Route path="/Tokay_Press/Featured">
            
          </Route>
        </Switch>
      <Contact_Info/>
      <LocationSection/>
      <TpFooter/>
      </Router>
    </div>
  )
}