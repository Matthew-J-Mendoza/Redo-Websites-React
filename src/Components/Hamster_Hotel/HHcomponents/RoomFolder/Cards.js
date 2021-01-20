import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//Temp 



export const RoomCard = (Props) => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={Props.img} />
                <Card.Body>
                    <h2 className="card-title Dosis">{Props.data.title}</h2>
                    <p className="card-text"><b>{Props.data.dimension}</b></p>
                    <Card.Text>
                        {Props.data.list.map(thing=>{
                            return <p className="card-text">{thing}</p>
                        })}
                    </Card.Text>
                    <Button variant="primary" className={Props.align} ><b>Reserve</b></Button>
                </Card.Body>
            </Card>
        </div>
    )
}