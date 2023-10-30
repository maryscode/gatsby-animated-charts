import React, { useEffect } from 'react';
import ExpandableZoomingPanel from './ExpandableZoomingPanel';
import useIsMobile from '../hooks/useIsMobile';
import useIsDesktop from '../hooks/useIsDesktop';
import useWindowResize from '../hooks/useWindowResize';

const Accordions = ({EtiologiesData}) => {
  const isDesktop = useIsDesktop();
  const { width } = useWindowResize(true);
  
  useEffect(() => {
    // close all open indication cards After the window is resized (using debounce because true is passed to useWindowResize)
    //    todo, set all ExpandableZoomingPanels in an array of refs, then here we loop through the refs and set isExpanded to false for each one?
    //    maybe that will remove the need for all this querySelectoring
    if (isDesktop && document.getElementById("popOver")) {
        document.querySelector("body").removeChild( document.getElementById("popOver") );
    } else {
        document.querySelectorAll(".cardHasOpened").forEach(el => {
          el.classList.remove('expanded');
          el.style.display = 'flex';
          el.style.width = '100%';
          el.style.transform = 'initial';
          el.querySelector(".expanded-info").style.overflow = 'initial';
          el.querySelector(".expanded-info").style.display = 'none';
          el.querySelector(".expanded-info").style.opacity = 'initial';
          el.querySelector(".expanded-info").style.width = 'initial';
          el.querySelector(".expanded-info").style.height = 'initial';            
        });
    }
    document.querySelectorAll(".grid-card").forEach(el => {
        el.removeAttribute("expanded-info-width");
    });  

  }, [width]);

  return (
    <ul className="grid gap-2 lg:grid-cols-3 lg:gap-4">
      {EtiologiesData.map(({ title, body }, index) => (
        <ExpandableZoomingPanel title={title} isMobile={!isDesktop} key={index} >
          {body}
        </ExpandableZoomingPanel>
      ))}
    </ul>
  );
}

export default Accordions;
