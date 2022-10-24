import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Parts/Header/Header";
import Footer from "../Parts/Footer/Footer";

const Main = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>1 of 1</Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Main;
