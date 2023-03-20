import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
// import Footer from "./components/commons/Footer";
import NFastCard from "./components/floating/NFastCard";
// import FloatingCards from "./components/FloatingCards";
// import Header from "./components/commons/Header";
// import FloatingBtn from "./components/commons/FloatingBtn";
import Review from "./pages/customer/ReviewPage";
import MyNftPage from "./pages/customer/MyNftPage";
import MyTransPage from "./pages/customer/MyTransPage";
import MyBookmarkPage from "./pages/customer/MyBookmarkPage";
import MainPage from "./pages/customer/MainPage";
import MyInfoPage from "./pages/customer/MyInfoPage";
import LoginPage from "./pages/customer/LoginPage";
import StorePage from "./pages/customer/StorePage";
import LoginSeller from "./pages/seller/LoginPage_Seller";

function App() {
  return (
    <div>
      <BrowserRouter>
        {window.location.pathname === "/login" ||
        window.location.pathname === "/login-seller" ? null : (
          <Header />
        )}

        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/floating" element={<FloatingBtn />} /> */}
          <Route path="/nFastCard" element={<NFastCard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/mynft" element={<MyNftPage />} />
          <Route path="/mytrans" element={<MyTransPage />} />
          <Route path="/mybookmark" element={<MyBookmarkPage />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-seller" element={<LoginSeller />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
