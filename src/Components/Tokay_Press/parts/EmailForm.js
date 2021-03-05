
import { Row, Form, Col } from "react-bootstrap"

import React from 'react'




export class EmailForms extends React.Component{
    constructor(props){
        super(props)
        this.state={
            messeageSent: false,
            EamilValue: '',
            NameValue: '',
            MessageValue: '',
            Name: React.createRef(),
            Email: React.createRef(),
            Message: React.createRef(),
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
      }
      handleNameChange(event) {
          this.setState({NameValue: event.target.value});
          
        }
        handleEmailChange(event) {
            this.setState({EamilValue: event.target.value});
            
        }
        handleMessageChange(event) {
            this.setState({MessageValue: event.target.value});
            
        }
        
        Submit=()=>{
            if (this.state.Name.current.value != "" && this.state.Email.current.value !="" && this.state.Message.current.value!= ""){
                alert("Thank you, "+ this.state.Name.current.value+"! We will contact you soon at the email you provided: ("+this.state.Email.current.value+").")
                this.setState({
                    messeageSent: true,
                    EamilValue: "",
                    NameValue: "",
                    MessageValue: "",
                })
            }else{
                alert("Uh oh! Please fill out all fields before sending.");
            }
            
        }

    render(){
        return (
            <Form>
                <Row>
                    <Form.Group required controlId="NameInput" className="col-12 col-md-6">
                        <Form.Label className="sr-only">Your Full Name</Form.Label>
                        <Form.Control type="type" placeholder="Your Full Name" value={this.state.NameValue} onChange={this.handleNameChange} ref={this.state.Name} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group required controlId="formBasicEmail" className="col-12 col-md-6">
                        <Form.Label className="sr-only">Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" value={this.state.EamilValue} onChange={this.handleEmailChange}  ref={this.state.Email}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Row>
                    <Form.Group required controlId="ControlTextarea1">
                        <Form.Label className="sr-only">Tell us more about your project!</Form.Label>
                        <Form.Control as="textarea" rows={7} placeholder="Tell us more about your project!" value={this.state.MessageValue} onChange={this.handleMessageChange} ref={this.state.Message}/>
                    </Form.Group>
                    <Row>
                        <Col className="d-flex justify-content-end">
                        <button onClick={this.Submit} type="button" id="messageBtn" className={`btn btn-brightblue TP-btn ${this.state.messeageSent === true? "messageSent" : ""}`}><b>{this.state.messeageSent === false ? 'SEND MESSAGE' : "MESSAGE SENT!"}</b><i className={`far fa-${this.state.messeageSent === true ? "paper-plane" : "envelope"} pl-1`}></i></button>
                        
                        </Col>
                    </Row>                           
            </Form>
        )
    }
    // {this.messeageSent === true ? <div> <b>MESSAGE SENT! </b><i class="far fa-paper-plane pl-1"></i></div>: <div><i className="far fa-envelope pr-1"></i><b>SEND MESSAGE</b></div>} 
}