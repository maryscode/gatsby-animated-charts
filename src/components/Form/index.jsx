import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../Button";
import iconError from "../../images/icon-error.svg";

/**
 * Component definition
 */
export const Form = forwardRef(
  ({ callBack, onSubmit, clearForm, resetOnSubmit, ...props }, ref) => {
    const {
      register,
      unregister,
      handleSubmit,
      watch,
      reset,
      setValue,
      trigger,
      formState,
      formState: { errors, isDirty, dirtyFields, isValid },
    } = useForm({
      // defaultValues: {
      //   first: "John",
      //   last: "Jam",
      //   email: "Jam@tam.com",
      //   specialty: "Critical care",
      //   agree: "yes",
      // },
      mode: "all",
      reValidateMode: "all",
    });
    const watchAllFields = watch();

    const [focusedField, setFocusedField] = useState("");

    const handleFieldFocus = (e) => {
      let name = e.target.getAttribute("id");
    //   let htmlFor = 
      name = name ? name : e.target.getAttribute("aria-labelledby").replace("-label", "");
      if (name) {
        setFocusedField(name);
      }
    };

    const handleFieldBlur = (e) => {
      setFocusedField("");
    };

    const handleOnSubmit = (e) => {
      if (resetOnSubmit) {
        // reset() is for clearing the form when all done. If you want to keep the form data, comment out the reset() line.
        reset();
      }
      onSubmit(e);
    };

    const handleKeyDown = (e, field, value, isMultiCheck) => {
      if (e.key === "Spacebar" || e.key === " ") {
        e.preventDefault();
        if (isMultiCheck) {
          let values = watchAllFields[field] ? watchAllFields[field] : [];
          let index = values.indexOf(value);
          if (index > -1) {
            values.splice(index, 1);
          } else {
            values = [...values, value];
          }
          value = values;
        } else {
          value = watchAllFields[field] ? false : value;
        }
        setValue(field, value);
      }
    };

    useEffect(() => {
      clearForm && reset();
    }, [clearForm, reset]);
    let requiredCount = 0;

    const resetCallbacks = [];

    const cloneChildren = (children) => {
      return React.Children.map(children, (child) => {
        let newChild = child;
        if (React.isValidElement(child)) {
          let componentProps = {
            children: cloneChildren(child.props.children),
          };
          
          if (child.props.resetCallback) {
            resetCallbacks.push(child.props.resetCallback);
          }
          if (child.props.required) {
            requiredCount++;
          }
          if (child.props.useForm) {
            componentProps = {
              useForm: {
                register,
                unregister,
                watch,
                errors,
                watchAllFields,
                handleKeyDown,
                setValue,
                trigger,
                formState,
                dirtyFields,
                isDirty,
                isValid,
                focusedField,
                handleFieldFocus,
                handleFieldBlur,
              },
              children: cloneChildren(child.props.children),
            };
          }
          newChild = React.cloneElement(child, componentProps);
        }
        return newChild;
      });
    };

    useImperativeHandle(ref, () => ({
      resetTheForm: () => {
        reset();
        resetCallbacks.forEach((callback) => {
          callback();
        });
      },
    }));

    const childrenWithUseForm = cloneChildren(props.children);

    return (
      <>
        {Object.keys(errors).length !== 0 && props.isHome && (
          <PStyles className="ensure">
            <span className="alert has-error">
              <img src={iconError} alt="Error icon" /> Please ensure all
              required fields are completed.
            </span>
          </PStyles>
        )}

        {props.hasRequired && (
          <PStyles
            className={
              Object.keys(errors).length === 0
                ? "required-msg"
                : "required-msg has-error"
            }
          >
            {`*Required field${requiredCount > 1 ? "s" : ""}.`}
          </PStyles>
        )}

        <StyledForm {...props} onSubmit={handleSubmit(handleOnSubmit)}>
          <div id="registration">{childrenWithUseForm}</div>

          <Button
            className={`${isValid ? "" : "disabled"} tablet:mx-auto`}
            label={props.submit}
            type="submit"
          />
        </StyledForm>
      </>
    );
  }
);

/**
 * Component styles
 */
const PStyles = styled.p`
  &.ensure {
    margin: 0 0 12px;
    .has-error {
      font-weight: bold;
    }
  }
  &.has-error,
  .has-error {
    color: #b83b43 !important;
  }
`;
/**
 * Component styles
 */
const StyledForm = styled.form`
  width: 100%;
  #registration {
    .column {
      display: flex;
      flex-direction: column;
      display: flex;
      flex-direction: column;
      margin: 0 0 20px 0;
      .border {
        border: 1px solid #000;
        border-radius: 8px;
      }
      .border.focused {
        border-width: 2px;
        border-color: #000 !important;
      }
      &.hidden {
        display: none;
      }
      &.error {
        & > span.border {
          border-width: 2px;
          border-color: #b83b43;
        }
        label {
          span {
            color: #b83b43 !important;
          }
        }
      }
      p {
        margin: 0 0 20px 0;
      }
      & > span {
        &.border {
          &:not(.focused) {
            .empty {
              padding: 20px 16px 20px 12px;
              span {
                height: 100%;
                left: 12px;
                font-size: 16px;
              }
            }
          }
        }
      }
      &.confirm {
        margin: 0 0 36px 0;
      }
      label:not(.checkbox) {
        text-transform: uppercase;
        border: none;
        border-radius: 8px;
        position: relative;
        padding: 32px 16px 10px 12px;
        background: #fff;
        span {
          display: flex;
          align-items: center;
          position: absolute;
          height: 40px;
          transition: all 0.2s ease-in-out;
          top: 0;
          font-size: 14px;
          line-height: 24px;
          color: #707070;
          pointer-events: none;
        }
        input,
        select {
          transition: all 0.2s ease-in-out;
          font-size: 16px;
          line-height: 24px;
          width: 100%;
        }
        *,
        *:focus {
          border: 0;
          outline: 0;
        }
      }
    }
    .row {
      display: flex;
      flex-direction: column;
      & > div {
        margin: 0 0 20px 0;
        &:last-of-type {
          margin: 0;
        }
      }
      &.last {
        margin: 0 0 36px 0;
      }
      @media (min-width: 768px) {
        flex-direction: row;
        flex: 1;
        & > div {
          min-width: 0;
          flex-basis: 50%;
          margin: 0;
          &:nth-of-type(1) {
            margin: 0 20px 0 0;
          }
        }
      }
    }
  }
`;
