import { Container, Row, Col } from 'react-bootstrap'

import {AUcards} from "../AUcards"
import React from 'react';
import {DesignSlide} from '../Slides/designSlide'
import {ProductionSlide} from '../Slides/productionSlide'
import {SolutionsSlide} from '../Slides/solutionSlide'
import designIMG from '../../../../images/TPimages/Design.png'
import productionIMG from '../../../../images/TPimages/Valentines.jpg'
import solutionIMG from '../../../../images/TPimages/solutions-square.jpg'

const  messagesEndRef = React.createRef();

export class AboutSection extends React.Component{
    constructor(Props){
        super(Props)
        this.state ={
            slidesOpen: false,
            designOpen: false,
            productionOpen: false,
            solutionsOpen: false,
            thing: ['a','b','c']
        }
    }
    
    designSwitch=()=>{
        //console.log("Works")
        if(this.state.designOpen === false && this.state.slidesOpen === false){
            this.setState({
                designOpen: true,
                slidesOpen: true
            })
        }else if(this.state.designOpen === false && this.state.slidesOpen === true){
            this.setState({
                designOpen: true,
                productionOpen: false,
                solutionsOpen: false
            })
        }else if(this.state.designOpen === true && this.state.slidesOpen === true){
            this.setState({
                designOpen: false,
                slidesOpen: false
            })
        }
    }
    productionSwitch=()=>{
        //console.log("Works")
        if(this.state.productionOpen === false && this.state.slidesOpen === false){
            this.setState({
                productionOpen: true,
                slidesOpen: true
            })
        }else if(this.state.productionOpen === false && this.state.slidesOpen === true){
            this.setState({
                productionOpen: true,
                designOpen: false,
                solutionsOpen: false
            })
        }else if(this.state.productionOpen === true && this.state.slidesOpen === true){
            this.setState({
                productionOpen: false,
                slidesOpen: false
            })
        }
    }
    solutionSwitch=()=>{
        //console.log("Works")
        if(this.state.solutionsOpen === false && this.state.slidesOpen === false){
            this.setState({
                solutionsOpen: true,
                slidesOpen: true
            })
        }else if(this.state.solutionsOpen === false && this.state.slidesOpen === true){
            this.setState({
                solutionsOpen: true,
                designOpen: false,
                productionOpen: false
            })
        }else if(this.state.solutionsOpen === true && this.state.slidesOpen === true){
            this.setState({
                solutionsOpen: false,
                slidesOpen: false
            })
        }
    }
    myFunction=()=>{
        console.log('asdfsdf')
    }


    render(){
        return(
            <div id={"About"} className="anchor AboutUs">
                <Container fluid className="d-none d-lg-block  pb-5">
                    <Container>
                        <Row className="d-flex justify-content-center">
                        <Col xs={12} className="text-center my-5">
                        <h1>About Us</h1>
                        
                        </Col>
                        </Row>
    
                        <Row>
                            <Col xs={4} className="d-flex justify-content-center">
                        <AUcards bool={this.state.designOpen} btnFunction={this.designSwitch} btnText={this.state.designText} cardType="design" slidesOpen={this.state.slidesOpen} img={designIMG} />
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                        <AUcards bool={this.state.productionOpen} btnFunction={this.productionSwitch} btnText={this.state.productionText} cardType="production" slidesOpen={this.state.slidesOpen} img={productionIMG} />
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                        <AUcards bool={this.state.solutionsOpen} btnFunction={this.solutionSwitch} btnText={this.state.solutionText} cardType="solution" slidesOpen={this.state.slidesOpen} img={solutionIMG} />
                        </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid className="d-lg-none">
                <Row className="d-flex justify-content-center">
                        <Col xs={12} className="text-center my-5">
                        <h1>About Us</h1>
                        <p className="fas fa-long-arrow-alt-left"> Swipe to see more cards</p>
                        </Col>
                        </Row>
                        <div className="scrolling-wrapper d-lg-none pb-5">
                        <AUcards bool={this.state.designOpen} btnFunction={this.designSwitch} btnText={this.state.designText} cardType="design" slidesOpen={this.state.slidesOpen} img={designIMG} mobile="mobile-cards ml-3"/>

                        <AUcards bool={this.state.productionOpen} btnFunction={this.productionSwitch} btnText={this.state.productionText} cardType="production" slidesOpen={this.state.slidesOpen} img={productionIMG} mobile="mobile-cards mx-3"/>

                        <AUcards bool={this.state.solutionsOpen} btnFunction={this.solutionSwitch} btnText={this.state.solutionText} cardType="solution" slidesOpen={this.state.slidesOpen} img={solutionIMG} mobile="mobile-cards mr-3"/>

                        </div>
                </Container>
                {this.state.designOpen ? <DesignSlide/> : this.state.productionOpen ? <ProductionSlide/> : this.state.solutionsOpen ? <SolutionsSlide/> : ''}
                
                
            </div>
        )
    }
}



// import { Container, Row, Col, Card, Button } from 'react-bootstrap'
// import img from '../../../../images/TPimages/Design.png'


// import { AUcards } from "../AUcards"
// import React from 'react';
// import { DesignSlide } from '../Slides/Design'

// let slidess = false;

// export class AboutSection extends React.Component {
//     constructor(Props) {
//         super(Props)
//         this.state = {
//             slidesOpen: true,
//             designOpen: false,
//             productionOpen: false,
//             solutionsOpen: false
//         }
//     }
//     designSwitch=()=>{
//         this.setState({designOpen: !this.state.designOpen})
//     }

//     render() {
//         return (
//             <div className="anchor AboutUs">
//                 <Container fluid className="d-none d-lg-block  pb-5">
//                     <Container>
//                         <Row className="d-flex justify-content-center">
//                             <Col xs={12} className="text-center my-5">
//                                 <h1 onClick={this.handleLCick} >About Us</h1>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col xs={4} className="d-flex justify-content-center">
//                                 <Card style={{ width: '25rem' }} className="design-card text-center">
//                                     <Card.Img variant="top" src={img} className="rounded-circle my-4 design-img" />
//                                     <Card.Body>
//                                         <Card.Title className="mb-3 Tp-h1">Design</Card.Title>
//                                         <Button onClick={this.designSwitch} variant="primary" className="design-btn TP-btn px-5 my-4">{this.state.designOpen === false ? "More About Design" : "See Less"}</Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>

//                         </Row>
//                     </Container>
//                 </Container>

//             </div>
//         )
//     }
// }