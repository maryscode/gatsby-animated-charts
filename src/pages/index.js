import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { H2, Container, Ref } from "../components/Core/";
import ReadMore from "../components/ReadMore";
import LinkDetail from "../components/LinkDetail";
import ConferenceCards from "../components/ConferenceCards";
import References from "../components/References";
import ScrollMagic from "scrollmagic";
import useIsMobile from "../hooks/useIsMobile";

import { HeadApi } from "../components/HeadApi";

const pageName = "index";

const Homepage = () => {

  const [scrolledIntoView, setScrolledIntoView] = useState(false);
  const isMobile = useIsMobile();
  const [hasDesktopVideo, setHasDesktopVideo] = useState(false);
  const [hasMobileVideo, setHasMobileVideo] = useState(false);
  const playPauseRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefDesktop = React.useRef(null);
  const videoRefMobile = React.useRef(null);

  useEffect(() => {
    // add the source to the video element based on if the browser is mobile or not, only do it once!
    if (isMobile && !hasMobileVideo) {
      const source = document.createElement("source");
      source.src = "/images/hero-video-mobile.mp4";
      source.type = "video/mp4";
      document.querySelector(".mobile-video").appendChild(source);
      setHasMobileVideo(true);
    } else if (isMobile === false && !hasDesktopVideo) {
      const source = document.createElement("source");
      source.src = "/images/hero-video-desktop.mp4";
      source.type = "video/mp4";
      document.querySelector(".desktop-video").appendChild(source);
      document.querySelector(".desktop-video").classList.add("desktop-video-mask");
      setHasDesktopVideo(true);
    }
    
  }, [isMobile]);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const showRef = new ScrollMagic.Scene({
      triggerElement: ".scrolled",
      triggerHook: 0.8,
      offset: -100
    })
    .addTo(controller)
    .on("enter", function (e) {
      setScrolledIntoView(true);
    });

    // check if browser is firefox and if so add class .ff to the div with videoBackground class
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
      document.querySelector(".videoBackground").classList.add("ff");
    }

    return () => {
      showRef.destroy();
    };
  }, []);

  const playPauseVideo = () => {
    const video = isMobile ? videoRefMobile.current : videoRefDesktop.current;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <Layout isHome={true}>
      <StyledDiv>
        <div className="z-[2] home-bg m-auto md:w-full md:h-auto md:overflow-x-hidden">
          <h1 className="hidden">In Bronchiectasis, Neutrophilic Inflammation can be a Damaging Force</h1>
          {/* mobile video */}
          <video ref={videoRefMobile} autoPlay loop muted playsInline className="block md:hidden w-full clipVideo maskBottom mobile-video" poster="/images/neutrophil-tornado-lung-house-campaign-graphic-mobile.jpg" alt="A pair of red lungs in the shape of a house with shutters and doors. It sits on a lawn with a tree, fence, and grass. A large tornado of yellow neutrophils is seen advancing toward the house. The impending storm pulls pieces of the house and surroundings skyward."></video>
          
          <div className="absolute top-0 left-0 w-full h-[692px] maskBottom videoBackground hidden md:block md:z-[-1]"></div>

          <div className="tablet:relative tablet:mt-[-35px] md:!absolute top-0 left-1/2 translate-x-[-50%] w-full desktop:w-[1366px] md:h-[692px] m-auto z-50">
            <div className="!absolute bottom-4 right-4">
              {(hasDesktopVideo || hasMobileVideo) && 
                <button ref={playPauseRef} onClick={() => playPauseVideo()} className="w-[50px] h-[50px] flex justify-end items-end md:justify-center md:items-center">
                  { isPaused ? <img src="/images/vortex/play-vortex.svg" alt="Play icon" />
                  : <img src="/images/vortex/pause-vortex.svg" alt="Pause icon" /> }
                </button>
              }
            </div>
          </div>
          
          {/* desktop video */}
          <video ref={videoRefDesktop} autoPlay loop muted playsInline className="hidden md:block w-full h-auto m-auto desktop-video" poster="/images/neutrophil-tornado-lung-house-campaign-graphic.jpg" alt="A pair of red lungs in the shape of a house with shutters and doors. It sits on a lawn with a tree, fence, and grass. A large tornado of yellow neutrophils is seen advancing toward the house. The impending storm pulls pieces of the house and surroundings skyward."></video>

        </div>

        <Container bg="transparent" width="large" padding="none" className=" z-[3] !mb-9 px-4 md:pt-[230px]">
          <div className="max-w-[468px] mobile:m-auto bg-white p-4 rounded mx-4 md:mx-0 bg-[rgba(255,255,255,.8)] mobile:mt-[-40px]">
            <p className={`mb-2 text-blazing-rose font-bold`}>
              Neutrophils and neutrophil serine proteases (NSPs) normally help protect the lungs from harm, but in bronchiectasis they can contribute to
              inflammation and lung destruction.<Ref>1-6</Ref>
            </p>
            <p className="mb-0">
              Too many neutrophils releasing an excess of NSPs can cause inflammation—a key component of bronchiectasis with limited treatment options. This
              neutrophilic inflammation can lead to devastating consequences, including increased exacerbation frequency and disease progression.
              <Ref>2,5-7</Ref>
            </p>
          </div>
        </Container>

        <Container bg="transparent" width="large" padding="none" className="z-[4] px-8 lg:px-4 py-0 !mb-[71px]">
          <div className="max-w-[468px] mobile:m-auto">
            <ReadMore to="/bronchiectasis-pathophysiology" className="">
              See how chronic airway inflammation, primarily neutrophilic, is one of the <span className="whitespace-nowrap">4 primary</span> drivers of bronchiectasis<Ref>1,8</Ref>
            </ReadMore>
          </div>
        </Container>
        <Container bg="transparent" width="large" padding="none" className="flex flex-col md:flex-row justify-around !mb-[58px]">
          <LinkDetail icon="/images/icons/lungs-disease-icon.svg" href="/disease-overview/#exacerbation-burden" label="See the data" alt="Lungs disease icon">
            Learn how exacerbations contribute to the burden of disease in bronchiectasis<Ref>9</Ref>
          </LinkDetail>
          
          <LinkDetail icon="/images/icons/email-icon.svg" href="/stay-informed/" label="Register now" alt="Email icon">
            Keep up with bronchiectasis research and information
          </LinkDetail>

        </Container>

        <section id="events" data-section>
          <Container bg="transparent" rounded="none" width="large" className="">
            <div className="flex justify-center text-center">
              <H2 lineWidth={161} linePosition={`center`}>Upcoming events</H2>
            </div>
            <p className="lg:w-3/4 lg:max-w-[688px] text-center mb-[32px] mx-auto">
              Make sure you don’t miss the following events featuring information about bronchiectasis, expert commentary, and more.
            </p>
            <ConferenceCards scrolledIntoView={scrolledIntoView}/>
            <p className="scrolled w-4/5 mx-auto text-center mt-[66px] !mb-[34px] lg:!mt-[15px] lg:!mb-[4px]">
              <strong>Check back periodically to see additional event listings.</strong>
            </p>
          </Container>
        </section>
        
        <Container bg="transparent" width="large" className="flex justify-center text-center !p-0 !pb-1 !mb-0">
          <References pageName={pageName}/>
        </Container>

      </StyledDiv>
    </Layout>
  );
};

