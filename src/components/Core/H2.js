import React from "react";
import styled from "styled-components";

const H2 = ({ children, className, underline=true, lineWidth="regular", linePosition="left", as }) => {
  return (
    <StlyedH2 as={as} underline={underline} className={`${className && className}`} lineWidth={lineWidth} linePosition={linePosition} >
      <span>{children}</span>
    </StlyedH2>
  );
};

export default H2;

// make a styled component named Div
const StlyedH2 = styled.h2`
  font-family: 'Nunito';
  margin: 0 0 12px;
  font-weight: 800;
  color: #750010;
  padding-bottom: 18px;
  font-size: 22px;
  line-height: 1.27;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    flex-direction: row;
  }
  
  span {
    display: inline;
    &::after {
      content: "";
      display: ${props => props.underline ? 'block' : `none`};
      margin-left: ${(props) => {
          let linePosition = props.linePosition === "center" ? "auto" : "0";
          return linePosition;
        }};
      margin-right: auto;
      margin-top: 12px;
      border: none;
      background-color: #ff724d;
      height: 3px;
      width: 111px;
      @media (min-width: 768px) {
        width: ${(props) => {
          let lineWidth = !isNaN(props.lineWidth) && parseInt(Number(props.lineWidth)) == props.lineWidth && !isNaN(parseInt(props.lineWidth, 10)) ? props.lineWidth + "px" : "255px";
          lineWidth = props.lineWidth === "short" ? "72px" : lineWidth;
          return lineWidth;
        }};
      }
      border-radius: 3px;
    }
  }
`;
