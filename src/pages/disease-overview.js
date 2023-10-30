import React from "react";
import { HeadApi } from "../components/HeadApi";
import Layout from "../components/Layout";
import { Container, H1, H2, H3, Ref } from "../components/Core";
import Callout from "../components/Callout";
import DefinitionList from "../components/DefinitionList";
import Accordions from "../components/Accordions";
import SeriousEffects from "../components/SeriousEffects";
import PatientInfo from "../components/PatientInfo";
import PullQuote from "../components/PullQuote";
import ReadMore from "../components/ReadMore";
import Poll from "../components/Poll";
import { VideoPlayerWithTranscript, VideoTitle } from "../components/VideoPlayer";
import NextPageDriver from "../components/NextPageDriver";
import { VideoData } from "../data/Videos";
import { EtiologiesData } from "../data/Etiologies";
import References from "../components/References";

const pageName = "DiseaseOverview";

const DiseaseOverview = () => {
  const commentaryVideoData = VideoData.find((video) => video.id === "822096454");


  return (
    <Layout>
      <section id="background" data-section>
        <Container bg="transparent" className="lg:pb-0">
          <H1 icon="/images/icons/bronchiectasis-lungs-icon.svg" alt="Bronchiectasis lungs icon" className="lg:w-[75%]">Bronchiectasis is a chronic and progressive disease often marked by unpredictable exacerbations<Ref>1</Ref></H1>
          <div className="relative lg:w-[calc(100%+5rem)] lg:grid lg:gap-x-4 lg:grid-cols-2 lg:justify-between lg:items-start">
            <div className="lg:-mr-8 md:min-h-[285px]">
              <p>Bronchiectasis is a chronic lung disease usually marked by permanent, abnormal dilation and persistent inflammation of the airways.<Ref>1,2</Ref></p>
              <p>Bronchiectasis affects approximately 450,000 people in the United States and more globally.<Ref>1,3</Ref> Although increasing in prevalence, <strong>there have long been unmet needs in bronchiectasis.<Ref>1,4</Ref></strong></p>
            </div>
            <img src="/images/disease-overview/healthy-vs-inflamed-airway@2x.png" alt="Healthy airway and bronchiectasis-inflamed airway comparison drawing" className="lg:pl-[13%] m-auto"/>
          </div>
        </Container>
        
        <Container bg="transparent" className="!pb-0 mt-[18px] md:mt-0">
          <div id="accordionParent">
            <H2>Etiologies commonly associated with bronchiectasis</H2>
            <p><strong className="font-nunito font-bold">Bronchiectasis has several known etiologies, including but not limited to<Ref>5,6</Ref>:</strong></p>
            
            <Accordions EtiologiesData={EtiologiesData} />
          </div>
        </Container>

        <Container bg="transparent">

          <Callout label={<>40<sup>%</sup></>}>
            Up to 40% of patients with bronchiectasis have no specific
            identifiable cause of disease determined.<Ref>5</Ref>
          </Callout>

        </Container>

        <Container>
          <H2>The presentation of bronchiectasis often overlaps with other respiratory conditions<Ref>7,8</Ref></H2>
          <p>Bronchiectasis initially presents with nonspecific symptoms that mimic more common conditions such as COPD or asthma, which experts believe often delays diagnosis or leads to misdiagnoses.<Ref>5,8,9</Ref></p>
          <p><strong>Common symptoms associated with bronchiectasis<Ref>1,10,11</Ref>:</strong></p>

          
          <DefinitionList definitionKey="1.0-disease-state-overview-symptoms" className="tablet:pb-6" />

          <p className="mb-2"><strong>A definitive diagnosis of bronchiectasis requires both clinical criteria and radiological evidence.<Ref>1,9,11</Ref></strong></p>
          <ul className="dotted">
            <li>Clinical suspicion includes presence of symptoms and history of exacerbations</li>
            <li>Findings on imaging include dilated airways, lack of airway tapering, and airway visibility in the periphery</li>
          </ul>
        </Container>
      </section>
      
      <section id="exacerbation-burden" data-section>
        <Container bg="transparent" className='pt-[60px]'>
          <H2>Exacerbations play a critical role in bronchiectasis disease progression, with serious consequences for patients<Ref>12</Ref></H2>
          <p>Patients with bronchiectasis often <strong>suffer from periods of worsening symptoms, or exacerbations,</strong> which contribute to the burden of disease and can affect patients’ quality of life.<Ref>12</Ref></p>
          <p>Although exacerbations are considered separate from daily symptom burdens, many patients view them as a continuum of the disease and a part of daily life.<Ref>13</Ref> It’s important that patients are educated about the consequences of exacerbations and the appropriate actions to take, including when to seek medical help.</p>
          <H3>Identifying an exacerbation</H3>

          <Container width="full" bg="heated-gold" rounded="regular">
            <p><strong className="font-nunito leading-6 text-burnt-brick">There are no US guidelines that define a bronchiectasis exacerbation. However, a consensus definition from an expert committee defines an exacerbation as a patient experiencing the worsening of 3 or more of these symptoms over 48 hours, requiring a change in treatment<Ref>14</Ref>:</strong></p>
            
            <DefinitionList definitionKey="1.0-disease-state-overview-exacerbations" className="font-nunito text-burnt-brick font-bold lg:w-3/4 lg:m-auto block md:columns-2 lg:!grid-rows-3"/>

          </Container>
        </Container>

        <Container bg="transparent" className="lg:pt-0 tablet:pb-10">
          <H3>Exacerbations contribute to an increased physical and mental burden for patients with bronchiectasis<Ref>1,12</Ref></H3>
          <p>Exacerbations can negatively affect patients and their families, and are associated with<Ref>1,12,13</Ref>:</p>
          <ul className="dotted lg:grid lg:grid-cols-3 !pb-0">
            <li>Significant anxiety</li>
            <li>Lack of control</li>
            <li>Decreased quality of life</li>
            <li>Embarrassment</li>
            <li>Work and social interruptions</li>
          </ul>

          <span id="exacerbation-quote" className="block pb-20 lg:pb-16 -mb-16 lg:-mb-12"></span>
          
          <PullQuote attribution="Michelle, patient with bronchiectasis">
            It’s like waiting for a hurricane—there’s a constant level of fear and anxiety of the unknown. When will an exacerbation hit? How will my life be affected or change with this disease?
          </PullQuote>

          <Callout label="2x">
            Compared to patients with no exacerbations, patients who have experienced an exacerbation have nearly double the risk for another, and the risk increases with subsequent exacerbations.<Ref>12</Ref>
          </Callout>
        </Container>

        <Container width='xlarge' padding="medium" className='mt-[15px] !mb-[38px] md:mt-[24px] md:!mb-[60px]'>
          <PatientInfo />
        </Container>
        
        <section id="exacerbation-expert-video">
          <Container width="full" rounded="none" className="
              !z-0
              relative
              pt-[32px]
              pb-[16px]
              !mb-[31px]

              lg:flex
              lg:justify-center
              lg:items-center
              lg:flex-col
              lg:!mb-[60px]
              lg:pt-[51px]
              lg:pb-[34px]
          ">
            <Container bg="transparent" className="!px-0 !py-0">
              <VideoTitle>Expert commentary: The impact of exacerbations on patients with bronchiectasis</VideoTitle>
              <VideoPlayerWithTranscript videoData={commentaryVideoData} />
            </Container>
          </Container>
        </section>
        
        <Container width='xlarge' padding="medium" className='!mb-[21px] md:mt-[0] md:!mb-[31px]'>
          <SeriousEffects />
        </Container>

        <Container bg="transparent" padding="lg-none">
          <p>Data have shown that patients with bronchiectasis experiencing multiple exacerbations have significantly worse symptom frequency and severity, more limitations to activities, and more disturbances in social and mental functioning compared with those with fewer exacerbations.<Ref>12,17</Ref></p>
          <p className="pb-2 lg:pb-8">Preventing exacerbations can help make a <strong>positive impact</strong> on patients both physically and mentally.<Ref>1,12</Ref></p>
          <PullQuote attribution="Erica, patient with bronchiectasis">
            I’m always wondering what my tomorrows are going to be like, if they are going to be good or if they are going to be bad. I worry a lot and stress a lot. I have anxiety a lot because I never know.
          </PullQuote>
          <ReadMore href="/take-action/#management-plan" maxWidth={288}>
            Read more about managing exacerbations
          </ReadMore>
        </Container>

        <Container
          bg="transparent"
          width="large"
          className={`pt-12 px-0 mx-0`}
        >
          <Poll pollID={2} />
        </Container>

        <Container bg="transparent" className="pt-16">
          <NextPageDriver href="/bronchiectasis-pathophysiology/" icon="/images/icons/cycle-icon-white.svg" alt="Bronchiectasis cycle icon white"><div className="mr-4 lg:mr-0">Explore the pathophysiology of bronchiectasis</div></NextPageDriver>
        </Container>

        <Container bg="transparent" className="mt-8 !pt-0">
          <References pageName={pageName}/>
        </Container>
      </section>
    </Layout>
  );
};

export default DiseaseOverview;

export const Head = () => <HeadApi page={pageName} />