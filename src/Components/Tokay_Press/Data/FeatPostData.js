import vet1 from '../../../images/TPimages/vet1.jpg'
import vet2 from '../../../images/TPimages/vet2.jpg'
import vet3 from '../../../images/TPimages/vet3.jpg'

import vgf1 from '../../../images/TPimages/vgf1.jpg'
import vgf2 from '../../../images/TPimages/vgf2.jpg'
import vgf3 from '../../../images/TPimages/vgf3.jpg'

import Val from '../../../images/TPimages/Val.png'
import Ruby from '../../../images/TPimages/Ruby.png'
import Diane from '../../../images/TPimages/Diane.png'
import Jonny from '../../../images/TPimages/Jonny.png'

import vgfa1 from '../../../images/TPimages/vgfa1.jpg'
import vgfa2 from '../../../images/TPimages/vgfa2.jpg'
import vgfa3 from '../../../images/TPimages/vgfa3.jpg'

import wipfli from '../../../images/TPimages/wipfli.jpg'
import Invite1 from '../../../images/TPimages/Invite1.png'
import Invite2 from '../../../images/TPimages/Invite2.png'
import Invite3 from '../../../images/TPimages/Invite3.png'

import moon1 from '../../../images/TPimages/moon1.jpg'
import moon2 from '../../../images/TPimages/moon2.jpg'
import moon3 from '../../../images/TPimages/moon3.jpg'
import moon4 from '../../../images/TPimages/moon4.jpg'
import moon5 from '../../../images/TPimages/moon5.jpg'



const GardenFair1 = (props) => {
    return (
        <>
                        <p>
                            Did you stick around? Here’s the invitation suite for the 2018 Garden Fair. These were a little different because we designed them vertically to fit into a standard No. 10 business envelope.
					<br/>- - - - -
					<br/>Project details:
					<br/>✔️ Graphic Design
					<br/>✔️ Linen Finish
					<br/>✔️ Foil Stamping
					<br/>✔️ Preparation for Mailing Services
					<br/>#tokaypress #graphicdesign #local #stocktonca #invitationdesign #gardenfair #childrenshomeauxiliary @ Tokay Press | Print and Design
                        </p>
                        
                    </>
    )
}
const CongratsKate = (props) => {
    return (
        <>
        
        <p>
                And that’s a wrap on another wedding invitation this season
                An simple but elegant, black and white invitation suite for @ktwipfli designed by @valerieros3
                <br/>Photo by @jonandjessstudio
                <br/>—
                <br/>Congratulations Katie!
                <br/>Here are a few other invitations that we've done!
            </p>
                        
                    </>
    )
}


export const PostData = {
    Veterans_Day: {
        Title: "A Veteran's Day Shoutout",
        Date: 'November 11, 2020',
        Short_Desc: "Wishing everyone who has served our country a Happy Veteran's Day and a big thank you especially to our very own Jon Peters, our pressman, who served in the Marines.",
        Long_Desc: <p>Wishing everyone who has served our country a Happy Veteran's Day and a big thank you
        especially to our very own Jon Peters, our pressman, who served in the Marines.  Take a look at some flyers we've designed for past Veteran's Day celebrations in Lincoln Center.</p>,
        Images: [vet1,vet2,vet3],
        Color: "lightBlue"
    },

    Valley_Garden_Fair_2: {
    Title: "Valley Garden Fair",
    Date: 'November 7, 2019',
    Short_Desc: "Here’s the invitation suite for the 2018 Garden Fair. These were a little different because we designed them vertically to fit into a standard No. 10 busines envelope.",
    Long_Desc: <GardenFair1/>,
    Images: [vgf1,vgf2,vgf3],
    Color: "lightPink"
    },

    New_Face: {
    Title: "A New Face!",
    Date: 'May 13, 2018',
    Short_Desc: "A change has come to #TokayPress and her name is Valerie! Her amazing skill with pen and paper and creative spirit means hand drawn typography and custom illustrations!",
    Long_Desc: <p>A change has come to #TokayPress and her name is Valerie! Her amazing skill with pen and paper and creative spirit means hand drawn typography and custom illustrations for you! She’s sweet, smart, and fun and we are proud to call her part of the Tokay Family!</p>,
    Images: [Val,Ruby,Diane,Jonny],
    Color: "lightYellow",
    },
    Valley_Garden_Fair_1: {
    Title: "Valley Garden Fair",
    Date: 'May 5, 2019',
    Short_Desc: "Falls in full effect but we wanted to share a little look back on spring with this invitation suite we did for the Children’s Home Auxiliary this past year.",
    Long_Desc: <p>Falls in full effect but we wanted to share a little look back on spring with this invitation suite we did for the Children’s Home Auxiliary this past year. Stay tuned to see how these invitations have changed through the years. We’ve enjoyed working with the Auxiliary for the past few years on their invitations and day of signage. #tokaypress #invitationdesign #design #stocktonca</p>,
    Images: [vgfa1,vgfa2,vgfa3],
    Color: "lightBlue"
    },
    Congrats_Katie: {
    Title: "Congratulations Katie!",
    Date: 'September 15, 2019',
    Short_Desc: "And that’s a wrap on another wedding invitation this season An simple but elegant, black and white invitation suite for @ktwipfli designed by @valerieros3",
    Long_Desc: <CongratsKate/>,
    Images: [wipfli,Invite1,Invite2,Invite3],
    Color: "lightPink"
    },
    MoonLight: {
    Title: "31st Annual Moonlight Gala",
    Date: 'August 30, 2020',
    Short_Desc: "We are so happy to have worked on these invitations for ACS Moonlight Gala Stockton again this Year! Joseph did an amazing job with the design!",
    Long_Desc: <p>We are so happy to have worked on these invitations for ACS Moonlight Gala Stockton again this Year! Joseph did an amazing job with the design!</p>,
    Images: [moon1,moon2,moon3,moon4,moon5],
    Color: "lightYellow"
    }
}



// Veterans_Day: {
//     Title: "",
//     Date: '',
//     Short_Desc: "",
//     Long_Desc: </>,
//     Images: [],
//     Color: ""
// }