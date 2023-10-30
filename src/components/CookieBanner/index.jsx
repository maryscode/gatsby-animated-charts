import React, { useState, useEffect } from "react";
import FocusLock from "react-focus-lock";
import styled from "styled-components";
import { ExternalLink } from "../ExternalLink";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../Button";
// import { useHasScrollbar } from "../../hooks/useHasScrollBar";

/**
 * Component definition
 */
export const CookieBanner = () => {
  const [isHidden, setIsHidden] = useState(true);
  
  let cookieSet = typeof localStorage !== "undefined" && localStorage.getItem("ins_cookie") === "true";
  useEffect(() => {
    setIsHidden(cookieSet);
  }, [cookieSet, setIsHidden]);
  
  return (
    <CookieBannerStyles className={`cookie-banner ${isHidden ? "hidden" : ""}`}>
      <FocusLock disabled={isHidden}>
        <span className="h2 text-burnt-brick">This website uses cookies</span>
        <div>
          <span>
            By using this website, you accept our use of cookies as outlined by the Insmed{" "}
            <ExternalLink tabIndex={isHidden ? -1 : 2} isTrusted={true} href="https://insmed.com/privacy-policy/">
              Privacy Policy
            </ExternalLink>
            .
          </span>
          <span>
            <Button
              tabIndex={isHidden ? -1 : 0}
              className="mx-auto"
              label="Accept"
              primary
              onClick={() => {
                cookieSet = true;
                setIsHidden(cookieSet);
                if (typeof localStorage !== "undefined") {
                  localStorage.setItem("ins_cookie", "true");
                }
                document.querySelector("header").focus();
              }}
              autoFocus={true}
            />
          </span>
        </div>
      </FocusLock>
    </CookieBannerStyles>
  );
};

const CookieBannerStyles = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  margin: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  &.hidden {
    transform: translateY(100%);
  }
  .h2 {
    margin: 0 0 12px 0;
    font-family: "Nunito";
    font-size: 1.625rem;
    font-weight: 800;
    line-height: 2.125rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 24px 19px;
    box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.11);
    font-family: "Nunito";
    font-size: 16px;
    @media (min-width: 768px) {
      padding: 24px 36px;
    }
    max-width: 687px;
    background-color: #ffffff;
    border-radius: 8px 8px 0 0;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
      & > span:nth-child(1) {
        margin-bottom: 20px;
        margin-right: 50px;
        @media (min-width: 768px) {
          margin-bottom: 0;
          margin-right: 85px;
        }
      }
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .buttom {
    margin: 0 auto;
  }
`;
