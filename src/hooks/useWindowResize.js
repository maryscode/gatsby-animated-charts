import React, { useEffect } from "react";

// use:
//  const { width } = useWindowSize();
//  const { height } = useWindowSize();
//  const { width, height } = useWindowSize();
// params:
//  when true is passed to debounced, then the window resize event is debounced (only fires after 100ms of no resize events)

// BUG:
//  the debounced resize listener is not being removed ... trying to set the listener to a variable and then remove it in the return function (see const callback)

export default function useWindowResize(debounced=false) {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({});

  useEffect(() => {

    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    function debounce(func){
      var timer;
      return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,100,event);
      };
    }
    
    // const callback = debounced ? debounce(changeWindowSize) : changeWindowSize;
    if (debounced)
      window.addEventListener("resize", debounce(changeWindowSize));
    else
      window.addEventListener("resize", changeWindowSize);

    return () => {
      if (debounced)
        window.removeEventListener("resize", debounce(changeWindowSize));
      else
        window.removeEventListener("resize", changeWindowSize);
    };
  }, [!isSSR]);

  return windowSize;
}