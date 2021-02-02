import { Button, Carousel } from 'react-bootstrap';
import img from '../../../images/TPimages/thing.png'
export const HomeC =()=>{
    return(
        <div>
            <Carousel className="shadow-md carouselPad">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}