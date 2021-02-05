import { Carousel, Container } from "react-bootstrap"
import {CarouselArray} from '../Data/FeaturedCarouselData';


export const FeatuedCarousel =()=>{
    return(
        <Carousel className="shadow-md carouselPad slide" >
			{CarouselArray}
        </Carousel>
    )
}