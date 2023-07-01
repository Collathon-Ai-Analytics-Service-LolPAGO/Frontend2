import styled from "@emotion/styled";
import { InputField, Button } from "./SignupComponents";
import { errorText } from "../constants/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  margin: auto;
`;

const SignUpField = styled.div`
  width: 650px;
  height: 500px;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const SignUpTitleSection = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const handleInputValue = (inputName, inputValue) => {
    setValue((prevValue) => ({
      ...prevValue,
      [inputName]: inputValue,
    }));
  };

  const setLoginValue = () => {
    setError({
      email: value.email === "" ? true : false,
      password: value.password === "" ? true : false,
    });

    if (value.email !== "" && value.password !== "") {
      dispatch(login());
      navigate("/");
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <MainDiv>
      <SignUpField>
        <SignUpTitleSection>
          <SignUpTitle>로그인</SignUpTitle>
        </SignUpTitleSection>
        <InputFieldSection>
          <InputField
            name="이메일"
            text={errorText["email"]}
            style={{ marginBottom: "30px" }}
            placeholder="이메일을 입력해주세요."
            target="email"
            value={value.email}
            error={error.email}
            onInputChange={handleInputValue}
          />
          <InputField
            name="비밀번호"
            text={errorText["password"]}
            style={{ marginBottom: "30px" }}
            placeholder="비밀번호를 입력해주세요."
            target="password"
            value={value.password}
            error={error.password}
            onInputChange={handleInputValue}
          />
        </InputFieldSection>
        <ButtonSection>
          <Button name="로그인" onClick={setLoginValue} />
          <Button name="회원가입" onClick={signUp} />
        </ButtonSection>
      </SignUpField>
    </MainDiv>
  );
};

export default Login;
