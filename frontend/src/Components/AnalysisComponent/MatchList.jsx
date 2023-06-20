import styled from "@emotion/styled";
import MatchListItem from "./MatchListItem";

const MatchListDiv = styled.div`
  width: 100%;
  height: calc(85% - 110px);
  background-color: #aaaaaa;
  border-radius: 15px;
`;

const MatchListHead = styled.div`
  width: calc(90% - 8px);
  height: 10%;
  margin: 0 auto;
`;

const MatchListTitleDiv = styled.div`
  width: ${({ width }) => width};
  font-weight: bold;
  text-align: center;
  display: inline-block;
`;

const MatchListTitleText = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const MatchListBody = styled.div`
  width: 90%;
  height: 90%;
  overflow-y: auto;
  margin: 0 auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    width: 100%;
    background-color: #555555;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  background-color: #ccc;
  border-radius: 7px;
`;

const DUMMY_DATA = [
  {
    championName: "timo",
    assists: 10,
    deaths: 5,
    kills: 13,
    level: 18,
    spell: ["flash", "teleport"],
    rune: ["rune1", "rune2"],
    time: "2일 전",
  },
  {
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
  },
  {
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
  },
  {
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
  },
  {
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
  },
  {
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
  },
  {
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
  },
];

const MatchList = () => {
  return (
    <>
      <MatchListDiv>
        <MatchListHead>
          <MatchListTitleDiv width="30%">
            <MatchListTitleText>챔피언 정보</MatchListTitleText>
          </MatchListTitleDiv>
          <MatchListTitleDiv width="30%">
            <MatchListTitleText>킬 / 데스 / 어시</MatchListTitleText>
          </MatchListTitleDiv>
          <MatchListTitleDiv width="30%">
            <MatchListTitleText>경기 시간</MatchListTitleText>
          </MatchListTitleDiv>
          <MatchListTitleDiv width="calc(10% - 8px)">
            <input type="checkbox"></input>
          </MatchListTitleDiv>
        </MatchListHead>
        <MatchListBody>
          {DUMMY_DATA.map((data) => (
            <MatchListItem data={data}></MatchListItem>
          ))}
        </MatchListBody>
      </MatchListDiv>
      <ButtonDiv>
        <StyledButton type="button">선택한 경기 분석하기</StyledButton>
      </ButtonDiv>
    </>
  );
};
export default MatchList;
