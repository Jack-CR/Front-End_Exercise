import React, { useState } from 'react'
import {Button,Modal} from 'react-bootstrap'

export const ModalComponent = ({pokemon}) => {
    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
      <Button variant="primary" onClick={handleShow}>
            Show
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{pokemon.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={pokemon.avatar} alt={pokemon.name}></img>
           <h2>{pokemon.base_experience}</h2>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default ModalComponent