import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {HHnav} from "./HHcomponents/hhNavBar"
import {ImgHero} from "./HHcomponents/Hero"
import {Welcome} from "./HHcomponents/welcomeSection"
import { Rooms } from "./HHcomponents/RoomFolder/RoomsSection";
export const HamsterHotel =()=>{
    return(
        <div>
          <HHnav/>
          <ImgHero/>
          <Welcome/>
          <Rooms/>
        </div>
    )
}