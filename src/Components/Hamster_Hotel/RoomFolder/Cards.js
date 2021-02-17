import {Card, Button } from 'react-bootstrap';




export const RoomCard = (Props) => {
    return (
        <div className="d-flex justify-content-center mt-4 ">
            <Card style={{ width: '26rem' }} className="CardSizeMatch">
                <Card.Img variant="top" src={Props.img} alt='Room-Card-Img' />
                <Card.Body className="">
                    <h2 className=" Dosis">{Props.data.title}</h2>
                    <p className=""><b>{Props.data.dimension}</b></p>
                    <Card.Text>
                        {Props.data.list.map(thing=>{
                            return <p className="card-text">{thing}</p>
                        })}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="room-card-footer">
                    <Button variant="primary" className="room-card-btn" ><b>Reserve</b></Button>

                </Card.Footer>
            </Card>
        </div>
    )
}