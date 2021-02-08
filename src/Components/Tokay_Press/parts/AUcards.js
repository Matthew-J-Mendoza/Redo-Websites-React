import { Container, Row, Col, Card, Button } from 'react-bootstrap'




export const AUcards = (props) => {
    return (
        
            <Card style={{ width: '25rem' }} className={`${props.cardType}-${props.bool === false && props.slidesOpen === true ? "opac" : props.bool === true && props.slidesOpen === true ? "selected" : "card"} text-center ${props.mobile}`}>
                <Card.Img variant="top" src={props.img} className="rounded-circle my-4 design-img" />
                <Card.Body>
                    <Card.Title className="mb-3 Tp-h1">{props.cardType[0].toUpperCase()+props.cardType.slice(1)}</Card.Title>
                    <Button onClick={props.btnFunction} variant="light" className={`${props.cardType}-btn TP-btn px-5 my-4 ${props.bool === true && props.slidesOpen === true ? "seeLess" : ""}`}>{props.bool === false ? `More About ${props.cardType[0].toUpperCase()+props.cardType.slice(1)}` : "See Less"}</Button>
                </Card.Body>
            </Card>
    )
}