// @flow

import React from "react";
import { Accordion, Badge, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EvidenceType } from "../data";

export const EvidenceTypeRow = (props: EvidenceType) => {
  const { eventKey, evidence, icon, name } = props;
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
        {name} ({(evidence || []).length})
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          {(evidence || []).map(({ url, title }) => (
            <div>
              <FontAwesomeIcon className="mr-2" icon={icon} size="md" />
              <a href={url}>{title}</a>
            </div>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export const EvidenceTypeBadge = (props: EvidenceType) => {
  const { icon, name } = props;
  return (
    <Badge className="mr-1" variant="secondary">
      {name}{" "}
      <FontAwesomeIcon icon={icon} size="xs" style={{ height: "unset" }} />
    </Badge>
  );
};
