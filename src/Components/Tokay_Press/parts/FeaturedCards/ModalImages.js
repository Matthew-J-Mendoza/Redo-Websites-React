import React from 'react'
import { Row,Col } from 'react-bootstrap'

import {IMG} from '../../../Shared/img'
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
        <IMG src={this.state.BigImg} className="ContainerIMG" alt="Main Image"/>
        
        </div>
        </Col>

        
        <Col xs={2} className='px-0'>
          <div className="rowImg">
          {this.props.ImgSet.map((img,i)=> <ImgBtn key={`TP_IMG:${i}`} IMGtag={img} onClick={this.ImgSwap}/>)}



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
    <IMG src={props.IMGtag} className="imgSize" alt="SideImg"/>
  </Col>
  )
}


