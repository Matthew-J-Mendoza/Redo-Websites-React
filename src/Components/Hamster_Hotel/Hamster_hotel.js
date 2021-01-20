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
import { PackagesSection } from "./HHcomponents/PackagesFolder/PackagesSection";
import { AmenitiesSection } from "./HHcomponents/Amenities/Amenities";
import { ReserveSection } from "./HHcomponents/Reserve/Reserve";
export const HamsterHotel =()=>{
    return(
        <div>
          <HHnav/>
          <ImgHero/>
          <Welcome/>
          <Rooms/>
          <PackagesSection/>
          <AmenitiesSection/>
          <ReserveSection/>
        </div>
    )
}