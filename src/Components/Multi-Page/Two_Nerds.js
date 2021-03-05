import React from "react";
import {
  Route
} from "react-router-dom";
import {Choose} from './pages/WelcomePage'
import './styleTN.css'
import { Articlepage } from "./pages/Article";
import {GamePage} from "./pages/Games"
import {AnimePage} from "./pages/Anime"
import {topGames} from "./Data/GamesData"
import {topAnimes} from "./Data/AnimeData"
import {RWNavBar} from '../Shared/ReactWebsiteNavBar'


const GameArticles = Object.entries(topGames).map((GameInfo,i)=>{
  return (
    <Route key={`Game:${i}`} path={GameInfo[1].Pathway}>
    <Articlepage Media={GameInfo[1]} Title={GameInfo[1].title} />
  </Route>
  )
})

const AnimeArticles = Object.entries(topAnimes).map((AnimeInfo, i)=>{
  return (
    <Route key={`Anime:${i}`} path={AnimeInfo[1].Pathway}>
    <Articlepage Media={AnimeInfo[1]} Title={AnimeInfo[1].title} />
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
  this.TN_BG = setInterval(() => {
      document.getElementById('body').className = 'TwoGuysBg'
  }, 100);
}
componentWillUnmount(){
  clearInterval(this.TN_BG)
  document.getElementById('body').className = ''
}



  render(){
    return(

<div >
  <RWNavBar/>
  <div className="mt-5 pt-5"/>
       
          
          
            <Route exact path="/Multi-Page/" component={Choose}/>
          <Route  exact path="/Multi-Page/Games" component={GamePage}/>
          <Route exact path="/Multi-Page/Animes" component={AnimePage}/>
          {GameArticles}
          {AnimeArticles}
            
          
         
      
  
</div>
    )
  }
}

