import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from "@reach/router";
import styled from 'styled-components';
import { CSS } from "./Theme";
import { VideoData, CarouselData } from "../data/Videos";
import { VideoPlayer, VideoTranscript, VideoTitle } from "./VideoPlayer";


const Carousel = ({ index }) => {
  const { hash } = useLocation();
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const videoRefs = useRef([]);  
  const transcriptRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  let totalItems = CarouselData.length;
  const carouselVideoData = [];
  
  CarouselData.map((carouselItem, index) => {
    const videoData = VideoData.find((video) => video.id === carouselItem.videoId);
    carouselVideoData.push(videoData);
    return carouselVideoData;
  });

  const getVideo = (carouselItem, index) => {
    const videoData = VideoData.find((video) => video.id === carouselItem.videoId);
    return (
      <VideoPlayer
        videoData={videoData}
        className="!my-0"
        ref={el => videoRefs.current[index] = el}
      />
    )
  };
  
  const pauseVideos = () => {
    videoRefs.current.forEach((videoRef, index) => {
      try {
        videoRef.pauseVideo();
      } catch (e) { }
    });
  }
  const resetTranscriptScroll = () => {
    transcriptRef.current.scrollTranscriptTop();
  }
  
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
    pauseVideos();
    resetTranscriptScroll();
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalItems);
    pauseVideos();
    resetTranscriptScroll();
  };

  const handleNavigation = (index) => {   
    setCurrentIndex(index);
    pauseVideos();
    resetTranscriptScroll();
  };



  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      setCurrentIndex(currentIndex);
    }

  }, [currentIndex]);

  useEffect(() => {
    CarouselData.map((carouselItem, index) => {
      if (hash === "#" + carouselItem.anchorId) { 
        setCurrentIndex(index);
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;       
        const width = window.innerWidth;
        if (width > 768) {
          let buttonPosition = buttonRefs.current[index].offsetTop;
          containerRef.current.scrollTop = (buttonPosition - 15);
        }        
      } 
    })

  }, [hash]);
  
  return (
    <div className='lg:w-[952px] mx-0'>
        <VideoTitle>{CarouselData[currentIndex].title}</VideoTitle>
        <div className="relative lg:pr-[336px] mt-3 lg:mt-4">
          <div className="lg:w-[616px]">
            <StyledCarousel>      
              <div className="carousel-container">
                <div ref={carouselRef} className={`carousel w-full`}>
                  {CarouselData.map((carouselItem, index) => {
                    return (
                      <div className="carousel-item" key={`item-${index}`}>
                          <div className="w-full" key={index}>
                            {getVideo(carouselItem, index)}
                          </div>
                      </div>
                    )
                  })}          
                </div>
                <div className="navigation">
                  <div ref={containerRef}>
                    <button className={`prev ${(currentIndex === 0 ) ? 'inactive' : ''}`} onClick={handlePrev} />
                    {CarouselData.map((carouselItem, index) => {
                      return (
                        <button
                          ref={el => buttonRefs.current[index] = el}
                          key={index}
                          className={`${index === currentIndex ? 'active' : ''} ${index === (totalItems - 1) ? 'last' : ''}`}
                          onClick={() => handleNavigation(index)}
                        >  
                          {carouselItem.title}
                        </button>
                      )
                    })} 
                    <button className={`next ${(currentIndex === totalItems - 1) ? 'inactive' : ''}`} onClick={handleNext} />
                  </div>
                </div>
              </div>
            </StyledCarousel>
          <VideoTranscript ref={transcriptRef} transcript={carouselVideoData[currentIndex].transcript} />
          </div>
        </div>
      </div>
  );
};

export default Carousel;

/* STYLES */
const StyledCarousel = styled.div` 
  .carousel-container {
    overflow: hidden;
    width: 100%;
  }
  .carousel {
    display: flex;
    transition: opacity 0.5s ease-in-out;
  }
  .carousel-item {
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0; /* Add this property */
  }
  .navigation {
    @media screen and (min-width: 1024px){
      position: absolute;
      right: 0;
      top: 0;
      width: 300px;
      height: 350px;
      padding: 15px;
      border: 1px solid #ebebeb;
      border-radius: 8px;
    }
  }
  .navigation div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    margin-top: 20px;
    @media screen and (min-width: 1024px){
      display: block;
      overflow-y: scroll;
      padding: 0 40px 0 0;
      margin: 0;
      height: 320px;
      &::-webkit-scrollbar {
        width: 7px;
        background-color: #ebebeb;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${CSS.COLORS.blazingRose};
      }
    }
  }
  .navigation button {
    border: 1px solid #b83b4d;
    border-radius: 5px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    overflow: hidden;
    text-indent: -999em;
    /* outline: none; */
    @media screen and (min-width: 1024px){
      display: block;
      font-size: 16px;
      line-height: 22px;;
      text-align: left;
      text-indent: 0;
      width: 100%;
      height: auto;
      border: none;
      font-weight: bold;
      color: #000;
      padding-bottom: 30px;
      position: relative;
      &:after {
        display: block;
        content: '';
        background: #ebebeb;
        width: 52.5px;
        height: 1px;
        position: absolute;
        bottom: 15px;
      }
      &.last { padding-bottom: 0; }
      &.last:after { display: none; }
    }
  }
  .navigation button.active,
  .navigation button:hover {
    background-color: #b83b4d;
    color: #fff;
    @media screen and (min-width: 1024px){
      background: transparent;
      color: ${CSS.COLORS.blazingRose}
    }
  }
  .navigation button.prev,
  .navigation button.next {
    border: none;
    height: 16px;
    width: 10px;
    background: transparent url('/images/icons/right-arrow-icon-rose.svg') no-repeat 0 0;
    @media screen and (min-width: 1024px){
      display: none;
    }
  }
  .navigation button.next {
    margin-left: auto;
  }
  .navigation button.prev {
    margin-right: auto;
    transform: rotate(180deg);
  }
  .navigation button.inactive {
    background: transparent url('/images/icons/left-arrow-icon-grey.svg') no-repeat 0 0;
    transform: rotate(180deg);
  }
  .navigation button.prev.inactive {
    transform: rotate(0);
  }
`;