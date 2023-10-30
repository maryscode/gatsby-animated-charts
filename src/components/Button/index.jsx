//
import React, { useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { CSS } from "../Theme";
import Modals from "../Modals";
/**
 * Component definition
 * available type prop values:
 * - next: next button that includes a right pointing arrow icon.
 * - link: link button that includes an external link icon.
 * - download: download button that includes a download icon.
 * - open: open button that includes a plus icon, and makes the background transparent, gives a burnt brick border, and makes hover background burnt brick, with a white text color.
 * - cancel: cancel button that makes the background white, gives a burnt brick border, and a burnt brick text color.
 * - if type is 'external', a LeavingTrusted modal will trigger. (Default: isTrusted={false})
 * - if type is 'external' and isTrusted={true}, then a Leaving modal will trigger
*/

export const Button = ({ label, onClick, type, href, to, className, children, isTrusted = false, newWindow, tabIndex, autoFocus }) => {
  const buttonRef = useRef(null);
  let aProps = {};
  //   let as;
  if (href) {
    aProps = { as: "a", href };
  }
  if (to) {
    aProps = { as: Link, to };
  }
  let buttonIcon = null;

  /*
  arrow
  next
  external
  link
  download
  references
  open
  */
  switch (type) {
    case "arrow":
      buttonIcon = (
        <>
          <img src="/images/icons/right-arrow-icon.svg" alt="Arrow icon" />
          <img className="hover" src="/images/icons/right-arrow-icon-brick.svg" alt="Arrow icon" />
        </>
      );
      break;
    case "next":
      buttonIcon = (
        <>
          <img src="/images/icons/right-arrow-icon.svg" alt="Arrow icon" />
          <img className="hover" src="/images/icons/right-arrow-icon-brick.svg" alt="Arrow icon" />
        </>
      );
      break;
    case "external":
      buttonIcon = (
        <>
          <img src="/images/icons/external-icon.svg" alt="External icon" />
          <img className="hover" src="/images/icons/external-icon-brick.svg" alt="External icon" />
        </>
      );
      break;
    case "link":
      buttonIcon = (
        <>
          <img src="/images/icons/external-icon.svg" alt="External icon" />
          <img className="hover" src="/images/icons/external-icon-brick.svg" alt="External icon" />
        </>
      );
      break;
    case "download":
      buttonIcon = (
        <>
          <img src="/images/icons/download-icon.svg" alt="Download icon" />
          <img className="hover" src="/images/icons/download-icon-brick.svg" alt="Download icon" />
        </>
      );
      break;
    case "references":
      buttonIcon = (
        <>
          <img src="/images/icons/plus-icon.svg" alt="Plus icon" />
          <img className="hover" src="/images/icons/plus-icon-white.svg" alt="Plus icon" />
        </>
      );

      break;
    case "open":
      buttonIcon = (
        <>
          <img src="/images/icons/plus-icon.svg" alt="Plus icon" />
          <img className="hover" src="/images/icons/plus-icon.svg" alt="Plus icon" />
        </>
      );
      break;
    default:
      buttonIcon = null;
      break;
  }
  let modalLink = isTrusted ? Modals.LeavingTrusted : Modals.Leaving;
  let Leaving = (type === "external" || type === "download") ? modalLink : 'div';
  
  return (
    <>
      <Leaving linkRef={buttonRef}>
        <ButtonStyle
          ref={buttonRef}
          target={ newWindow ? '_blank' : null}
          onClick={
            className?.indexOf("disabled") > -1
              ? (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }
              : onClick
          }
          tabIndex={className?.indexOf("disabled") > -1 ? -1 : tabIndex}
          // className={`button ${className ? className : ""}${  ? " has-icon " + type : ""} ${(type === 'cancel') ? 'cancel' : ''}`}
          className={`button ${className ? className : ""} ${ buttonIcon ? "has-icon" : ''} ${type ? type : ''}`}
          {...aProps}
          data-autofocus={autoFocus}
        >
          <span>{children ? children : label}</span>
          {buttonIcon}
        </ButtonStyle>
      </Leaving>
    </>
  );
};

/**
 * Component default styles
 */
const ButtonStyle = styled.button`
  &.button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    /* border: 2px solid #750010; */
    outline-offset: 2px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    /* padding: 0 22px;
    min-width: 116px;
    height: 48px; */
    border: 2px solid #750010;
    padding: 0 20px;
    min-width: 116px;
    height: 44px;
    z-index: 1;
    background: ${CSS.COLORS.burnBrick};
    font-family: "Nunito";
    font-size: 16px;
    /* @media (min-width: 768px) {
      font-size: 18px;
    } */
    font-weight: bold;
    line-height: 0.94;
    text-decoration: none;
    color: ${CSS.COLORS.white};
    box-sizing: content-box;
    & > span {
      border-radius: 3rem;
      color: ${CSS.COLORS.white};
      margin: 0;
      display: inline;
      width: auto;
    }
    :before {
      background: ${CSS.COLORS.heatedGold};
      border-radius: 3rem;
      content: "";
      height: 100%;
      left: -5px;
      position: absolute;
      top: 0;
      transition: transform 0.3s ease-in-out;
      width: 100%;
      z-index: -1;
      transform: translateX(-100%);
    }

    &:active,
    &:hover {
      span {
        color: ${CSS.COLORS.burnBrick};
      }
      color: ${CSS.COLORS.burnBrick};
      text-decoration: none;
      :before {
        left: 0;
        transform: translateX(0%);
      }
    }

    &:active {
      transform: scale(90%);
      border-radius: 3rem;
    }
    &.references,
    &.open {
      span {
        font-weight: bold;
      }
      img {
        width: 8.1px;
      }
    }
    &.arrow,
    &.next {
      img {
        width: 7.3px;
      }
    }
    &.external,
    &.link {
      img {
        width: 12px;
        transform: translateY(-1px);
      }
    }
    &.download {
      img {
        width: 13.4px;
      }
    }
    &.references,
    &.open,
    &.arrow,
    &.next,
    &.external,
    &.link,
    &.download {
      img {
        display: inline-block;
        &.hover {
          display: none;
        }
      }
      &:hover {
        img {
          display: none;
          &.hover {
            display: inline-block;
          }
        }
      }
    }
    &.cancel {
      background-color: ${CSS.COLORS.white};
      border: 2px solid #750010;
      min-width: 116px;
      height: 44px;
      padding-right: 0px;
    }
    &.references,
    &.open {
      img {
        width: 8.1px;
      }
      background-color: transparent;
      border: 1px solid #750010;
      padding: 0 21px;
      min-width: 117px;
      height: 46px;
    }
    &.cancel,
    &.open {
      margin-right: 15px;
      span {
        color: ${CSS.COLORS.burnBrick};
      }
      &:active,
      &:hover {
        color: ${CSS.COLORS.burnBrick};
        text-decoration: none;
        :before {
          transform: translateX(0%);
        }
      }
    }
    &.disabled {
      color: #707070;
      background-color: #ebebeb;
      cursor: not-allowed;
      border: 2px solid #ebebeb;
      span {
        color: #707070;
      }
      &:hover {
        :before {
          transform: translateX(-100%);
        }
      }

      &:active {
        transform: scale(100%);
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: 0;
      }
    }
    @media (min-width: 768px) {
      margin: 0;
      &.centered {
        margin: 0 auto;
      }
    }
    &.has-icon {
      span {
        margin-right: 12px;
      }
    }
  }
`;
