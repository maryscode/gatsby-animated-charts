import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import openIcon from "/src/images/icons/open.svg";
import closeIcon from "/src/images/icons/close.svg";

const ExpandablePanel = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const refTitle = useRef(null);
  const refContent = useRef(null);

  const togglePanel = (e) => {
    const sourceEl = e.currentTarget.parentNode;
    setIsExpanded(!isExpanded);

    const clog = false;
    let cloneEl;
    
    let extraWidth = 0;
    cloneEl = sourceEl;
    
    if (sourceEl.classList.contains('expanded')) {
      // CLOSE
      const thisEl = sourceEl;

      // setAriaLabel(thisEl.querySelector('button[data-expand-collapse="true"]'), "Collapse", "Expand");

      sourceEl.classList.remove('expanded');
      refContent.current.style.overflow = 'hidden';
      gsap.to( refContent.current, {height: 0, duration: .3, ease: 'expo.out', onComplete: function() {
        this.targets()[0].style.overflow = 'initial';
        this.targets()[0].style.display = 'none';
        this.targets()[0].style.height = 'initial';
      }});
      gsap.to( thisEl, {maxHeight: thisEl.getAttribute('original-height'), duration: .3, ease: 'expo.out', 
        // onComplete: function() {
        //   this.targets()[0].style.display = 'flex';
        // }
      });

    } else {
      // OPEN
      const thisEl = sourceEl;
      thisEl.setAttribute("original-height", thisEl.offsetHeight);
      thisEl.classList.add("expanded");
      thisEl.classList.add("cardHasOpened");
      thisEl.style.display = 'block';
      
      // setAriaLabel(thisEl.querySelector('button[data-expand-collapse="true"]'), "Expand", "Collapse");

      gsap.to(thisEl, {maxHeight: 500, duration: .7, ease: 'expo.out'})

      refContent.current.style.overflow = 'hidden';
      refContent.current.style.display = 'block';

      refContent.current.style.opacity = 0;
      // gsap.set( refContent.current, {width: targetExpandedWidth})
      const h = refContent.current.offsetHeight;
      if (clog) console.log(`expanded-info h = ${h}, original-height = ${thisEl.getAttribute("original-height")}`)
      thisEl.setAttribute("expanded-height", h)
      // gsap.set( refContent.current, {width: targetExpandedWidth})
      refContent.current.style.height = 0;
      refContent.current.style.opacity = 1;
      
      gsap.to( refContent.current, {height: h, duration: .7, ease: 'expo.out'});
    }

  };

  return (
    <PanelWrapper>
      <PanelTitle onClick={togglePanel} ref={refTitle} >
        <TitleText>{title}</TitleText>
        <Icon src={isExpanded ? closeIcon : openIcon} alt="toggle icon" />
      </PanelTitle>
      <PanelContent ref={refContent} className="hidden">
        <div className="pt-4 pb-1 -mb-2">
          {children}
        </div>
      </PanelContent>
    </PanelWrapper>
  );
}

export default ExpandablePanel;

const PanelContent = styled.div`
  background-color: #ebebeb;
  border: 1px solid #ebebeb;
  border-top: none;
  border-radius: 0 0 5px 5px;
  
  padding-left: 1rem;
  padding-right: 10px;
  
  & > p:last-child,
  & > ul:last-child {
    margin-bottom: .5rem;
  }
`;

const PanelWrapper = styled.div`
  margin-bottom: 15px;
`;

const PanelTitle = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  padding-left: 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  font-family: "Nunito Sans";
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  
`;

const TitleText = styled.span`
  font-weight: bold;
  font-size: 1.1em;
  padding-right: 25px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
