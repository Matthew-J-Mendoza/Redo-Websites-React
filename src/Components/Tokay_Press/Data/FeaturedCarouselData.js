import { Carousel, Container } from "react-bootstrap"

import Hero from '../../../images/TPimages/featuredHero.png'
import Spot from '../../../images/TPimages/spotUV.png'
import Swag from '../../../images/TPimages/swag.png'
import overlay from '../../../images/TPimages/heroOverlay.png'



const Data ={
    featHero: {
        Img: Hero,
        title: "2020, time to refresh, and renew.",
        desc: "Thank you so much for supporting us throughout the years. As designers, it's important for us to always evolve our works and we are proud to announce our newly redesigned website. With everything going on in the world, we wanted to take time to give you a fresh, new experience. We hope you enjoy our new look as much as we do!",
        LG_Class: "d-none d-lg-block carousel-caption p-3"
    },
    SpotUV: {
    Img: Spot,
    title: "Make your mark. And don't let it be your last.",
    desc: "Our forte is making your brand and identity strong. How do we do it Well, let's just say anything is possible. If you don't have a logo we'll design one for you and then makes sure everything that follow follows your brand to the T.",
    LG_Class: 'd-none d-lg-block carousel-caption-3'
},
SwagCap: {
    Img: Swag,
    title: "Swag for days. It's what we do!",
    desc: "rom totes, to shirts, facemasks to jackets. Look no further, we specialize in making your business look and feel great. Fall is upon us, and that m sweater weather. What's better than a sweater, a sweater with your logo on it!",
    LG_Class: 'd-none d-lg-block carousel-caption2'
}
}

// name: {
//     Img: ,
//     title: "",
//     desc: "",
//     LG_Class:
// }






export const CarouselArray = Object.entries(Data).map((key, i)=>{
    console.log(key[1])
    return(
        <Carousel.Item className="heroHeight">
            <div>
                <img src={overlay} className="featuredCarousel" alt="image overlay"/>
            </div>
            <img className="d-block fitCover" src={key[1].Img} alt="A few pages from our new Website Redesign" width="100%"/>
            <Carousel.Caption className={key[1].LG_Class}>
					<h2 className="d-lg-block Tp-h2">{key[1].title}</h2><hr className="Tp-hr"/>
					<p>{key[1].desc}</p>
				</Carousel.Caption>

				<Container fluid className="d-lg-none carouselSmallCap">
					<h2 className="Tp-h2">{key[1].title}</h2><hr className="Tp-hr"/>
					<p>{key[1].desc}</p>
				</Container>
  </Carousel.Item>
    )
})