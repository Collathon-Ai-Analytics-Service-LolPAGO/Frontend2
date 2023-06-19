import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "Assets";

const SearchResultDiv = styled.div`
  width: 100%;
  height: 350px;
  background-color: white;
`;

const RowDiv = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #aaaaaa;
  border: ${({ last }) => (last ? "none" : "")};

  &:hover {
    background-color: #cccccc;
  }
`;

const LeftDiv = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  text-align: center;
`;

const RightDiv = styled.div`
  width: 80%;
  height: 100%;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Nickname = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Tier = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DUMMY_DATA = [
  {
    icon: "icon1",
    nickname: "Hide on bush0",
    tier: "Gold 4",
  },
  {
    icon: "icon1",
    nickname: "Hide on bush01",
    tier: "Silver 2",
  },
  {
    icon: "icon1",
    nickname: "Hide on bush010",
    tier: "Unranked",
  },
  {
    icon: "icon1",
    nickname: "Hide on bush0108",
    tier: "Silver 3",
  },
  {
    icon: "icon1",
    nickname: "Hide on bush0125",
    tier: "Bronze 2",
  },
];

const SearchResult = () => {
  const [data, setData] = useState(DUMMY_DATA);
  const navigate = useNavigate();

  const moveToAnalysis = (e) => {
    const name = e.currentTarget.dataset.name;
    navigate(`/analysis/${name}`, {
      state: data.filter((d) => d.nickname === name)[0],
    });
  };

  return (
    <SearchResultDiv>
      {data.map((obj, idx) => (
        <RowDiv
          last={idx === data.length - 1 ? true : false}
          onClick={moveToAnalysis}
          data-name={obj.nickname}
        >
          <LeftDiv>
            <IconDiv>
              <IconImg src={icons[obj.icon]} alt="icon" />
            </IconDiv>
          </LeftDiv>
          <RightDiv>
            <Nickname>{obj.nickname}</Nickname>
            <Tier>{obj.tier}</Tier>
          </RightDiv>
        </RowDiv>
      ))}
    </SearchResultDiv>
  );
};
export default SearchResult;
