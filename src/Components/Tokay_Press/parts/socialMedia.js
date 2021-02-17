import { Container, Row, Col } from 'react-bootstrap'
import {IMG} from '../../Shared/img'




export const SocialMedia =(Props)=>{
    return(
        <Row>
                        <Col>
                        <a className="TP-a" href={Props.href}>
                            <h2 className="Tp-h2"><IMG src={Props.logo} alt={Props.alt} width="72px" className="px-3" /><br class="d-block d-sm-none"/>{Props.username}</h2>
                        </a>
                        </Col>
                    </Row>
    )
}