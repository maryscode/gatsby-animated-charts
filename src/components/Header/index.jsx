import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
import { Subnav } from "./Subnav";
import { CSS } from "../Theme";
import { NavigationData } from '../../data/NavigationData';
import { Button } from "../Button";
import { BackgroundGradient } from "../BackgroundGradient";
import logo from '../../images/logos/rethink-bronchiectasis-logo.svg';
import arrow from '../../images/chevron-down-arrow-burnt-brick.svg';
import gizmohouse from '../../images/gizmo-house.png';

export const Header = ({ activeSection } ) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [parentLink, setParentLink] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };  

  useEffect(() => {
    const link = document.querySelector('a.active')
    if (link) {
      setParentLink(link.getAttribute('data-parent-path'))
    } else {
      // The link does not have the active class
    }
  }, []);

  return (
    <>
    <StyledNavigation>
    <a aria-label="Skip to main content" tabIndex="0" href="#main" className="skip-to-main-content-link">Skip to main content</a>
      <StyledNavigation.Container>
        <StyledNavigation.Logo>
          <Link tabIndex="0" to="/">
              <img
                src={logo}
              alt="Rethink Bronchiectasis logo"
              className="logo"
            />
          </Link>
        </StyledNavigation.Logo>
        <StyledNavigation.Menu className={`navigation__menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navigation__list">
            {NavigationData.map((item, index) => (
              <li key={index} className="navigation__item">
                <span>
                  <Link
                    to={item.path}
                    activeClassName="active"
                    className="navigation__link"
                    data-parent-path={item.path}
                    onClick={toggleMenu}
                  >
                    {item.copy}
                  </Link>
                  {item.children ? <span key={item.id} className={`arrow ${activeIndex === index ? "open" : ""}`} onClick={() => handleItemClick(index)} /> : ''}

                  {item.children && (
                  <ul className="navigation__sublist">
                    {item.children.map((childItem, childIndex) => (
                      <li key={childIndex} className="navigation__subitem" onClick={toggleMenu}>
                        <Link
                          to={childItem.path}
                          activeClassName="active"
                          className="navigation__sublink"
                        >     
                          {childItem.copy}  
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}                  
                </span>
              </li>
            ))}
          </ul>
          
          {menuOpen ?
            <div className="navigation__img__container">
              <img
                src={gizmohouse}
                alt="Gizmo House"
                className="navigation__img"
              />
              <BackgroundGradient menu />
            </div>
              : ''}
          
        </StyledNavigation.Menu>

        <Button
            className="button"
            label="Stay informed"
            to="/stay-informed/"
        />

        <StyledHamburgerButton className={`navigation__hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </StyledHamburgerButton>

      </StyledNavigation.Container>
        
    </StyledNavigation>
      
    {parentLink ? <Subnav activeSection={activeSection} parentLink={parentLink} /> : null}
    </>
  );
};


/* STYLES */
const StyledNavigation = styled.header`
  font-family: "Nunito";
  z-index: 5;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; // fallback
  width: 100vw;
  height: auto;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .skip-to-main-content-link {
    position: absolute;
    left: -9999px;
    z-index: 999;
    color: black;
    background-color: white;
    opacity: 0;
  }
  .skip-to-main-content-link:focus {
    left: 50px;
    opacity: 1;
  }

  .button {
    flex: 0 0 114px;
    z-index: 9;
    font-size: 12px;
    width: 114px;
    height: 28px;
    margin: 0 63px 0 0;
    padding: 0;
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 138px;
      height: 34px;
      font-size: 14px;
      flex-basis: 138px;
    }
  }
`;
StyledNavigation.Container = styled.nav`
  width: 100%;
  box-sizing: border-box;
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 768px) {
    height: 74px;
    max-width: 1054px;
    padding: 0 20px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1054px) {
    padding: 0;
  }
`;


StyledNavigation.Logo = styled.div`
  z-index: 8;
  background: #ffffff;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;  
  
  @media screen and (min-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    width: auto;
    padding: 0;
  }  

  a {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
  }

  img {
    max-width: none;
    width: 124px;
    height: 36px;
    z-index: 10;
    
    @media screen and (min-width: 768px) {
      width: 137px;
      height: 40px;
    }
  }  
`;

