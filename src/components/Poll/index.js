import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Data } from "../../data/Polls";
import StyledPollChoice from "./StyledPollChoice";
import { GATSBY_API_ENDPOINT } from "../../constants";

const Poll = ({ pollID }) => {
  const poll = Data.find((p) => p.id === pollID);
  const [selectedResponseID, setSelectedResponseID] = useState(null);
  const [responseStats, setResponseStats] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [numResponses, setNumResponses] = useState(0);
  const minimumResponses = 10;

  useEffect(() => {
    // Get all the elements to be parallaxed
    const parallaxElements = document.querySelectorAll(".neutrophil");

    // The parallax function
    const parallax = (elements) => {
      if ("undefined" !== elements && elements.length > 0) {
        elements.forEach((element) => {
          let y = window.innerHeight - element.getBoundingClientRect().top;
          if (y > 0) {
            element.style.transform = "translate3d(" + element.dataset.xpos + ", -" + element.dataset.speed * y + "px ,0)";
          }
        });
      }
    };

    //If element is in viewport, set its position
    parallax(parallaxElements);

    const handleScroll = () => {
        parallax(parallaxElements);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!poll) {
    return <p>Poll not found</p>;
  }

  const { header, question, responses } = poll;

  const submitPollResponse = async (pollID, responseID) => {
    try {
      const response = await fetch(`${GATSBY_API_ENDPOINT}/api/poll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pollID, responseID }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error submitting poll response:", error);
    }
  };

  const calculateResponseStats = (responseData) => {

    if (!responseData || !responseData.results) {
      console.error('Error calculating response stats, likely an empty set');
      return false;
    }

    let totalResponses = responseData.results.length;

    setNumResponses(totalResponses);
    setShowResults(true);

    if (totalResponses < minimumResponses) return false;
    
    let responsePercentages = calculatePercentages(responseData.results);

    setResponseStats(responsePercentages);
  };

  const handleSubmit = async () => {
    
    setIsDisabled(true);
    
    if (selectedResponseID === null) {
      alert("Please select a response before submitting");
      return;
    }
    
    const responseData = await submitPollResponse(pollID, selectedResponseID);
    calculateResponseStats(responseData);
  };

  function calculatePercentages(data) {
    let responseCount = {};
    let totalResponses = 0;
    let responsePercentages = {};
    
    // Iterate over the array to count each response_id
    data.forEach(function(item) {
      if(!responseCount[item.response_id]) {
        responseCount[item.response_id] = 0;
      }
      responseCount[item.response_id]++;
      totalResponses++;
    });
    
    // Calculate the percentages
    let totalPercent = 0;
    for(let responseId in responseCount) {
      responsePercentages[responseId] = Math.floor((responseCount[responseId] / totalResponses * 100));
      totalPercent += responsePercentages[responseId];
    }
    
    // If some response_ids are not present in the data, set their percentages to 0
    for(let i = 0; i < 6; i++) {
      if(!responsePercentages[i]) {
        responsePercentages[i] = 0;
      }
    }
  
    // Adjust the first percentage so the total is 100
    responsePercentages[Object.keys(responsePercentages)[0]] += 100 - totalPercent;
  
    return responsePercentages;
  }

  return (
    <StyledWrapper className="w-full md:w-medium m-auto p-0">
      <StyledDiv className="px-4 md:px-12 pt-6 pb-4 md:rounded-b mt-24 lg:mt-16">
        <img src={poll.icon} className={`w-[80px] h-[80px] absolute left-1/2 top-[-84px] translate-x-[-40px]`} alt="Survey icon" />
        <p className="font-bold text-burnt-brick mb-4 text-[18px]">{header}</p>
        <p className="font-bold mb-4 pb-2 text-[18px] md:text-[20px]">{question}</p>
        <ul className="grid grid-cols-1 gap-4 mb-4">
          {responses.map((response, index) => (
            <li key={index}>
              <StyledPollChoice
                key={index}
                whichResponse={index}
                label={response}
                onClick={() => {
                  setSelectedResponseID(index)
                }}
                isDisabled={isDisabled}
                isSelected={selectedResponseID === index}
                shouldShowPercentage={responseStats !== null}
                percent={`${responseStats ? -100 + responseStats[index] : 0}`}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center min-h-[5rem] mb-2 lg:min-h-[4rem] lg:mb-2">
          {!showResults 
            ? 
              <Button label="Submit" onClick={handleSubmit} className={`centered m-auto ${selectedResponseID !== null ? "" : "disabled"}`} />
            : 
              (numResponses < minimumResponses) ? <ResponseMessage /> : <ResponseMessageWithResults />}
        </div>
        
      </StyledDiv>
      <div className="neutrophil neutrophil-01 tablet:hidden" data-speed=".15" data-xpos="0">
        <img src="/images/pathophysiology/neutrophil/neutrophil-graphic-3.png" alt="Neutrophil graphic" />
      </div>
      <div className="neutrophil neutrophil-03 tablet:hidden" data-speed=".185" data-xpos="0">
        <img src="/images/pathophysiology/neutrophil/neutrophil-graphic-2.png" alt="Neutrophil graphic" />
      </div>
      <div className="neutrophil neutrophil-02 tablet:hidden" data-speed=".26" data-xpos="0">
        <img src="/images/pathophysiology/neutrophil/neutrophil-graphic-1.png" alt="Neutrophil graphic" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  max-width: 440px;
  @media screen and (min-width: 1024px) {
    .neutrophil {
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      height: 100%;
      isolation: isolate;
      z-index: 1;
      pointer-events: none;
      img {
        height: auto;
        position: absolute;
      }
      will-change: transform;
      transition: transform 0.1s ease-out;
    }
    .neutrophil-01 {
      // parallax layer 1 css
    }
    .neutrophil-02 {
      // parallax layer 2 css
      top: 110px;
    }
    .neutrophil-03 {
      // parallax layer 3 css
    }
    .neutrophil-01 img {
      width: 68px;
      left: -115px;
      bottom: -35px;
    }
    .neutrophil-02 img {
      width: 192px;
      top: -160px;
      right: -113px;
    }
    .neutrophil-03 img {
      width: 67px;
      top: -35px;
      right: -73px;
    }
  }
`;

const StyledDiv = styled.div`
  position: relative;
  appearance: none;
  border: 0;
  background-color: white;
  z-index: 1;
  @media screen and (min-width: 768px) {
    /* mix-blend-mode: multiply; */
  }

  &:before {
    content: " ";
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-mask-image: -webkit-linear-gradient(black, black),
      url('data:image/svg+xml;utf8,<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="22" /></svg>');
    -webkit-mask-size: 100% 100%, 88px 88px;
    -webkit-mask-position: left top, 50% -44px;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-composite: exclude;
    -webkit-mask-composite: xor;
    width: 100%;
    height: 44px;
    top: -44px;
    border-radius: 0px;

    @media screen and (min-width: 768px) {
      border-radius: 8px 8px 0px 0px;
    }
  }
`;

const ResponseMessage = () => (
  <p className="font-bold mb-0">
    Thanks for your response!
  </p>
);

const ResponseMessageWithResults = () => (
  <p className="font-bold mb-0">
    Thanks for your response!<br/>
    See what your peers have said.
  </p>
);

export default Poll;
