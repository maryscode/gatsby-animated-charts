import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { Container, Ref } from "../Core";

/**
 * Component definition
 */
export const Vortex = () => {
  const playPauseRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const tl = useRef();
  
  const vortexElements = useRef(Array.from({length:4}).fill().map(() => React.createRef()));
  const vortexDots = useRef(Array.from({length:4}).fill().map(() => React.createRef()));
  const playPositions = [0, 0.35, 0.65, 0.8];

  const createVortexIndicatorDots = () => {
    const indicators = [];
    for (let i = 0; i < 4; i++) {
      indicators.push(<span ref={vortexDots.current[i]} id={`vortex-dot-${i + 1}`} className="vortex-indicator__dot" onClick={(e) => {e.preventDefault();setPlayPosition(i)}} key={i}></span>);
    }
    return indicators;
  };

  const setPlayPosition = (position) => {    
    console.log(`setPlayPosition: ${position}, ${playPositions[position]}`)
    playPauseTimeline(true);
    tl.current.progress( playPositions[position] );
  };

  const playPauseTimeline = (bool=null) => {
    
    const newVal = bool === null ? !isPaused : bool;
    if (bool) {
      setIsPaused(newVal);
    } else {
      setIsPaused(newVal);
    }
    console.log(`playPauseTimeline: bool = ${bool}, newVal = ${newVal}`)
    tl.current.paused(newVal);
    
  };

  useEffect(() => {

    const holdTime = 4;
    const fadeTime = .65;

    const currentIndex = -1;
    tl.current = gsap.timeline({ repeat: -1 });

    // timeline should probably be build in a loop
    gsap.set(vortexElements.current[0].current, { opacity: 1 });

    tl.current = gsap.timeline({ repeat: -1 })
      .to(vortexElements.current[0].current, { duration: fadeTime, opacity: 1 }, holdTime*0)
      .to(vortexElements.current[0].current, { duration: fadeTime, opacity: 0, delay:holdTime }, holdTime*0)

      .to(vortexElements.current[1].current, { duration: fadeTime, opacity: 1 }, holdTime*1)
      .to(vortexElements.current[1].current, { duration: fadeTime, opacity: 0, delay:holdTime }, holdTime*1)

      .to(vortexElements.current[2].current, { duration: fadeTime, opacity: 1 }, holdTime*2)
      .to(vortexElements.current[2].current, { duration: fadeTime, opacity: 0, delay:holdTime }, holdTime*2)

      .to(vortexElements.current[3].current, { duration: fadeTime, opacity: 1 }, holdTime*3)
      .to(vortexElements.current[3].current, { duration: fadeTime, opacity: 0, delay:holdTime }, holdTime*3)
      .to(vortexElements.current[0].current, { duration: fadeTime, opacity: 1, delay:holdTime }, holdTime*3)

      ///

      .to(vortexDots.current[0].current, { backgroundColor: "#b83b4d", duration:0 }, holdTime*0)
      .to(vortexDots.current[0].current, { duration: fadeTime, backgroundColor: "#ffffff", delay:holdTime }, holdTime*0)

      .to(vortexDots.current[1].current, { duration: fadeTime, backgroundColor: "#b83b4d" }, holdTime*1)
      .to(vortexDots.current[1].current, { duration: fadeTime, backgroundColor: "#ffffff", delay:holdTime }, holdTime*1)

      .to(vortexDots.current[2].current, { duration: fadeTime, backgroundColor: "#b83b4d" }, holdTime*2)
      .to(vortexDots.current[2].current, { duration: fadeTime, backgroundColor: "#ffffff", delay:holdTime }, holdTime*2)

      .to(vortexDots.current[3].current, { duration: fadeTime, backgroundColor: "#b83b4d" }, holdTime*3)
      .to(vortexDots.current[3].current, { duration: fadeTime, backgroundColor: "#ffffff", delay:holdTime }, holdTime*3)
      .to(vortexDots.current[0].current, { duration: fadeTime, backgroundColor: "#b83b4d", delay:holdTime }, holdTime*3)

    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <VortexStyles className="vortex-container flex justify-center items-center flex-col">
      
      <div className="absolute top-0 left-0 ml-[-14px] lg:ml-[-19px] w-full text-center text-primary font-bold text-[12px] lg:text-[14px] text-gray-dark">
        Click to explore
      </div>

      {/* ELEMENT BUTTONS */}
      <div id="elementInterface" className="slide flex justify-center items-center flex-col opacity-0 z-10">
        <div className="relative">
          <img
            id="element-img-1"
            src={`/images/vortex/bronchiectasis-vortex-states-chronic-airway-infection.png`}
            alt="Bronchiectasis vortex states - chronic airway infection"
            className="slide-img mb-6"
          />          
          <div className="infection absolute top-0 left-1/3 w-1/3 h-1/6  bg-baked-coral bg-opacity-50 z-10 cursor-pointer" onClick={(e) => {setPlayPosition(0)}}></div>
          <div className="inflammation absolute top-1/3 right-0 w-1/4 h-1/3  bg-baked-coral bg-opacity-50 z-10 cursor-pointer" onClick={(e) => {setPlayPosition(1)}}></div>
          <div className="impaired-clearance absolute bottom-0 left-1/3 w-1/3 h-1/5  bg-baked-coral bg-opacity-50 z-10 cursor-pointer" onClick={(e) => {setPlayPosition(2)}}></div>
          <div className="lung-destruction absolute top-1/3 left-0 w-1/4 h-1/3  bg-baked-coral bg-opacity-50 z-10 cursor-pointer" onClick={(e) => {setPlayPosition(3)}}></div>
        </div>
        <Container id="element-copy-1" padding="none" className="slide-copy flex items-center transition-opacity mobile:p-5 lg:p-6 gap-5 lg:gap-6 invisible">
          <img src="/images/icons/infected-lungs-icon.png" alt="Infected lungs icon" className="w-[72px] h-[72px]" />
          <p>
            Chronic airway infection contributes to the pathophysiology of bronchiectasis by inducing chronic airway inflammation, which can lead to progressive
            airway damage and injury.<Ref>1</Ref>
          </p>
        </Container>
      </div>

      {/* ELEMENT 1 */}
      <div ref={vortexElements.current[0]} id="element1" className="slide flex justify-center items-center flex-col opacity-0">
        <div className="relative">
          <img
            id="element-img-1"
            src={`/images/vortex/bronchiectasis-vortex-states-chronic-airway-infection.png`}
            alt="Bronchiectasis vortex states - chronic airway infection"
            className="slide-img mb-6"
          />  
        </div>
        <Container id="element-copy-1" padding="none" className="slide-copy flex items-center transition-opacity mobile:p-5 lg:p-6 gap-5 lg:gap-6">
          <img src="/images/icons/infected-lungs-icon.png" alt="Infected lungs icon" className="w-[72px] h-[72px]" />
          <p>
            Chronic airway infection contributes to the pathophysiology of bronchiectasis by inducing chronic airway inflammation, which can lead to progressive
            airway damage and injury.<Ref>1</Ref>
          </p>
        </Container>
      </div>

      {/* ELEMENT 2 */}
      <div ref={vortexElements.current[1]} id="element2" className="slide flex justify-center items-center flex-col opacity-0">
        <img
          id="element-img-2"
          src={`/images/vortex/bronchiectasis-vortex-states-chronic-airway-inflammation.png`}
          alt="Bronchiectasis vortex states - chronic airway inflammation"
          className="slide-img mb-6"
        />
        <Container id="element-copy-2" padding="none" className="slide-copy flex items-center mobile:p-5 lg:p-6 gap-5 lg:gap-6">
          <img src="/images/vortex/airways-inflammation-icon.svg" alt="Airways inflammation icon" className="w-[72px] h-[72px]" />
          <div>
            <p className="mb-3">
              Extensive infiltration of the airways by inflammatory cells<Ref>1,3,4</Ref>:
            </p>
            <ul className="dotted">
              <li>Neutrophils</li>
              <li>Eosinophils</li>
              <li>Macrophages</li>
              <li>Lymphocytes</li>
            </ul>
          </div>
        </Container>
      </div>

      {/* ELEMENT 3 */}
      <div ref={vortexElements.current[2]} id="element3" className="slide flex justify-center items-center flex-col opacity-0">
        <img
          id="element-img-3"
          src={`/images/vortex/bronchiectasis-vortex-states-impaired-mucociliary-clearance.png`}
          alt="Bronchiectasis vortex states - impaired mucociliary clearance"
          className="slide-img mb-6"
        />
        <Container id="element-copy-3" padding="none" className="slide-copy flex items-center mobile:p-5 lg:p-6 gap-5 lg:gap-6">
          <img src="/images/vortex/airways-retention-icon.svg" className="w-[72px] h-[72px]" />
          <p>
            Dysfunctional mucociliary clearance can lead to sputum retention in the airways, creating a harbor for infection and inflammation.<Ref>1</Ref>
          </p>
        </Container>
      </div>

      {/* ELEMENT 4 */}
      <div ref={vortexElements.current[3]} id="element4" className="slide flex justify-center items-center flex-col opacity-0">
        <img
          id="element-img-4"
          src={`/images/vortex/bronchiectasis-vortex-states-lung-destruction.png`}
          alt="Bronchiectasis vortex states - lung destruction"
          className="slide-img mb-6"
        />
        <Container id="element-copy-4" padding="none" className="slide-copy flex items-center mobile:p-5 lg:p-6 gap-5 lg:gap-6">
          <img src="/images/icons/lungs-damage-icon.svg" alt="Lungs damage icon" className="w-[72px] h-[72px]" />
          <p>
            Structural lung damage involving bronchial wall destruction and dilation<Ref>1</Ref>
          </p>
        </Container>
      </div>

      <div className="vortex-indicator">
        {createVortexIndicatorDots()}
      </div>

      <div className="play-pause">
        <button ref={playPauseRef} onClick={() => playPauseTimeline()}>
            { isPaused ? <img src="/images/vortex/play-vortex.svg" alt="Play icon" />
            : <img src="/images/vortex/pause-vortex.svg" alt="Pause icon" /> }
        </button>
      </div>

    </VortexStyles>
  );
};

const VortexStyles = styled.div`
  position: relative;
  margin-top: 2.5rem;
  height: 565px;
  width: 100%;
  @media (min-width: 768px) {
    width: 420px;
    height: 637px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1024px) {
    margin-right: 0;
    margin-left: 0;
  }
  .slide {
    position: absolute;
    top: 1.85rem;    
  }
  .dotted {
    margin-bottom: 0px;
    @media (min-width: 768px) {
      columns: 2;
    }
  }
  .slide-copy {
    width: calc(100% - 32px);
    @media (max-width: 768px) {
      margin-top: -10px;
    }
    @media (min-width: 375px) {
      width: 320px;
    }
    @media (min-width: 768px) {
      width: 420px;
    }
  }

  .slide-img {
    pointer-events: none;
    width: calc(100% - 32px);
    @media (min-width: 375px) {
      width: 320px;
    }
    @media (min-width: 768px) {
      width: 420px;
    }
  }

  .vortex-indicator {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 60px;
    right: 47px;
    top: 288px;
    
    @media (min-width: 768px) {
      right: 40px;
      top: 354px;
    }

    .vortex-indicator__dot {
      width: 10px;
      height: 10px;
      border: 1px solid #b83b4d;
      border-radius: 50%;
      background-color: #ffffff;
      cursor: pointer;
    }
  }
  .play-pause {
    position: absolute;
    z-index: 100;
    right: 11px;
    top: 284px;
    @media (min-width: 768px) {
        right: 0px;
        top: 350px;
    }
  }
`;
