import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

/**
 * Component DefinitionList
 */
const LinkDetail = ({ icon, href, alt, to, label, children}) => {
  let aProps = {}
  if (to) {
    aProps = { to }
  }
  if (href) {
    aProps = { href };
  }
  const ButtonComponent = <Button type="arrow" {...aProps}>{label}</Button>;
  return (
    <StyledDiv>
      <div className="details">
        <img className="detail-image" src={icon} alt={alt} />
        <span className="w-[230px] md:w-full ">
          <div className="my-3 md:mt-0 md:mb-[20px]">{children}</div>
          {ButtonComponent}
        </span>
      </div>
      

    </StyledDiv>
  );
};

export default LinkDetail;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 17px 0;
  @media (min-width: 768px) {
    margin: 0;
  }
  .details {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    line-height: 22px;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: bold;
    margin: 0 0 7px 0;
    @media (min-width: 768px) {
      align-items: center;
      line-height: 24px;
      flex-direction: column;
      max-width: 382px;
      font-size: 20px;
      text-align: center;
      margin: 0 0 20px 0;
    }
  }
  .detail-image {
    margin: 0 16px 0 0;
    width: 72px;
    @media (min-width: 768px) {
      margin: 0 0 12px 0;
      width: 100px;
    }
    height: auto;
  }
  sup {
    font-size: 60%;
    /* top: -20px; */
  }
  .button {
    width: 160px;
    padding: 0;
    font-size: 16px;
    /* min-width: 148px; */
    @media (min-width: 768px) {
      font-size: 18px;
      width: 188px;
      margin: 0 auto;
    }
    span {
      margin-right: 12px;
    }
  }
`;
