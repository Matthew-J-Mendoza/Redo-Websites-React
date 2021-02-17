import { Modal, Button, Row,Col } from 'react-bootstrap'
import React from 'react'
import {ModImages} from './ModalImages'



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
          <h2 className="Tp-h2">{props.Data.Title}</h2>
          <p>{props.Data.Date}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <ModImages ImgSet={props.Data.Images}/>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col xs={12} lg={9}>
          <hr className="Tp-hr"/>
          {props.Data.Long_Desc}
          </Col>
          <Col sx={12} lg={3} className='d-flex justify-content-end align-items-end'>
          <h4 onClick={props.onHide} className="CloseClass">CLOSE</h4>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export function App(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="light" className="shadow-sm TP-btn" onClick={() => setModalShow(true)}>
        CLICK TO EXPAND {'>'}
      </Button>

      <FeaturedModal Data={props.ModalData}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}