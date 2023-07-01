import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "store/actions";

const PopupDiv = styled.div`
  width: 150px;
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
  font-size: 15px;
  display: flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #444444;

  &:hover {
    background-color: #777777;
  }
`;

const TextP = styled.p`
  margin: 0;
`;

const Popup = ({ open, setOpen, modalRef }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const LoginFunc = () => {
    setOpen(false);
    navigate("/login");
  };

  const LogoutFunc = () => {
    dispatch(logout());
    setOpen(false);
    navigate("/");
  };
  return (
    <PopupDiv open={open} ref={modalRef}>
      <ContentDiv>개인정보 변경</ContentDiv>
      <ContentDiv>내 분석 리포트</ContentDiv>
      <ContentDiv>결제 정보</ContentDiv>
      <ContentDiv style={{ border: "none" }}>
        {isLoggedIn ? (
          <TextP onClick={LogoutFunc}>로그아웃</TextP>
        ) : (
          <TextP onClick={LoginFunc}>로그인</TextP>
        )}
      </ContentDiv>
    </PopupDiv>
  );
};

export default Popup;
