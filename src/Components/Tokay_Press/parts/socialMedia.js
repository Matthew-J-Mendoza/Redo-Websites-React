import { Container, Row, Col } from 'react-bootstrap'




export const SocialMedia =(Props)=>{
    return(
        <Row>
                        <Col>
                        <a className="TP-a" href={Props.href}>
                            <h2 className="Tp-h2"><img src={Props.logo} alt={Props.alt} width="72px" className="px-3" /><br class="d-block d-sm-none"/>{Props.username}</h2>
                        </a>
                        </Col>
                    </Row>
    )
}