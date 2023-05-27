import styled from "@emotion/styled";

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

const WhiteTd = styled.td`
  color: white;
  font-weight: bold;
  display: inline-block;
  border-right: 1px solid white;
  text-align: center;
  width: 120px;
  height: 70%;
`;

const WhiteLastTd = styled.td`
  color: white;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: 120px;
  height: 70%;
`;

const Menu = () => {
  return (
    <MenuDiv>
      <MenuTable>
        <tr>
          <WhiteTd>ABOUT</WhiteTd>
          <WhiteTd>소환사 검색</WhiteTd>
          <WhiteTd>분석 리포트</WhiteTd>
          <WhiteLastTd>마이페이지</WhiteLastTd>
        </tr>
      </MenuTable>
    </MenuDiv>
  );
};

export default Menu;
