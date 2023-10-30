import { createGlobalStyle } from "styled-components";

export const CSS = {
  COLORS: {
    bakedCoral: "#ff7f51",
    black: "#000",
    blazingRose: "#b83b4d",
    burnBrick: "#750010",
    darkGrey: "#707070",
    heatedGold: "#fcc454",
    lightGrey: "#ebebeb",
    white: "#fff",
  },
  GRADIENTS: {
    radial: `radial-gradient(circle at 50% 50%, rgba(255,127,85,1), rgba(252,196,84,0.29))`,
    leftRadial: `radial-gradient(circle at -10% -10%, rgba(255,127,85,1), rgba(252,196,84,0.29))`,
    rightRadial: `radial-gradient(circle at 110% -10%, rgba(255,127,85,1), rgba(252,196,84,0.29))`,
  },
};

const Theme = createGlobalStyle`
  html,
  body {
    position: relative;
    color: ${CSS.COLORS.black};
    font-family: 'Nunito Sans';
    font-size: 16px;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
    font-weight: normal;
    line-height: 22px;
    min-height: 100vh;
  }

  #gatsby-focus-wrapper {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }
  
  main {
    margin: 110px 20px 0;
    
    @media (min-width: 1024px) {
      width: 100%;
      margin: 110px auto 0;
    }
  }

  a {
    color: ${CSS.COLORS.burnBrick};
    font-weight: 800;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  *:focus {
    outline: 0;
  }
  *:focus-visible {
    outline: 2px solid ${CSS.COLORS.burnBrick};
    border-radius: 8px;
    outline-offset: 8px;
  }
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }
  main {
    p {
        width: 100%;
        margin: 0 0 24px;
    }
    ul.dotted {
        list-style: none;
        padding: 0;
        @media (min-width: 768px) {
            padding: 0;
        }
        margin: 0 0 24px;
        li {
            line-height: 1.38;
            margin-bottom: 5px;
            display: flex;
            flex-direction: row;
            &::before {
                content: "\\2022";
                color: #ff7f51;
                font-weight: bold;
                display: inline-block;
                margin-right: 8px;
            }
        }
    }
    ul.dashed {
        list-style: none;
        padding: 0;
        @media (min-width: 768px) {
            padding: 0;
        }
        margin: 0;
        li {
            line-height: 1.38;
            margin-bottom: 5px;
            display: flex;
            flex-direction: row;
            &::before {
                content: "-";
                color: #ff7f51;
                font-weight: bold;
                display: inline-block;
                margin-right: 8px;
            }
        }
    }    
    ul li {
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }

    .register {
        margin: 0 0 36px;
    }
    .required-msg {
        color: #707070;
        font-size: 14px;
        margin: 0 0 20px;
        @media (min-width: 768px) {
            margin: 0 0 24px;
        }
    }
    .button-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media (min-width: 768px) {
            justify-content: flex-start;
        }
    }
    /* .block {
        display: block;
    } */
    
    form {
        label {
          align-items: stretch;
          display: inherit;
          flex-direction: inherit;
        }
        
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            border: 1px solid #ffffff;
            -webkit-text-fill-color: #000000;
            -webkit-box-shadow: 0 0 0px 1000px #f4ecec inset;
            transition: background-color 5000s ease-in-out 0s;
        }
    }
    .ref-block {
        display: none !important;
    }
  }

  h2 {
    font-size: 1.625rem;
    font-weight: 800;
    line-height: 2.125rem;
  }

  p > strong, .bold {
    font-weight: bold;
  }

  .regular {
    font-weight: normal;
  }

  .wrapper {
    margin: auto;
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  .site-title {
    font-size: 3rem;
    color: gray;
    font-weight: 700;
    margin: 3rem 0;
  }

  .text-sm {
    color: ${CSS.COLORS.black};
    font-size: .875rem;
    line-height: 1rem;
  }

  .fpo {
    color: #ff00ff !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .flex-start {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
  }

  .link {
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    color: #000000;
    font-weight: normal;
    margin-bottom: 16px;
    &:hover {
        color: #750010;
    }
    &.bold {
        font-weight: bold;
    }
    &:nth-last-child(1) {
        margin-bottom: 0;
    }
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: solid 1px #707070;
    background-color: #ffffff;
  }
  .form {
    display: flex;
    flex-direction: column;
  }

  .hang-asterisk {
      text-indent: -7px;
      display: block;
  }

  .alert {
    img {
        margin-right: 8px;
        width: 18px;
        height: 18px;
    }
    color: #b83b43;
    font-weight: bold;
    display: flex;
    flex-grow: 0;
    margin-top: 4px;
    width: 100%;
  }

  .has-error {
    color: #b83b43 !important;
  }

  sup {
    font-size: 55%;
  }
  sup {
    top: -0.6em;
    left: 0.1em;
  }
  .smallcaps {
    font-variant: small-caps;
  }
  /* this makes the vimeo video responsive */
  .video-container iframe {
    position: absolute;
    top: -1%;
    left: 0;
    width: 101%;
    height: 101%;
  }
  .video-container > div { // rounded corners for ios / webkit
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
`;

export default Theme;