import styled from "@emotion/styled";
import { useEffect } from "react";

const MatchListBody = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px auto;
  background-color: #ecf2ff;
  padding: 0;
  display: flex;
  border-radius: 10px;
`;

const MatchListItemDiv = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MatchListItemText = styled.p`
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

const MatchListItem = ({ data, changeSelect, select }) => {
  const SelectItem = (e) => {
    const id = e.target.dataset.id;
    const checked = e.target.checked;
    changeSelect(id, checked);
  };

  return (
    <MatchListBody>
      <MatchListItemDiv width="30%">이미지</MatchListItemDiv>
      <MatchListItemDiv width="30%">
        <MatchListItemText>
          {data.kills} / {data.deaths} / {data.assists}
        </MatchListItemText>
      </MatchListItemDiv>
      <MatchListItemDiv width="30%">
        <MatchListItemText>{data.time}</MatchListItemText>
      </MatchListItemDiv>
      <MatchListItemDiv width="10%">
        <input
          type="checkbox"
          onChange={SelectItem}
          data-id={data.id}
          checked={select ? true : false}
        />
      </MatchListItemDiv>
    </MatchListBody>
  );
};
export default MatchListItem;
