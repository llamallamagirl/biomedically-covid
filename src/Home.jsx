// @flow

import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Intervention from "./components/Intervention";
import { interventions } from "./data";

const sortTable = (a, b, sort) => {
  const aEt = (a.evidenceTypes[sort] || {}).evidence || [];
  const bEt = (b.evidenceTypes[sort] || {}).evidence || [];
  return !sort || sort === "name" || !aEt
    ? a.name.localeCompare(b.name)
    : aEt.length - bEt.length;
};

const useQuery = () => new URLSearchParams(useLocation().search);

const Home = ({ history, match }) => {
  const query = useQuery();
  const ccId = parseInt(match.params.ccId);
  const sort = query.get("sort");
  const reverse = query.get("reverse") === "true";

  return (
    <Container style={{ minHeight: "1000px" }}>
      <Header />
      <FilterBar selected={ccId} goTo={history.push} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th
              onClick={() =>
                history.push(`/${ccId}?sort=name&reverse=${!reverse}`)
              }
            >
              Treatment
            </th>
            <th
              className="text-center"
              onClick={() =>
                history.push(`/${ccId}?sort=MoA&reverse=${!reverse}`)
              }
            >
              MoA
            </th>
            <th
              className="text-center text-nowrap"
              onClick={() =>
                history.push(`/${ccId}?sort=InVitro&reverse=${!reverse}`)
              }
            >
              In Vitro
            </th>
            <th
              className="text-center text-nowrap"
              onClick={() =>
                history.push(`/${ccId}?sort=InVivo&reverse=${!reverse}`)
              }
            >
              In Vivo
            </th>
            <th
              className="text-center"
              onClick={() =>
                history.push(`/${ccId}?sort=Human&reverse=${!reverse}`)
              }
            >
              Human
            </th>
          </tr>
        </thead>
        <tbody>
          {interventions
            .filter((i) => i.stages.includes(ccId) || ccId === 0)
            .sort((a, b) =>
              reverse ? sortTable(b, a, sort) : sortTable(a, b, sort)
            )
            .map((i) => (
              <Intervention key={i.id} {...i} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
