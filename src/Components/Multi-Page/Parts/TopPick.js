import { Carousel } from 'react-bootstrap';

import {IMG} from '../../Shared/img'
export const TopPicks = (Props) =>{
    return(
        <Carousel>
  <Carousel.Item>
    <a href={Props.ChandlersPick.Pathway}>
    <IMG  
      className="d-block w-100"
      src={Props.ChandlersPick.Thumbnail}
      alt="First slide"
    />
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <a href={Props.MattsPick.Pathway}>
    <IMG  
      className="d-block w-100"
      src={Props.MattsPick.Thumbnail}
      alt="Third slide"
    />
    </a>

  </Carousel.Item>
</Carousel>
    )
}