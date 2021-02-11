
import { Row, Form, Col, Button } from "react-bootstrap"






export const EmailForms = () => {
    return (
        <Form>
            <Row>
                <Form.Group controlId="NameInput" className="col-12 col-md-6">
                    <Form.Label className="sr-only">Your Full Name</Form.Label>
                    <Form.Control type="type" placeholder="Your Full Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col-12 col-md-6">
                    <Form.Label className="sr-only">Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            </Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="sr-only">Tell us more about your project!</Form.Label>
                    <Form.Control as="textarea" rows={7} placeholder="Tell us more about your project!" />
                </Form.Group>
                <Row>
                    <Col className="d-flex justify-content-end">
                    <Button variant="primary" id="messageBtn" className="btn btn-brightblue TP-btn"><i class="far fa-envelope pr-1"></i><b>SEND MESSAGE</b></Button>
                    </Col>
                </Row>
        </Form>
    )
}