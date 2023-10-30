import React, { useState, useEffect } from 'react';

// use: 
//  const isDesktop = useIsDesktop();
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState();

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    
    if (width > 1023) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }

  useEffect(() => {
    if (window.navigator !== "undefined") {
      window.addEventListener('resize', handleWindowSizeChange);
      return handleWindowSizeChange();
    } else  {
      // setIsDesktop(false);
    }
    return () => {
      if (window.navigator !== "undefined") 
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return isDesktop;

  // useEffect(() => {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   setIsDesktop(/android|webos|iphone|ipad|ipod|blackberry|ieDesktop|opera mini/i.test(userAgent));
  // }, []);

}

export default useIsDesktop;