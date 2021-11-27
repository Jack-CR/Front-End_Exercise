import React from "react";
import { Row, Col } from "react-bootstrap";

export const FooterComponent = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <Row className="bg bg-warning mt-3 rounded">
        <Col>
          <label>Yacdany Arguedas Mora ©{date}</label>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;
