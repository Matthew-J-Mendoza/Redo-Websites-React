import React from "react";



import {HHnav} from "./Others/hhNavBar"
import {ImgHero} from "./Others/Hero"
import {Welcome} from "./Welcome/welcomeSection"
import { Rooms } from "./RoomFolder/RoomsSection";
import { PackagesSection } from "./PackagesFolder/PackagesSection";
import { AmenitiesSection } from "./Amenities/Amenities";
import { ReserveSection } from "./Reserve/Reserve";
import { FooterHH } from "./Others/Footer";
import {RWNavBar} from '../Shared/ReactWebsiteNavBar'
export class HamsterHotel extends React.Component{

  componentDidMount(){
    //console.log('COmponent Did Mount fired')
    this.HH_BG = setInterval(() => {
        document.getElementById('body').className = 'bg-light'
    }, 100);
  }
  componentWillUnmount(){
    clearInterval(this.HH_BG)
  }
    render(){
      return(
        <div className=" mb-3">
          <RWNavBar/>
          <HHnav/>
          <div className="HH_Font">
            <ImgHero/>
            <Welcome id="Overview"/>
            <Rooms />
            <PackagesSection/>
            <AmenitiesSection />
            <ReserveSection />
          </div>
          <FooterHH/>
        </div>
    )
    }
}