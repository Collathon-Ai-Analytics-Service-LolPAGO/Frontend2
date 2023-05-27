import styled from "@emotion/styled";
import Header from "./Components/Header";
import Main from "./Components/Main";
const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #171717;
`;

function App() {
  return (
    <Background className="App">
      <Header></Header>
      <Main />
    </Background>
  );
}

export default App;
