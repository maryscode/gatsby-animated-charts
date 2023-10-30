import React from "react";
import styled from "styled-components";
import iconError from "../../images/icon-error.svg";
import chevronDown from "../../images/chevron-down-arrow.svg";

/**
 * Component definition
 */
export const Select = ({ ...props }) => {
  if (props.useForm === undefined) {
    return <></>;
  }
  const className = props.className ? props.className : "";
  const {
    register,
    errors,
    focusedField,
    handleFieldFocus,
    handleFieldBlur,
  } = props.useForm;
  return (
    <SelectStyle
      className={(errors[props.name] ? "error column " : "column ") + className}
    >
      <span
        className={focusedField === props.name ? "border focused" : "border"}
      >
        <label htmlFor={props.name}>
          <span>{props.label}</span>
          <select
            name={props.name}
            id={props.name}
            onBlur={handleFieldBlur}
            onFocus={handleFieldFocus}
            {...register(props.name, { required: props.required })}
            required={props.required ? "required" : false}
            autoComplete={props.autoComplete}
          >
            {props.none && <option value="">{props.none}</option>}

            {props.options &&
              props.options.map((option, index) => (
                <option key={"select_" + index} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </label>
      </span>
      {errors[props.name] && (
        <span className="alert">
          <img src={iconError} alt="Error icon" /> {props.message}
        </span>
      )}
    </SelectStyle>
  );
};

/**
 * Component styles
 */
const SelectStyle = styled.div`
  label {
    select {
      background: url(${chevronDown}) no-repeat;
      background-position: right 5px top;
      -webkit-appearance: none;
      padding: 0;
      line-height: 24px;
      height: 24px;
      option {
        -webkit-appearance: none;
        color: #000000;
        line-height: 24px;
        height: 24px;
      }
    }
  }
`;
