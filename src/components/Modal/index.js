import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import styled from "styled-components";

const transitionTime = 175;

const ModalContainerDiv = styled(FocusLock)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3000;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  transition: opacity ${transitionTime / 1000}s ease-out;
  display: none;
`;

const ModalContainer = React.forwardRef(({ open, setOpen, children }, ref) => {
  const [mounted, setMounted] = useState(false);

  // Crude method to change display value before or after animating the opacity, to control whether the modal is open or not. try catch is used to prevent errors when the component is unmounted (hacky)
  useEffect(() => {
    if (mounted && open) {
      try {
        ref.current.style.display = "flex";
        setTimeout(() => {
          ref.current.style.opacity = 1;
        }, 50);
      } catch (error) {}
    } else {
      try {
        ref.current.style.opacity = 0;
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.display = "none";
          }
        }, transitionTime);
      } catch (error) {}
    }
  }, [open, mounted, ref]);

  // slight hack to ensure the component is mounted before trying to create the portal and render the component
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        <ModalContainerDiv
          disabled={!open}
          ref={ref}
          open={open}
          onClick={
            // close the modal when the user clicks outside of the modal
            (e) => {
              if (e.target === ref.current) {
                try {
                  setOpen(false);
                } catch (error) {}
              }
            }
          }
        >
          {children}
        </ModalContainerDiv>,
        document.querySelector("body")
      )
    : null;
});

export default ModalContainer;
