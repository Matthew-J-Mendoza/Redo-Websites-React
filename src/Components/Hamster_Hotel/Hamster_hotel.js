import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


import {HHnav} from "./HHcomponents/hhNavBar"
import {ImgHero} from "./HHcomponents/Hero"
import {Welcome} from "./HHcomponents/welcomeSection"
import { Rooms } from "./HHcomponents/RoomFolder/RoomsSection";
import { PackagesSection } from "./HHcomponents/PackagesFolder/PackagesSection";
import { AmenitiesSection } from "./HHcomponents/Amenities/Amenities";
import { ReserveSection } from "./HHcomponents/Reserve/Reserve";
import { FooterHH } from "./HHcomponents/Footer";
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
          <FooterHH/>
        </div>
    )
}