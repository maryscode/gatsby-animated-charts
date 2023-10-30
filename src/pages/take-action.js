// TakeAction.jsx

import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Layout from "../components/Layout";
import { H1, H2, H3, H4, Container, Ref, Main } from "../components/Core/";
import { VideoPlayerWithTranscript, VideoTitle } from "../components/VideoPlayer";
import Callout from "../components/Callout";
import TabContainer from "../components/TabContainer";
import { VideoData, CarouselData } from "../data/Videos";
import { EtiologiesData } from "../data/Etiologies";
import { HeadApi } from "../components/HeadApi";
import ReadMore from "../components/ReadMore";
import ReadMoreAnchor from "../components/ReadMoreAnchor";
import Poll from "../components/Poll";
import AdvocacyGroups from "../components/AdvocacyGroups";
import NextPageDriver from '../components/NextPageDriver';
import References from "../components/References";
import ExpandablePanel from "../components/ExpandablePanel";
import Carousel from "../components/Carousel";

// import bacteria from "../images/pages/take-action/bacteria.svg";
import vortexInfection from "../images/pages/take-action/bronchiectasis-vortex-states-chronic-airway-infection-icons.svg";
import vortexInflammation from "../images/pages/take-action/bronchiectasis-vortex-states-chronic-airway-inflammation-icons.svg";
import vortexImpaired from "../images/pages/take-action/bronchiectasis-vortex-states-impaired-mucociliary-clearance-icons.svg";
import vortexDestruction from "../images/pages/take-action/bronchiectasis-vortex-states-lung-destruction-icons.svg";
// import envelopeIcon from "../images/icons/envelope.svg";

const pageName = "TakeAction";

