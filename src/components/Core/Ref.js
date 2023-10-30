import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../utils/AppContext';

const Ref = ({page, children}) => {

  const { refModalOpen, setRefModalOpen } = useContext(AppContext);

  // TODO:
  // if we want to make the <sup> link directly to custom References Modal content we can do this:
  // wrap <sup> in a Rerences Modal so it's the button to open it, pass in the page name and the refs to pull from that page's list
  //    const refs gives you the array from what's passed into Ref component
  
  // const refs = children.split(',').map(str => str.replace(/-.*/, ""));
  
  return (
    <sup onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setRefModalOpen(true)
    }} className="text-[55%] top-[-0.6em] left-[0.1em] pr-[2px] whitespace-nowrap cursor-pointer">
      {children}
    </sup>
  );
}

export default Ref;
