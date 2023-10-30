import React from "react";
import styled from "styled-components";

/*
PARAMETERS:
lineWidth can be an array, mobile and desktop pixel values:
  example: lineWidth={["40px", "400px"]} 
  or a string, "short" or "regular"
*/
const H1 = ({ icon, children, className, lineWidth="regular", alt, as }) => {
  return (
    <StlyedH1 as={as} className={`flex flex-col lg:flex-row ${className && className} ${!icon && '!pt-0'}`} lineWidth={lineWidth} >
      {icon && <img src={icon} alt={alt} />}
      <span>{children}</span>
    </StlyedH1>
  );
};

export default H1;

// make a styled component named Div
const StlyedH1 = styled.h1`
  font-family: 'Nunito';
  font-weight: bold;
  color: #6f0013;
  width: 100%;
  margin: 0 0 24px;
  padding-bottom: 8px;
  font-size: 26px;
  line-height: 1.27;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;

    padding-top: 2.5rem;
  }

  
  span {
    display: inline-block;
    &::after {
      content: "";
      display: block;
      margin-left: 0;
      margin-right: auto;
      margin-top: 12px;
      border: none;
      background-color: #ff724d;
      height: 3px;
      
      width: ${props => getWidth(props.lineWidth, true)};
      border-radius: 3px;
      @media (min-width: 768px) {
        margin-top: 18px;
        width: ${props => getWidth(props.lineWidth, false)};
      }
    }
  }
  img {
    width: 72px;
    height: 72px;
    @media (min-width: 1140px) {
      margin-right: 16px;
      position: absolute;
      transform: translate(-88px, -3px);  
    }
  }
`;

const getWidth = (width, mobile=true) => {
  if (typeof width === "object") {
    if (mobile)
      return width[0];
    else
      return width[1];
  } else {    
    
    if (mobile) {
      if (width === "short")
        return "72px";
      else if (width === "regular")
        return "111px";
    } else {        
      if (width === "short")
        return "72px";
      else if (width === "regular")
        return "255px";
    }
  }
}