// @flow

import React from "react";
import { Container, Table } from "react-bootstrap";

import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Intervention from "./components/Intervention";
import { interventions } from "./data";

const Home = ({ history, match }) => {
  const ccId = parseInt(match.params.ccId);
  return (
    <Container style={{ minHeight: "1000px" }}>
      <Header />
      <FilterBar selected={ccId} goTo={history.push} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Treatment</th>
            <th className="text-center">MoA</th>
            <th className="text-center text-nowrap">In Vitro</th>
            <th className="text-center text-nowrap">In Vivo</th>
            <th className="text-center">Human</th>
          </tr>
        </thead>
        <tbody>
          {interventions
            .filter((i) => i.stages.includes(ccId) || ccId === 0)
            .map((i) => (
              <Intervention key={i.id} {...i} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
