import styled from "@emotion/styled";

const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

const ErrorText = ({ text, show }) => {
  return <ErrorMsg>{show ? text : ""}</ErrorMsg>;
};

export default ErrorText;
