import { Carousel } from 'react-bootstrap';
import Nier from "../../../images/tgImages/N2.PNG"
import Destiny from "../../../images/tgImages/D2.PNG"

export const TopPicks = (Props) =>{
    return(
        <Carousel>
  <Carousel.Item>
    <a href={Props.ChandlersPick.Pathway}>
    <img  
      className="d-block w-100"
      src={Props.ChandlersPick.Thumbnail}
      alt="First slide"
    />
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href={Props.MattsPick.Pathway}>
    <img  
      className="d-block w-100"
      src={Props.MattsPick.Thumbnail}
      alt="Third slide"
    />
    </a>

  </Carousel.Item>
</Carousel>
    )
}