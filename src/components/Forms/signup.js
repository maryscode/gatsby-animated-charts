import React, { useEffect, useState, useRef } from "react";
import { Form } from "../Form";
import { Survey } from "../Survey";
import { Checkbox } from "../Checkbox";
import { TextInput } from "../TextInput";
import { PlacesAutocompleteInput } from "../PlacesAutocompleteInput";
import { Select } from "../Select";
import { ExternalLink } from "../ExternalLink";
import Modals from "../Modals";
import { inProduction, poValidationKeys, GATSBY_API_ENDPOINT } from "../../constants/";
import { States, HealthcareProfessions } from "../../constants/Forms";
import { xmlToJson } from "../../utils";

export const SignUpForm = () => {
  const [addressUser, setAddressUser] = useState({});
  const [addressPostOffice, setAddressPostOffice] = useState({});
  const [addressError, setAddressError] = useState();
  const [postOfficeAddressData, setPostOfficeAddressData] = useState({});

  const [whichAddress, setWhichAddress] = useState("yours");

  const [poValidationOpen, setPoValidationOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const [formData, setFormData] = useState({});

  const formRef = useRef(null);
  const autoCompleteRef = useRef(null);

  const validatePostalAddress = (data) => {
    const fieldCity = `${data.city}`;
    const fieldState = `${data.state}`;

    let fieldZip;
    let fieldZip4 = "";
    if (data.zipcode.indexOf("-") > -1) {
      fieldZip = `${data.zipcode.substring(0, 5)}`;
      fieldZip4 = `${data.zipcode.substring(6, 10)}`;
    } else {
      fieldZip = `${data.zipcode}`;
    }

    const poUserId = inProduction
      ? poValidationKeys.production.userId
      : poValidationKeys.development.userId;
    const poProtocol = inProduction
      ? poValidationKeys.production.protocol
      : poValidationKeys.development.protocol;

    const addressToValidate = `<AddressValidateRequest USERID="${poUserId}"><Revision>1</Revision><Address ID="0"><Address1>${
      data.practice_2
    }</Address1><Address2>${
      data.practice_1
    }</Address2><City>${fieldCity}</City><State>${fieldState}</State><Zip5>${fieldZip}</Zip5>${
      fieldZip4 !== "" ? `<Zip4>${fieldZip4}</Zip4>` : `<Zip4/>`
    }</Address></AddressValidateRequest>`;
    const poRequest = `${poProtocol}://production.shippingapis.com/ShippingAPI.dll?API=Verify&XML=${encodeURIComponent(
      addressToValidate
    )}`;

    const xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const xhrXml = xhr.responseXML;
          const jsonData = xmlToJson(xhrXml);
          const jsonString = JSON.stringify(jsonData);

          // check it the address is valid enough to pass through without the validation modal
          if (
            jsonData.AddressValidateResponse.Address.DPVFootnotes === "AABB" &&
            jsonData.AddressValidateResponse.Address.DPVConfirmation === "Y"
          ) {
            // address is valid enough to pass through without the validation modal
            setFormData((formData) => ({ ...data }));
            return;
          }

          // user has to validate their address, something is wrong with it
          setPostOfficeAddressData(data);
          setPoValidationOpen(true);

          if (jsonString.indexOf("Error") === -1) {
            const address = {
              address: `${
                jsonData.AddressValidateResponse.Address.Address2 !== undefined
                  ? jsonData.AddressValidateResponse.Address.Address2
                  : ""
              }${
                jsonData.AddressValidateResponse.Address.Address1 !== undefined
                  ? `, ${jsonData.AddressValidateResponse.Address.Address1}`
                  : ""
              }`,
              practice_1:
                jsonData.AddressValidateResponse.Address.Address2 !== undefined
                  ? jsonData.AddressValidateResponse.Address.Address2
                  : "",
              practice_2:
                jsonData.AddressValidateResponse.Address.Address1 !== undefined
                  ? jsonData.AddressValidateResponse.Address.Address1
                  : "",
              city: jsonData.AddressValidateResponse.Address.City,
              state: jsonData.AddressValidateResponse.Address.State,
              zip: `${jsonData.AddressValidateResponse.Address.Zip5}${
                jsonData.AddressValidateResponse.Address.Zip4 === undefined ||
                jsonData.AddressValidateResponse.Address.Zip4.toString() ===
                  "[object Object]"
                  ? ``
                  : `-${jsonData.AddressValidateResponse.Address.Zip4}`
              }`,
              criticalError: false,
            };

            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf(
                  "N"
                ) > -1 ||
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf(
                  "M3"
                ) > -1
              )
                address.errorMessage = `Address not found`;
            } catch (e) {}
            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf(
                  "D"
                ) > -1 ||
                jsonData.AddressValidateResponse.Address.Footnotes.indexOf(
                  "H"
                ) > -1
              )
                address.errorMessage = `An apartment or suite # may be required for this building`;
            } catch (e) {}
            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf(
                  "S"
                ) > -1 ||
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf(
                  "CC"
                ) > -1
              )
                address.errorMessage = `Apartment or suite not found for this address`;
            } catch (e) {}
            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf(
                  "CC"
                ) > -1 &&
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf(
                  "S"
                ) > -1
              )
                address.errorMessage = `No apartment or suite found at this address`;
            } catch (e) {}
            try {
              if (
                jsonData.AddressValidateResponse.Address.Footnotes.indexOf(
                  "BDN"
                ) > -1 &&
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf(
                  "AA"
                ) > -1
              )
                address.errorMessage = `Unable to verify address`;
            } catch (e) {}

            address.criticalError = false;

            setAddressPostOffice(address);
            setAddressError(address.errorMessage);
          } else {
            const address = {
              address: "",
              city: "",
              state: "",
              zip: "",
              errorMessage: "Post office cannot validate this address",
              criticalError: true,
            };
            setAddressPostOffice(address);
            setAddressError(address.errorMessage);
          }
        }
      }
    };
    xhr.onerror = function (e) {
      // router.push('/internal-server-error/');
    };

    xhr.responseType = "document";
    xhr.open("GET", poRequest);
    xhr.send();
  };

  const onSubmit = (data) => {
    // if the user has filled out practice_1, city, and state then we need to validate the address, other wise we call submitFormData
    if (data.practice_1 !== "" && data.city !== "" && data.state !== "") {
      setAddressUser({
        address: data.practice_2
          ? `${data.practice_1}, ${data.practice_2}`
          : data.practice_1,
        city: data.city,
        state: data.state,
        zip: data.zipcode,
        errorMessage: "",
        userAddress: true,
      });
      validatePostalAddress(data);
    } else {
      setFormData((formData) => ({ ...data }));
    }
  };

  useEffect(() => {

    const submitFormData = () => {
      setSuccessModalOpen(true);
      fetch(`${GATSBY_API_ENDPOINT}/veeva/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(`response data from server\n${JSON.stringify(data)}`);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      formRef.current.resetTheForm();
      autoCompleteRef.current.resetAddress();
      setFormData({});
    };
    
    // check if the object formData is empty and has no keys
    if (Object.keys(formData).length === 0 && formData.constructor === Object) {
      // data is empty, likely this is the first time the component is rendered
    } else {
      submitFormData(formData);
    }
  }, [formData]);

  return (
    <>
      <Form
        submit="Sign up"
        hasRequired={true}
        isHome={true}
        onSubmit={onSubmit}
        // autoComplete="off"
        ref={formRef}
      >
        <TextInput
          name="first"
          label="first name*"
          required={true}
          message="This field cannot be blank."
          useForm={true}
          autoComplete="given-name"
        />
        <TextInput
          name="last"
          label="last name*"
          required={true}
          message="This field cannot be blank."
          useForm={true}
          autoComplete="family-name"
        />
        <TextInput
          name="email"
          label="email*"
          required={true}
          pattern="email"
          message="Email address should follow the format user@domain.com."
          useForm={true}
          autoComplete="email"
        />
        <Select
          name="specialty"
          label="specialty*"
          required={true}
          none="Select Specialty"
          options={HealthcareProfessions}
          message="Please select a specialty."
          useForm={true}
        />
        <TextInput
          name="specify_specialty"
          label="specify specialty*"
          required={true}
          useForm={true}
          showOn={{ specialty: "Other" }}
          message="Please specify a specialty."
        />
        <PlacesAutocompleteInput
          name="practice_1"
          label="practice address 1"
          required={false}
          useForm={true}
          ref={autoCompleteRef}
          autoComplete="address-line1"
        />
        <TextInput
          name="practice_2"
          label="practice address 2"
          required={false}
          useForm={true}
          autoComplete="address-line2"
        />
        <TextInput
          name="city"
          label="city"
          required={false}
          useForm={true}
          autoComplete="address-level2"
        />
        <div className="row last">
          <Select
            name="state"
            label="state"
            none="Select State"
            options={States}
            useForm={true}
            autoComplete="address-level1"
          />
          <TextInput
            name="zipcode"
            label="zip code*"
            required={true}
            pattern="zipcode"
            message="Please enter a valid ZIP Code."
            useForm={true}
            autoComplete="postal-code"
          />
        </div>
        <Survey useForm={true} className="survey-section" />
        <Checkbox
          name="agree"
          className="confirm"
          value={["yes"]}
          required={true}
          message="Please provide confirmation."
          useForm={true}
        >
          <span className="block">I confirm and agree to the following*:</span>
          <span className="block">
            I am a US healthcare professional and am over 18 years of age. I
            understand that the personal information I provide may be used by
            Insmed Incorporated, or other companies acting on its behalf, to
            contact me via mail, email or otherwise to provide me with
            information about educational materials, market research, existing
            and future products, and services. Neither Insmed nor the companies
            working on its behalf may sell or rent my personal information. I
            understand that I may opt out of my Rethink Bronchiectasis
            subscription by clicking on the unsubscribe button in any
            communication I receive.
          </span>
        </Checkbox>
        <ExternalLink
          className="arrow"
          href="https://insmed.com/privacy-policy/"
          isTrusted={true}
        >
          View Privacy Policy
        </ExternalLink>
        <ExternalLink
          className="arrow"
          href="https://insmed.com/terms-of-use/"
          isTrusted={true}
        >
          View Terms of Use
        </ExternalLink>
      </Form>

      <Modals.SignupConfirmation
        isOpen={successModalOpen}
        setOpen={setSuccessModalOpen}
      />
      <Modals.PostOfficeValidation
        isOpen={poValidationOpen}
        setPoValidationOpen={setPoValidationOpen}
        whichAddress={whichAddress}
        setWhichAddress={setWhichAddress}
        addressUser={addressUser}
        addressPostOffice={addressPostOffice}
        setAddressPostOffice={setAddressPostOffice}
        addressError={addressError}
        setFormData={setFormData}
        formData={postOfficeAddressData}
      />
    </>
  );
};
