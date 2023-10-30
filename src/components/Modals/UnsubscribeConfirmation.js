import React, { useRef } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalStyles } from "./styles";

// this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const UnsubscribeConfirmation = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen}>
      <UnsubscribeConfirmationContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const UnsubscribeConfirmationContent = ({ closeCallback }) => {
  return (
    <ModalStyles>
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2>You have successfully unsubscribed</h2>
      <span>
        Sorry to see you go. You will no longer receive communications from{" "}
        RethinkBronchiectasis.com.
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
