// StyledPollChoice.js
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  &.disabled {
    cursor: not-allowed;
  }
  &:before {
    /* background: red; */
    border-radius: 3rem;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 1s ease-in-out;
    width: 100%;
    z-index: -1;
    transform: translateX(${(props) => (props.shouldShowPercentage ? ((props.percent-0)+'%') : '-100%')});
  }
`;

const StyledPollChoice = ({ label, shouldShowPercentage, isSelected, percent, onClick, whichResponse, isDisabled }) => {
  
  const formatPercent = (percent) => {
    return `${100 - parseInt(-percent)}%`;
  };
  
  return (
    <StyledButton disabled={isDisabled} onClick={onClick} percent={percent} shouldShowPercentage={shouldShowPercentage} 
      className={`${isDisabled ? 'disabled pointer-events-none' : ''} w-full px-4 flex items-center font-bold text-black rounded-full border-2 ${isSelected ? 'border-burnt-brick' : 'border-gray'} h-10 ${shouldShowPercentage && 'pointer-events-none'} before:bg-heated-gold lg:text-[16px] z-1`}>
      <span className="grow text-left">{label}</span>
      <span className={`text-burnt-brick ${shouldShowPercentage ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-1000`}>{shouldShowPercentage && formatPercent(percent)}</span>
    </StyledButton>
  );
};

export default StyledPollChoice;
