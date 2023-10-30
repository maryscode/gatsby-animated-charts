import React from "react";
import styled from "styled-components";
import iconError from "../../images/icon-error.svg";
import checkmark from "../../images/checkmark.svg";
import checkmarkWhite from "../../images/checkmark-white.svg";
// import { FormError } from "../FormError";

/**
 * Component definition
 */
export const Checkbox = ({ ...props }) => {
  if (props.useForm === undefined) {
    return <></>;
  }
  const className = props.className ? props.className : "";
  const {
    watchAllFields,
    register,
    handleKeyDown,
    errors,
    trigger,
    focusedField,
    handleFieldFocus,
    handleFieldBlur,
  } = props.useForm;

  const handleOnBlur = (e) => {
    trigger(props.name);
    handleFieldBlur();
  };
  let checkbox = [];
  let isMultiCheck = props.value.length > 1;
  props.value.forEach((value, index) => {
    let checked =
      watchAllFields &&
      watchAllFields[props.name] &&
      (watchAllFields[props.name] === value ||
        watchAllFields[props.name].indexOf(value) > -1)
        ? "true"
        : "false";
    let label = isMultiCheck ? value : props.children;
    let htmlFor = props.name + value.toLowerCase().replace(/\s/g, "");
    let required = props.required ? true : false;
    let noerrors = props.required === "noerrors" ? true : false;
    checkbox.push(
      <div
        key={htmlFor}
        className={!noerrors && errors[props.name] ? "checkbox-error " : ""}
        // className={errors[props.name] ? "" : ""}
      >
        {!noerrors && errors[props.name] && index === 0 && (
          <span className="alert">
            <img src={iconError} alt="Error icon" /> {props.message}
          </span>
        )}
        {/* <FormError
          errors={errors}
          name={props.name}
          message={props.message}
          index={index}
        /> */}
        <label
          className={
            !noerrors && errors[props.name]
              ? "checkbox checkbox-error"
              : "checkbox"
            // errors[props.name] ? "checkbox" : "checkbox"
          }
        >
          <span
            role="checkbox"
            aria-checked={checked}
            aria-labelledby={`${htmlFor}-label`}
            tabIndex={0}
            data-name={props.name}
            required={required && !noerrors ? "required" : false}
            onKeyDown={(e) => {
              handleKeyDown(e, props.name, value, isMultiCheck);
            }}
            onBlur={handleOnBlur}
            onFocus={handleFieldFocus}
            // className={`!bg-burnt-brick${focusedField === htmlFor ? " focused" : ""}`}
            className={`${focusedField === htmlFor ? " focused" : ""}`}
          >
            <img src={checkmark} alt="Checkmark" />
            {/* <img src={checkmarkWhite} alt="Checkmark" /> */}
            {/* <img className="bg-burnt-brick" src={checkmarkWhite} alt="Checkmark" /> */}
            <input
              type="checkbox"
              name={props.name}
              value={value}
              {...register(props.name, { required: required })}
              required={required && !noerrors ? "required" : false}
              autoComplete={props.autoComplete}
            />
          </span>
          <span id={`${htmlFor}-label`}>{label}</span>
        </label>
      </div>
    );
  });
  return (
    <CheckBoxStyle
      className={"column " + (isMultiCheck ? "multi-check " : "") + className}
    >
      {isMultiCheck && props.children}
      {checkbox}
    </CheckBoxStyle>
  );
};

/**
 * Component styles
 */
const CheckBoxStyle = styled.div`
  &.column {
    &.multi-check {
      .checkbox {
        margin: 0 0 20px 0;
      }
    }
    .checkbox-error > span:nth-child(1):not(.alert) {
      border: solid 2px #b83b43 !important;
    }
    .checkbox {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      line-height: 1.38;
      cursor: pointer;
      & > span:nth-child(1) {
        input {
          display: none;
          /* opacity: 0;
          pointer-events: none; */
        }
        img {
          /* display: none; */
          visibility: hidden;
          pointer-events: none;
          width: 16px;
          height: 16px;
          padding: 2px;
          &::selection {
            background-color: transparent;
            color: transparent;
          }
        }
        &[aria-checked="true"] {
          border: solid 1px #b83b4d;
          outline: solid 1px #b83b4d;
          img {
            /* display: inline; */
            visibility: visible;
          }
          path {
            /* fill: #fcc454 !important; */
          }
        }
        &.focused {
          /* border: solid 1px #fcc454;
          outline: solid 1px #fcc454; */
          border: solid 1px #b83b4d;
          outline: solid 1px #b83b4d;
        }
        margin: 0 12px 0 0;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: 1px solid #707070;
        background-color: #ffffff;
      }
      & > span:nth-child(2) {
        flex-basis: calc(100% - 20px);
      }
    }
  }
`;
