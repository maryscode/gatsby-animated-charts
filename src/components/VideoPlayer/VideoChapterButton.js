import React from "react";

const VideoChapterButton = ({ time, text, chapterIndex, activeChapterIndex, clickHandler }) => {
  return (
    <button
      id={activeChapterIndex}
      onClick={clickHandler}
      className={`${
        chapterIndex === activeChapterIndex ? "border-primary font-bold" : "border-secondary"
      } md:leading-[17px] text-primary w-full py-[.8rem] lg:py-[.65rem] grid grid-flow-col grid-cols-[50px_1fr] gap-x-4 border-l-8 cursor-pointer gtm-video-chapter`} 
      track-label={text}
    >
      <span className="text-right">{time}</span>
      <span className="text-left">{text}</span>
    </button>
  );
};

export default VideoChapterButton;
