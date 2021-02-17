import {PRheader} from '../parts/Header'
import { Container, Row, Col } from 'react-bootstrap'
import {TeamBio} from '../parts/TeamCards'
//Profile
import George from '../../../images/prImages/doxie3.jpg'
import Butterscotch from '../../../images/prImages/jackrussel.jpg'
import Louie from '../../../images/prImages/doxie1.jpg'
import Willow from '../../../images/prImages/novascotia.jpg'
import Skittles from '../../../images/prImages/doxie2.jpg'
import Mario from '../../../images/prImages/staffie.jpg'
//Header
import SBG from '../../../images/prImages/AboutMain.jpg'
import {IMG} from '../../Shared/img'

export const AboutPage = ()=>{
    return(
        <div className="indexFormat">
            <Container fluid className="my-5">
                <Row>
                    <Col sm={12} lg={5}>
                    <IMG src={SBG} width="100%" height="100%"  alt="image/AboutMain.jpg" alt="Two Dogs"/>
                    </Col>
                    <Col sm={12} lg={7} className="white">
                    <h1 className="card-title fugazTitle ">The Story Behind the Grill</h1>
                <div className="card-text montaukF">
                    <p >Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Mattis
                      molestie a iaculis at erat pellentesque adipiscing commodo. Quisque non tellus orci ac auctor augue.
                      Tincidunt augue interdum velit euismod in pellentesque massa. Vel pharetra vel turpis nunc. Risus
                      pretium quam vulputate dignissim suspendisse in est. Viverra nibh cras pulvinar mattis nunc sed
                      blandit libero. Aenean pharetra magna ac placerat. Etiam sit amet nisl purus. Sollicitudin tempor id
                      eu nisl nunc mi ipsum. Non tellus orci ac auctor augue. Suspendisse sed nisi lacus sed viverra tellus
                      in hac. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Dignissim sodales ut eu sem
                      integer vitae. Facilisis magna etiam tempor orci eu. Pharetra pharetra massa massa ultricies mi quis.
                      Mattis rhoncus urna neque viverra justo nec. Egestas purus viverra accumsan in nisl nisi scelerisque. </p>
                      
                      <p >Morbi tempus iaculis urna id. Aenean pharetra magna ac placerat. Mi proin sed libero enim sed faucibus
                      turpis in. Et ultrices neque ornare aenean euismod. Quisque sagittis purus sit amet. Ultricies
                      tristique nulla aliquet enim tortor at auctor urna. Purus faucibus ornare suspendisse sed. Tempor nec
                      feugiat nisl pretium fusce id velit ut tortor. Sed cras ornare arcu dui vivamus arcu felis.
                      Consectetur lorem donec massa sapien faucibus et molestie ac. Cum sociis natoque penatibus et magnis
                      dis parturient. Ut faucibus pulvinar elementum integer enim. Vel risus commodo viverra maecenas
                      accumsan. Nec dui nunc mattis enim ut. </p>
                      
                      <p >Posuere lorem ipsum dolor sit amet. Sed odio morbi quis commodo
                      odio aenean. Tortor posuere ac ut consequat semper viverra nam libero. Tellus elementum sagittis vitae
                      et leo duis ut. Egestas quis ipsum suspendisse ultrices gravida. Tempor commodo ullamcorper a lacus
                      vestibulum sed arcu non odio. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.
                      Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Tristique senectus et netus et.
                      Dolor sit amet consectetur adipiscing elit ut aliquam. Erat nam at lectus urna duis convallis
                      convallis tellus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices.</p>
                </div>

                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <Row className="d-flex justify-content-center">
                <Col sm={12}>
                <PRheader text="Our Team" />
                </Col>
                <TeamBio Name="George" Profile={George} />
                <TeamBio Name="Butterscotch" Profile={Butterscotch} />
                <TeamBio Name="Louie" Profile={Louie} />
                <TeamBio Name="Willow" Profile={Willow} />
                <TeamBio Name="Skittles" Profile={Skittles} />
                <TeamBio Name="Mario" Profile={Mario} />
                
            </Row>
            </Container>
        </div>
    )
}

