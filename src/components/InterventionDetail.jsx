// @flow

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { faExpand, faTimes } from "@fortawesome/free-solid-svg-icons";

import { EvidenceTypeRow } from "./EvidenceTypeWidgets";
import { InterventionProps } from "./Intervention";

const InterventionDetail = (props: InterventionProps) => {
  const [show, setShow] = useState(false);
  const { description, evidenceTypes, name } = props;
  return (
    <>
      <Button
        className="px-0 pb-1 pt-0"
        variant="link"
        onClick={() => setShow(true)}
      >
        <FontAwesomeIcon icon={faExpand} size="sm" />
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w m-4"
      >
        <Button
          className="align-self-end"
          variant="link"
          onClick={() => setShow(false)}
        >
          <FontAwesomeIcon
            className="text-secondary"
            icon={faTimes}
            size="2x"
          />
        </Button>
        <Container className="pb-5">
          <Modal.Body>
            <h2>{name}</h2>
            <p>{description}</p>
            <Table>
              <thead>
                <tr>
                  <th className="text-center">Efficacy</th>
                  <th className="text-center">Confidence</th>
                  <th>Type</th>
                  <th>Study</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(evidenceTypes).map(([key, value]) => (
                  <EvidenceTypeRow {...value} eventKey={key} key={key} />
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};

export default InterventionDetail;
