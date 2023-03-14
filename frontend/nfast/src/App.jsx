import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserView, MobileView } from "react-device-detect";
import Header from "./components/commons/Header";
import MainPage from "./pages/MainPage";
import MyNftPage from "./pages/MyNftPage";
import MyTransPage from "./pages/MyTransPage";
import MyBookmarkPage from "./pages/MyBookmarkPage";
import MyInfoPage from "./pages/MyInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/mynft" element={<MainPage />} />
        <Route path="/" element={<MyNftPage />} />
        <Route path="/mytrans" element={<MyTransPage />} />
        <Route path="/mybookmark" element={<MyBookmarkPage />} />
        <Route path="/myinfo" element={<MyInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
