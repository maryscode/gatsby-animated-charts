import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { NavigationData } from "../../data/NavigationData";
import styled from "styled-components";
import { CSS } from "../Theme";
import arrow from "../../images/chevron-right-arrow-white.svg";

export const Subnav = ({ activeSection, parentLink }) => {
  const [rightBtn, setRightBtn] = useState(true);
  const [leftBtn, setLeftBtn] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const navParent = document.querySelector(".subnav__list");
    const navContainer = navParent.querySelector(".active");

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setNavWidth(getMenuWidth());
    };
    const getMenuWidth = () => {
      const subnavMenu = document.querySelectorAll(".subnav__list .active li");
      const subnavMenuToArray = Array.apply(null, subnavMenu);
      const itemWidths = subnavMenuToArray.map((li) => li.offsetWidth);
      const totalWidths = itemWidths.reduce(add, 0);
      function add(accumulator, a) {
        return accumulator + a;
      }
      return totalWidths;
    };
    const scrollNav = () => {
      let maxScroll = getMenuWidth() - window.innerWidth + 70;
      navContainer.scrollLeft === 0 ? setLeftBtn(false) : setLeftBtn(true);
      navContainer.scrollLeft >= maxScroll ? setRightBtn(false) : setRightBtn(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    navContainer.addEventListener("scroll", scrollNav);

    return () => {
      window.removeEventListener("resize", handleResize);
      navContainer.addEventListener("scroll", scrollNav);
    };
  }, []);

  const handleLeftBtnClick = () => {
    const navContainer = document.querySelector(".subnav__list .active");
    navContainer.scrollLeft -= 100;
  };

  const handleRightBtnClick = () => {
    const navContainer = document.querySelector(".subnav__list .active");
    navContainer.scrollLeft += 200;
  };

  return (
    <>
      <StyledSubnav>
        <div className={`subnav__list my-0 ${navWidth > windowWidth ? "overflow" : ""}`}>
          {NavigationData.map((item, index) => {
            return item.path === parentLink ? (
              <ul
                key={index}
                className={`snap-x snap-mandatory active 
                  ${navWidth > windowWidth ? "overflow-nav" : ""}
                `}
              >
                {item.path === parentLink
                  ? item.children.map((childItem, childIndex) => (
                      <li key={childIndex} className="snap-start subnav__item">
                        <Link
                          key={`link${childIndex}`}
                          to={childItem.path}
                          activeClassName="active"
                          className={`subnav__link ${childItem.path.split("#")[1] === activeSection ? "active" : ""}`}
                          partiallyActive={true}
                        >
                          {childItem.copy}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            ) : (
              ""
            );
          })}
        </div>
        {leftBtn && navWidth > windowWidth ? <button aria-label="Scroll nav left" className="scrollbutton__left" onClick={handleLeftBtnClick}></button> : null}
        {rightBtn && navWidth > windowWidth ? (
          <button aria-label="Scroll nav right" className="scrollbutton__right" onClick={handleRightBtnClick}></button>
        ) : null}
      </StyledSubnav>
    </>
  );
};

const StyledSubnav = styled.nav`
  font-family: "Nunito";
  display: block;
  z-index: 4;
  white-space: nowrap;
  position: fixed;
  left: 0;
  width: 100%;
  background: ${CSS.COLORS.blazingRose};
  height: 36px;
  overflow-y: hidden;
  text-align: center;
  top: 72px;
  @media screen and (min-width: 768px) {
    top: 74px;
  }

  .snap-center {
    padding: 50px;
    margin: 0 30px;
    background: grey;
    width: 300px;
    white-space: nowrap;
  }
  .subnav__list {
    display: block;
    width: auto;
    margin: 0 auto;
    height: 100%;
    &.overflow {
      justify-content: flex-start;
      position: relative;
      transition: left 0.3s ease-in-out;
      margin: 0 35px;
    }
  }
  .subnav__list ul {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  ul.active {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
    justify-content: center;
    /* Hide scrollbar for Chrome, Safari and Opera */
  }
  ul.active.overflow-nav {
    padding-right: 15px;
    justify-content: flex-start;

    @media screen and (min-width: 768px) {
      padding-right: 0;
    }
  }

  .subnav__item {
    display: inline-block;
    flex: 0 0 auto;
    height: 100%;
  }
  .subnav__link {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 20px 0 0;
    padding: 0;
    font-weight: 400;
    color: ${CSS.COLORS.lightGrey};
    font-size: 12px;
    /* transition: all 0.3s ease-in-out 0s; */
    @media screen and (min-width: 768px) {
      font-size: 14px;
      margin: 0 27px;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;
      width: 100%;
      transition: all 0.1s ease-in 0s;
    }
    &:hover,
    &.active {
      font-weight: 800;
      color: #fff;
      text-decoration: none;
      &:after {
        background: ${CSS.COLORS.heatedGold};
      }
    }
  }
  .scrollbutton__right,
  .scrollbutton__left {
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: -9px;
    content: "";
    height: 18px;
    width: 18px;
    border-radius: 9px;
    background: #ff7f51 url(${arrow}) no-repeat center center;
    background-size: 5px auto;
    cursor: pointer;
  }
  .scrollbutton__left {
    right: auto;
    left: 12px;
    transform: rotate(180deg);
  }
`;
