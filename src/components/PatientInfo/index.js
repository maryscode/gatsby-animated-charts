import React from "react";
import styled from "styled-components";
import { H3, H4, Ref, Container } from "../../components/Core";
import Footnote from "../Footnote";
import BarChart from "../../components/Charts/BarChart";

const PatientInfo = () => {
  return (
    <StyledSection className="">
      <Container padding="none" className='!mb-0'>
        <H3>
          Most patients with bronchiectasis experience 1 or more exacerbations, resulting in greater disease burden over time<Ref>15</Ref>
        </H3>
        <p className="">A retrospective study of US commercial claims and Medicare supplemental core databases included data from 14,798 bronchiectasis patients aged ≥18 years and found that a majority of bronchiectasis patients experienced<Ref>15</Ref>:</p>
        <ul className="dotted">
          <li><span><strong>1 or more exacerbations</strong>&nbsp;at Years 1 and 2 of follow-up</span></li>
          <li><span><strong>Increased hospitalizations</strong>&nbsp;from Year 1 to Year 2</span></li>
        </ul>
        
        <H4 className="w-[308px] mx-auto md:w-auto md:mr-12 md:ml-[75px] md:mt-10 mb-5">Pulmonary exacerbation* occurrences over time periods in patients with non-cystic fibrosis bronchiectasis (N=14,798)<Ref>15</Ref></H4>

        <BarChart />
        
        <Footnote symbol="*">
        Pulmonary exacerbation defined here as an inpatient claim with a non-cystic fibrosis bronchiectasis diagnosis or a healthcare interaction, followed by an antibiotic prescription within 7 days.
          <Ref>15</Ref>
        </Footnote>
        <Footnote symbol="">
          Source: adapted from Flume PA, et al. <em>ERJ Open Res</em>. 2023;00021-02023.
        </Footnote>
        <Footnote symbol="">
          Copyright ©Flume PA, et al 2023 - This version is distributed under the terms of the Creative Commons Attribution Non-Commercial License 4.0.
        </Footnote>
      </Container>
    </StyledSection>
  );
};

export default PatientInfo;
const StyledSection = styled.div`
`;

StyledSection.Chart = styled.div`
  .mobile-chart {
    width: 308px;
    height: 922px;
  }
  .desktop-chart {
    width: 779px;
    height: 423px;
  }
  .legend img {
    width: 292px;
    height: 58px;
    @media screen and (min-width: 768px) {
      margin: 27px 0 0 71px;
    }
  }
`;