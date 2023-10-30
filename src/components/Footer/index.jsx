import React from "react";
import { Link } from "gatsby";
import { ExternalLink } from "../ExternalLink";
import styled from "styled-components";
import logo from "../../images/insmed-incorporated-logo.svg";
import lungs from "../../images/footer-lung.png";
import { Button } from '../Button';

/**
 * Component definition
 */
export const Footer = ({isHome}) => {
  return (
    <>
      <DefaultStyle className={`${isHome ? "!mt-16 lg:!mt-0 lg:pt-[60px]" : "-mt-4 lg:mt-0"}`}>
        <div className={`above-footer-wrapper ${isHome ? "!hidden" : "lg:pt-2"}`}>
          <img src={`/images/footer/lung-house-campaign-graphic.png`} alt="Pair of red lungs in the shape of a house with shutters and doors. It sits on a lawn with a tree, fence, and grass. An impending storm pulls pieces of the house and surroundings skyward" />
        </div>
        
        <div className="footer-wrapper">
          <div>
            <ExternalLink className="footer-link" href={`https://insmed.com/`} isTrusted={true} >
              <img src={logo} alt="Insmed Incorporated logo" />
            </ExternalLink>
          </div>
          <div>
            <div>
              <ExternalLink className="footer-link" href={`https://insmed.com/terms-of-use/`} isTrusted={true} >
                Terms of use
              </ExternalLink>
              <ExternalLink className="footer-link" href={`https://insmed.com/privacy-policy/`} isTrusted={true} >
                Privacy policy
              </ExternalLink>
              <Link className="footer-link" to="/stay-informed">
                Stay informed
              </Link>
              <Link className="footer-link" to="/site-map">
                Site map
              </Link>
              <Link className="footer-link" to="/accessibility-statement">
                Accessibility statement
              </Link>
            </div>
            <div>
              <p>
                This site is intended for healthcare professionals only. This
                site is for US audiences only. &copy; {new Date().getFullYear()}{" "}
                Insmed Incorporated. All Rights Reserved. Insmed is a trademark
                of Insmed Incorporated. All other trademarks are property of
                their respective owner. NP-BE-US-00217
              </p>
            </div>
          </div>
        </div>
      </DefaultStyle>
    </>
  );
};

/**
 * Component styles
 */
const DefaultStyle = styled.footer`

  /* margin-top: -1rem; */
  padding-top: 0;
  @media (min-width: 1024px) {
    padding-top: 4rem;
    /* margin-top: initial;   */
  }

  .above-footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    img {
      width: 259px;
    }
    @media (min-width: 1024px) {
      img {
        width: 312px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
  .footer-wrapper {
    /* border: 1px solid red; */
    display: block;
    font-size: 14px;
    margin: 0 auto;
    font-size: 14px;
    padding-bottom: 43px;
    max-width: 776px;
    @media (min-width: 1024px) {
      display: flex;
      font-size: 16px;
      padding-bottom: 30px;
    }
    a.footer-link {
      color: #000000;
    font-size: 14px;
      margin-bottom: 20px;
      text-decoration: none;
      @media (min-width: 1024px) {
        margin-right: 30px;
      }
      &:hover {
        color: #750010;
      }
    }
    &:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        padding: 0;
        margin-bottom: 20px;
        @media (min-width: 1024px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0;
          position: absolute;
          left: -160px;
          width: 160px;
          height: 100%;
          margin-bottom: 0;
        }
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      padding: 0 36px;
      @media (min-width: 1024px) {
        padding-left: 20px;
        padding-right: 0;
      }
      &:nth-child(1) {
        width: 127px;
        margin: 0 auto;
        padding: 0 0 30px 0;
        a {
          width: fit-content;
          margin: 0 auto;
          @media (min-width: 1024px) {
            padding-bottom: 16px;
          }
        }
        img {
          width: 118px;
          height: auto;
          margin: 0 auto;
          @media (min-width: 1024px) {
            width: 100%;
          }
        }
        @media (min-width: 1024px) {
          /* flex-basis: 13%; */
          width: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 17px 0 0;
        }
      }
      & > div {
        margin-bottom: 20px;
        &:nth-last-child(2) {
          margin-bottom: 0;
        }
        &:nth-last-child(1) {
          margin-bottom: 0;
          max-width: 616px;
          margin: 0 auto;
          font-size: 14px;
          line-height: 18px;
          @media (min-width: 1024px) {
            margin: 0;
          }
          p {
            margin: 0;
            text-align: center;
            @media (min-width: 1024px) {
              text-align: left;
            }
          }
        }
        &:nth-last-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          @media (min-width: 1024px) {
            display: block;
          }
        }
        &.ref-block {
          margin-bottom: 60px;
        }
      }
    }
  }
`;
