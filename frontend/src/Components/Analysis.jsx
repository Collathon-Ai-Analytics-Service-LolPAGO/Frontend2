import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import icons from "../Assets";
import { useLocation } from "react-router-dom";
import { MatchList, Profile } from "Components/AnalysisComponent";

const MainDiv = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const ContentDiv = styled.div`
  width: 60%;
  height: 95%;
`;

const Analysis = () => {
  const location = useLocation();
  const data = location.state;
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(process.env.PUBLIC_URL + icons[data.icon]);
  }, [data]);

  return (
    <MainDiv>
      <ContentDiv>
        <Profile url={url} data={data} />
        <MatchList />
      </ContentDiv>
    </MainDiv>
  );
};

export default Analysis;
