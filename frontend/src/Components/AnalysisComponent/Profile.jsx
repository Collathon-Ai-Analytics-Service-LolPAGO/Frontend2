import styled from "@emotion/styled";

const ProfileDiv = styled.div`
  width: 100%;
  height: 100px;
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
  width: 100px;
  height: 100%;
  text-align: center;
  padding-right: 10px;
`;

const Icon = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 20%;
`;

const Nickname = styled.td`
  height: 50%;
  font-size: 30px;
  font-weight: bold;
`;

const Update = styled.td`
  height: 50%;
`;

const UpdateBtn = styled.button`
  width: 100px;
  height: 80%;
  font-size: 15px;
  border-radius: 7px;
  border: none;
  background-color: #ccc;

  &:hover {
    background-color: #aaa;
  }
`;

const Profile = ({ url, data }) => {
  return (
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
  );
};
export default Profile;
