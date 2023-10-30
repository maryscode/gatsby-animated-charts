import React from "react";
import styled from "styled-components";
import iconError from "../../images/icon-error.svg";

/**
 * Component definition
 */
export const FormError = ({ ...props }) => {
  return (
    props.errors[props.name] &&
    props.index === 0 && (
      <FormErrorStyle className="alert">
        <img src={iconError} alt="Error icon" /> {props.message}
      </FormErrorStyle>
    )
  );
};

/**
 * Component styles
 */
const FormErrorStyle = styled.span`
  &.alert {
    img {
      margin-right: 8px;
      width: 18px;
      height: 18px;
    }
    color: #b83b43;
    font-weight: bold;
    display: flex;
    flex-grow: 0;
    margin-top: 4px;
    width: 100%;
  }
`;
