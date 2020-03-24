// @flow

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Modal, Table } from "react-bootstrap";

import { EvidenceTypeRow } from "./EvidenceTypeWidgets";

type InterventionDetailProps = {
  description: string,
  evidenceTypes: EvidenceTypes,
  name: string,
  setShow: func,
  show: boolean,
};

const EvidenceTable = ({ rows }) =>
  rows.filter((r) => r || r.length > 1).length > 1 ? (
    <Table>
      <thead>
        <tr>
          <th className="text-center">Efficacy</th>
          <th className="text-center">Confidence</th>
          <th className="text-center">Type</th>
          <th>Study</th>
          <th className="text-center">Link</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  ) : null;

const InterventionDetail = (props: InterventionDetailProps) => {
  const { description, evidenceTypes, name, setShow, show } = props;
  const rows = Object.values(evidenceTypes).some(
    ({ evidence }) => evidence && evidence.length > 0
  )
    ? Object.entries(evidenceTypes).map(([key, value]) => (
        <EvidenceTypeRow {...value} key={key} />
      ))
    : [];
  return (
    <>
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
            className="text-light"
            icon={["fal", "times"]}
            size="3x"
          />
        </Button>
        <Container className="pb-5">
          <Modal.Body>
            <h2>{name}</h2>
            <p>{description}</p>
            <EvidenceTable rows={rows} />
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};

export default InterventionDetail;
