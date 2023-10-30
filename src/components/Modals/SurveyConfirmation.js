import React, { useRef } from "react";
import { Button } from "../Button";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { ModalStyles } from "./styles";

// this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const SurveyConfirmation = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen}>
      <SurveyConfirmationContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const SurveyConfirmationContent = ({ closeCallback }) => {
  return (
    <ModalStyles>
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2>Thanks for your response</h2>
      <span>
        Your feedback will help us continue to provide useful information about
        bronchiectasis.
      </span>
      <div className="flex justify-center pb-4 w-full m-auto">
        <Button
          to="/"
          onClick={closeCallback}
        >
          Home
        </Button>
      </div>
    </ModalStyles>
  );
};
