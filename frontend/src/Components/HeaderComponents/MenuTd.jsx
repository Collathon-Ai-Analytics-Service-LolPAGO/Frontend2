import styled from "@emotion/styled";

const WhiteTd = styled.td`
  color: white;
  font-weight: bold;
  display: inline-block;
  border-right: ${({ last }) => (last === 0 ? "1px solid white" : "none")};
  text-align: center;
  width: max(1.5vw, 150px);
  height: 70%;
  cursor: pointer;
  font-size: max(1vw, 18px);

  &:hover {
    color: #f8fdbc;
  }
`;

const MenuTd = ({ navigate, menu, ...props }) => {
  const navigateTo = (e) => {
    const link = e.target.dataset.link;
    navigate(`/${link}`);
  };
  return (
    <WhiteTd
      data-link={menu.link}
      last={menu.last}
      {...props}
      onClick={navigateTo}
    >
      {menu.title}
    </WhiteTd>
  );
};
export default MenuTd;
