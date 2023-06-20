import styled from "@emotion/styled";
import { useState } from "react";

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
  width: 58%;
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
`;

const ErrorMsg = styled.p`
  width: 500px;
  line-height: 20px;
  color: red;
  font-size: 13px;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  margin: 5px 0;
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
  ...props
}) => {
  const [error, setError] = useState(true);
  return (
    <>
      <Field>
        <InputParagraph>{name}</InputParagraph>
        {type ? (
          <InputDate type={type} />
        ) : (
          <InputText type="text" maxLength={20} placeholder={placeholder} />
        )}
        {isDuplicate ? <DuplicateBtn>중복확인</DuplicateBtn> : <></>}
      </Field>
      <ErrorMsg visible={error} {...props}>
        {text}
      </ErrorMsg>
    </>
  );
};

export default InputField;
