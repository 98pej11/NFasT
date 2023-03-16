import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import NFastCard from "./components/floating/NFastCard";
// import FloatingCards from "./components/FloatingCards";
// import Header from "./components/commons/Header";
import FloatingBtn from "./components/floating/FloatingBtn";
import Review from "./pages/ReviewPage";
import MyNftPage from "./pages/MyNftPage";
import MyTransPage from "./pages/MyTransPage";
import MyBookmarkPage from "./pages/MyBookmarkPage";
import MainPage from "./pages/Mainpage";
import MyInfoPage from "./pages/MyInfoPage";
import StorePage from "./pages/StorePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/floating" element={<FloatingBtn />} />
          <Route path="/nFastCard" element={<NFastCard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/mynft" element={<MyNftPage />} />
          <Route path="/mytrans" element={<MyTransPage />} />
          <Route path="/mybookmark" element={<MyBookmarkPage />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
