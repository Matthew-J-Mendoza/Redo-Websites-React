import { Col, Card, Row } from "react-bootstrap"
import { MenuData } from "../Data/MenuItems"



export const MenuCardsGen = Object.entries(MenuData).map((MenuList, i) => {
    const Items = Object.entries(MenuList[1].Items).map((item, i) => {
        return (
            <>
                <Col key={`Item:${i}`} sm={10}>
                    <h2 className="montaukRegFont">{item[1].name}</h2>
                    <p className="montaukRegFont">{item[1].desc}</p>
                </Col>
                <Col lg={12} xl={2} className="mt-1">
                <h3 className="montaukRegFont">{item[1].price}</h3>
                </Col>
                <Col lg={12}>
                    <hr className="PR-hr"/>
                </Col>
            </>
        )
    })


    return (
        <Col key={`Menu:${i}`} sm={12} lg={6} className="mb-4">
            <Card className="h-100">
                <Card.Img variant="top" src={MenuList[1].Image} />
                <Card.Body>
                    <Row>
                        <Col sm={12}>
                            <Card.Title className="fugazeRegFont">{MenuList[1].Heading}</Card.Title>
                            <Card.Text className="montaukRegFont">
                                {MenuList[1].Subheading}
                        <Row className="mt-4">
                        {Items}
                        </Row>
                            </Card.Text>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
})

