import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Parts/Header/Header";
import Footer from "../Parts/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Main;
