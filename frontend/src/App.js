import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Header, Main, SignUp, Login, Search, Analysis } from "Components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #171717;
  overflow-y: hidden;
  font-family: "Inter", sans-serif;
`;

function App() {
  return (
    <BrowserRouter>
      <Background className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/analysis/:nickname" element={<Analysis />} />
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
