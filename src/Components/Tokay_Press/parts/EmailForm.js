
import { Row, Form, Col } from "react-bootstrap"

import React from 'react'




export class EmailForms extends React.Component{
    
    Submit(){
        console.log('asdfas')
        let messageBtn = document.getElementById("messageBtn");
let inputName = document.getElementById('NameInput');
let inputEmail = document.getElementById('formBasicEmail');
let inputMessage = document.getElementById('exampleForm.ControlTextarea1');

if (inputName.value != "" && inputEmail.value !="" && inputEmail.value!= ""){
    messageBtn.classList.add('messageSent');
    messageBtn.innerText = "MESSAGE SENT";
    alert("Thank you, "+ inputName.value+"! We will contact you soon at the email you provided: ("+inputEmail.value+").");
  
    messageBtn.innerHTML = '<b>MESSAGE SENT! </b><i class="far fa-paper-plane pl-1"></i>';
 } else{
    alert("Uh oh! Please fill out all fields before sending.");
 }
    }


    render(){
        return (
            <Form>
                <Row>
                    <Form.Group required controlId="NameInput" className="col-12 col-md-6">
                        <Form.Label className="sr-only">Your Full Name</Form.Label>
                        <Form.Control type="type" placeholder="Your Full Name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group required controlId="formBasicEmail" className="col-12 col-md-6">
                        <Form.Label className="sr-only">Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Row>
                    <Form.Group required controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="sr-only">Tell us more about your project!</Form.Label>
                        <Form.Control as="textarea" rows={7} placeholder="Tell us more about your project!" />
                    </Form.Group>
                    <Row>
                        <Col className="d-flex justify-content-end">
                        <button onClick={this.Submit} type="button" id="messageBtn" className="btn btn-brightblue TP-btn"><i class="far fa-envelope pr-1"></i><b>SEND MESSAGE</b></button>
                        </Col>
                    </Row>
            </Form>
        )
    }
}