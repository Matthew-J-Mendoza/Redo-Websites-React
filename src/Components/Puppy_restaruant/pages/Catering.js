import { Container, Row, Col } from 'react-bootstrap'
import OCS from '../../../images/prImages/cateringMaine.jpg'
import {PRheader} from '../parts/Header'
import catering1 from '../../../images/prImages/catering1.jpg'
import catering2 from '../../../images/prImages/catering2.jpg'
import catering3 from '../../../images/prImages/catering3.jpg'


export const CateringPage = () =>{
    return (
        <div className="indexFormat">
            <Container fluid className="my-5">
                <Row>
                    <Col sm={12}>
                    <PRheader text="Catering"/>
                    </Col>
                    <Col sm={12}>
                    <div className="col-12 hero d-flex justify-content-center">
           
           </div>
                    </Col>
                    <Col sm={12}  className="mb-5 h-100 d-md-none">
                    <img src={OCS}  height="1rem" alt="image/AboutMain.jpg" />
                    </Col> 
                    <Col  lg={5} className="mb-5 h-100 d-none d-md-block">
                    <img src={OCS} width="100%" height="360rem" alt="image/AboutMain.jpg" />
                    </Col>
                    <Col sm={12} lg={7} className=" h-100 white montaukF">
                    <h1 className="card-title fugazTitle ">Our Catering Services</h1>
                
                <p>Morbi tempus iaculis urna id. Aenean pharetra magna ac placerat. Mi proin sed libero enim sed faucibus turpis in. Et ultrices neque ornare aenean euismod. Quisque sagittis purus sit amet. Ultricies tristique nulla aliquet enim tortor at auctor urna. Purus faucibus ornare suspendisse sed. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Sed cras ornare arcu dui vivamus arcu felis. Consectetur lorem donec massa sapien faucibus et molestie ac. Cum sociis natoque penatibus et magnis dis parturient. Ut faucibus pulvinar elementum integer enim. Vel risus commodo viverra maecenas accumsan. Nec dui nunc mattis enim ut. </p>
            <p>Posuere lorem ipsum dolor sit amet. Sed odio morbi quis commodo odio aenean. Tortor posuere ac ut consequat semper viverra nam libero. Tellus elementum sagittis vitae et leo duis ut. Egestas quis ipsum suspendisse ultrices gravida. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Tristique senectus et netus et. Dolor sit amet consectetur adipiscing elit ut aliquam. Erat nam at lectus urna duis convallis convallis tellus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices.</p>

                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col sm={12} lg={4} className="my-3 d-flex justify-content-center">
                    <img src={catering1} alt=""  width="105%" height="90%"></img>
                    </Col>
                    <Col sm={12} lg={4} className="my-3 d-flex justify-content-center">
                    <img src={catering2} alt=""  width="105%" height="90%"></img>
                    </Col>
                    <Col sm={12} lg={4} className="my-3 d-flex justify-content-center">
                    <img src={catering3} alt=""  width="105%" height="90%"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}