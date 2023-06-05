import styled from "@emotion/styled";
import SearchSection from "./SearchComponents/SearchSection";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
`;

const Search = () => {
  return (
    <MainDiv>
      <SearchSection />
    </MainDiv>
  );
};

export default Search;
