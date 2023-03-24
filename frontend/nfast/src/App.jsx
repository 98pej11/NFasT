import React from "react";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFastCard from "./components/commons/NFastCard";
import FloatingBtn from "./components/commons/FloatingBtn";
import Review from "./pages/customer/ReviewPage";
import MyNftPage from "./pages/customer/MyNftPage";
import MyTransPage from "./pages/customer/MyTransPage";
import MyBookmarkPage from "./pages/customer/MyBookmarkPage";
import MainPage from "./pages/customer/MainPage";
import MyInfoPage from "./pages/customer/MyInfoPage";
import StorePage from "./pages/customer/StorePage";
import IntroducePage from "./pages/seller/IntroducePage";
import LoginCustomer from "./pages/customer/LoginPageCustomer";
import LoginSeller from "./pages/seller/LoginPageSeller";
import SellerPage from "./pages/seller/SellerPage";
import Header from "./components/commons/Header";
// import Footer from "./components/commons/Footer";

const Pages = styled.div`
  margin-top: 80px;
  margin-left: 10%;
  margin-right: 10%;
  position: relative;
  @media (max-width: 100px) {
    margin: 20px;
  }
`;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Pages>
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
            <Route path="/introduce" element={<IntroducePage />} />
            <Route path="/loginCustomer" element={<LoginCustomer />} />
            <Route path="/loginSeller" element={<LoginSeller />} />
            <Route path="/sellerPage" element={<SellerPage />} />
          </Routes>
        </Pages>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
