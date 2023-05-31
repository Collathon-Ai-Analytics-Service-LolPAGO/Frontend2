import styled from "@emotion/styled";

const SignUpBtn = styled.button`
  color: white;
  width: 20%;
  height: 30%;
  background-color: inherit;
  border: 1px solid white;
  border-radius: 10px;
  margin-right: 10%;
`;

const Button = ({ name }) => {
  return <SignUpBtn>{name}</SignUpBtn>;
};

export default Button;
