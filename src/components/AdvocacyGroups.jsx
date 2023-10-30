import React from 'react';
import styled from "styled-components";
import H3 from "./Core/H3";
import { Button } from './Button';
import { AdvocacyGroupsData } from '../data/AdvocacyGroups'

const mobileBreakpoint = '768px';

const AdvocacyContainer = () => {
  return (
    <>
      {AdvocacyGroupsData.map((eachSet, index) => (
        <AdvocacyContainerDiv id={eachSet.sectionTitle.indexOf("societies") > -1 ? "societies" : null} key={index}>
          {eachSet.sectionTitle ? <H3 className={eachSet.sectionTitle.indexOf("societies") > -1 ? "pt-6" : null} >{eachSet.sectionTitle}</H3> : null}
          {eachSet.advocacySectionGroup.map((group, index) => (
            <AdvocacyGroup key={index} data={group} />
          ))}
        </AdvocacyContainerDiv>
      ))}
    </>
  );
}

const AdvocacyGroup = ({ data }) => {
  return (
    <AdvocacyGroupDiv>
      <div className="content">
        <div>
          <hr />
          {data.title ? (<p className="title">{data.title}</p>) : null }
          {data.logo ? (<img className="advocacy-logo" src={data.logo.url} alt={data.logo.alt} style={{width: data.logo.width}} />) : null }
          <p className="description pb-4 lg:pb-3">
            {data.description}
          </p>
        </div>
        <Button label={data.link.title} href={data.link.href} type={data.link.type} />
      </div>
    </AdvocacyGroupDiv>
  );
}

export default AdvocacyContainer;

// to center the last grid item if it's odd, check this link:
// https://www.billerickson.net/css-grid-center-last-item/
const AdvocacyContainerDiv = styled.div`
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${mobileBreakpoint}) {
    padding: 1rem;
  }

  .h3-component {
    grid-column: span 1 / span 1;
    margin: 0;
    @media (min-width: ${mobileBreakpoint}) {
      /* margin: 0 1rem; */
    }  
  }

  @media (min-width: ${mobileBreakpoint}) {
    padding: 1.5rem 0 0;
    grid-template-columns: 1fr 1fr;
    /* margin-bottom: 75px; */
    margin-bottom: 0;
    .h3-component {
      grid-column: span 2 / span 2;
    }
  }
`;


const AdvocacyGroupDiv = styled.div`
  margin-top:.75rem;
  margin-bottom: .75rem;

  /* Center last odd child */
  @media (min-width: ${mobileBreakpoint}) {
    
    &:nth-child(even):last-child {
      grid-column: 1 / span 2;
      margin-bottom: 0;
      margin-left: 5rem;
      .content { margin: 0 auto;}
    } 
  }

  
  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 352px;
    margin: 0;
    align-items: flex-start;
    @media (min-width: ${'768px'}) {
      /* align-items: unset; */
    } 
  }

  hr {
    height: 1px;
    background: #707070;
    border: none;
    max-width: 248px;
    width: 100%;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  img.advocacy-logo {
    margin-bottom: .75rem;
  }

  .title {
    font-weight: bold;
    margin-bottom: .75rem;
  }

  .description {
    margin-bottom: .75rem;
  }
  
 &:first-of-type {
    hr {
      display: none;
    }
  }
  
  
  //TODO: Remove this class and add the styles to the Button component
  a.class-to-remove {
    width: calc(100% - 2rem);
    height: auto;
    padding: 5px 15px;
    font-size: 16px;
  }
  @media (min-width: ${'358px'}) {
    a.class-to-remove {
      width: max-content;
    }
  }
  //////////////////////////////////////////////////////////////////////


  @media (min-width: ${mobileBreakpoint}) {
    display: flex;
    hr {
      display: none;
    }
    .title {
      min-height: 44px;
    }
    img {
      height: 85px;
      object-fit: contain;
    }
    &:nth-child(odd) {
      justify-content: flex-end;
      border-left: 1px solid #707070;
    }
    &:nth-child(even) {
      border: none
    }
  }
  .button {}
`;