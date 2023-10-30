import React, { useRef, useState } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalContentContainerDiv } from "./styles";

export const Leaving = ({ children, callBack, linkRef }) => {
  const [open, setOpen] = useState(false);
  const ModalContainerRef = useRef(null);
  let href = "";

  const openLeavingModal = () => {
    setOpen(!open);
    try {
      callBack(!open);
    } catch (error) {
      console.log(`Modals Leaving, callBack error: ${error}`);
    }
    ModalContainerRef.current.classList.add("open");
  };

  const cloneChildren = (children) => {
    return React.Children.map(children, (child) => {
      let newChild = child;
      if (React.isValidElement(child) && child.props.href) {
        let componentProps = { ...child.props };
        componentProps.onClick = (e) => {
          e.preventDefault();
          openLeavingModal();
        };
        href = child.props.href;
        newChild = React.cloneElement(child, componentProps);
      }
      return newChild;
    });
  };

  return (
    <>
      {/* <span onClick={openLeavingModal}>{children}</span> */}
      {cloneChildren(children)}
      <ModalContainer ref={ModalContainerRef} open={open} setOpen={setOpen}>
        <LeavingSiteModalContent linkRef={linkRef} href={href} click={openLeavingModal} />
      </ModalContainer>
    </>
  );
};

const LeavingSiteModalContent = ({ href, click, linkRef }) => {
  return (
    <ModalContentContainerDiv>
      <Modals.ModalCloseButton onClick={(e) =>{
        click(e);
        if (linkRef.current) {
            setTimeout(() => {
              linkRef.current.focus();
              console.log("link should restore focus to the link that opened the modal");
              console.log(document.activeElement);
            }, 100);
        }
      }} />
      <h2>You are about to leave Rethink Bronchiectasis</h2>
      <p>
        The site you are linking to is not controlled or endorsed by Insmed, and
        we are not responsible for the content. In some cases, Insmed has
        provided funding to support the creation of content on these websites.
      </p>
      <p>Thank you for visiting Rethink Bronchiectasis.</p>
      <span className="buttons">
        <Button
          onClick={(e) => {
            e.preventDefault();
            click();
          }}
          type="cancel"
        >
          Cancel
        </Button>
        <Button href={href} onClick={click} newWindow>
          OK
        </Button>
      </span>
    </ModalContentContainerDiv>
  );
};
