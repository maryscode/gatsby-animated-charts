import React, { useEffect } from "react";
import iconError from "../../images/icon-error.svg";
import { Validations } from "./Validations";

// TODO: ADD CONSTANTS FOR INPUT TYPE VALIDATION
//     error messge should derive from pattern

/**
 * Component definition
 */
export const TextInput = ({
  autoComplete,
  useForm,
  useForm: {
    watchAllFields,
    register,
    errors,
    setValue,
    focusedField,
    handleFieldFocus,
    handleFieldBlur,
  },
  pattern,
  name,
  showOn,
  style,
  label,
  required,
  className,
  message,
}) => {
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
  message =
    errors[name]?.type === "required" || message === undefined ? "This field cannot be blank." : message;
  return (
    checkIfObjectContains(showOn, watchAllFields) && (
      <div
        className={`${errors[name] ? "error " : ""} column ${className}`}
        style={style}
      >
        <span className={focusedField === name ? "border focused" : "border"}>
          <label className={watchAllFields[name] ? "" : "empty"} htmlFor={name}>
            <span>{label}</span>
            <input
              type="text"
              name={name}
              id={name}
              //   autoComplete="off"
              onBlur={handleFieldBlur}
              onFocus={handleFieldFocus}
              autoComplete={autoComplete}
              {...register(name, {
                required: required,
                pattern:
                  pattern && Validations?.[pattern]
                    ? Validations[pattern].pattern
                    : null,
              })}
              required={required ? "required" : false}
            />
          </label>
        </span>

        {/* TODO: THIS NEEDS TO BE A COMPONENT (ValidationError), PO MODAL NEEDS TO USE IT TOO */}
        {errors[name] && (
          <span className="alert">
            <img src={iconError} alt="Error icon" /> {message}
          </span>
        )}
      </div>
    )
  );
};
