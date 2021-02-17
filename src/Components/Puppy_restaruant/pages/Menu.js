import { Container, Row} from 'react-bootstrap'
import {PRheader} from '../parts/Header'
import { MenuCardsGen } from "../parts/MenuCards";




export const MenuPage =()=>{
    return(
        <div className="indexFormat">
            <PRheader text="Our Menu" />
            <Container fluid>
                <Row>
                    {MenuCardsGen}
                </Row>
            </Container>
        </div>
    )
}