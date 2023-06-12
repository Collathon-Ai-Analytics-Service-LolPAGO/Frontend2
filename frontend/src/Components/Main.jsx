import styled from "@emotion/styled";
import Blitz from "../Assets/Blitz.png";
import { useNavigate } from "react-router-dom";
const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const ParagraphDiv = styled.div``;

const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 400px;
`;

const FlexRowDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
`;

const MainP = styled.p`
  margin: 0;
  box-sizing: border-box;
  color: white;
  font-size: max(25px, 4vw);
  font-weight: bold;
`;

const LemonSpan = styled.span`
  color: #f8fdbc;
  font-size: max(25px, 4vw);
`;

const BlitzImg = styled.img`
  width: max(130px, 20vw);
  height: max(130px, 20vw);
`;

const StyledBtn = styled.button`
  width: 20vw;
  min-width: 150px;
  height: 5vh;
  font-size: max(13, 1.5vw);
  margin: auto;
  background-color: #2f323b;
  color: white;
  border-radius: 7px;
  border: none;
`;

const Main = () => {
  const navigate = useNavigate();
  const Analysis = () => {
    navigate("/search");
  };

  return (
    <MainDiv>
      <ContentDiv>
        <FlexRowDiv>
          <FlexColDiv>
            <ParagraphDiv>
              <MainP>AI 기반 게임 트레이닝 서비스</MainP>
              <MainP>
                <LemonSpan>LolPAGO </LemonSpan>PLAYREPORT
              </MainP>
            </ParagraphDiv>
            <StyledBtn onClick={Analysis}>내 경기 분석하기</StyledBtn>
          </FlexColDiv>
          <BlitzImg src={Blitz} />
        </FlexRowDiv>
      </ContentDiv>
    </MainDiv>
  );
};

export default Main;