const TakeAction = () => {
  const vortexVideoData = VideoData.find((video) => video.id === "822052686");

  return (
    <Layout>
      
      <section id="treatment-approach" data-section>
        <Container bg="transparent" className="lg:pb-0">
          <H1 icon="/images/icons/managing-bronchiectasis-icon-colorful.svg" alt="Managing bronchiectasis icon colorful" className="">Addressing the 4 drivers of bronchiectasis may help manage its chronic and progressive nature<Ref>1-3</Ref></H1>
          <p>
            Goals in the management of bronchiectasis include disrupting the vicious vortex by addressing chronic airway infection, reducing chronic airway inflammation, enhancing mucociliary clearance, and preventing further lung destruction.<Ref>2-4</Ref>
          </p>
        </Container>

        <Container id="addressing-drivers-expert-video" width="full" rounded="none" className="lg:flex lg:justify-center lg:items-center lg:flex-col my-12 tablet:pt-8 tablet:mt-6 lg:pt-11 lg:!mb-12">
          <Container bg="transparent" padding="none" className="">
            <VideoTitle as="h2">Expert commentary: Addressing the vicious vortex of bronchiectasis</VideoTitle>
            <VideoPlayerWithTranscript videoData={vortexVideoData} />
          </Container>
        </Container>

        <Container bg="transparent" padding="lg-none" className="pb-8 lg:pb-10">
          <H2>
            Bronchiectasis requires a multimodal treatment plan<Ref>4,5</Ref>
          </H2>
          <p>
            All 4 drivers of bronchiectasis should be targeted with a tailored approach to help address the interdependent modalities that may lead to devastating
            effects like exacerbations and disease progression.<Ref>4-6</Ref>
          </p>
          <Callout className="mb-6">
            Focusing on 1 disease driver in isolation only affects 1 pathway of the disease and thus may yield only a limited clinical response.<Ref>4,6</Ref>
          </Callout>
          <H3>Investigate and treat underlying etiologies</H3>
          <p>
            Because bronchiectasis often appears alongside other diseases, patients should be assessed to identify potentially treatable underlying causes and
            comorbid conditions.<Ref>7-9</Ref>
          </p>
          <ul className="dotted md:columns-2">
            {EtiologiesData.map(({ title, body }, index) => (
              <>
                <li key={index} className="lg:flex lg:items-stretch break-inside-avoid-column">
                  <span>{title}</span>
                </li>
              </>
            ))}
          </ul>
          <H3>Managing the primary drivers of bronchiectasis</H3>

          <TabStyles>
            <TabContainer>
              <TabContainer.TabList>
                <TabContainer.Tab>Chronic airway infection</TabContainer.Tab>
                <TabContainer.Tab>Chronic airway inflammation</TabContainer.Tab>
                <TabContainer.Tab>Impaired mucociliary clearance</TabContainer.Tab>
                <TabContainer.Tab>Lung destruction</TabContainer.Tab>
              </TabContainer.TabList>
              <TabContainer.TabPanels>
                <TabContainer.TabPanel>
                  <div className="md:flex">
                    <div className="shrink-0 text-center md:mr-12">
                      <img src={vortexInfection} className="vortex-img mx-auto mb-5 md:mb-0" alt="Bronchiectasis vortex states - chronic airway infection icons" />
                    </div>
                    <div>
                      <p>
                        It’s important to conduct routine sputum collection to identify pathogens causing infection, with susceptibility testing to guide antibiotic choice based on resistance patterns.<Ref>2,7</Ref>
                      </p>
                      <p>Based on these results, antibiotic treatment for chronic or acute airway infections should be tailored to each patient’s needs<Ref>2,3,7</Ref>:</p>
                      <ul className="dotted">
                        <li>For acute exacerbations, treat with 14 days of antibiotics</li>
                        <li>For chronic airway infections, use long-term oral or inhaled antibiotics</li>
                        <li><span>For new growth of <em>Pseudomonas aeruginosa</em>, use intravenous or nebulized antibiotics</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center">
                    <img src={"../images/take-action/bacteria-causing-pulmonary-infections-icon.svg"} className="mb-4 md:mb-0" alt="Bacteria causing pulmonary infections icon" />  
                    <p className="mb-0 md:ml-[16px]">In the US, the common bacteria causing pulmonary infections in bronchiectasis patients include nontuberculous mycobacteria (NTM), <em>Pseudomonas aeruginosa, Staphylococcus aureus, Haemophilus influenzae,</em> and <em>Moraxella catarrhalis</em>. There are also fungal pathogens found in cultures such as <em>Aspergillus</em> species and <em>Scedosporium apiospermum</em>.<Ref>10</Ref></p>
                  </div>
                </TabContainer.TabPanel>
                <TabContainer.TabPanel>
                  <div className="md:flex">
                    <div className="shrink-0 mx:auto md:mr-12">
                      <img src={vortexInflammation} className="vortex-img mx-auto mb-5 md:mb-0" alt="Bronchiectasis vortex states - chronic airway inflammation icons"/>
                    </div>
                    <div>
                      <p>There are limited options to treat chronic airway inflammation in bronchiectasis. The inflammatory response is currently managed with oral or inhaled steroids and macrolide antibiotics.<Ref>2,3</Ref></p>
                      <p className="mb-0">Because of their immunosuppressive qualities, extended use of steroids may be detrimental to patients with bronchiectasis who are already susceptible to airway infections. Experts studying this disease do not recommend inhaled corticosteroids for treating patients with bronchiectasis in the absence of comorbid COPD or asthma.<Ref>2,11,12</Ref></p>
                    </div>
                  </div>
                </TabContainer.TabPanel>
                <TabContainer.TabPanel>
                  <div className="md:flex">
                    <div className="shrink-0 mx:auto md:mr-12">
                      <img src={vortexImpaired} className="vortex-img mx-auto mb-5 md:mb-0" alt="Bronchiectasis vortex states - impaired mucociliary clearance icons"/>
                    </div>
                    <div>
                      <p>Impaired mucociliary clearance, which can cause further bacteria colonization, may be treated using airway clearance techniques and mucoactive therapies.<Ref>2,13</Ref></p>
                      <p>Airway clearance can facilitate more effective sputum clearance to help improve symptoms and long-term outcomes.<Ref>13</Ref> Various airway clearance techniques may lead to fewer respiratory symptoms, greater sputum expectoration, and improved quality of life in patients with bronchiectasis.<Ref>14</Ref></p>
                    </div>
                  </div>
                  <p>Airway clearance techniques may involve the use of devices and/or breathing exercises, including<Ref>2,12,13</Ref>:</p>
                  <ul className="dotted">
                    <li>Active cycle of breathing</li>
                    <li>Forced expiration (huff)</li>
                    <li>Positive-expiratory-pressure (PEP) devices</li>
                    <li>Percussion</li>
                    <li>High-frequency chest-wall-oscillation (HFCWO) vests</li>
                    <li>Pulmonary rehabilitation</li>
                  </ul>
                  <p>If prescribing mucoactive therapies for bronchiectasis, the main groups include expectorants, mucoregulators, mucolytics, and mucokinetics.<Ref>12</Ref></p>
                  <p>While airway clearance and mucoactive therapies are management options, for some patients they may not be sufficient alone to treat bronchiectasis.<Ref>2,13,15</Ref></p>
                  <ReadMoreAnchor to="#airway-clearance-expert-video" maxWidth="323" >
                    See experts discuss airway<br />
                    clearance techniques
                  </ReadMoreAnchor>

                </TabContainer.TabPanel>
                <TabContainer.TabPanel>
                  <div className="md:flex items-center">
                      <div className="shrink-0 mx:auto md:mr-12">
                        <img src={vortexDestruction} className="vortex-img mx-auto mb-5 md:mb-0" alt="Bronchiectasis vortex states - lung destruction icons"/>
                      </div>
                      <div>
                        <p className="mb-0">Options for addressing the effects of lung destruction may include pulmonary rehabilitation (eg, physical activity or exercise) or surgery.<Ref>2</Ref></p>
                      </div>
                    </div>              
                </TabContainer.TabPanel>
              </TabContainer.TabPanels>
            </TabContainer>
          </TabStyles>
        </Container>
        
        <Container bg="transparent" padding="none" className="mb-8 mt-[96px] lg:mt-[106px]">
            <Poll pollID={3} />
        </Container>
      </section>
      <section  id="management-plan" data-section>
        <Container bg="transparent">
          <H2>
          An active management plan is important for your bronchiectasis patients
          </H2>
          <p>A comprehensive management approach addressing all 4 primary drivers of bronchiectasis can help target all potentially interdependent aspects of the disease. The objectives of bronchiectasis management are to reduce exacerbations, preserve lung function, and improve the patient’s quality of life.<Ref>2,4,5</Ref></p>
          <p>Creating an action plan with your bronchiectasis patients can help them prepare for future exacerbations. That plan may include education about exacerbations and how to appropriately take action.
          </p>
          <ReadMoreAnchor to="#resources">
            Watch experts discuss bronchiectasis management
          </ReadMoreAnchor>
        </Container>
        
      </section>
      
          

      <section id="resources" data-section>
        <Container bg="white" width="full" rounded="none">
          <Container bg="transparent" padding="none">
            <H2 id="resources" lineWidth="short" className="!mb-0 !pb-0">
              Resources
            </H2>
            <H3 id="videos" className="pt-8 md:pt-6 relative">
              <VideoAnchorStyles>
              {CarouselData.map((carouselItem, index) => {
                    return (
                      <span id={carouselItem.anchorId} key={`anchor-${index}`}></span>
                    )
                  })
                }
              </VideoAnchorStyles> 
              Video library             
            </H3>

            <p>Explore scientific information and expert commentary on a variety of topics about bronchiectasis.</p>
            <Carousel />
          </Container>
        </Container>

        <Container id="helpful-links" bg="transparent" width="regular" className={`mb-6`}>
          <AdvocacyGroups/>
        </Container>

        <Container id="faq" bg="transparent">
          <H3>FAQs</H3>
          <p>Get answers to frequently asked questions about bronchiectasis.</p>
          <ExpandablePanel
              title="How is bronchiectasis diagnosed?"
            >
            <ul className="dotted">
              <li><span>A bronchiectasis diagnosis is confirmed via both clinical and radiological (high-resolution computed tomography [HRCT]) evidence<Ref>3,16,17</Ref></span></li>
              <li><span>Bronchiectasis is generally defined by abnormal airway dilation with distinct features observed via HRCT<Ref>3</Ref></span></li>
              <li><span>Bronchiectasis initially presents with nonspecific symptoms that mimic more common conditions such as COPD or asthma<Ref>7,16</Ref></span></li>
            </ul>
          </ExpandablePanel>

          <ExpandablePanel
            title="Who is the typical bronchiectasis patient?"
          >
            <ul className="dotted">
              <li><span>Bronchiectasis is most prevalent in women and patients over 60 years of age<Ref>18</Ref></span></li>
              <li><span>Many bronchiectasis patients have medical histories that include respiratory comorbidities such as COPD, pneumonia, and asthma<Ref>7</Ref></span></li>
            </ul>
          </ExpandablePanel>

          <ExpandablePanel
            title="Why is it important to address each component of the vicious vortex in bronchiectasis management?"
          >
            <ul className="dotted">
              <li><span>Focusing on 1 out of the 4 disease drivers only affects 1 disease pathway<Ref>4,6</Ref></span></li>
              <li><span>Treating all 4 aspects of bronchiectasis with a tailored approach may mitigate the devastating effects of disease progression<Ref>4-6</Ref></span></li>
            </ul>
          </ExpandablePanel>

          <NextPageDriver href="/stay-informed/" icon={"../images/icons/sign-up-icon.svg"} alt="Sign up icon" className="mt-[3.75rem]" >
            Sign up to stay informed about bronchiectasis 
          </NextPageDriver>

        </Container>

        <Container bg="transparent" className="mt-8 !pt-0">
          <References pageName={pageName}/>
        </Container>

      </section>
    </Layout>
  );
};

export default TakeAction;

export const Head = () => <HeadApi page="TakeAction" />;

const TabStyles = styled.div`
  .vortex-img {
    width: 186px;
    height: 186px;
  }
`;

const VideoAnchorStyles = styled.div`
  line-height: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
`;