import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { H1, H2, H3, Container, Refs, Main } from "../components/Core/";
import { Presentation } from "../components/Presentation";
import { Button } from "../components/Button";
import Footnote from "../components/Footnote";

import { HeadApi } from "../components/HeadApi";

const pageName = "Chest2023";

const Chest2023 = () => {
  return (
    <>
      <Layout className="page-ats2023" isHome>
        <Chest2023Styles width="custom" bg="transparent" className="md:w-[952px] !pt-0 pb-[60px] !mb-0 flex flex-col align-middle items-center">
          <H1 icon="/images/icons/doctor-presentation-icon.svg" alt="Doctor presentation icon">
            Join us for Insmed’s bronchiectasis Learning Theater at the CHEST Annual Meeting 2023
          </H1>
          <div className="ats-intro flex">
            <div className="column left-column flex lg:hidden lg-hidden">
              <img src="/images/logos/chest-annual-meeting-logo.svg" alt="CHEST meeting 2023 logo" />
            </div>
            <div className="column right-column">
              <p className="mb-0 lg:mb-[24px] block lg:hidden">
                Insmed is excited to present information and expert commentary about bronchiectasis at this year’s CHEST Annual Meeting as part of our goal to
                increase awareness of the disease.
              </p>
            </div>
          </div>
          <Presentation
            presentations={[
              {
                title: "Navigating Bronchiectasis Exacerbations: An Expert Discussion",
                presenter: (
                  <>
                    <span className="grid grid-rows-1 grid-cols-[65px_auto] gap-4 items-center">
                      <img className="headshot" src="/images/chest2023/swenson-circle.png" alt="Colin Swenson, MD headshot" />
                      <span className="flex flex-col grow justify-center gap-1 leading-none">
                        <span className="bold basis-1/3 h-2/4 flex flex-col justify-center">Colin Swenson, MD</span>
                        <span className="basis-1/3 h-2/4 flex flex-col justify-content-center">
                          Section Chief,<br />Pulmonary & Critical Care<br />Medical Director,<br />Respiratory Services
                        </span>
                        <span className="basis-1/3 h-2/4 flex flex-col justify-content-center">Emory St Joseph’s Hospital</span>
                      </span>
                    </span>
                  </>
                ),
                date: `11:45 <span class="smallcaps">am</span>-12:30 <span class="smallcaps">pm</span> HST<br />Wednesday, October 11`,
                location: "Learning Theater 2<br />Hawaiʻi Convention Center",
                description: (
                  <div>
                    <p className="mb-0 lg:mb-[24px] hidden lg:block">
                      Insmed is excited to present information and expert commentary about bronchiectasis at this year’s CHEST Annual Meeting as part of our
                      goal to increase awareness of the disease.
                    </p>
                    <p className="">
                      During this session, a bronchiectasis expert will review data describing the clinical course and pathophysiology of bronchiectasis
                      exacerbations and their impact on disease progression and patient burden.
                    </p>
                    <p className="mb-8">
                      The speaker will also discuss managing bronchiectasis exacerbations in the context of a comprehensive management approach
                      and share his clinical experience in engaging patients in their own care. Boxed lunch will be available.
                    </p>
                    <p className="keep-up left">Be sure to visit our conference booth</p>
                    <p className="keep-up regular left mb-8">
                      At <strong>Booth #1001,</strong> learn more about bronchiectasis, including information about the{" "}
                      4 primary drivers of the disease, as well as bronchiectasis exacerbations and patient management.
                    </p>
                    <Footnote symbol="">
                      This is a non-CME event and does not qualify for CME, CE, or MOC credit. This event is not part of the official CHEST Annual Meeting 2023
                      conference sessions. This event is not an endorsement by CHEST and does not reflect the views or opinions of CHEST. Meals and transfers of value to US physicians and some other healthcare providers are reportable under applicable federal and state laws and regulations. If you are a healthcare professional licensed in one or more states that place restrictions on meals provided by pharmaceutical companies, we may request that you do not consume any food or beverages provided by Insmed.
                    </Footnote>
                  </div>
                ),
                link: "https://conference.thoracic.org/",
              },
            ]}
            desktopLogo={
              <div className="column left-column hidden lg:flex mt-6 !mb-0">
                <img src="/images/logos/chest-annual-meeting-logo.svg" alt="CHEST meeting 2023 logo" className="w-[240px] mx-auto" />
              </div>
            }
          />

          <div className="ats-intro"></div>
          <p className="keep-up">Want to keep up with bronchiectasis research and information?</p>
          <Button className="mx-auto" to="/stay-informed">
            Sign up
          </Button>
        </Chest2023Styles>
      </Layout>
    </>
  );
};

export const Head = () => <HeadApi page={pageName} />;

const Chest2023Styles = styled(Container)`
  h1 {
    @media (min-width: 768px) {
      padding-right: 25%;
    }
  }
  .keep-up {
    text-align: center;
    font-weight: bold;
    &.regular {
      font-weight: normal;
    }
    &.left {
      text-align: left;
    }
  }
  a.button {
    margin: 0 auto;
  }
  .time-slots {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    flex-basis: 100%;
  }

  @media screen and (min-width: 800px) {
    li {
      flex: 1 1 30%;
    }
  }
  .ats-intro {
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    width: 100%;
    flex: 1;
    margin: 0 0 24px;
    /* @media (min-width: 768px) {
    margin: 0 0 24px;
  } */
    &:last-of-type {
      margin: 0 0 36px;
    }
    .column {
      display: flex;
      flex-direction: column;
      &.lg-hidden {
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
    .left-column {
      /* width: 337px;
      max-width: 337px;
      min-width: 337px; */
      justify-items: flex-start;
      margin-bottom: 22.7px;
      @media (min-width: 768px) {
        width: 336px;
        flex-basis: 336px;
        max-width: 336px;
        min-width: 336px;
        margin-bottom: 0;
        margin-right: 32px;
      }
      img {
        margin: 0 auto;
        width: 189px;
        @media (min-width: 768px) {
          width: 240px;
        }
      }
    }
    .right-column {
      width: auto;
    }
    p {
      width: unset;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
`;

export default Chest2023;
