// @flow

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/pro-light-svg-icons";

import { EvidenceType } from "../data";

const getColor = (icon) =>
  !icon || icon === "minus"
    ? "text-light"
    : icon === "times"
    ? "text-danger"
    : "text-secondary";

const Icon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      className={getColor(icon)}
      icon={["fal", icon || "signal-slash"]}
      size="lg"
    />
  );
};

export const EvidenceTypeRow = (props: EvidenceType) => {
  const { evidence, name } = props;
  return (evidence || []).map(({ certaintyIcon, icon, url, title }) => (
    <tr>
      <td className="text-center align-middle">
        <Icon icon={icon} />
      </td>
      <td className="text-center align-middle">
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon
            className="text-light"
            icon={["fal", "signal"]}
            size="lg"
          />
          <Icon icon={certaintyIcon} />
        </span>
      </td>
      <td className="text-nowrap align-middle">{name}</td>
      <td>{title}</td>
      <td className="text-center align-middle">
        <a href={url}>
          <FontAwesomeIcon icon={faExternalLink} size="lg" />
        </a>
      </td>
    </tr>
  ));
};