StyledNavigation.Menu = styled.div`
  z-index: 7;
  position: absolute;
  width: 100%;
  background-color: #fff;
  
  height: calc(100vh - 100%);
  overflow: visible;
  top: -100vh;
  left: 0;

  @media screen and (max-width: 767px) {
    transition: all .5s ease-out;
    &.open {
      top: 72px;
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: auto;
    left: auto;
    height: 100%;
  }
  
  .navigation__list {
    z-index: 10;
    position: relative;
    margin: 23px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 0;
      padding: 0 20px;
      justify-content: stretch;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media screen and (min-width: 1054px) {  
        padding: 0 104px;
    }
  }

  .navigation__item {
    margin: 15px 0 40px 20px;
    display: block;
    position: relative;
    

    @media screen and (min-width: 768px) {
      margin: 0 10px;
      display: flex;
      height: 100%;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom-color: ${CSS.COLORS.blazingRose};

        .arrow {
          transform: rotate(180deg);
          background-position: right 9px center;
        }
        .navigation__link.active ~ .navigation__sublist {
          padding-top: 18px;
          top: 68px;
        }

      }
    }
    
    & > span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      @media screen and (min-width: 768px) {
        flex-wrap: nowrap;
      }
    }

    .arrow {
      display: block;
      width: 60px;
      height: 20px;
      background: transparent url(${arrow}) no-repeat center center;
      background-size: 18px 8px;
      cursor: pointer;
      flex-shrink: 0;
      
      @media screen and (min-width: 768px) {
        width: 17px;
        background-size: 8px 4px;
        background-position: 9px center;
      }
    }

  }

  .navigation__link {
    font-size: 1.563rem;
    font-weight: 600;
    color: ${CSS.COLORS.burnBrick};
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      
    }

    @media screen and (min-width: 768px) {
      height: 100%;
      display: flex;
      align-items: center;
      color: ${CSS.COLORS.black};
      font-size: 16px;
      font-weight: bold;
      &.active {
        color: ${CSS.COLORS.blazingRose};
      }
      &.active:after {
        content: "";
        display: block;
        height: 3px;
        width: 100%;
        position: absolute;
        top: -3px;
        left: 0;
        background: ${CSS.COLORS.blazingRose};
      }
    }
  }
  .navigation__img__container {
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .navigation__img {
    position: absolute;
    left: -30px;
    right: 0;
    bottom: 0;
    width: 368px;
    max-width: 368px;
    height: 286px;
    margin: 0 auto 38px;
  }

  .navigation__sublist {
    display: none;
  }
  @media screen and (max-width: 767px) {
    .navigation__item .arrow.open {
      transform: rotate(180deg);
    }
    .navigation__item .arrow.open ~ .navigation__sublist {
      display: block !important;
      width: 100%;
    }
  }

  .navigation__item:hover .navigation__sublist {
    @media screen and (min-width: 768px) {
      position: absolute;
      left: 0;
      top: 71px;
      width: initial;      
      flex-direction: row;
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 16px 21px 15px 14px;
      min-width: 222px;  
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);
      box-sizing: content-box;
    }
  }

  .navigation__subitem {
    margin: 12px 0 0;
    display: block;
    font-size: 9px;
    @media screen and (min-width: 768px) {
      margin: 0 10px;
    }
  }

  .navigation__sublink {
    font-size: 1rem;
    font-weight: normal;
    color: #000;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #999;
    }

    @media screen and (min-width: 768px) {
      padding: 6px 0;
      display: block;
      font-weight: bold;
      font-size: 14px;
      
      &:hover {
        color: ${CSS.COLORS.blazingRose};
      }
    }
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    z-index: 9;
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
    width: 24.7px;
    background-color: transparent;
    border: none;
    padding: 0;

    span {
      display: block;
      width: 100%;
      height: 3px;
      border-radius: 5px;
      background-color: ${CSS.COLORS.burnBrick};
      transition: transform 0.3s ease-in-out;

      &:first-child {
        transform: translateY(0);
      }

      &:nth-child(2) {
        transform: translateY(0);
        margin: 4px 0;
      }

      &:last-child {
        transform: translateY(0);
      }
    }

    &.open {
      span {
        &:first-child {
          transform: translateY(10px) rotate(45deg);
        }

        &:nth-child(2) {
          transform: translateY(3px) rotate(-45deg);
        }

        &:last-child {
          transform: translateY(13px) rotate(-45deg);
          opacity: 0;
        }
      }
    }
  }
`;