import React from "react";
import styled from "styled-components";

const H3 = ({ children, className, id, as }) => {
  return (
    <StlyedH3 as={as} id={id} className={`h3-component ${className && className}`}>
      <span>{children}</span>
    </StlyedH3>
  );
};

export default H3;

// make a styled component named Div
const StlyedH3 = styled.h3`
  &.h3-component {
    font-family: Nunito;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    color: #750010;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 1.1;
      flex-direction: row;
    }
  }
  /* span {
    display: inline;
    max-width: 776px;
    sup {
      font-size: 12px;
    }
  } */
`;
