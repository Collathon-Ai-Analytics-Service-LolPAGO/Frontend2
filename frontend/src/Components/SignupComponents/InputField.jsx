import styled from "@emotion/styled";
import { useState } from "react";

const Field = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  width: 80%;
  height: 20%;
  align-items: center;
`;

const InputParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  color: white;
  font-weight: bold;
  padding-left: 5%;
  box-sizing: border-box;
  caret-color: white;
`;

const InputText = styled.input`
  margin-left: 5%;
  background-color: inherit;
  border: none;
  font-size: 14px;
  color: white;
  &:focus {
    outline: none;
  }
`;

const InputDate = styled.input`
  margin-left: 5%;
  background-color: inherit;
  border: none;
  font-size: 14px;
  color: white;

  &::before {
    color: white;
  }
`;

const ErrorMsg = styled.p`
  width: 80%;
  color: red;
  font-size: 10px;
  text-align: left;
  padding-left: 5%;
  box-sizing: border-box;
  margin: 5px 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

const DuplicateBtn = styled.button`
  width: 15%;
  background-color: white;
  font-size: 10px;
  color: black;
  border: none;
  border-radius: 5px;
`;

const InputField = ({ name, text, type, isDuplicate }) => {
  const [error, setError] = useState(true);
  return (
    <>
      <Field>
        <InputParagraph>{name}</InputParagraph>
        {type ? (
          <InputDate type={type} />
        ) : (
          <InputText type="text" maxLength={20} />
        )}
        {isDuplicate ? <DuplicateBtn>중복확인</DuplicateBtn> : <></>}
      </Field>
      <ErrorMsg visible={error}>{text}</ErrorMsg>
    </>
  );
};

export default InputField;
