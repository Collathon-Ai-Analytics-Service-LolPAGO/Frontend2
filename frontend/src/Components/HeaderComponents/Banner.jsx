import { React, useEffect } from "react";
import styled from "@emotion/styled";
import user from "Assets/profile-user.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "store/actions";

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
  display: block;
  float: right;
`;

const SignUpTd = styled.td`
  width: 70px;
  color: white;
  text-decoration: underline;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #f8fdbc;
  }
`;

const LoginTd = styled.td`
  width: 70px;
  color: white;
  text-decoration: underline;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #f8fdbc;
  }
`;

const UserTd = styled.td`
  width: 60px;
  cursor: pointer;
`;
const Banner = ({ open, setOpen, openRef }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const SignUp = () => {
    navigate("/signup");
  };

  const LogInOut = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  const Popup = () => {
    setOpen(!open);
  };

  return (
    <BannerDiv>
      <UserTable>
        <tr>
          <SignUpTd onClick={SignUp}>회원가입</SignUpTd>
          <LoginTd onClick={LogInOut}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </LoginTd>
          <UserTd onClick={Popup} ref={openRef}>
            <UserImg src={user} alt="user" />
          </UserTd>
        </tr>
      </UserTable>
    </BannerDiv>
  );
};

export default Banner;
