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

const InterventionDetail = (props: InterventionDetailProps) => {
  const { description, evidenceTypes, name, setShow, show } = props;
  const ets = Object.entries(evidenceTypes).map(([key, value]) => (
    <EvidenceTypeRow {...value} key={key} />
  ));
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
            <Table>
              <thead>
                <tr>
                  <th className="text-center">Efficacy</th>
                  <th className="text-center">Confidence</th>
                  <th>Type</th>
                  <th>Study</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>{ets}</tbody>
            </Table>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};

export default InterventionDetail;
