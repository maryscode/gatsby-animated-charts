import React from "react";
import styled from "styled-components";
import { CSS } from "../Theme";

const H4 = ({ children, className, as }) => {
  return (
    <StlyedH4 as={as} className={`h4-component ${className && className}`}>
      <span>{children}</span>
    </StlyedH4>
  );
};

export default H4;

// make a styled component named Div
const StlyedH4 = styled.h4`
  &.h4-component {
    font-family: Nunito;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.38;
    color: ${CSS.COLORS.blazingRose};
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.22;
    }
  }
`;
