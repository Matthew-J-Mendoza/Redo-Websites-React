import { Container, Row } from 'react-bootstrap'
import {PRheader} from '../parts/Header'
import {Thumbnail} from '../parts/Imgthumb'
import photo01 from '../../../images/prImages/photo01.jpg'
import photo02 from '../../../images/prImages/photo02.jpg'
import photo03 from '../../../images/prImages/photo03.jpg'
import photo04 from '../../../images/prImages/photo04.jpg'
import photo05 from '../../../images/prImages/photo05.jpg'
import photo06 from '../../../images/prImages/photo06.jpg'
import photo07 from '../../../images/prImages/photo07.jpg'
import photo08 from '../../../images/prImages/photo08.jpg'
import photo09 from '../../../images/prImages/photo09.jpg'
import photo10 from '../../../images/prImages/photo10.jpg'
import photo11 from '../../../images/prImages/photo11.jpg'
import photo12 from '../../../images/prImages/photo12.jpg'
const PhotoArray = [photo01,photo02,photo03,photo04,photo05,photo06,photo07,photo08,photo09,photo10,photo11,photo12]

const photoGen = PhotoArray.map(function(src,i){
    return(
        <Thumbnail key={i} img={src}/>
    )
})

export const PhotoPage =()=>{
    return(
        <div className="indexFormat">
        <PRheader text="Photos"/>
        <Container fluid>
            <Row className="photo-row">
            {photoGen}
            </Row>
        </Container>
        </div>
    )
}