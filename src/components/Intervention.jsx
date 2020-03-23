// @flow

import React from "react";
import { Card } from "react-bootstrap";

import { EvidenceTypeBadge } from "./EvidenceTypeWidgets";
import InterventionDetail from "./InterventionDetail";
import { EvidenceTypes } from "../data";

type InterventionProps = {
  description: string,
  evidenceTypes: EvidenceTypes,
  name: string,
};

const Intervention = (props: InterventionProps) => {
  const { description, evidenceTypes, name } = props;
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>
          {name} <InterventionDetail {...props} />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        {Object.entries(evidenceTypes).map(([key, value]) => (
          <EvidenceTypeBadge {...value} key={key} />
        ))}
      </Card.Footer>
    </Card>
  );
};

export default Intervention;
