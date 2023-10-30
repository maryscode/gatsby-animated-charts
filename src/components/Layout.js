import * as React from "react";
import { useEffect, useState } from 'react';
import { Script } from "gatsby";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import Theme from "./Theme";
import { BackgroundGradient } from "./BackgroundGradient";
import "normalize.css";
import { AppContext } from '../utils/AppContext';
import Main from "./Core/Main";


/**
 * Component definition
 */
const Layout = ({ children, isHome, className }) => {
  const [refModalOpen, setRefModalOpen] = useState(false);
  
  // SCROLL
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; // Start highlighting section earlier
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollTop = window.pageYOffset;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Script defer="defer" src="https://extend.vimeocdn.com/ga/44590775.js" />
      <Theme />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main component needs to wrap AppContext for refModalOpen */}
      <AppContext.Provider value={{ refModalOpen, setRefModalOpen }}>
        <Main>
          {children}
        </Main>
      </AppContext.Provider>
      
      
      <Footer isHome={isHome} />
      <CookieBanner />

      <BackgroundGradient position="center" />
    </>
  );
};

export default Layout;
