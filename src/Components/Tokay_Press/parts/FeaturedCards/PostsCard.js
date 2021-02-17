import { Row, Col } from 'react-bootstrap'
import {App} from './Modal'

import {IMG} from '../../../Shared/img'


export const PostCards = (props)=>{
    return(
        <div>
            
                <Row className={`featuredCard shadow-sm ${props.Data.Color} mb-3`}>
            <Col xs={12} md={4} className="px-0 height282">
                <IMG className="height100 cardImageRadius" src={props.Data.PostThumbnail} alt="Article-Img"/>
            </Col>
            <Col xs={12} md={8} className="py-4 px-4 px-md-5">
                <h2 className="Tp-h2">{props.Data.Title}</h2>
                <h3>{props.Data.Date}</h3>
                <hr className="Tp-hr"/>
                <p>{props.Data.Short_Desc}</p>
                        <App ModalData={props.Data}/>
            </Col>
            </Row>
            <hr className="Tp-hr"/>
        </div>
    )
}