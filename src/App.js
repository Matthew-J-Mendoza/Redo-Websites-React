// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {HubPage} from "./Components/HUB/Hub"
import {HamsterHotel} from "./Components/Hamster_Hotel/Hamster_hotel"
import {Two_Nerds} from './Components/Multi-Page/Two_Nerds'
let Body = document.getElementById('body')
function App() {
  return (
    <>
    <Router>
    
    
      <Switch>

        <Route exact path="/">
        <HubPage />
        </Route>
        <Route path="/Multi-Page">
        <Two_Nerds/>
        </Route>
        <Route path="/Hamster_Hotel">
        <HamsterHotel/>
        </Route>
        <Route path="/Puppy_Restaruant">

        </Route>
        <Route path="/Tokay_Press">
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
