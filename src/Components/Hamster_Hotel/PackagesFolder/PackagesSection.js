import { Container, Row, Col } from 'react-bootstrap';
import {PackageDetail} from './details'
import wedding from '../../../images/hhImages/hamsterwedding.jpg'
import spring from '../../../images/hhImages/hamsterspring.jpg'
import cheese from '../../../images/hhImages/hamstercheese.jpg'
import {IMG} from '../../Shared/img'
export const PackagesSection =()=>{
    return(
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="text-center my-5">Packages</h2>
                    </Col>
                    <Col lg={6}>
                    <IMG src={wedding} className="package-img" alt="Beach-Package"/>
                    </Col>
                    <Col lg={6}>
                    <PackageDetail title="Beach Wedding Package" price="Starting US $1,500.00" desc='Feel the warmth of the beach as the flames in your hearts ignite during our romantic beach side wedding. All wedding packages include catering, an open bar, and one tier wedding cake (9\" Vanilla standard cake). A private dinner for your closets family members and friends will be provided after the ceremony.'/>
                    </Col>
                </Row>

                <Row>

                    <Col lg={6} xs={{order: "last"}} lg={{order: "first"}}>
                    <PackageDetail title="Full Bloom Package" price="Starting US $1,000.00" desc="Enjoy the shade of our cherry trees as you join us during our spring time celebration. We invite you to our orchards for cherry, strawberry, and apple picking that is open all day. We end each evening with fresh, vegetable centric dinners along with a live show from local musicians."/>
                    </Col>

                    <Col lg={6} >
                    <IMG src={spring} className="package-img" alt="Full-Bloom-Package"/>
                    </Col>
                </Row>

                <Row>

                    <Col lg={6}>
                    <IMG src={cheese} alt="Chease-Package" className="package-img"/>
                    </Col>
                    <Col lg={6}>
                    <PackageDetail title="Chease and Seed Tour Package" price="Starting US $1,200.00" desc="Immerse yourself in the flavors of Cavia with our Cheese and Seed tour. We
                    consulted with
                    connoisseurs from around the globe to bring you the best flavors that nature has to offer, and
                    create our cheeses right here at our local creamery. Cheese and seeds are served all day and nightly
                    spa treatment is provided after dinner."/>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}