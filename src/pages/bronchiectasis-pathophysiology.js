import React from "react";
import { HeadApi } from "../components/HeadApi";
import Layout from "../components/Layout";
import { Container, H1, H2, H3, Ref } from "../components/Core";
import ReadMore from "../components/ReadMore";
import Poll from "../components/Poll";
import { VideoPlayerWithTranscript, VideoTitle } from "../components/VideoPlayer";
import NextPageDriver from "../components/NextPageDriver";
import { Vortex } from "../components/Vortex";
import { VideoData } from "../data/Videos";
import References from "../components/References";

const pageName = "Pathophysiology";

const Pathophysiology = () => {
  const commentaryVideoData = VideoData.find((video) => video.id === "822107674");
  const mechanismVideoData = VideoData.find((video) => video.id === "823063852");


  return (
    <>
      <Layout>
        <section id="drivers" data-section>
          <Container bg="transparent" className="lg:pb-0 !z-0 relative">
            <div className="relative lg:w-[calc(100%+5rem)] lg:flex lg:justify-between lg:items-start">
              <div className="vortex-text-container max-w-[500px]">
                <H1 icon="/images/icons/cycle-icon-colorful.svg"  alt="Cycle icon colorful" className="">How the 4 drivers of bronchiectasis contribute to disease progression<Ref>1</Ref></H1>
                <p className="lg:max-w-[335px]">Bronchiectasis has been characterized in scientific literature as a <strong>vicious cycle or vortex</strong> consisting of 4 primary drivers: chronic airway infection, chronic airway inflammation—primarily neutrophilic, impaired mucociliary clearance, and lung destruction.<Ref>1,2</Ref></p>
                <p className="lg:max-w-[335px]">
                  Within the self-perpetuating cycle of bronchiectasis, each driver can lead to the worsening of the others and contribute to <strong>progressive lung damage and exacerbations.<Ref>1,3</Ref></strong></p>
              </div>
              <Vortex />
            </div>
          </Container>

          
        </section>

        <Container id="understanding-drivers-expert-video" width="full" rounded="none" className="lg:flex lg:justify-center lg:items-center lg:flex-col mb-12 !z-0 relative">
          <Container bg="transparent" className="!px-0 !pb-0 md:mt-[-22px]">
            <VideoTitle as="h2">Expert commentary: The vicious vortex of bronchiectasis</VideoTitle>
            <VideoPlayerWithTranscript videoData={commentaryVideoData} />
          </Container>
        </Container>

        <section id="neutrophilic-inflammation" data-section>
          <Container bg="transparent" className='mt-[44px] lg:mt-0'>
            <H2 className="mobile:pb-0 mobile:mb-6">A current area of investigation in bronchiectasis is the role of neutrophils and the activity of neutrophil-derived enzymes<Ref>2</Ref></H2>
            <p className="mb-0 md:mb-4">Management in bronchiectasis has been focused on combating infection, improving airway clearance, and mitigating the impact of chronic lung disease.<Ref>5</Ref> Neutrophils and neutrophil-derived enzymes such as neutrophil serine proteases (NSPs) are key drivers of airway inflammation in bronchiectasis; however, there are <strong>limited treatments to adequately address chronic airway inflammation</strong> in patients.<Ref>6-8</Ref> </p>
            <div className="lg:flex lg:items-center mb-4">
              <img src={`/images/pathophysiology/neutrophil-releasing-neutrophil-elastase-graphic@2x.png`} alt="Neutrophil releasing neutrophil elastase graphic" className="w-[71px] h-[73px] lg:mr-3 mx-auto mt-[4px] mb-[16px]" />
              <p className="mb-0">Neutrophils <strong>normally serve as the first line of defense</strong> against a range of pathogenic infections, but during bronchiectasis, changes in the airway environment cause neutrophils to become dysregulated, which leads to longer survival and release of excessive NSPs, including neutrophil elastase (NE).<Ref>7-10</Ref></p>
            </div>
            <p>The <strong>overactivity of NE</strong> contributes to chronic inflammation, concomitant tissue damage, and an increased risk of future exacerbations.<Ref>11-13</Ref></p>
            <ReadMore href="/disease-overview/#exacerbation-burden">
              Learn how the pathophysiology of bronchiectasis contributes to exacerbations
            </ReadMore>
          </Container>    


          <Container id="mod-video" width="full" rounded="none" className="lg:flex lg:justify-center lg:items-center lg:flex-col mb-12 !z-0 relative">
            <Container bg="transparent" className="!px-0 !pb-0 md:mt-[-22px]">
              <VideoTitle>Bronchiectasis mechanism of disease</VideoTitle>
              <VideoPlayerWithTranscript videoData={mechanismVideoData} />
            </Container>
          </Container>
          
        </section>
        

        <Container
          bg="transparent"
          width="large"
          className={`pt-12 px-0 mx-0`}
        >
          <Poll pollID={1} />
        </Container>

        <Container
        bg="transparent"
        className={`pt-12`}
        >
          <NextPageDriver href="/take-action/" icon="/images/icons/managing-bronchiectasis-icon-white.svg" alt="Managing bronchiectasis icon white">
            Learn more about the management of bronchiectasis
          </NextPageDriver>   
        </Container>
             

        <Container bg="transparent" className="mt-8 !pt-0">
          <References pageName={pageName}/>
        </Container>
      </Layout>
    </>
  );
};

export default Pathophysiology;

export const Head = () => <HeadApi page={pageName} />