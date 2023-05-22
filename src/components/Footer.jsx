import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const gotoEmailForm = () => {
    navigate(`/email`);
  };

  return (
    <Container fluid className="footer-food">
      <Row>
        <Col sm={12} className="d-flex justify-content-center">
          <button onClick={gotoEmailForm}>
            <i className="bi bi-envelope-at"></i> Email{" "}
          </button>
        </Col>
        <Col sm={12}>
          <p className="text-center">&copy;Veronica De Felice {currentYear}</p>
        </Col>
      </Row>
    </Container>
  );
}
