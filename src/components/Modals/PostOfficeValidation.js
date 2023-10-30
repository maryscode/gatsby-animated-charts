import React, { useRef, useEffect } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalContentContainerDiv } from "./styles";
import iconError from "../../images/icon-error.svg";

export const PostOfficeValidation = ({
  isOpen,
  setPoValidationOpen,
  callBack,
  whichAddress,
  setWhichAddress,
  addressUser,
  addressPostOffice,
  addressError,
  setFormData,
  formData
}) => {
  const ModalContainerRef = useRef(null);

  const openLeavingModal = () => {
    setPoValidationOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer ref={ModalContainerRef} open={isOpen}>
        <PostOfficeValidationModalContent
          closeCallback={openLeavingModal}
          callBack={callBack}
          isOpen={isOpen}
          whichAddress={whichAddress}
          setWhichAddress={setWhichAddress}
          addressUser={addressUser}
          addressPostOffice={addressPostOffice}
          addressError={addressError}
          setFormData={setFormData}
          formData={formData}
        />
      </ModalContainer>
    </>
  );
};

const PostOfficeValidationModalContent = ({
  //   isOpen,
  closeCallback,
  callBack,
  whichAddress,
  setWhichAddress,
  addressUser,
  addressPostOffice,
  addressError,
  setFormData,
  formData
}) => {
  //   const [isValidated, setIsValidated] = useState(false);

  const refTheirsParent = useRef(null);
  const refYoursParent = useRef(null);

  const clickRadio = (type) => {
    if (type === "theirs") setWhichAddress("theirs");
    else setWhichAddress("yours");
  };

  useEffect(() => {
    if (refTheirsParent.current.style.opacity < 1) {
      refYoursParent.current.querySelector("input").click();
    }
  }, [addressUser, refYoursParent, refTheirsParent]);

  const generateAddressLabel = (address) => {
    return (
      <>
        <div className="generated-address">
          {!address.criticalError && (
            <>
              <span>
                <strong>
                  {address.userAddress
                    ? "Address you entered"
                    : "Suggested address"}
                </strong>
              </span>
              <span
                className={`their-address ${
                  address.errorMessage ? " error" : ""
                }`}
              >
                {address.address}
                <br />
                {address.city}, {address.state} {address.zip}
              </span>
            </>
          )}
        </div>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (whichAddress === "theirs") {
      let newData = Object.assign({}, formData, addressPostOffice)
      setFormData((formData) => ({ ...newData }));  // can i just setFormData with newData?
    } else {
      setFormData(formData);
    }
    closeCallback(e);
  };

  return (
    <ModalContentContainerDiv>
      {/* ModalCloseButton should be an actual component */}
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2>Do we have the right practice address?</h2>
      <span>
        If the address you entered looks correct, click “Submit.” To edit the
        address, click “Back.”
      </span>
      <form>
        <div
          role="group"
          aria-labelledby="radio-group"
          className="addresses addressesPadding"
        >
          <label
            htmlFor="correct_address_yours"
            ref={refYoursParent}
            className="address radio"
          >
            <span
              role="radio"
              aria-checked={whichAddress === "yours"}
              aria-labelledby="correct_address_yours"
              tabIndex={0}
              onClick={() => clickRadio("yours")}
              onKeyDown={() => setWhichAddress("yours")}
            >
              <span className="radio-fill"></span>
              <input
                id="correct_address_yours"
                type="radio"
                name="correct_address"
                value="yours"
                defaultChecked={whichAddress === "yours"}
                onClick={() => setWhichAddress("yours")}
              />
            </span>
            <span>{generateAddressLabel(addressUser)}</span>
          </label>
        
          <label
            htmlFor="correct_address_theirs"
            ref={refTheirsParent}
            className={`address radio ${addressPostOffice.criticalError && 'hide'}`}
          >
            <span
              role="radio"
              aria-checked={whichAddress === "theirs"}
              aria-labelledby="correct_address_theirs"
              tabIndex={0}
              onClick={() => clickRadio("theirs")}
              onKeyDown={() => setWhichAddress("theirs")}
              className={`${addressPostOffice.criticalError && 'hide'}`}
            >
              <span className={`radio-fill ${addressPostOffice.criticalError && 'hide'}`}></span>
              <input
                id="correct_address_theirs"
                type="radio"
                name="correct_address"
                value="theirs"
                defaultChecked={whichAddress === "theirs"}
                onClick={() => setWhichAddress("theirs")}
                className={`${addressPostOffice.criticalError && 'hide'}`}
              />
            </span>
            <span>{generateAddressLabel(addressPostOffice)}</span>
          </label>
          
        </div>

        {addressError && (
          <div className="addressesPadding addressErrorPadding">
            <span className="alert has-error here">
              <img src={iconError} alt="Error icon" /> {addressError}
            </span>
          </div>
        )}

        <span className="buttons">
          <Button
            onClick={(e) => {
              e.preventDefault();
              closeCallback();
            }}
            type="cancel"
          >
            Back
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </span>
      </form>
    </ModalContentContainerDiv>
  );
};
