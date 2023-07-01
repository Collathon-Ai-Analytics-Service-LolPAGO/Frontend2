import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Field = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  display: inline-block;
  width: 500px;
  height: 60px;
`;

const InputParagraph = styled.p`
  margin: 0;
  font-size: 18px;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  caret-color: white;
  width: 150px;
  line-height: 60px;
  display: inline-block;
  text-align: center;
  border-right: 1px solid white;
`;

const InputText = styled.input`
  width: 45%;
  margin-left: 5%;
  margin-right: 2%;
  background-color: inherit;
  border: none;
  font-size: 18px;
  height: 100%;
  color: white;
  &:focus {
    outline: none;
  }
`;

const InputDate = styled.input`
  margin-left: 5%;
  background-color: inherit;
  border: none;
  font-size: 18px;
  color: white;
  height: 100%;

  &::before {
    color: white;
  }

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
  }
`;

const ErrorMsg = styled.p`
  width: 500px;
  height: 25px;
  color: red;
  font-size: 13px;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  margin: 2px 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

const DuplicateBtn = styled.button`
  width: 15%;
  height: 50%;
  background-color: white;
  font-size: 15px;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InputField = ({
  name,
  text,
  type,
  isDuplicate,
  placeholder,
  target,
  value,
  error,
  duplicateText,
  duplicateValue,
  duplicateError,
  onInputChange,
  ...props
}) => {
  const handleChange = (e) => {
    onInputChange(target, e.target.value); // Login 컴포넌트로 값을 전달
  };

  const checkDuplicate = () => {
    if (value !== "") {
      onInputChange("checkDuplicate", true);
    }
  };

  return (
    <>
      <Field>
        <InputParagraph>{name}</InputParagraph>
        {type ? (
          <InputDate type={type} data-target={target} onChange={handleChange} />
        ) : (
          <InputText
            type="text"
            maxLength={20}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
          />
        )}
        {isDuplicate ? (
          <DuplicateBtn onClick={checkDuplicate}>중복확인</DuplicateBtn>
        ) : (
          <></>
        )}
      </Field>
      <ErrorMsg visible={error || duplicateError} {...props}>
        {error ? text : duplicateError && duplicateText}
      </ErrorMsg>
    </>
  );
};

export default InputField;
