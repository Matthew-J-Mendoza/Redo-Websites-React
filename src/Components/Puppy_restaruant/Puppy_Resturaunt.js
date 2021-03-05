import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {PrNav} from "./parts/NavBar/PRnav"
import {Footer} from "./parts/PRfooter"
import './stylePR.css'
import {PhotoPage} from './pages/Photos'
import {AboutPage} from "./pages/About"
import {CateringPage} from "./pages/Catering"
import {HomePage} from './pages/Home'
import {MenuPage} from './pages/Menu'
import {RWNavBar} from '../Shared/ReactWebsiteNavBar'


export class Puppy_Restaruant extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
    }
}
componentDidMount(){
  //console.log('COmponent Did Mount fired')
  this.PR_BG = setInterval(() => {
      document.getElementById('body').className = 'Puppy_Resturant_BG'
  }, 100);
}
componentWillUnmount(){
  clearInterval(this.PR_BG)
  document.getElementById('body').className = ''
}

  render(){
    return(
      <div>
        <RWNavBar/>
          <Router>
        <PrNav/>
        <br/>
          <Switch>
          <Route  path="/Puppy_Restaruant/About" component={AboutPage} />
          <Route  path="/Puppy_Restaruant/Menu" component={MenuPage} />
          <Route  path="/Puppy_Restaruant/Catering" component={CateringPage} />
          <Route  path="/Puppy_Restaruant/Photo" component={PhotoPage}/>
          <Route exact path="/Puppy_Restaruant/" component={HomePage}  />
          </Switch>
          </Router>
        <Footer/>
      </div>
    )
  }
}