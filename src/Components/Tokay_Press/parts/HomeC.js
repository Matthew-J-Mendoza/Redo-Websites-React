import {Carousel } from 'react-bootstrap';
import MainImg from '../../../images/TPimages/thing.png'
import Design from '../../../images/TPimages/Design-Print.png'
import Care from '../../../images/TPimages/Made-With-Care.png'
import {IMG} from '../../Shared/img'

const CarouselArray = [MainImg,Design,Care].map(img=>{
    return(
        <Carousel.Item>
    <IMG
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
  </Carousel.Item>
    )
});



export const HomeC =()=>{
    return(
        <div>
            <Carousel className="shadow-md carouselPad">
  {CarouselArray}
</Carousel>
        </div>
    )
}