import React from "react";
// import { ExternalLink } from "../ExternalLink";
// import iconCalendar from "../../images/icon-calendar.svg";
// import iconLocation from "../../images/icon-location.svg";
import styled from "styled-components";

/**
 * Component definition
 */
export const Presentation = ({ presentations, className, desktopLogo }) => {
  return presentations.map((presentation, index) => (
    <PresentationStyle
      className="column presentation"
      key={`presentation_${index}`}
    >
      <div className="column left-column">
        <div className="title-presenter">
          <h2 className={className}>{presentation.title}</h2>
          <span className={`presenter ${className ? className : ""}`}>
            {presentation.presenter}
          </span>
        </div>
        <div className="date-local">
          <span className={`${className}`}>
            <img src="/images/icons/calendar-icon.svg" alt="Calendar icon" />{" "}
            <span dangerouslySetInnerHTML={{
                __html: presentation.date
            }}></span>
          </span>
          <span className={`${className}`}>
            <img src="/images/icons/location-icon.svg" alt="Location icon" />{" "}
            <span dangerouslySetInnerHTML={{
                __html: presentation.location
            }}></span>
          </span>
        </div>
        {desktopLogo && desktopLogo}
      </div>
      <div className={`column right-column ${className}`}>
        {presentation.description}
      </div>
      {/* {presentation.link && (
        <ExternalLink className={`block ${className}`} href={presentation.link}>
          {presentation.link}
        </ExternalLink>
      )} */}
    </PresentationStyle>
  ));
};

/**
 * Component styles
 */
const PresentationStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  flex: 1;
  margin: 0 0 40px;
  /* @media (min-width: 768px) {
    margin: 0 0 24px;
  } */
  &:last-of-type {
    margin: 0 0 36px;
  }
  h2 {
    margin: 0 0 20px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.22;
    text-align: center;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .left-column {
    /* width: 337px;
    max-width: 337px;
    min-width: 337px; */
    width: auto;
    max-width: 100%;
    min-width: 0;
    justify-items: flex-start;
    margin-bottom: 21px;
      &.hidden {
        @media (max-width: 767px) {
          display: none;
        }
      }
    @media (min-width: 768px) {
        width: 336px;
      max-width: 336px;
      min-width: 336px;
    margin-right: 32px;
    }
    /* flex-basis: 336px; */
    .title-presenter {
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
      background-color: #ffffff;
      position: relative;
      z-index: 1;
      /* margin-bottom: 18px; */
      .presenter {
        display: flex;
        /* flex-direction: column; */
        /* @media (min-width: 768px) { */
        flex-direction: row;
        /* } */
        flex: 1;
        align-items: stretch;
        justify-content: flex-start;
        font-size: 15.15px;
        @media (min-width: 768px) {
        font-size: 16px;
        }
        img {
          width: 65px;
          min-width: 65px;
          height: auto;
          margin-right: 16px;
          border-radius: 500px;
        }
      }
    }
    .date-local {
      padding: 26px 20px 20px;
      transform: translateY(-8px);
      position: relative;
      z-index: 0;
      font-size: 16px;
      & > span {
        display: flex;
        align-items: center;
        grid-gap: 0px 8px;
        &:nth-child(1) {
          margin-bottom: 8px;
        }
        img {
          object-fit: none;
          object-position: center bottom;
          width: 13px;
          height: 13px;
        }
      }
      border-radius: 0 0 8px 8px;
      background-color: #ebebeb;
    }
  }
  .time-slots {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  .right-column {
      width: auto;
    h4 {
      margin: 0 0 8px;
      font-weight: bold;
    }
    ul {
      margin: 0 0 16px;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
      }
      @media (min-width: 992px) {
        flex-direction: row;
       
      }
      justify-content: space-between;
      li {
        margin: 0 0 10px 0;
        @media (min-width: 768px) {
          margin: 0 16px 10px 0;
        }
        &:nth-last-child(1) {
          margin-right: 0;
          max-width: 150px;
        }
        &:before {
          display: none;
        }
      }
    }
  }
  p {
    width: unset;
    &:nth-last-child(1) {
      margin: 0;
    }
  }
`;
