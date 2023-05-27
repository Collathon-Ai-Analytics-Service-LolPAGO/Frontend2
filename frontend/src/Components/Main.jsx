import styled from "@emotion/styled";
import Blitz from "../Assets/Blitz.png";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  display: flex;
`;

const ContentDiv = styled.div`
  width: 800px;
  height: 300px;
  text-align: center;
  margin: auto;
  display: grid;
  grid-template-columns: 500px 300px;
  grid-template-rows: 150px 150px;
`;

const ParagraphDiv = styled.div`
  width: 100%;
  height: 100%;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  padding: 50px 0;
`;

const MainP = styled.p`
  margin: 0;
  box-sizing: border-box;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const LemonSpan = styled.span`
  color: #f8fdbc;
  font-size: 30px;
`;

const BlitzImg = styled.img`
  width: 200px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: auto;
`;

const StyledBtn = styled.button`
  width: 200px;
  height: 40px;
  background-color: #2f323b;
  color: white;
  border-radius: 7px;
  border: none;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: auto;
`;

const Main = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <ParagraphDiv>
          <MainP>AI 기반 게임 트레이닝 서비스</MainP>
          <MainP>
            <LemonSpan>LolPAGO </LemonSpan>PLAYREPORT
          </MainP>
        </ParagraphDiv>

        <BlitzImg src={Blitz} />
        <StyledBtn>내 경기 분석하기</StyledBtn>
      </ContentDiv>
    </MainDiv>
  );
};

export default Main;
