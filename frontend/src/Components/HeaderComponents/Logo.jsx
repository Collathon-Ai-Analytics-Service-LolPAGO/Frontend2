import styled from "@emotion/styled";
import LOGO from "../../Assets/LOGO.png";
import { Fragment } from "react";

const LogoImg = styled.img`
  box-sizing: border-box;
  width: 90%;
  object-fit: contain;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: auto 20px;
`;

const Logo = () => {
  return (
    <Fragment>
      <LogoImg src={LOGO} class="headerLogo" alt="logo" />
    </Fragment>
  );
};

export default Logo;
