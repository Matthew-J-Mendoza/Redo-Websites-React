import { Carousel } from 'react-bootstrap';
import Nier from "../../../images/tgImages/N2.PNG"
import Destiny from "../../../images/tgImages/D2.PNG"

export const TopPicks = () =>{
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Destiny}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Nier}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    )
}