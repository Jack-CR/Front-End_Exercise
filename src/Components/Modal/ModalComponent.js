import React, { useState } from "react";
import { Button, Modal, Row, Col, Container, ListGroup } from "react-bootstrap";

export const ModalComponent = ({ pokemon }) => {
  /* If you open the modal with the button "Show" show state chante to true and close to false */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
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
                {/* Showing pokemon stats */}
                {pokemon.stats.map((el, key) => {
                  return (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item action variant="light" key={key}>
                        {el.stat.name}
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </Col>
              <Col xs={6} md={4}>
                {/* Showing Pokemon stadistics */}
                {pokemon.stats.map((el, key) => {
                  return (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item action variant="light">
                        {el.base_stat}
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <img
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                ></img>
              </Col>
              <Col xs={6} md={4}>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                ></img>
              </Col>
              <Col xs={6} md={4}>
                <h3>Abilities</h3>
                {/* Showing Pokemons abilitites */}
                {pokemon.abilities.map((el, key) => {
                  return (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item action variant="light">
                        {el.ability.name}
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
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
  );
};

export default ModalComponent;
