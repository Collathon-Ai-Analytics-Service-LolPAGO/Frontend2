import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "@emotion/styled";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #171717;
  overflow-y: hidden;
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
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
