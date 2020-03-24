// @flow

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InterventionDetail from "./InterventionDetail";
import { EvidenceTypes } from "../data";

type InterventionProps = {
  description: string,
  evidenceTypes: EvidenceTypes,
  name: string,
};

const Intervention = (props: InterventionProps) => {
  const { description, evidenceTypes, name } = props;
  const [show, setShow] = useState(false);

  return (
    <tr onClick={() => setShow(!show)}>
      <td>
        <h5 className="mb-0">
          {name} <InterventionDetail {...props} setShow={setShow} show={show} />
        </h5>
        <small>{description}</small>
      </td>
      {Object.entries(evidenceTypes).map(([key, value]) => (
        <td className="text-center align-middle" key={key}>
          {value.icon && (
            <FontAwesomeIcon icon={["fal", value.icon]} size="lg" />
          )}
        </td>
      ))}
    </tr>
  );
};

export default Intervention;
