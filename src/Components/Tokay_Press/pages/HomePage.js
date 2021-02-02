import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import '../TPstyle.css'
import {HomeC} from '../parts/HomeC'

export class TPHome extends React.Component{



    render(){
        return(
            <div className=" ">
                <HomeC/>
                    
                <Container fluid >
                </Container>
            </div>
        )
    }
}