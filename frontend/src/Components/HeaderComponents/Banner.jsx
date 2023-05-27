import { React } from "react";
import styled from "@emotion/styled";
import user from "../../Assets/profile-user.png";

const BannerDiv = styled.div`
  width: 100;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: center;
`;

const UserImg = styled.img`
  width: 40px;
`;

const UserTable = styled.table`
  width: 200px;
  height: 100%;
  display: inline-block;
  float: right;
`;

const SignUpTd = styled.td`
  width: 70px;
  color: white;
  text-decoration: underline;
  font-size: 12px;
`;

const LoginTd = styled.td`
  width: 70px;
  color: white;
  text-decoration: underline;
  font-size: 12px;
`;

const UserTd = styled.td`
  width: 60px;
`;
const Banner = () => {
  return (
    <BannerDiv>
      <UserTable>
        <tr>
          <SignUpTd>회원가입</SignUpTd>
          <LoginTd>로그인</LoginTd>
          <UserTd>
            <UserImg src={user} alt="user" />
          </UserTd>
        </tr>
      </UserTable>
    </BannerDiv>
  );
};

export default Banner;
