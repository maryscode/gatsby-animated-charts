import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ConferenceCard from "../ConferenceCard";


const ConferenceCards = ({ children, scrolledIntoView=false }) => {
  const [showRef, setShowRef] = React.useState(false);
  const noteRef = React.useRef(null);

  // useEffect on scrolledIntoView, when true set showRef to true
  useEffect(() => {
    if (scrolledIntoView && noteRef.current) {
      setShowRef(true);
      noteRef.current.setAttribute("open", true);
    }
  }, [scrolledIntoView, noteRef.current]);
  
  return (
    <div className="flex flex-col gap-4 w-fit m-auto pb-4">
      <ConferenceCard
        className="basis-full lg:basis-1/3 order-2"
        img="/images/logos/chest-annual-meeting-logo.svg"
        alt="CHEST Annual Meeting Hawaii 2023 logo"
        href="https://www.chestnet.org/Learning-and-Events/Events/CHEST-Annual-Meeting"
        date="Oct 8-11, 2023"
        location="Honolulu, HI"
      >
        <span className="title">CHEST Annual Meeting 2023</span>
        <span className="desc">
          CHEST 2023 will feature education in pulmonary, sleep, and critical care medicine through simulation sessions, research presentations, interactive
          games, and more.
        </span>
      </ConferenceCard>

      <div className="order-last overflow-hidden basis-full lg:basis-1/3 md:max-w-[336px] col-start-2">
        <div ref={noteRef} className="bg-white border border-burnt-brick rounded px-4 py-3 flex flex-col items-center text-[16px] lg:-translate-y-[100%] lg:open:translate-y-0 transition-all duration-300 ease-in-out">
          <p className="mb-2 text-center">
          Join Insmed for a Learning Theater, where an expert will review bronchiectasis data and discuss his clinical experience.
          </p>
          <p className="mb-2 text-center">
          Wednesday, October 11, from 11:45 <span className="smallcaps">am</span> to 12:30 <span className="smallcaps">pm</span>
          </p>
          <Link to="/CHEST2023/" className="text-center text-burnt-brick font-bold flex underline underline-offset-4">
            <span>Learn more</span> <img src="/images/icons/chevron-right-arrow.svg" alt="arrow pointing to the right" className="inline-block ml-2 w-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCards;