import styled from "@emotion/styled";
import LOGO from "../../Assets/LOGO.png";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const LogoImg = styled.img`
  box-sizing: border-box;
  width: 90%;
  object-fit: contain;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: auto 20px;
  cursor: pointer;
`;

const Logo = () => {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <LogoImg src={LOGO} class="headerLogo" alt="logo" onClick={Home} />
    </Fragment>
  );
};

export default Logo;
