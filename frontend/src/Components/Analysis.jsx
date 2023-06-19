import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import icons from "../Assets";
import { useLocation } from "react-router-dom";

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
  height: 85%;
  background-color: #aaaaaa;
`;

const ProfileDiv = styled.div`
  width: 100%;
  height: 120px;
`;

const ProfileTable = styled.table`
  width: 100%;
  height: 100%;
`;

const ProfileTr = styled.tr`
  height: 50%;
  width: 100%;
`;

const ProfileImgTd = styled.td`
  width: 30%;
  height: 100%;
  text-align: center;
`;

const Icon = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 20%;
`;

const Nickname = styled.td`
  width: 70%;
  height: 50%;
  font-size: 30px;
  font-weight: bold;
`;

const Update = styled.td`
  width: 70%;
  height: 50%;
`;

const UpdateBtn = styled.button`
  width: 100px;
  height: 80%;
  font-size: 15px;
  border-radius: 10px;
  border: none;
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
        <ProfileDiv>
          <ProfileTable>
            <ProfileTr>
              <ProfileImgTd rowSpan="2">
                <Icon src={url} alt="icon" />
              </ProfileImgTd>
              <Nickname>{data.nickname}</Nickname>
            </ProfileTr>
            <ProfileTr>
              <Update>
                <UpdateBtn>전적 갱신</UpdateBtn>
              </Update>
            </ProfileTr>
          </ProfileTable>
        </ProfileDiv>
      </ContentDiv>
    </MainDiv>
  );
};

export default Analysis;
