import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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