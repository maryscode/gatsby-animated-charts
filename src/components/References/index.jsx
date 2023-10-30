import React from "react";
import styled from "styled-components";

/**
 * Component definition
 */
export const References = ({ children }) => {
  return (
    <ReferencesStyles className="references">
      <li>
        <strong>{`Reference${children.length > 1 ? "s" : ""}`}: </strong>
      </li>
      {children.map((child, index) => {
        return (
          <li
            key={index}
            dangerouslySetInnerHTML={{
              __html: `<strong>${index + 1}.</strong> ${child} `,
            }}
          ></li>
        );
      })}
    </ReferencesStyles>
  );
};

const ReferencesStyles = styled.ul`
  list-style: none;
  padding: 0 19px;
  margin: 60px auto 0;
  @media (min-width: 768px) {
    padding: 0;
    margin: 60px auto 0 -30px;
  }
  margin-bottom: 0;
  max-width: 616px;
  font-size: 14px;
  line-height: 16px;
  li {
    display: inline;
  }
`;
