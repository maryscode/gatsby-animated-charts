import React, { useEffect } from "react";
import styled from "styled-components";
import { H3, H4, Ref, Container } from "../../components/Core";
import Footnote from "../../components/Footnote";
import ScrollMagic from "scrollmagic";

const SeriousEffects = () => {

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const lineChartAnimation = new ScrollMagic.Scene({
      triggerElement: ".line-chart-container",
      triggerHook: 0.8,
    })
    .setClassToggle('.line-chart-container .reveal', 'animate')
    .addTo(controller);

    return () => {
      lineChartAnimation.destroy();
    };
  }, []);


  return (
    <StyledSection>
      <Container padding="none" className='mt-[8px] !mb-[2px] md:mt-0 md:!mb-[4px]  '>
        <H3>
          Bronchiectasis patients can experience serious long-term effects from exacerbations<Ref>12</Ref>
        </H3>
        <p className="mt-0 pb-0 mb-2">Data from a study of 2,572 patients with bronchiectasis from 10 clinical centers across Europe and Israel showed that<Ref>12</Ref>:</p>
        <ul className="dotted">
          <li><span>Patients with 2 or more exacerbations per year at baseline had a&nbsp;<strong>60% increased risk</strong> of 5-year all-cause mortality</span></li>
          <li><span>Patients with 3 or more exacerbations per year at baseline had an&nbsp;<strong>86% increased risk</strong> of 5-year all-cause mortality</span></li>
        </ul>
        
        <H4 className="w-[270px] mx-auto md:w-auto md:mr-12 md:ml-[50px] md:mt-10 mb-5">Survival by number of baseline exacerbations per year<Ref>12</Ref></H4>
        
        
        <StyledSection.Chart className="line-chart-container mb-5">  
          <div>
            <img src="/images/disease-overview/mobile-survival-chart-exacerbations.png" className="mobile-chart mx-auto md:hidden" alt="Chart of survival rate by a number of baseline exacerbations per year" />
            <img src="/images/disease-overview/desktop-survival-chart-exacerbations.png" className="desktop-chart hidden md:block " alt="Chart of survival rate by a number of baseline exacerbations per year" />
            <div className="reveal"></div>
          </div>
        </StyledSection.Chart>

        <Footnote symbol="">
        Source: Reprinted with permission of the American Thoracic Society. Copyright © 2023 American Thoracic Society. All rights reserved. The{" "}
        <em>American Journal of Respiratory and Critical Care Medicine</em> is an official journal of the American Thoracic Society. 
        </Footnote>
        <p className="mt-6 !mb-0">Frequent bronchiectasis exacerbations are associated with disease progression, lower lung function, and worse outcomes.<Ref>12,16</Ref></p>
        </Container>
    </StyledSection>
  );
};

export default SeriousEffects;

const StyledSection = styled.div`
`;

StyledSection.Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  & > div {
    position: relative;
  }
  .mobile-chart {
    width: 313px;
    height: 435px;
    margin-right: auto;
    margin-left: auto;
  }
  .desktop-chart {
    width: 791px;
    height: 433px;
  }
  .reveal {
    position: absolute;
    right: 0;
    top: 0px;
    width: 249px;
    height: 273px;
    background: #fff;
    transition: width 1.5s ease-in-out;
    @media screen and (min-width: 768px) {
      width: 87%;
      height: 60%;
    }

  }
  .reveal.animate {
    width: 0;
  }

`;