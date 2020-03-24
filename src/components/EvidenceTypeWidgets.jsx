// @flow

import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EvidenceType } from "../data";

export const EvidenceTypeRow = (props: EvidenceType) => {
  const { evidence, name } = props;
  return (evidence || []).map(({ certaintyIcon, icon, url, title }) => (
    <tr>
      <td className="text-center">
        <FontAwesomeIcon
          className="text-primary"
          icon={["fal", icon]}
          size="lg"
        />
      </td>
      <td className="text-center">
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon
            className="text-light"
            icon={["fal", "signal"]}
            size="lg"
          />
          <FontAwesomeIcon
            className="text-primary"
            icon={["fal", certaintyIcon || "signal-slash"]}
            size="lg"
          />
        </span>
      </td>
      <td>{name}</td>
      <td>
        <a href={url}>{title}</a>
      </td>
    </tr>
  ));
};

export const EvidenceTypeBadge = (props: EvidenceType) => {
  const { icon, name } = props;
  return icon ? (
    <Badge className="mr-1" variant="secondary">
      {name}{" "}
      <FontAwesomeIcon
        icon={["fal", icon]}
        size="xs"
        style={{ height: "unset" }}
      />
    </Badge>
  ) : null;
};
