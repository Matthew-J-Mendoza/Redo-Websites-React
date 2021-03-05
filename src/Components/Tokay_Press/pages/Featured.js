import { Container } from 'react-bootstrap'
import {PostCards} from '../parts/FeaturedCards/PostsCard'

import {FeatuedCarousel} from "../parts/FCarousel"
import {PostData} from '../Data/FeatPostData'


const FeatPostCards = Object.entries(PostData).map((key,i)=>{
    return (<PostCards key={i} Data={key[1]}/>)
})


export const FeaturedPage =()=>{
    return(
        <div>
        <FeatuedCarousel id="FeatuedCarousel"/>
        <Container className="pt-5">
            <h1 className="text-center Tp-h1">Featured Posts</h1>

        </Container>
        <Container className="py-5 px-5 px-lg">
        
        {FeatPostCards}

        </Container>
        </div>
    )
}