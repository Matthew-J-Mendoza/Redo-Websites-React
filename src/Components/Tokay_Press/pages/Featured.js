import { Container, Row, Col } from 'react-bootstrap'
import {PostCards} from '../parts/FeaturedCards/PostsCard'

import {FeatuedCarousel} from "../parts/FCarousel"

const obj ={
    si: 5,
    gh: "hello"
}

export const FeaturedPage =()=>{
    return(
        <div>
        <FeatuedCarousel/>
        <Container className="pt-5">
            <h1 className="text-center Tp-h1">Featured Posts</h1>

        </Container>
        <Container className="py-5 px-5 px-lg">
        
        <PostCards/>
        <PostCards/>
        <PostCards/>
        <PostCards/>
        <PostCards/>
        <PostCards/>

        </Container>
        </div>
    )
}