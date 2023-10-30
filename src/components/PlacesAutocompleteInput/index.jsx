import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import iconError from "../../images/icon-error.svg";
import { Types } from "../../constants/Validation";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import styled from "styled-components";
import { Loader } from "@googlemaps/js-api-loader";
import { States } from "../../constants/Forms";

// TODO: ADD CONSTANTS FOR INPUT TYPE VALIDATION
//     error messge should derive from pattern

/**
 * Component definition
 */
export const PlacesAutocompleteInput = forwardRef(
  (
    {
      autoComplete,
      useForm,
      useForm: { watchAllFields, register, errors, setValue, trigger, focusedField, handleFieldFocus, handleFieldBlur },
      pattern,
      name,
      showOn,
      style,
      label,
      required,
      className,
      message,
    },
    ref
  ) => {
    const [address, setAddress] = useState("");

    useImperativeHandle(ref, () => ({
      resetAddress: () => {
        setAddress("");
      },
    }));

    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
      const loader = new Loader({
        apiKey: "AIzaSyDsUd849AerOgkSZjw_UisNnl0VGABeO1w",
        version: "weekly",
        libraries: ["places"],
      });
      loader
        .load()
        .then((google) => {
          if (!apiLoaded) setApiLoaded(true);
        })
        .catch((e) => {
          console.error("Error:", e.message);
          if (apiLoaded) setApiLoaded(false);
        });
    }, [apiLoaded]);

    const getComponent = (address_components, type) => {
      return address_components?.find((component) => component.types.includes(type));
    };

    const getValueByLabel = (data, label) => {
      const obj = data.find((item) => item.label === label);
      return obj ? obj.value : null;
    };

    const handleChange = (address) => {
      let street = address.split(", ")[0];
      setAddress(street);
      setValue(name, street);
      geocodeByAddress(address)
        .then((results) => {
          let city = getComponent(results[0].address_components, "sublocality");
          if (typeof city === "undefined") {
            city = getComponent(results[0].address_components, "locality");
          }
          if (typeof city === "undefined") {
            city = getComponent(results[0].address_components, "administrative_area_level_3");
          }
          if (typeof city !== "undefined") {
            setValue("city", city.long_name);
          } else {
            setValue("city", "");
          }
          let state = getComponent(results[0].address_components, "administrative_area_level_1");
          if (typeof city !== "undefined") {
            //
            setValue("state", getValueByLabel(States, state.long_name));
          } else {
            setValue("state", "");
          }
          let zipcode = getComponent(results[0].address_components, "postal_code");
          if (typeof zipcode !== "undefined") {
            setValue("zipcode", zipcode.long_name);
          } else {
            setValue("zipcode", "");
          }
          trigger("zipcode");
        })
        .catch((error) => {
          console.error("Error", error);
          setValue("city", "");
          setValue("state", "");
          setValue("zipcode", "");
        });
    };

    useEffect(() => {
      let value = "";
      if (typeof window !== "undefined" && useForm) {
        let params = new URLSearchParams(window?.location.search);
        value = params?.get(pattern) ? params.get(pattern) : "";
        value = watchAllFields[name] ? watchAllFields[name] : value;
        if (value !== watchAllFields[name]) {
          setValue(name, value);
        }
        if (params?.get(pattern)) {
          params.delete(pattern);
          window.history.pushState({}, "", `${window.location.pathname}`);
        }
      }
    });
    let checkIfObjectContains = (one, two) => {
      for (let i in one) {
        if (one[i] !== two[i]) {
          return false;
        }
      }
      return true;
    };
    if (useForm === undefined) {
      return <></>;
    }
    className = className ? className : "";
    message = errors[name]?.type === "required" ? "This field cannot be blank." : message;
    const searchOptions = {
      componentRestrictions: { country: ["us"] },
      types: ["address"],
    };
    return (
      checkIfObjectContains(showOn, watchAllFields) &&
      apiLoaded && (
        <>
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            searchOptions={searchOptions}
            highlightFirstSuggestions={true}
            resetCallback={setAddress}
            //   onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
              let googleProps = getInputProps({
                className: "location-search-input",
              });
              let rhfProps = register(name, {
                required: required,
                pattern: pattern && Types?.[pattern] ? Types[pattern].pattern : null,
              });
              googleProps.autoComplete = autoComplete;
              return (
                <div className={`${errors[name] ? "error " : ""} column ${className}`} style={style}>
                  <PlacesAutocompleteStyles className={focusedField === name ? "border focused" : "border"}>
                    <label className={watchAllFields[name] ? "" : "empty"}>
                      <span id={`${name}-label`}>{label}</span>
                      <input
                        type="text"
                        name={name}
                        id={name}
                        aria-labelledby={`${name}-label`}
                        onFocus={handleFieldFocus}
                        {...rhfProps}
                        {...googleProps}
                        onBlur={(e) => {
                          handleFieldBlur(e);
                          rhfProps.onBlur(e);
                          googleProps.onBlur(e);
                        }}
                        required={required ? "required" : false}
                      />
                    </label>
                    <div
                      className={`autocomplete-dropdown-container ${
                        ((suggestions && suggestions.length) || loading) && "border-[2px] border-gray-light shadow-sm"
                      }`}
                    >
                      {loading && <div className="suggestion-item">Loading...</div>}
                      {suggestions.map((suggestion) => {
                        if (!suggestion.types.includes("street_address")) {
                          //   return null;
                        }
                        const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                            })}
                            key={suggestion.placeId}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                      {suggestions.length > 0 && <img src="/images/logos/powered-by-google.png" alt="Powered by Google" className="powered-by-google" />}
                    </div>
                  </PlacesAutocompleteStyles>

                  {/* TODO: THIS NEEDS TO BE A COMPONENT (ValidationError), PO MODAL NEEDS TO USE IT TOO */}
                  {errors[name] && (
                    <span className="alert">
                      <img src={iconError} alt="Error icon" /> {message}
                    </span>
                  )}
                </div>
              );
            }}
          </PlacesAutocomplete>
        </>
      )
    );
  }
);

const PlacesAutocompleteStyles = styled.span`
  position: relative;
  display: block;
  .autocomplete-dropdown-container {
    width: calc(100% + 4px);
    position: absolute;
    top: 105%;
    left: -2px;
    right: 0;
    z-index: 100;
    background-color: #fff;
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    overflow: hidden;
    max-height: 300px;
    overflow-y: auto;
    border-radius: 8px;
    .suggestion-item,
    .suggestion-item--active {
      position: relative;
      height: 42px;
      span {
        padding: 10px 20px;
        display: block;
      }
    }
    .suggestion-item--active {
      background-color: #f5f5f5;
    }
    .powered-by-google {
      max-width: 125px;
      width: 100%;
      height: auto;
      margin: 0 10px 10px auto;
    }
  }
`;
