import styled from "@emotion/styled";
import search from "Assets/search.png";
import enter from "Assets/enter.png";
import "styles/style.css";
import { useState } from "react";

const SearchDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 3%;
`;

const IconDiv = styled.div`
  width: 7%;
  padding: 5px;
  box-sizing: border-box;
`;

const TextDiv = styled.div`
  width: 80%;
`;

const Text = styled.p`
  border: none;

  &:focus {
    outline: none;
    color: black;
  }
`;

const SearchIcon = styled.img`
  width: 25px;
`;

const EnterIcon = styled.img`
  width: 25px;
  cursor: pointer;
`;

const SearchSection = () => {
  const [keyword, setKeyword] = useState();

  const changeKeyword = (e) => {
    setKeyword(e.target.innerHTML);
  };

  const startSearch = () => {
    if (!keyword) {
      alert("분석할 소환사 닉네임을 입력해주세요.");
    } else {
      alert("검색!");
    }
  };

  return (
    <>
      <SearchDiv>
        <IconDiv>
          <SearchIcon src={search} alt="search" />
        </IconDiv>
        <TextDiv>
          <Text
            contentEditable="true"
            placeholder="분석할 소환사 닉네임을 입력해주세요."
            onInput={changeKeyword}
          />
        </TextDiv>
        <IconDiv>
          <EnterIcon src={enter} alt="enter" onClick={startSearch} />
        </IconDiv>
      </SearchDiv>
    </>
  );
};

export default SearchSection;
