import { Modal, Button, Row,Container,Col } from 'react-bootstrap'
import React from 'react'

import img from '../../../../images/TPimages/vet1.jpg'


export function FeaturedModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="Tp-h2">A Veteran's Day Shoutout</h2>
          <p>November 11, 2020</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='px-2 pb-2'>
        <Col className="px-0 pr-2" xs={10}>
        <div className="containerImg displayImg">
        <img src={img} className="ContainerIMG"/>
        
        </div>
        </Col>

        
        <Col xs={2} className='px-0'>
          <div className="rowImg">


          <Col xs={12} className="columnImg">
            <img src={img} className="imgSize"/>
          </Col>
          
          <Col xs={12} className="columnImg">
            <img src={img} className="imgSize"/>
          </Col>


          </div>
        </Col>


        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col xs={12} lg={9}>
          <hr className="Tp-hr"/>
                        <p>
                            Wishing everyone who has served our country a Happy Veteran's Day and a big thank you
                            especially to our very own Jon Peters, our pressman, who served in the Marines.  Take a look at some flyers we've designed for past Veteran's Day celebrations in Lincoln Center.
                        </p>
          
          </Col>
          <Col sx={12} lg={3} className='d-flex justify-content-end align-items-end'>
          <h4 onClick={props.onHide}>CLOSE</h4>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="light" className="shadow-sm TP-btn" onClick={() => setModalShow(true)}>
        CLICK TO EXPAND >
      </Button>

      <FeaturedModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}