import React, { useState } from "react";

import styled from "styled-components";
import Layout from "../components/Layout";
import { SignUpForm } from "../components/Forms/signup";
import { GATSBY_API_ENDPOINT } from "../constants/";
import { HeadApi } from "../components/HeadApi";
import { H1, Container } from "../components/Core";

const pageName = "StayInformed";

const SurveyPage = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const onSubmit = (data) => {
    fetch(`${GATSBY_API_ENDPOINT}/api/survey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setSuccessModalOpen(true);
        }
      });
  };
  return (
    <>
      <Layout isHome>
        <HomeStyles>

          <Container bg="transparent" className="lg:pb-2">
            <H1 icon="/images/icons/email-stay-informed-icon.svg" alt="Email icon" lineWidth="short">Stay informed</H1>
            <p>Register below to receive updates and information about bronchiectasis.</p>
          </Container>
          
          <Container width="custom" bg="transparent-white" className="lg:w-[864px] pb-9">
            <SignUpForm />
          </Container>
            
        </HomeStyles>
        
      </Layout>
    </>
  );
};

const HomeStyles = styled.div`
  margin-top: -36px;
  h1 span::after {
    width: 72px;
    @media (min-width: 768px) {
      width: 160px;
    }
  }
  .introduction {
    h2 {
      color: #fff;
      font-size: 32px;
      @media (min-width: 768px) {
        font-size: 40px;
      }
      font-weight: 300;
      margin: 0 0 22px;
      .bronchiectasis {
        font-weight: bold;
        line-height: 1.33;
      }
      &:after {
        content: "";
        display: block;
        width: 188px;
        height: 0;
        border-radius: 1px;
        border: solid 1px #ff724d;
        margin-left: -36px;
      }
    }
    p {
      font-family: "Nunito Sans";
      font-size: 18px;
      line-height: 24px;
      margin: 0 0 14px;
      font-weight: 100;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
    padding: 36px 19px;
    @media (min-width: 768px) {
      padding: 36px 36px;
    }
    border-radius: 8px;
    background-image: linear-gradient(
      135deg,
      #750010 34%,
      #750010 77%,
      #b83b4d
    );
    color: #fff;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin: 0 0 12px;
    line-height: 34px;
    br {
      content: "";
      @media (min-width: 768px) {
        content: initial;
      }
      &:after {
        content: " ";
        @media (min-width: 768px) {
          content: initial;
        }
      }
    }
    &.visit-booth {
      text-align: center;
      width: 80%;
      margin: 0 auto 24.8px;
      @media (min-width: 768px) {
        width: 100%;
        margin: 0 0 8px;
      }
    }
  }
  .points-of-interest {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 324px;
    min-height: 0;
    @media (min-width: 768px) {
      flex-direction: row;
      height: auto;
    }
    flex: 1;
    min-width: 0;
    max-width: 100%;
    margin: 0 0 40px;
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 0 19px;
      flex: 1;
      height: 88px;
      flex-basis: 88px;
      margin-bottom: 30px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      @media (min-width: 768px) {
        flex-direction: column;
        padding: 0;
        height: auto;
        margin-bottom: 0;
      }
      flex: 1;
      min-width: 0;
      img {
        width: 88px;
        margin: 0 18px 0 0;
        @media (min-width: 768px) {
          width: 140px;
          margin: 0 auto;
        }
      }
      p {
        height: fit-content;
        font-size: 20px;
        line-height: 24px;
        color: #6f0013;
        font-weight: bold;
        margin: 0;
        font-family: "Nunito";
        /* padding-right: 25px; */
        @media (min-width: 768px) {
          text-align: center;
        }
        br {
          content: "";
          @media (min-width: 768px) {
            content: initial;
          }
          &:after {
            content: " ";
            @media (min-width: 768px) {
              content: initial;
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <HeadApi page={pageName} />;

export default SurveyPage;
