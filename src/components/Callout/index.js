import React from "react";
import styled from "styled-components";
import { CSS } from "../Theme";
const Callout = ({ label, children, className }) => {
  return (
    <StyledCallout className={`callout${label ? " has-label" : ""} ${className ? className : ""} p-5 lg:px-9 lg:py-6`}>
      {label && <h2>{label}</h2>}
      <p>{children}</p>
    </StyledCallout>
  );
};

export default Callout;

const StyledCallout = styled.div`
  /* hack carry over from Theme */
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 2.75rem;
  }

  h1,
  h2 {
    color: ${CSS.COLORS.burnBrick};
  }
  h1 {
    font-size: 32px;
    @media (min-width: 768px) {
      font-size: 40px;
    }
    font-weight: bold;
    line-height: 1.1;
    color: #6f0013;
    width: 100%;
    margin: 0 0 24px;
  }
  h2 {
    margin: 0 0 12px;
    width: 100%;
    font-size: 26px;
    font-weight: 800;
    line-height: 1.31;
    color: #750010;
  }

  &.callout {
    border-radius: 8px;
    background-image: linear-gradient(rgb(235, 194, 164) 15%, rgb(247, 223, 164) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 50px;
    display: block;
    width: fit-content;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 70px;
      width: 18%;
    }
    font-weight: bold;
    margin: 0;
    sup {
      font-size: 60%;
      top: -20px;
    }
  }

  p {
    width: 100%;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-family: Nunito;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    font-weight: bold;
    line-height: 1.13;
    text-align: left;
    color: #000000;
  }
  &.has-label {
    p {
      width: 81%;
      padding: 0 0 0 18px;
      @media (min-width: 768px) {
        padding: 0 0 0 30px;
        width: 80%;
      }
    }
  }
`;
