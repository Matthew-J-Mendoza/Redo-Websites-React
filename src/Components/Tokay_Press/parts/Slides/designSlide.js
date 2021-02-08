
import { TemplateSlide } from './TemplateSlide'
import designImg1 from '../../../../images/TPimages/Design-Img1.png'
import designImg2 from '../../../../images/TPimages/Design-Img2.png'
import designImg3 from '../../../../images/TPimages/Design-Img3.png'

export const DesignSlide = () => {
    return (
        <TemplateSlide slideText={<Text/>} img1={designImg1} img2={designImg2} img3={designImg3} slideType='design' />
    )
}
const Text = () => {
    return (
        <>
            <p>When it comes to crafting your image, we know good design is good business.</p>               
            <p>Our team of designers have been providing clients with exceptional creative services since 2005. We develop strategic marketing pieces and branding solutions that reflect your unique identity and successfully communicate your message to your target market.</p>
        </>
    )
}