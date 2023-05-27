import styled from "@emotion/styled";
import { Banner, Logo, Menu } from "./HeaderComponents";

const HeaderBg = styled.div`
  width: 100%;
  height: 10%;
  min-height: 100px;
  min-width: 900px;
  display: grid;
  //position: fixed;
  grid-template-columns: 400px;
  grid-template-rows: 50% 50%;
`;

const Header = () => {
  return (
    <HeaderBg>
      <Logo />
      <Banner />
      <Menu />
    </HeaderBg>
  );
};

export default Header;
