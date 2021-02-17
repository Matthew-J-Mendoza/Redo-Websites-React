import { Form } from 'react-bootstrap';



export const ReserveInput = (Props) => {
    return (
        <div>
            <Form.Group controlId={Props.label} >
                <Form.Label>{Props.label}</Form.Label>
                <Form.Control className="reserve-input" placeholder="" />
            </Form.Group>
        </div>
    )
}