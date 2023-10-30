import React from "react";
import styled from "styled-components";

const Footnote = ({ children, symbol }) => {
  return (
    <StyledDiv className="footnote">
      <span className="symbol">{symbol}</span>
      <p className="mb-0">{children}</p>
    </StyledDiv>
  );
};

export default Footnote;

const StyledDiv = styled.div`
  position: relative;
  font-size: 14px;
  margin-bottom: 15px;
  .symbol {
    position: absolute;
    top: 0;
    left: -0.5em;
  }
`;
