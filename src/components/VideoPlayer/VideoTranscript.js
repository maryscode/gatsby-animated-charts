/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useImperativeHandle, forwardRef} from "react";
import styled from "styled-components";
import { CSS } from "../Theme";




const VideoTranscript =  forwardRef ( ({ transcript }, ref) => {
  const [open, setOpen] = useState(false);
  const transcriptRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    scrollTranscriptTop() {
      transcriptRef.current.scrollTop = 0;
    }
  }));

  return (
    <div className={`order-2 lg:order-3 mt-3 lg:mt-6 col-span-full relative`}>
      
      <div 
        onClick={() => {setOpen(!open)}}
        className="gtm-accordion relative flex py-2 lg:mt-3 lg:pt-1 items-center"
        track-label="Transcript"
      >
        <div className="flex-grow border-t border-black opacity-50"></div>
        <StyledToggleButton className={open ? 'minus' : ''}>
          <span></span>
          <span></span>
        </StyledToggleButton>
        <div className="flex-grow border-t border-black opacity-50"></div>
      </div>
      <div className="text-center text-primary font-bold text-[14px] text-gray-dark">
      {open ? "Hide" : "Show"} transcript
      </div>

      <div ref={transcriptRef} className={`${open ? 'h-[155px]' : 'h-[0px]'} transition-height duration-500 ease-in-out overflow-y-scroll pr-4 lg:pr-2 mt-4 transcript`}>
        {transcript}
      </div>
      
    </div>
  );
});

export default VideoTranscript;

const StyledToggleButton = styled.button`
position: relative;
  background-color: ${CSS.COLORS.blazingRose};
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 32px;
  height: 32px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  &:hover {
    background-color: ${CSS.COLORS.burnBrick};
  }
  
  &.minus span:nth-child(2) {
    display: none;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    background: #fff;
    width: 3px;
    height: 14px;
    margin: -7px 0 0 -1.5px;
    @media screen and (min-width: 768px) {
      width: 4px;
      height: 16px;
      margin: -8px 0 0 -2px;
    }
  }
  span:nth-child(1) {
    height: 3px;
    width: 14px;
    margin: -1.5px 0 0 -7px;
    @media screen and (min-width: 768px) {
      height: 4px;
      width: 16px;
      margin: -2px 0 0 -8px;      
    }
  }
`;