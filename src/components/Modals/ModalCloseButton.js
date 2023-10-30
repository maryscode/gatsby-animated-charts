import React from "react";
import closeButton from "../../images/close-btn.svg";
import { ModalCloseButtonStyles } from "./styles";

export const ModalCloseButton = ({ onClick }) => {
  return (
    <ModalCloseButtonStyles
      href="close-the-modal"
      className="close-btn"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
    >
      <img src={closeButton} alt="close icon" className="cursor-pointer"/>
    </ModalCloseButtonStyles>
  );
};
