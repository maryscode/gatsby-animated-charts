import React, { useRef } from "react";
import styled from "styled-components";
import Modals from "../Modals";
import { CSS } from "../Theme";
import chevronRight from "../../images/chevron-down-arrow-burnt-brick.svg";
import chevronRightHover from "../../images/chevron-down-arrow-blazing-rose.svg";

/**
 * Component definition
 */
export const ExternalLink = ({ children, href, className, isTrusted = false, tabIndex }) => {
  let Leaving = isTrusted ? Modals.LeavingTrusted : Modals.Leaving;
  const linkRef = useRef(null);
  return (
    <Leaving linkRef={linkRef}>
      <ExternalLinkStyles
        ref={linkRef}
        aria-label="External link that first opens a confirmation modal. Then opens external URL in a new tab."
        tabIndex={tabIndex}
        target="_blank"
        rel="noreferrer"
        href={href}
        className={className}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </ExternalLinkStyles>
    </Leaving>
  );
};

const ExternalLinkStyles = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  text-decoration: underline;
  &.arrow {
    display: flex;
    margin-bottom: 20px;
    margin: 0 auto 20px;
    transition: all 0.3s ease-in-out;
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 36px;
    }
    &:after {
      content: "";
      display: inline-block;
      width: 16px;
      height: 10px;
      background: url(${chevronRight}) no-repeat;
      margin-left: 12px;
      transition: all 0.3s ease-in-out;
      transform: rotate(-90deg);
    }
  }
  color: ${CSS.COLORS.burnBrick};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    &:after {
      margin-left: 20px;
      background: url(${chevronRightHover}) no-repeat;
    }
  }
  @media (min-width: 768px) {
    margin-left: 0;
    &.arrow {
      &:nth-last-of-type(1) {
        margin-bottom: 36px;
      }
    }
  }
`;
