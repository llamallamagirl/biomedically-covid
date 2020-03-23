// @flow

import React from "react";
import { ListGroup, Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron className="mt-4">
      <h1>Corona Virus 2019 Investigational Therapies</h1>
      <p>
        An infectious disease caused by the SARS-CoV-2. Common symptoms include
        fever, cough, and shortness of breath. The majority of cases are mild
        but some progress to severe respiratory distress and death.
      </p>
      <ListGroup horizontal>
        <ListGroup.Item>
          <a href="https://coronavirus.jhu.edu/map.html">Dashboard</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">
            Wikipedia
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  );
};

export default Header;
