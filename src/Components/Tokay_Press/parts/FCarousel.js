import { Carousel} from "react-bootstrap"
import {CarouselArray} from '../Data/FeaturedCarouselData';


export const FeatuedCarousel =(props)=>{
    return(
        <Carousel id={props.id} className="shadow-md carouselPad slide" >
			{CarouselArray}
        </Carousel>
    )
}