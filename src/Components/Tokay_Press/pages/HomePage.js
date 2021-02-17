import React from 'react';


import '../TPstyle.css'
import { HomeC } from '../parts/HomeC'
import { AboutSection } from '../parts/Sections/About'

export class TPHome extends React.Component {



    render() {
        return (
            <div className=" ">
                <HomeC />

                <AboutSection />

            </div>
        )
    }
}