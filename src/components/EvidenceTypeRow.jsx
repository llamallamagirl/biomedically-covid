// @flow

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EvidenceType } from "../data";

const EvidenceTypeRow = (props: EvidenceType) => {
  const { icon, name } = props;
  return (
    <div className="badge badge-light mr-1">
      {name}{" "}
      <FontAwesomeIcon icon={icon} size="xs" style={{ height: "unset" }} />
    </div>
  );
};

export default EvidenceTypeRow;
