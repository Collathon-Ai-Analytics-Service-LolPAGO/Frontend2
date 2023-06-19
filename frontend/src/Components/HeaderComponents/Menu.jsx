import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { MenuTd } from ".";

const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
`;

const MenuTable = styled.table`
  height: 70%;
`;

const Menu = () => {
  const navigate = useNavigate();
  const MenuList = [
    {
      title: "ABOUT",
      link: "about",
      last: 0,
    },
    {
      title: "소환사 검색",
      link: "search",
      last: 0,
    },
    {
      title: "분석 리포트",
      link: "analysis",
      last: 0,
    },
    {
      title: "마이페이지",
      link: "mypage",
      last: 1,
    },
  ];

  return (
    <MenuDiv>
      <MenuTable>
        <tr>
          {MenuList.map((menu, idx) => (
            <MenuTd key={idx} navigate={navigate} menu={menu} />
          ))}
        </tr>
      </MenuTable>
    </MenuDiv>
  );
};

export default Menu;
