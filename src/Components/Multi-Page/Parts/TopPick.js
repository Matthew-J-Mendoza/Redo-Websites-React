import { Carousel } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import {IMG} from '../../Shared/img'

export const TopPicks = (Props) =>{
    return(
        <Carousel>
  <Carousel.Item as={Link} to={Props.ChandlersPick.Pathway}>
   
    <IMG  
      className="d-block w-100"
      src={Props.ChandlersPick.Thumbnail}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item as={Link} to={Props.MattsPick.Pathway}>
   
    <IMG  
      className="d-block w-100"
      src={Props.MattsPick.Thumbnail}
      alt="Third slide"
    />
    

  </Carousel.Item>
</Carousel>
    )
}