import React from 'react';
import styled from 'styled-components';
import { widthLookup, bgColorLookup, roundedLookup, paddingLookup } from '../../utils';

/* 
  Container component
  - used to wrap content in a Container
  - typically all content in the site is wrapped in Containers

  - bg: background color
  -   values: white, heated-gold, transparent
  -   see src/utils/index.js for values based on tailwind.config.js
  -     note: white and transparent backgrounds have specific padding applied in bgColorLookup
  - width: width of container
  -   values: small, regular, large, full, custom (if using custom, you must set the width via TailWind. e.g. w-auto lg:w-[688px])
  -   see src/utils/index.js for values based on tailwind.config.js
  - rounded: rounded corners
  -   values: sm, regular, full, none
  -   see src/utils/index.js for values based on tailwind.config.js
  - icon: icon to display in container
  -   this is passed as a string path to /static/images/ assets
  -   the icon will show up horizonally centered along the top edge
  - className: additional class(es) to add to container
*/

const Container = ({bg='white', width='regular', rounded='regular', padding='regular', icon=null, className=null, children, id, ...props}) => {
  return (
    <ContainerDiv 
      id={id}
      className={`container mx-auto 
        ${widthLookup[width]} 
        ${bgColorLookup[bg]} 
        ${roundedLookup[rounded]}
        ${paddingLookup[padding]}
        ${className ? className : ''}
      `}
      {...props}
    >
      {children}
    </ContainerDiv>
  );
}

/*
last element in a container shouldn't add it's margin bottom to the container
this may cause issues, it can be removed if it does, but be mindful that doing that after page development starts will change all containers
*/
const ContainerDiv = styled.div`

  & > div:last-child,
  & > p:last-child,
  & > ul:last-child {
    margin-bottom: 0;
  }
  & > .container {
    & > ul:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
  
  /* overwrite something in common.css */
  max-width: initial!important;

  /* default spacing between Containers confirmed with XD */
  margin-bottom: 10px;
  @media (min-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export default Container;