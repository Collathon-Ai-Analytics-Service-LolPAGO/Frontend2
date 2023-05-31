import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopupDiv = styled.div`
  width: 100px;
  height: 160px;
  background-color: #8e8e8e;
  border: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  right: 20px;
  top: 45px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 40px;
  background-color: inherit;
  color: black;
  text-align: center;
  border: 1px solid black;
  font-size: 13px;
  display: flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
`;

const TextP = styled.p`
  margin: 0;
`;

const Popup = ({ open, setOpen, modalRef }) => {
  const navigate = useNavigate();
  const LoginFunc = () => {
    navigate("/login");
    setOpen(false);
  };
  const [login, setLogin] = useState(false);
  return (
    <PopupDiv open={open} ref={modalRef}>
      <ContentDiv>개인정보 변경</ContentDiv>
      <ContentDiv>내 분석 리포트</ContentDiv>
      <ContentDiv>결제 정보</ContentDiv>
      <ContentDiv onClick={LoginFunc}>
        {login ? (
          <TextP>로그아웃</TextP>
        ) : (
          <TextP onClick={LoginFunc}>로그인</TextP>
        )}
      </ContentDiv>
    </PopupDiv>
  );
};

export default Popup;
