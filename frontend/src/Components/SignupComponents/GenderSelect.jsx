import styled from "@emotion/styled";
import { useState } from "react";

const Field = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  display: inline-block;
  width: 500px;
  height: 60px;
  margin-bottom: 30px;
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

const RadiosDiv = styled.form`
  margin-left: 5%;
  background-color: inherit;
  display: inline-block;
  border: none;
  font-size: 18px;
  height: 100%;
  color: white;
  &:focus {
    outline: none;
  }
`;

const RadioBtn = styled.input`
  width: 18px;
  height: 18px;
`;

const GenderSelect = ({ target, value, onInputChange, ...props }) => {
  const handleChangeGender = (e) => {
    onInputChange(target, e.target.value);
  };

  return (
    <Field>
      <InputParagraph>성별</InputParagraph>
      <RadiosDiv>
        <RadioBtn
          type="radio"
          id="male"
          name="male"
          value="male"
          checked={value === "male"}
          onChange={handleChangeGender}
        />
        <label for="male">남성</label>
        <RadioBtn
          type="radio"
          id="female"
          name="female"
          value="female"
          checked={value === "female"}
          onChange={handleChangeGender}
        />
        <label for="female">여성</label>
      </RadiosDiv>
    </Field>
  );
};
export default GenderSelect;
