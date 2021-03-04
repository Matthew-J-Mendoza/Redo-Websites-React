import { TemplateSlide } from './TemplateSlide'
import productionImg1 from '../../../../images/TPimages/Production-img1.png'
import productionImg2 from '../../../../images/TPimages/Production-img-2.png'
import productionImg3 from '../../../../images/TPimages/Production-img3.png'
let listArr = ['• Offset Printing','• Die Cutting','• Foiling','• Letterpress','• Embossing','• Wide Format Printing','• 4 Color Digital Printing','• Booklet Making','• Variable Data and Mailings'].map((item,i)=> <p key={i}>{item}</p>)
export const ProductionSlide = () => {
    return (
        <TemplateSlide slideText={<Text/>} img1={productionImg1} img2={productionImg2} img3={productionImg3} slideType='production' />
    )
}
const Text = () => {
    return (
        <>
            <p>We offer the following productions capabilities</p>
            {listArr}
        </>
    )
}