import React, { useRef, useEffect, useImperativeHandle, forwardRef  } from "react";
import styled from "styled-components";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalStyles } from "./styles";
import { ReferencesData } from "../../data/References";

export const References = ({ isOpen, setOpen, pageName }) => {
  const ModalContainerRef = useRef(null);
  const ModalListRef = useRef(null);
  const referencesData = ReferencesData.find((refs) => refs.id === pageName).references;

  const openCloseModal = () => {
    setOpen(!isOpen);
  };
  
  useEffect(() => {
    if (isOpen) {
      ModalListRef.current.scrollRefTop();
    }
  }, [isOpen]);


  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen} setOpen={setOpen}>
      <ReferencesContent closeCallback={openCloseModal} referencesData={referencesData} ref={ModalListRef} />
    </ModalContainer>
  );
};

const ReferencesContent = forwardRef (({ closeCallback, referencesData }, ref) => {
  const ListRef = useRef(null);

  // hook for parent components to call ref list
  useImperativeHandle(ref, () => ({
    scrollRefTop() {
      ListRef.current.scrollTop = 0;
    }
  }));
  return (
    <ModalStyles className="!tablet:pr-3 !px-6 !pr-4 pb-8">
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h3 className="text-[26px] font-nunito font-extrabold text-burnt-brick mb-4">References</h3>
      <StyledO ref={ListRef} className="overflow-y-scroll pl-9 ml-[-16px] lg:pr-4 h-[60vh] lg:h-[30vh] list-decimal tablet:pr-3">
        {referencesData.map((item, index) => (
          <li key={index} className="leading-[22px] pb-2">
            <p>{item.copy}</p>
          </li>
        ))}
      </StyledO>
    </ModalStyles>
  );
});

const StyledO = styled.ol`
  
  & > li::marker {
    font-weight: bold;
  }

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 7px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #B83B4D;
  }
`;