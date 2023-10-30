import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";
// The maxWidth prop accepts an integer and sets the max-width in px with that integer.
// The different break points of each use was causing additional white space between the
// text and the arrow.
const ReadMoreAnchor = ({ href, to, children, className, maxWidth = 403 }) => {
  let aProps = {}
  if (to) {
    aProps = { to, as: Link }
  }
  if (href) {
    aProps = { href };
  }
  return (
    <div className={className}>
      <StyledDiv maxwidth={maxWidth}>
        <AnchorLink {...aProps}>
          <span className="children">{children}</span>
          <img src="/images/icons/readmore-icon.svg" alt="Read more icon." />
          <img className="hover" src="/images/icons/readmore-icon-hover.svg" alt="Read more icon." />
        </AnchorLink>
      </StyledDiv>
    </div>
  );
};

export default ReadMoreAnchor;

const StyledDiv = styled.div`
  a {
    color: #000000;
    position: relative;
    display: flex;
    font-size: 16px;
    font-family: Nunito;
    max-width: 310px;
    @media (min-width: 768px) {
      font-size: 18px;
      max-width: ${props => props.maxwidth}px;
    }
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border-left: 3px solid #ff7f51;
    &:hover,
    &:focus {
      text-decoration: none;
    }
    .hover {
      display: none;
    }
    &:hover {
      img {
        display: none;
        &.hover {
          display: inline;
        }
      }
    }
    .children {
      margin-left: 16px;
      margin-right: 10px;
      font-weight: bold;
      @media (min-width: 768px) {
        margin-right: 24px;
      }
    }
    img {
      width: 32px;
      height: auto;
      @media (min-width: 768px) {
        width: 40px;
      }
    }
  }
`;
