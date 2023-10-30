/* eslint-disable guard-for-in */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React from "react";
import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import Vimeo from '@u-wave/react-vimeo';
// import { trackCustomGTMEvent } from "../../utils/Utils";

const VideoPlayer = forwardRef ( ( { videoData, className }, ref) => {
  const VimeoContainerRef = useRef();                   // ref to the DIV containing the Iframe
  const PlayerRef = useRef();                           // ref to the actual Vimeo player object
  const [chapterIndex, setChapterIndex] = useState(0);
  const [videoEventsFired, setVideoEventsFired] = useState({});
  const videoEventsToFire = {"25%":0.25, "50%":0.5, "75%":0.75, "100%":1};

  // hook for parent components to call the pauseVideo method
  useImperativeHandle(ref, () => ({
    pauseVideo() {
      PlayerRef.current.player.pause();
    }
  }));

  const videoEventAttributes = {
    event: "vimeoTrack",
    attributes: {
      videoAction: "action",          // play, pause, 25%, 50%, 75%, 100%
      videoName: videoData.title,     // video title
    }
  };

  const onPlay = () => {
    const playEvent = Object.assign({}, videoEventAttributes);
    playEvent.attributes.videoAction = "Play";
    // trackCustomGTMEvent(playEvent);
  };

  const onPause = () => {
    const pauseEvent = Object.assign({}, videoEventAttributes);;
    pauseEvent.attributes.videoAction = "Pause";
    // trackCustomGTMEvent(pauseEvent);
  };
  
  const onTimeUpdate = (event) => {

    const percentage = event.percent;

    if (videoData.chapters) {
      // set the chapter index based on current time and chapter timestamps for this video
      const passed = videoData.chapters.map((chapter, index) => chapter.t.split(':').reduce((acc,time) => (60 * acc) + +time) <= Math.round(event.seconds)).filter(Boolean);
      const index = passed.length - 1;
      if (index !== chapterIndex)
        setChapterIndex(index);  
    }

    // fire percent played events
    for (const key in videoEventsToFire) {
      
      if (percentage >= videoEventsToFire[key] && !videoEventsFired[key]) {
        const updateEventFired = {};
        updateEventFired[key] = true;
        setVideoEventsFired( videoEventsFired => ({...videoEventsFired, ...updateEventFired}));

        const progressEvent = Object.assign({}, videoEventAttributes);;
        progressEvent.attributes.videoAction = key;
        // trackCustomGTMEvent(progressEvent);
      }
    }     
  }

  return (
      <div
        className={`video-container lg:mx-auto my-3 lg:my-5 lg:mb-8 ${
          (!videoData.chapters || videoData.chapters.length === 0)
            ? "mx-auto lg:w-full md:mb-8 lg:mt-7"
            : "grid lg:grid lg:grid-cols-[640px_1fr] lg:gap-10 lg:gap-y-6"
          } ${className ? `${className}` : ""}`}
        id={videoData.id}
        ref={VimeoContainerRef}
        data-video-id={videoData.id}
      >
          <Vimeo
            ref={PlayerRef}
            video={videoData.id}
            width={640}
            height={360}
            className={`w-full relative pb-[56.25%] h-0 rounded shadow overflow-hidden border-[0.3px] bg-black`}
            autoplay={false}
            onTimeUpdate={onTimeUpdate}
            onPlay={onPlay}
            onPause={onPause}
            />
      </div>
  );
});

export default VideoPlayer;
