import React from "react";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";

/**
 * Component definition
 */
export const Survey = ({ className, useForm, required }) => {
  return (
    <CheckboxStyles
      name="topics"
      value={[
        "Disease background",
        "Exacerbation burden",
        "Patient management",
        "Pathophysiology",
        "Disease management",
        "Expert commentary",
        "Developments and research",
      ]}
      className={className}
      useForm={useForm}
      required={required}
    >
      <p className="bold">
        Of the following topics in bronchiectasis, which would be most
        interesting or helpful to you?{" "}
        <span className="regular">(Select all that apply)</span>
      </p>
    </CheckboxStyles>
  );
};

const CheckboxStyles = styled(Checkbox)`
  &.survey-section {
    margin: 0 -19px 36px !important;
    padding: 36px 19px 16px 19px;
    @media (min-width: 768px) {
      margin: 0 -36px 36px !important;
      padding: 36px 36px 16px 36px;
    }
    background: #ebebeb;
  }
`;
