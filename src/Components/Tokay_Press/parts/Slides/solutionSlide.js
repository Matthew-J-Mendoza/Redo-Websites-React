import { TemplateSlide } from './TemplateSlide'
import solutionsImg1 from '../../../../images/TPimages/solution-img1.png'
import solutionsImg2 from '../../../../images/TPimages/Solution-img2.png'
import solutionsImg3 from '../../../../images/TPimages/solution-img3.png'

let offers = [['Small Business','Logo Design, Marketing, Web'],['Hospitality','Menus, Event Marketing, Gift Cards & More!'],['Non-Profits','Newsletters, invitations, signs, tickets, programs'],['Professional Services','Letterhead, invitations, signs, tickets, programs'],['School & Teams','perfect bound yearbooks and media guides']].map(item=>{
    return(
        <>
        <b>{item[0]}</b>
        <p>{item[1]}</p>
        </>
    )
})

export const SolutionsSlide = () => {
    return (
        <TemplateSlide slideText={<Text/>} img1={solutionsImg1} img2={solutionsImg2} img3={solutionsImg3} slideType='solutions' />
    )
}
const Text = () => {
    return (
        <>
            <p>Identity, visibility & brand recognition is something every business needs whether big or small. Frombasic business cards,letterhead, envelopes, catalogs, forms and brochures to tradeshow graphics, wallgraphics and floor graphics and more, we’ll help get you results.</p>               
            {offers}
        </>
    )
}