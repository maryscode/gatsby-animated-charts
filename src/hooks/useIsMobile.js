import React, { useState, useEffect } from 'react';

// use: 
//  const isMobile = useIsMobile();
function useIsMobile() {
  const [isMobile, setIsMobile] = useState();

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (window.navigator !== "undefined") {
      window.addEventListener('resize', handleWindowSizeChange);
      return handleWindowSizeChange();
    } else  {
      // setIsMobile(false);
    }
    return () => {
      if (window.navigator !== "undefined") 
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return isMobile;

  // useEffect(() => {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent));
  // }, []);

}

export default useIsMobile;