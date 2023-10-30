import React from 'react';
import whiteRightArrow from "../images/chevron-right-arrow-white.svg";

const NextPageDriver = ({ href, children, icon, className, alt, ...props }) => {
  return (
    <a href={href} className={`${className ? `${className}` : ''} inline-flex items-center rounded bg-gradient-burnt-brick p-5 lg:py-8 lg:px-11 w-full max-w-[864px] ring-white ring-offset-2 focus:outline-none focus:ring-2 gtm-link-internal hover:no-underline`} {...props}>
      <div className='w-[25%] lg:w-[72px]'>
        <img src={icon} alt={alt} className='w-[48px] h-[48px] lg:w-[72px] lg:h-[72px] w-icon-nextpagedriver-mob h-icon-nextpagedriver-mob lg:w-icon-nextpagedriver lg:h-icon-nextpagedriver translate-x-[3px] lg:translate-x-0' />
      </div>

      <div className='w-[65%] lg:w-[84%] text-[16px] lg:text-[24px] lg:text-center flex-grow text-white font-nunito'>
        <strong>
          {children}
        </strong>
      </div>

      <div className='w-[10%] lg:w-[8%]'>
        <img src={whiteRightArrow} alt='arrow' className='w-[10px] h-[16px] mx-auto'/>
      </div>
    </a>
  );
}

export default NextPageDriver;
