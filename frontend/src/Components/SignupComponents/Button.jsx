import styled from "@emotion/styled";

const SignUpBtn = styled.button`
  color: white;
  width: 20%;
  background-color: inherit;
  border: 1px solid white;
  border-radius: 10px;
  margin-right: 10%;
`;

const Button = ({ name, onClick }) => {
  return <SignUpBtn onClick={onClick}>{name}</SignUpBtn>;
};

export default Button;
