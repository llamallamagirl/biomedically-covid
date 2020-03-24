// @flow

import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheck,
  faCircle,
  faMinus,
  faQuestionCircle,
  faSignal1,
  faSignal2,
  faSignal3,
  faSignal4,
  faSignal,
  faSignalSlash,
  faTimes,
} from "@fortawesome/pro-light-svg-icons";

import "./App.scss";
import Home from "./Home";

library.add(
  faCheck,
  faCircle,
  faMinus,
  faQuestionCircle,
  faSignal1,
  faSignal2,
  faSignal3,
  faSignal4,
  faSignal,
  faSignalSlash,
  faTimes
);

const App = () => {
  return (
    <Container style={{ minHeight: "1000px" }}>
      <Router>
        <Route path="/:ccId" component={Home} />
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>
      </Router>
    </Container>
  );
};

export default App;
