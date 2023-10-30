import Button from "../Button";
import VideoPlayer from "./VideoPlayer";

const VideoPlayerSegment = ({id, className}) => {

  return (
    <VideoPlayer id={id} className={`${className ? `${className}` : ''}`}>
      <div className='w-full flex justify-center -my-4 lg:my-0 lg:justify-end lg:mt-4'>
        <Button href="/realstories/patient-stories/" className="gtm-link-internal" track-label="Watch the Full Video">Watch the full video</Button>
      </div>
    </VideoPlayer>

  );
};

export default VideoPlayerSegment;