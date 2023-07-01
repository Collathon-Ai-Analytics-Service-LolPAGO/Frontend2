import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { InputField, Button, GenderSelect } from "Components/SignupComponents";
import { errorText } from "constants/ErrorMsg";
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  margin: auto;
`;

const SignUpField = styled.div`
  width: 650px;
  height: 700px;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0;
`;

const SignUpTitleSection = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const SignUpTitle = styled.p`
  width: 50%;
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-decoration: underline;
  text-align: center;
`;

const InputFieldSection = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonSection = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    checkDuplicate: false,
    password: "",
    passwordConfirm: "",
    date: "",
    gender: "male",
    nickname: "",
  });

  const [error, setError] = useState({
    email: false,
    checkDuplicate: false,
    password: false,
    passwordConfirm: false,
    date: false,
    nickname: false,
  });

  const handleInputValue = (inputName, inputValue) => {
    setValue((prevValue) => ({
      ...prevValue,
      [inputName]: inputValue,
    }));
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  const setSignupValue = () => {
    setError({
      email: value.email === "" ? true : false,
      checkDuplicate: !value.checkDuplicate ? true : false,
      password: value.password === "" ? true : false,
      passwordConfirm:
        value.passwordConfirm === "" || value.passwordConfirm !== value.password
          ? true
          : false,
      date: value.date === "" ? true : false,
      nickname: value.nickname === "" ? true : false,
    });

    if (
      value.email !== "" &&
      value.checkDuplicate &&
      value.password !== "" &&
      value.passwordConfirm !== "" &&
      value.date !== "" &&
      value.nickname !== ""
    ) {
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <MainDiv>
      <SignUpField>
        <SignUpTitleSection>
          <SignUpTitle>회원가입</SignUpTitle>
        </SignUpTitleSection>
        <InputFieldSection>
          <InputField
            name="이메일"
            text={errorText["email"]}
            placeholder="이메일을 입력해주세요."
            isDuplicate="true"
            target="email"
            value={value.email}
            error={error.email}
            duplicateValue={value.checkDuplicate}
            duplicateError={error.checkDuplicate}
            duplicateText={errorText["checkDuplicate"]}
            onInputChange={handleInputValue}
          />
          <InputField
            name="비밀번호"
            text={errorText["password"]}
            placeholder="비밀번호를 입력해주세요."
            target="password"
            value={value.password}
            error={error.password}
            onInputChange={handleInputValue}
          />
          <InputField
            name="비밀번호 확인"
            text={errorText["pwCheck"]}
            placeholder="비밀번호를 입력해주세요."
            target="passwordConfirm"
            value={value.passwordConfirm}
            error={error.passwordConfirm}
            onInputChange={handleInputValue}
          />
          <InputField
            type="date"
            name="생년월일"
            text={errorText["birth"]}
            target="date"
            value={value.date}
            error={error.date}
            onInputChange={handleInputValue}
          />
          <GenderSelect
            target="gender"
            value={value.gender}
            onInputChange={handleInputValue}
          />
          <InputField
            name="롤 닉네임"
            text={errorText["nickname"]}
            placeholder="닉네임을 입력해주세요."
            target="nickname"
            value={value.nickname}
            error={error.nickname}
            onInputChange={handleInputValue}
          />
          <ButtonSection>
            <Button name="회원가입" onClick={setSignupValue} />
          </ButtonSection>
        </InputFieldSection>
      </SignUpField>
    </MainDiv>
  );
};

export default SignUp;
