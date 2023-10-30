import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { ExternalLink } from "../ExternalLink";

const ConferenceCard = ({ img, alt, href, date, location, children, className }) => {
  return (
    <StyledDiv className={className}>
      <div className="details">
        <span className="image"><img className="card-logo" src={img} alt={alt} /></span>
        {children}
        <Button href={href} type="external" isTrusted={false}>
          Read more
        </Button>
      </div>
      <div className="date-location">
        <span className="date">
          <img src="/images/icons/calendar-icon.svg" alt="Calendar icon" />{" "}
          {date}
        </span>
        <span className="location">
          <img src="/images/icons/location-icon.svg" alt="Location icon" />{" "}
          {location}
        </span>
      </div>
    </StyledDiv>
  );
};

export default ConferenceCard;

const StyledDiv = styled.div`
  border-radius: 8px;
  background-color: #ebebeb;
  @media (min-width: 768px) {
    max-width: 336px;
  }
  /* @media (min-width: 500px) and (max-width: 1023px) {
    max-width: 440px;
  } */
  font-size: 16px;
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    padding-bottom: 23px;
    padding-top: 14px;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
  }
  .image {
    margin: 0 0 10px;
    // TODO: the logos in Zeplin are all different sizes, so I'm not sure what the width should be.
    width: 189px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-weight: bold;
    width: 250px;
    line-height: 1.38;
    margin: 0 0 8px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (min-width: 768px) {
      min-height: 45px;
    }
  }
  .desc {
    margin: 0 0 22px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    line-height: 1.19;
    width: 92%;
    @media (min-width: 1024px) {
      min-height: 115px;
    }
  }
  .date-location {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 11px 22.4px;
  }
  .date,
  .location {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .date img,
  .location img {
    margin-right: 3.5px;
  }
  /* .button {
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  } */
`;
