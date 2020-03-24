// @flow

import React from "react";
import { Col, Row } from "react-bootstrap";
import { interventionTypes } from "../data";

type ClinicalCourseProps = {
  goTo: func,
  selected: number,
};

const isSelected = (selected, c) => selected === c.id;

const ClinicalCourse = (props: ClinicalCourseProps) => {
  const { goTo, selected } = props;
  return (
    <Row className="pb-4 mx-0">
      {interventionTypes.map((c) => (
        <Col
          className={`py-2 border bg-${
            isSelected(selected, c) ? "primary" : "secondary"
          }`}
          key={c.id}
          onClick={() => goTo(`/${c.id}`)}
          sm={isSelected(selected, c) ? 6 : 2}
        >
          <h6 className="text-white mb-0">{c.name}</h6>
          {isSelected(selected, c) && <small>{c.description}</small>}
        </Col>
      ))}
    </Row>
  );
};

export default ClinicalCourse;
