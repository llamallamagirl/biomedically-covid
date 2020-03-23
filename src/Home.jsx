// @flow

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ClinicalCourse from "./components/ClinicalCourse";
import Header from "./components/Header";
import Intervention from "./components/Intervention";
import { interventions } from "./data";

const Home = ({ history, match }) => {
  const ccId = parseInt(match.params.ccId);
  return (
    <Container style={{ minHeight: "1000px" }}>
      <Header />
      <ClinicalCourse selected={ccId} goTo={history.push} />
      <Row>
        {interventions
          .filter((i) => i.stages.includes(ccId) || ccId === 0)
          .map((i) => (
            <Col className="pb-4" key={i.id} md={6} lg={4}>
              <Intervention {...i} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
