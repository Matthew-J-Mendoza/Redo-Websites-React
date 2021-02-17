import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


import {HHnav} from "./Others/hhNavBar"
import {ImgHero} from "./Others/Hero"
import {Welcome} from "./Welcome/welcomeSection"
import { Rooms } from "./RoomFolder/RoomsSection";
import { PackagesSection } from "./PackagesFolder/PackagesSection";
import { AmenitiesSection } from "./Amenities/Amenities";
import { ReserveSection } from "./Reserve/Reserve";
import { FooterHH } from "./Others/Footer";
import {RWNavBar} from '../Shared/ReactWebsiteNavBar'
export const HamsterHotel =()=>{
    return(
        <div>
          <RWNavBar/>
          <HHnav/>
          <ImgHero/>
          <Welcome/>
          <Rooms/>
          <PackagesSection/>
          <AmenitiesSection/>
          <ReserveSection/>
          <FooterHH/>
        </div>
    )
}