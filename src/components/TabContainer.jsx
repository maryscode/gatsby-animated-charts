import React, { useState, useEffect, useContext }  from 'react';

const TabContext = React.createContext({
  currentTab: 0,
  setCurrentTab: () => {},
});

const TabList = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCurrentTab } = useContext(TabContext);

  useEffect(() => {
    setCurrentTab(activeIndex);
  }, [activeIndex, setCurrentTab]);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        clickHandler: () => {
          if(window.location.href.split('#')[0].length > 0) {
           // window.location.hash = ""
          }
          setActiveIndex(index);
        },
        index,
        activeIndex,
      });
    }
    return child;
  });

  return (
    <ul className="flex w-full">
      {childrenWithProps}
    </ul>
  );
};

const TabOpenStyles =
  "bg-blazing-rose text-white border-t-blazing-rose border-x-blazing-rose";
const TabClosedStyles =
  "bg-white border-2 text-blazing-rose border-t-blazing-rose border-x-blazing-rose";

const Tab = ({ children, className, index, activeIndex, clickHandler, ...props }) => {
  return (
    <li
      className={`grow first-of-type:rounded-tl last-of-type:rounded-tr border border-b-0 border-r-0 last-of-type:border-r-2 ${
        index === activeIndex ? TabOpenStyles : TabClosedStyles } 
        ${ className ? `${className}` : "" }`}
    >
      <button
        onClick={clickHandler}
        className={`gtm-tab h-full w-full py-2 px-[2px] text-[14px] leading-[16px] lg:text-[16px] font-nunito font-bold`}
		{...props}
      >
        {children}
      </button>
    </li>
  );
};

const TabPanels = ({ children }) => {
  const { currentTab } = useContext(TabContext);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        index,
        currentTab,
      });
    }
    return child;
  });

  return <ul id={currentTab}>{childrenWithProps}</ul>;
};

const TabPanel = ({ index, currentTab, children }) => {
  return (
    <div
      id={index}
      className={`${
        index === currentTab ? "block" : "hidden"
      } border-2 border-blazing-rose rounded-b bg-white px-4 pb-[28px]  pt-6 md:p-8`}
    >
      {children}
    </div>
  );
};

const TabContainer = ({ className, children }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const value = { currentTab, setCurrentTab };

  return (
    <TabContext.Provider value={value}>
      <div className={`${className ? `${className}` : ""}`}>{children}</div>
    </TabContext.Provider>
  );
};

TabContainer.TabList = TabList;
TabContainer.Tab = Tab;
TabContainer.TabPanels = TabPanels;
TabContainer.TabPanel = TabPanel;

export default TabContainer;