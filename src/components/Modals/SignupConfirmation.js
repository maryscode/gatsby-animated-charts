import React, { useRef } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalStyles } from "./styles";

// this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const SignupConfirmation = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen}>
      <SignupConfirmationContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const SignupConfirmationContent = ({ closeCallback }) => {
  return (
    <ModalStyles>
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2>Thanks for signing up</h2>
      <span>
        You’re on the list to receive information about bronchiectasis. Look out
        for a confirmation email from info@rethinkbronchiectasis.com soon.
      </span>
      <div className="flex align-center justify-center w-full mb-4">
        <Button
          // TODO: can we not use a to="/" with Gatsby Link? seems like we'd need to preventDefault on the click event every time with to="" set?
          className="centered"
          to="/"
          onClick={closeCallback}
        >
          Home
        </Button>
      </div>
    </ModalStyles>
  );
};
