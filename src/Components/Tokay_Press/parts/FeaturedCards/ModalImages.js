import React from 'react'
import { Modal, Button, Row,Container,Col } from 'react-bootstrap'
import img1 from '../../../../images/TPimages/vet1.jpg'
import img2 from '../../../../images/TPimages/vet2.jpg'
import moon1 from '../../../../images/TPimages/moon1.jpg'
export class ModImages extends React.Component{
    constructor(props){
      super(props)
      this.state={
        BigImg: this.props.ImgSet[0]
      }
    }
    ImgSwap =(img)=>{
      console.log("press")
      this.setState({BigImg: img})
    }
    render(){
        return(
            <Row className='px-2 pb-2'>
        <Col className="px-0 pr-2" xs={10}>
        <div className="containerImg displayImg">
        <img src={this.state.BigImg} className="ContainerIMG" alt="Main Image"/>
        
        </div>
        </Col>

        
        <Col xs={2} className='px-0'>
          <div className="rowImg">
          {this.props.ImgSet.map(img=> <ImgBtn IMGtag={img} onClick={this.ImgSwap}/>)}

          {/* <Col xs={12} className="columnImg">
            <img src={img1} className="imgSize"/>
          </Col>

          <Col xs={12} className="columnImg">
            <img src={img2} className="imgSize"/>
          </Col> */}


          </div>
        </Col>


        </Row>
        )
    }
}

const ImgBtn =(props)=>{
  const handleClick =()=> props.onClick(props.IMGtag)
  return(
    <Col xs={12} className="columnImg" onClick={handleClick}>
    <img src={props.IMGtag} className="imgSize" alt="SideImg"/>
  </Col>
  )
}


