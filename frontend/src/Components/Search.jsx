import styled from "@emotion/styled";
import { SearchResult, SearchSection } from "Components/SearchComponents";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: max(50%, 500px);
  height: 60%;
`;

const Search = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <SearchSection />
        <SearchResult />
      </ContentDiv>
    </MainDiv>
  );
};

export default Search;
