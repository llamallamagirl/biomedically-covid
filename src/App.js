// @flow

import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { Col, Container, Row } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Intervention from "./components/Intervention";
import { interventions } from "./data";

library.add(faCheck, faMinus, faTimes);

const App = () => {
  return (
    <Container>
      <Header />
      <Row>
        {interventions.map((i) => (
          <Col key={i.id} sm={6}>
            <Intervention {...i} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
