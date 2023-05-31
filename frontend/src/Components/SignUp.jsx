import styled from "@emotion/styled";
import { InputField, Button } from "./SignupComponents";
import { errorText } from "../constants/ErrorMsg";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  margin: auto;
`;

const SignUpField = styled.div`
  width: 50%;
  min-width: 500px;
  height: 70%;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const SignUpTitleSection = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpTitle = styled.p`
  width: 50%;
  font-size: 20px;
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
  height: 30%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const SignUp = () => {
  return (
    <MainDiv>
      <SignUpField>
        <SignUpTitleSection>
          <SignUpTitle>회원가입</SignUpTitle>
        </SignUpTitleSection>
        <InputFieldSection>
          <InputField
            name="이메일"
            isDuplicate="true"
            text={errorText["email"]}
          />
          <InputField name="비밀번호" text={errorText["password"]} />
          <InputField name="비밀번호 확인" text={errorText["pwCheck"]} />
          <InputField type="date" name="생년월일" text={errorText["birth"]} />
          <InputField name="롤 닉네임" text={errorText["nickname"]} />
          <ButtonSection>
            <Button name="회원가입" />
          </ButtonSection>
        </InputFieldSection>
      </SignUpField>
    </MainDiv>
  );
};

export default SignUp;
