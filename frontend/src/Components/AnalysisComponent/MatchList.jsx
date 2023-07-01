import styled from "@emotion/styled";
import MatchListItem from "./MatchListItem";
import { useEffect, useRef, useState } from "react";

const MatchListDiv = styled.div`
  width: 100%;
  height: calc(85% - 110px);
  background-color: #aaaaaa;
  border-radius: 15px;
`;

const MatchListHead = styled.div`
  width: calc(90%);
  height: 50px;
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

  &:hover {
    background-color: #aaa;
  }
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: auto;
  vertical-align: middle;
`;

const DUMMY_DATA = [
  {
    id: 1,
    championName: "timo",
    assists: 10,
    deaths: 5,
    kills: 13,
    level: 18,
    spell: ["flash", "teleport"],
    rune: ["rune1", "rune2"],
    time: "2일 전",
    win: true,
  },
  {
    id: 2,
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
    win: false,
  },
  {
    id: 3,
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
    win: true,
  },
  {
    id: 4,
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
    win: true,
  },
  {
    id: 5,
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
    win: false,
  },
  {
    id: 6,
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
    win: false,
  },
  {
    id: 7,
    championName: "nunu",
    assists: 18,
    deaths: 8,
    kills: 5,
    level: 14,
    spell: ["flash", "smite"],
    rune: ["rune1", "rune2"],
    time: "3일 전",
    win: false,
  },
];

const MatchList = () => {
  const selectRef = useRef(false);
  const [select, setSelect] = useState(
    new Array(DUMMY_DATA.length).fill(false)
  );

  useEffect(() => {
    let selected = true;
    for (let i = 0; i < select.length; i++) {
      if (!select[i]) {
        selected = false;
        break;
      }
    }
    if (selected) {
      selectRef.current.checked = true;
    } else {
      selectRef.current.checked = false;
    }
  }, [select]);

  const changeSelect = (id, checked) => {
    const newArr = select.map((s, idx) =>
      parseInt(id) === idx + 1 ? checked : s
    );
    setSelect(newArr);
  };

  const AllSelect = (e) => {
    const checked = e.target.checked;
    setSelect(select.map((s) => checked));
  };

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
          <MatchListTitleDiv width="10%">
            <CheckBox type="checkbox" onChange={AllSelect} ref={selectRef} />
          </MatchListTitleDiv>
        </MatchListHead>
        <MatchListBody>
          {DUMMY_DATA.map((data, idx) => (
            <MatchListItem
              data={data}
              changeSelect={changeSelect}
              select={select[idx]}
            ></MatchListItem>
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