export const Head = () => <HeadApi page={pageName} />;

export default Homepage;

const StyledDiv = styled.div`
  
  overflow-x: hidden;
  
  .desktop-video-mask {
    mask-image: url('/images/hero-video-desktop-mask.png');
    mask-size: cover;
  }
  
  .maskBottom {
    mask-image: linear-gradient(
      to top, 
      transparent 0%,
      black 8%
    );
  }

  width: 100%;
  margin-top: -38px;
  div { position: relative; }

  .videoBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 692px;
    max-width: 1920px;
    right: 0;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/images/background-1366x692_CHROME.jpg');
    
    &.ff {
      background-image: url('/images/background-1366x692_FF.jpg');
    }    
  }

  @media (min-width: 768px) {
    video {
      width: 1366px;
      height: 692px;
      object-fit: cover;
      object-position: 10% 0%;
    }
    .home-bg {
      position: absolute;
      left: 0;
      right: 0;
    }
  }
  
  .mobile-bg {
    width: 100%;
    height: auto;
    max-width: none;
  }
  /* .desktop-bg {display: none} */
  @media (min-width: 768px) {
    .desktop-bg {
      display: block;
      top: 74px;
      width: 100%;
      height: auto;
    }
    .mobile-bg {display: none}
    padding-top: 0;
  }
`;
