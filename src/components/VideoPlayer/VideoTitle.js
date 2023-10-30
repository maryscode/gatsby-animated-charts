import React from "react";
import styled from "styled-components";

const VideoTitle = ({ children, as }) => {
  return (
    <StlyedH3 as={as} className="h3-component text-blazing-rose">
      {children}
    </StlyedH3>
  );
};

export default VideoTitle;

// make a styled component named Div
const StlyedH3 = styled.h3`
  &.h3-component {
    font-family: Nunito;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    /* padding-bottom: 1rem; */
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
