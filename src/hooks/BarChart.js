import React, { useEffect } from "react";
import styled from "styled-components";
import { CSS } from "../Theme";
import { PulmonaryData } from '../../data/PulmonaryData';
import ScrollMagic from "scrollmagic";

const BarChart = ({ percentage, children }) => {
  const percent = Array.from({ length: 11 }, (_, i) => i * 5);
  const percentIncrements = percent.map((number) => (
    <span key={number}>{number}</span>
  ));

  // let deviceWIdth = winObj ? winObj.innerWidth : 0;
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const chart1 = new ScrollMagic.Scene({
      triggerElement: ".scroll-0",
      triggerHook: 0.8,
    })
    .setClassToggle('.scroll-0 .bar div', 'animate')
    .addTo(controller);

    const chart2 = new ScrollMagic.Scene({
      triggerElement: ".scroll-1",
      triggerHook: 0.8,
    })
    .setClassToggle('.scroll-1 .bar div', 'animate')
    .addTo(controller);

    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  return (
    <StyledChart >
      <div className="chart-key">
        <p className="font-bold">Number of exacerbations:</p>
        <div className="flex flex-row">
          {PulmonaryData[0].data.map((item, index) => (
            <div key={`key-${index}`}>
              <span className="circle"></span>
              <span>{item.exacerbation}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-container md:flex md:justify-between w-full">
        
        <p className="hidden md:flex desktop-y-axis"> % of patients with pulmonary exacerbations</p>
        <div className="hidden md:flex desktop-increments">{percentIncrements}</div>

        {PulmonaryData.map((item, index) => (
          <div className={`scroll-${index}`}>
            <h3 className="font-bold text-center mt-3 mb-5">{item.followupYear}-year follow-up</h3>
            <ul className="md:flex md:flex-row">
            {item.data.map((childItem, childIndex) => (
              <li className="md:flex md:flex-col-reverse">
                {childItem.n}
                <div className={`bar rounded-[8px] h-[43px] flex items-center `}>
                  <div
                    className={`mr-1 rounded-[8px] bar-${childIndex}` }
                    style={{
                      width: ((childItem.percent / 50) * 100) + '%',
                      height: ((childItem.percent / 50) * 100) + '%',
                    }}
                  ></div>
                  <span className={`font-bold ${childItem.percent > 40 ? 'inside' : ''}`}>{childItem.percent}</span>
                 
                </div>
              </li>
            ))}
            </ul>
            <div className="md:hidden flex w-full justify-between mt-6">{percentIncrements}</div>
            <p className="md:hidden text-center font-bold  mt-3">
              % of patients with <br />pulmonary exacerbations
            </p>
          </div>
        ))}
     </div> 
    </StyledChart>
  );
};

export default BarChart;

const StyledChart = styled.div`
  width: 308px;
  font-size: 18px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 99%;
    position: relative;
    padding-bottom: 87px;
    margin-bottom: 45px;
  }
  @media screen and (min-width: 768px) {
    .chart-container {
      padding-left: 100px;
      & > div {
        display: flex;
        flex-basis: 45%;
        flex-direction: column;
      }
      ul {
        display: flex;;
        flex-basis: 100%;
        justify-content: space-between;
      }
    }
  }

  .chart-container {
    .desktop-y-axis {
      position: absolute;
    flex-direction: column-reverse;
    width: 380px;
    transform: rotate(-90deg);
    left: -176px;
    top: 213px;
    font-weight: bold;
      }
      .desktop-increments {
        position: absolute;
        top: auto;
        bottom: 142px;
        left: 76px;
        display: flex;
        justify-content: space-between;
        flex-direction: column-reverse;
        height: 330px;    
      }      
  }
  li,
  li:last-child {
    margin-bottom: 10px !important;
    @media screen and (min-width: 768px) {
      width: 80px;
      text-align: center;
    }
  }

  @keyframes revealing-bars-x {
    0%  { transform: scaleX( 0 ); }
    50% { transform: scaleX( 1 ); }
    100% { transform: scaleX( 1 ); }
  }
  @keyframes revealing-bars-y {
    0%  { transform: scaleY( 0 ); }
    50% { transform: scaleY( 1 ); }
    100% { transform: scaleY( 1 ); }
  }

  .bar {
    position: relative;
    background: #eee;
    height: 43px;
    margin-top: 6px;
    margin-right: 1.5%;
    @media screen and (min-width: 768px) {
      height: 324px;
      width: 43px;
      font-size: 17px;
      position: relative;
      display: flex;
      flex-direction: column-reverse;
      margin: 0 auto 30px;
    }
    div { // Chart Data
      
      @media screen and (max-width: 767px) {
        transform: scaleX( 0 );
        transform-origin: left;
        height: 100% !important;
        &.animate {
          animation: revealing-bars-x 2s ease-in-out 1 forwards;
        }
      }
      @media screen and (min-width: 768px) {
        transform: scaleY( 0 );
        transform-origin: bottom;
        width: 100% !important;
        margin: 0 0 0 0;
        bottom: 0;
        &.animate {
          animation: revealing-bars-y 2s ease-in-out 1 forwards;
        }
      }
    }
    div.bar-0 {
      background: ${CSS.COLORS.heatedGold} 
      
    }
    div.bar-1 {
      background: ${CSS.COLORS.bakedCoral};
      animation-delay: .25s;
    }
    div.bar-2 {
      background: ${CSS.COLORS.blazingRose};
      animation-delay: .5s;
    }
    div.bar-3 {
      background: ${CSS.COLORS.burnBrick};
      animation-delay: .75s;
    }      
  }
  span.inside {
    @media screen and (max-width: 767px) {
      position: absolute;
      left: 77%;
      color: #fff;
      top: auto;
      z-index: 1;
    }
  }
  .chart-key {
    font-size: 16px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 2;
    top: 108px;
    padding: 20px 0;
    background: #fff;
    @media screen and (min-width: 768px) {
      width: 375px;
      font-size: 18px;
      position: absolute;
      top: auto;
      bottom: 0;
      left: 76px;
      padding: 0;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    .circle {
      height: 22px;
      width: 22px;
      border-radius: 11px;
      background: ${CSS.COLORS.heatedGold};
      display: block;
      margin-right: 10px;          
    }
    div:nth-child(1) .circle { background: ${CSS.COLORS.heatedGold} }
    div:nth-child(2) .circle { background: ${CSS.COLORS.bakedCoral}}
    div:nth-child(3) .circle { background: ${CSS.COLORS.blazingRose}}
    div:nth-child(4) .circle { background: ${CSS.COLORS.burnBrick}}      
  }
`;
