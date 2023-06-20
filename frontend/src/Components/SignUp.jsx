import styled from "@emotion/styled";
import { InputField, Button, GenderSelect } from "Components/SignupComponents";
import { errorText } from "constants/ErrorMsg";

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
            placeholder="이메일을 입력해주세요."
          />
          <InputField
            name="비밀번호"
            text={errorText["password"]}
            placeholder="비밀번호를 입력해주세요."
          />
          <InputField
            name="비밀번호 확인"
            text={errorText["pwCheck"]}
            placeholder="비밀번호를 입력해주세요."
          />
          <InputField type="date" name="생년월일" text={errorText["birth"]} />
          <GenderSelect />
          <InputField
            name="롤 닉네임"
            text={errorText["nickname"]}
            placeholder="닉네임을 입력해주세요."
          />
          <ButtonSection>
            <Button name="회원가입" />
          </ButtonSection>
        </InputFieldSection>
      </SignUpField>
    </MainDiv>
  );
};

export default SignUp;
