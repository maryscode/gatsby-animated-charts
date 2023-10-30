import React from "react";
import styled from "styled-components";
import DefinitionLists from "../../data/DefinitionLists";

/**
 * Component DefinitionList
 */
const DefinitionList = ({ definitionKey, className }) => {
  const definitions = DefinitionLists[definitionKey];

  return (
    <StyledUl className={`${className && className}`}>
      {definitions.map((def, index) => {
        return (
          <li key={`def-${index}`}>
            <div className="img-container">{def.image ? <img src={def.image.src} alt={def.image.alt} /> : null}{" "}</div>
            {def.copy}
          </li>
        );
      })}
    </StyledUl>
  );
};

export default DefinitionList;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    display: grid;
    /* grid-template-rows: 2fr 2fr 2fr; */
    grid-template-rows: auto auto;

    grid-auto-flow: column;    
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    padding-left: 48px;
    position: relative;
    min-height: 32px;
    @media (min-width: 768px) {
      margin-right: 20px;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
      /* img { left: 8px; } */
    }
    .img-container {
      width: 48px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      position: absolute;
      left: 0;      
    }
    img {
      width: 28px;
      height: 28px;
      @media (min-width: 768px) {
        width: 36px;
        height: 36px;
      }
    }
  }
`;
