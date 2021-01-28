import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const TokayPressPage =()=>{
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/Tokay_Press/Home">
            
          </Route>
          <Route path="/Tokay_Press/Featured">
            
          </Route>
        </Switch>
      </Router>
    </div>
  )
}