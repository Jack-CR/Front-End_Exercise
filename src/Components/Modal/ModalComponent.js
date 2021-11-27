import React, { useState } from 'react'
import {
  Button,
  Modal,
  Row,
  Col,
  Container,
  ListGroup
} from 'react-bootstrap'

export const ModalComponent = ({ pokemon }) => {
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
          <Modal.Title>
            <h2>{pokemon.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <h2>Stadistics</h2>
              <Col xs={12} md={8}>

                {
                  pokemon.stats.map((el) => {
                    return (
                      <ListGroup variant="flush">
                        <ListGroup.Item action variant="light">{el.stat.name}</ListGroup.Item>
                      </ListGroup>
                    )
                  })
                }
              </Col>
              <Col xs={6} md={4}>
                {
                  pokemon.stats.map((el) => {
                    return (
                      <ListGroup variant="flush">
                        <ListGroup.Item action variant="light">{el.base_stat}</ListGroup.Item>
                      </ListGroup>
                    )
                  })
                }
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <img src={pokemon.sprites.back_default} alt={pokemon.name}></img>
              </Col>
              <Col xs={6} md={4}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
              </Col>
              <Col xs={6} md={4}>
                  <h3>Abilities</h3>
                  {
                  pokemon.abilities.map((el) => {
                    return (
                      <ListGroup variant="flush">
                        <ListGroup.Item action variant="light">{el.ability.name}</ListGroup.Item>
                      </ListGroup>
                    )
                  })
                }
              </Col>
            </Row>
          </Container>

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