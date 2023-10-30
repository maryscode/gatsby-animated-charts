import styled from "styled-components";
import { CSS } from "../Theme";

export const ModalContentContainerDiv = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  padding: 36px 0;
  @media (min-width: 768px) {
    padding: 36px 0;
  }
  border-radius: 8px;
  max-width: 89.333333%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: flex-start;
  width: 512px;
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin: 0 20px 20px;
    @media (min-width: 768px) {
      margin: 0 36px 20px;
    }
    color: #6f0013;
    span {
      font-size: 26px;
    }
  }
  span {
    font-size: 16px;
    line-height: 1.38;
    color: #000000;
  }
  & > span {
    margin: 0 20px;
    @media (min-width: 768px) {
      margin: 0 36px;
    }
    &:nth-last-child(2) {
        margin-bottom: 36px;
    }
  }
  p {
    font-size: 16px;
    line-height: 1.38;
    color: #000000;
    margin: 0 20px 36px;
    @media (min-width: 768px) {
      margin: 0 36px 36px;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 30px;
    .button {
      width: 136px;
      padding: 0;
      margin: 0;
      @media (min-width: 768px) {
        width: 156px;
      }
    }
    .cancel {
      margin-right: 15px;
      background-color: ${CSS.COLORS.white};
      span {
        color: ${CSS.COLORS.burnBrick};
      }
    }
  }
  a.close-btn {
    position: absolute;
    top: 9.4px;
    right: 9.4px;
  }
  .addressesPadding {
    margin: 0 20px 10px;
    @media (min-width: 768px) {
      margin: 0 36px 0px;
    }
  }
  .addressErrorPadding {
    margin-bottom: 6px;
    @media (min-width: 768px) {
      margin-bottom: 10px;
    }
  }
  .addresses {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    justify-content: flex-start;
    align-items: flex-start;
    .address {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
      }
      /* .their-address,
      .your-address {
        text-transform: uppercase;
      } */
    }
  }
  form {
    width: 100%;
  }

  label.radio {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 1.25;
    cursor: pointer;
    & > span:nth-child(1) {
      margin: 0 10px 0 0;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: solid 1px #707070;
      background-color: #ffffff;
      input {
        display: none;
      }
      .radio-fill {
        display: block;
        width: 10px;
        height: 10px;
        background-color: transparent;
        border-radius: 20px;
        margin: 5px;
      }
      &[aria-checked="true"] {
        .radio-fill {
          background-color: #b83b4d;
        }
        path {
          /* fill: #fcc454 !important; */
        }
      }
      &:focus-visible {
        border: solid 1px #fcc454;
        outline: solid 1px #fcc454;
      }
    }
    & > span:nth-child(2) {
      flex-basis: calc(100% - 20px);
    }
  }
  .radio-error > span:nth-child(1):not(.alert) {
    border: solid 2px #b83b43 !important;
  }
  .generated-address {
    span {
      display: block;
      margin: 0 0 8px;
      @media (min-width: 768px) {
        margin: 0 0 8px;
      }
      &.their-address,
      &.correct_address {
        margin: 0 0 24px;
        @media (min-width: 768px) {
          margin: 0 0 27px;
        }
      }
    }
  }
  label.address:nth-last-child(1) {
    span:nth-last-child(1) {
      .their-address {
        margin: 0;
      }
    }
  }
`;

export const ModalCloseButtonStyles = styled.a`
  position: absolute;
  top: 9.4px;
  right: 9.4px;
`;

export const ModalStyles = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  padding: 24px 0;
  align-items: flex-start;
  @media (min-width: 768px) {
    width: 512px;
    padding: 24px 0;
  }

  h2 {
    font-size: 26px;
    line-height: 1.31;
    font-weight: 800;
    margin: 0 0 20px;
    color: #6f0013;
    padding: 0 50px 0 20px;
    font-family: "Nunito", sans-serif;
    @media (min-width: 768px) {
      padding: 0 50px 0 36px;
    }
    /* width: 100%; */
  }
  span {
    font-size: 16px;
    line-height: 1.38;
    color: #000000;
    margin: 0 0 36px;
    display: block;
    padding: 0 20px;
    @media (min-width: 768px) {
      padding: 0 36px;
    }
  }
  a.close-btn {
    position: absolute;
    top: 9.4px;
    right: 9.4px;
  }
`;
