import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import openIcon from "/src/images/icons/open.svg";
import closeIcon from "/src/images/icons/close.svg";

const ExpandableZoomingPanel = ({ title, children, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const refTitle = useRef(null);
  const refContent = useRef(null);

  const togglePanel = (e) => {
    const clog = false;
    const sourceEl = e.currentTarget;
    let cloneEl;
    let extraWidth = 60;

    // expand the panel
    if (isMobile) {
      extraWidth = 0;
      cloneEl = sourceEl;
      setIsExpanded(!isExpanded);
      
      if (e.currentTarget.classList.contains('expanded')) {
        // CLOSE
        const thisEl = e.currentTarget;

        // setAriaLabel(thisEl.querySelector('button[data-expand-collapse="true"]'), "Collapse", "Expand");

        e.currentTarget.classList.remove('expanded');
        refContent.current.style.overflow = 'hidden';
        gsap.to( refContent.current, {height: 0, duration: .3, ease: 'expo.out', onComplete: function() {
          this.targets()[0].style.overflow = 'initial';
          this.targets()[0].style.display = 'none';
          this.targets()[0].style.height = 'initial';
        }});
        gsap.to( thisEl, {maxHeight: thisEl.getAttribute('original-height'), x: 0, width: (thisEl.offsetWidth - extraWidth), duration: .3, ease: 'expo.out', onComplete: function() {
          this.targets()[0].style.display = 'flex';
        }});

      } else {
        // OPEN
        const thisEl = e.currentTarget;
        thisEl.setAttribute("original-height", thisEl.offsetHeight);
        thisEl.classList.add("expanded");
        thisEl.classList.add("cardHasOpened");
        thisEl.style.display = 'block';
        
        // setAriaLabel(thisEl.querySelector('button[data-expand-collapse="true"]'), "Expand", "Collapse");

        gsap.to(thisEl, {maxHeight: 500, x: -(extraWidth/2), width: (thisEl.offsetWidth + extraWidth), duration: .7, ease: 'expo.out'})

        refContent.current.style.overflow = 'hidden';
        refContent.current.style.display = 'block';

        if (!thisEl.getAttribute('expanded-info-width'))
          thisEl.setAttribute('expanded-info-width', refContent.current.offsetWidth + (extraWidth/2));
        let targetExpandedWidth = thisEl.getAttribute('expanded-info-width');

        refContent.current.style.opacity = 0;
        gsap.set( refContent.current, {width: targetExpandedWidth})
        const h = refContent.current.offsetHeight;
        if (clog) console.log(`expanded-info h = ${h}, original-height = ${thisEl.getAttribute("original-height")}`)
        thisEl.setAttribute("expanded-height", h)
        gsap.set( refContent.current, {width: targetExpandedWidth})
        refContent.current.style.height = 0;
        refContent.current.style.opacity = 1;
        
        gsap.to( refContent.current, {height: h, width: targetExpandedWidth, duration: .7, ease: 'expo.out'});
      }

    } else {
      
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const thisEl = e.currentTarget;

      cloneEl = sourceEl.cloneNode(true);

      if (!e.currentTarget.classList.contains('expanded')) {
          cloneEl.classList.add("expanded");
      }
      cloneEl.id="popOver";
      
      // document.querySelector("body").appendChild(cloneEl);
      document.querySelector("#accordionParent").appendChild(cloneEl);

      const divOffset = getOffset(sourceEl);
      
      cloneEl.style.position = 'absolute';
      cloneEl.style.zIndex = '3';
      cloneEl.style.width = sourceEl.offsetWidth + 'px';
      cloneEl.style.top = (divOffset.top + 0) + 'px';
      cloneEl.style.left = divOffset.left + 'px';

      // CLOSE
      cloneEl.querySelector('.header-container').addEventListener('click', (e) => {
      // cloneEl.addEventListener('click', (e) => {
        e.preventDefault();
        setIsExpanded(false);
        closeCard(cloneEl, thisEl);
      });
      
      // OPEN
      if (!thisEl.classList.contains('expanded')) {
        // close any open cards
        document.querySelectorAll('.cloned').forEach(closeThisEl => {
          closeCard(closeThisEl, thisEl)
        });

        // setAriaLabel(cloneEl.querySelector('button[data-expand-collapse="true"]'), "Expand", "Collapse");
        
        cloneEl.classList.add("cloned");
        cloneEl.style.display = 'block';
        cloneEl.querySelector('.expanded-info').style.overflow = 'hidden';
        cloneEl.querySelector('.expanded-info').style.display = 'block';
        cloneEl.querySelector('.expandIcon').classList.add('hidden');
        cloneEl.querySelector('.collapseIcon').classList.remove('hidden');
        setTimeout(() => {
          cloneEl.querySelector('.collapseIcon').style.top = "7.5px";
          cloneEl.querySelector('.header-container').style.color = '#750010';
        }, 5);
        

        if (!thisEl.getAttribute('expanded-info-width'))
          thisEl.setAttribute('expanded-info-width', cloneEl.querySelector('.expanded-info').offsetWidth + 20);
        let targetExpandedWidth = thisEl.getAttribute('expanded-info-width');
        cloneEl.querySelector('.expanded-info').style.width = targetExpandedWidth + 'px';

        cloneEl.querySelector('.expanded-info').style.opacity = 0;
        const h = cloneEl.querySelector('.expanded-info').offsetHeight;
        cloneEl.querySelector('.expanded-info').style.height = 0;
        cloneEl.querySelector('.expanded-info').style.opacity = 1;
        
        const dur = .8;
        gsap.to( cloneEl, {y: -15, x: -20, width: (cloneEl.offsetWidth + 40), height: 86 + h + 20, maxHeight: 500, duration: dur, ease: 'expo.out'})
        gsap.to( cloneEl.querySelector('.expanded-info'), {height: h, duration: dur, ease: 'expo.out'});
      }       
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }
  };

  return (
    <PanelWrapper onClick={children && togglePanel} className={`grid-card list-none border border-baked-coral ${children ? 'cursor-pointer' : 'cursor-none'}`}>
      <PanelTitle ref={refTitle} className={`header-container w-full transition-all duration-300 ease-in-out`}>
        <TitleText className={`${(isExpanded) ? 'text-burnt-brick' : ''}`}>{title}</TitleText>
        {children && 
          <>
            <Icon src={(isExpanded) ? closeIcon : openIcon} alt="1 toggle icon" className="expandIcon"/>
            <Icon src={closeIcon} alt="2 toggle icon" className="collapseIcon hidden transition-all duration-300 ease-out"/>
          </>
        }
      </PanelTitle>
      {(children) && <ExpandedInfo ref={refContent} className={`expanded-info`}>
        {children}
      </ExpandedInfo>}
    </PanelWrapper>
  );
}

export default ExpandableZoomingPanel;

const closeCard = (closeThisEl, thisEl) => {
  thisEl.removeAttribute("expanded-info-width")
  const dur = .45;
  closeThisEl.querySelector('.collapseIcon').style.top = "50%";
  closeThisEl.querySelector('.header-container').style.color = "#000000";
  closeThisEl.style.pointerEvents = 'none';
  closeThisEl.classList.remove("expanded");
  closeThisEl.classList.remove("cloned");
  closeThisEl.querySelector('.expanded-info').style.overflow = 'hidden';
  gsap.to( closeThisEl.querySelector('.expanded-info'), {height: 0, duration: dur, ease: 'expo.out'});
  gsap.to( closeThisEl, {y: 0, x: 0, height: 86, width: (closeThisEl.offsetWidth - 40), duration: dur, ease: 'expo.out', 
    onComplete: function() {
      document.querySelector("#accordionParent").removeChild(closeThisEl)
    } 
  });
  gsap.to( closeThisEl, {opacity: 0, duration: dur*.5, delay: dur*.25, ease: 'expo.out'});
}

const getOffset = (el) => {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const PanelWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;

  @media screen and (min-width: 1024px) {
    min-height: 95px;
    max-height: 95px;
  }

  &#popOver {
    border-width: 3px;
    /* opacity: .25; */
    .header-container {
      /* color: #750010; */
    }
  }
  &.cursor-pointer:hover {
    @media screen and (min-width: 1024px) {
      border-width: 3px;
    }
  }
  &.cursor-none {
    cursor: default;
  }
`;

const PanelTitle = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  padding-right: 1rem;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  padding-left: 20px;
  
  z-index: 1;
  font-family: "Nunito Sans";
  
  font-size: 16px;

  @media screen and (min-width: 1024px) {
     position: absolute;
     height: 95px;
     font-size: 18px;
  }
  
`;

const TitleText = styled.span`
  font-weight: bold;
  padding-right: 25px;
  @media screen and (min-width: 1024px) {
    width: 224px;
  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;

  @media screen and (min-width: 1024px) {
    position: relative;
    align-self: start;
    top: 50%;
    margin-top: -7.5px;
  }
`;

const ExpandedInfo = styled.div`

  top: 95px;
  padding: 0;
  padding-bottom: 1.5rem;
  margin: 0;
  margin-left: 1.25rem;
  padding-right: 36px;

  @media screen and (min-width: 1024px) {
    position: absolute;
    padding: 0;
    
    ul {
      margin-bottom: 16px!important;
      
      ul {
        margin-bottom: 0px !important;
      }
    }
  }

  @media (max-width: 1023px) {
    & > div:last-child,
    & > p:last-child,
    & > ul:last-child {  
      margin-bottom: -5px;
    }
  }


`;
