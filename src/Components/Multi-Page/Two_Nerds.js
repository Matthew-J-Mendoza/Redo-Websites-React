import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Choose} from './pages/index/WelcomePage'
import './styleTG.css'
import { Articlepage } from "./pages/Article";
import {GamePage} from "./pages/Games"
import {AnimePage} from "./pages/Anime"
import {topGames} from "./Data/GamesData"
import {topAnimes} from "./Data/AnimeData"
import {RWNavBar} from '../Shared/ReactWebsiteNavBar'


const GameArticles = Object.entries(topGames).map((key, i)=>{
  return (
    <Route path={key[1].Pathway}>
    <Articlepage Media={key[1]} Title={key[1].title} />
  </Route>
  )
})

const AnimeArticles = Object.entries(topAnimes).map((key, i)=>{
  return (
    <Route path={key[1].Pathway}>
    <Articlepage Media={key[1]} Title={key[1].title} />
  </Route>
  )
})

export class Two_Nerds extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
    }
}
componentDidMount(){
  //console.log('COmponent Did Mount fired')
  this.TN_BG = setInterval(() => {
      document.getElementById('body').className = 'bg-secondary'
  }, 100);
}
componentWillUnmount(){
  clearInterval(this.TN_BG)
}



  render(){
    return(

<div className="TwoGuysBg">
  <RWNavBar/>
  <div className="mt-5 pt-5"/>
        <Router>
          <Switch>
          <Route exact path="/Multi-Page/" component={Choose}/>
          
          
          <Route  exact path="/Multi-Page/Games" component={GamePage}/>
          
          <Route exact path="/Multi-Page/Animes" component={AnimePage}/>
          {GameArticles}
          {AnimeArticles}
          </Switch>
         
        </Router>
  
</div>
    )
  }
}

{/* <Route path={topGames.DS3.Pathway}>
            <Articlepage Media={topGames.DS3} Title={topGames.DS3.title} />
          </Route>*/}