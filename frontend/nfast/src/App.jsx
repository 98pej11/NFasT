import React from "react";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";
import FloatingBtn from "./components/commons/FloatingBtn";
import IntroSeller1 from "./pages/seller/IntroSeller1";
import IntroSeller2 from "./pages/seller/IntroSeller2";
import IntroSeller3 from "./pages/seller/IntroSeller3";
import NFastCard from "./components/commons/NFastCard";
import SellerRegister from "./components/sellerintropage/SellerRegister";
import Review from "./pages/customer/ReviewPage";
import MyNftPage from "./pages/customer/MyNftPage";
import MyTransPage from "./pages/customer/MyTransPage";
import MyBookmarkPage from "./pages/customer/MyBookmarkPage";
import MainPage from "./pages/customer/MainPage";
import DisAllPage from "./pages/customer/DisAllPage";
import TransAllPage from "./pages/customer/TransAllPage";
import MyInfoPage from "./pages/customer/MyInfoPage";
import StorePage from "./pages/customer/StorePage";
import LoginCustomer from "./pages/customer/LoginPageCustomer";
import LoginSeller from "./pages/seller/LoginPageSeller";
import SellerPage from "./pages/seller/SellerPage";
import Header from "./components/commons/Header";
// import HeaderSeller from "./components/commons/HeaderSeller";
import CustomerIntroduce from "./pages/customer/CustomerIntroduce";
// import Footer from "./components/commons/Footer";

const Pages = styled.div`
  margin-top: 80px;
  // margin-left: 10%;
  // margin-right: 10%;
  position: relative;
`;
const Wrapper = styled.div`
  @media (max-width: 412px) {
    width: 100%;
    max-width: 412px;
  }
`;
function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Pages>
          <Routes>
            <Route path="/" element={<CustomerIntroduce />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/disall" element={<DisAllPage />} />
            <Route path="/transall" element={<TransAllPage />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/floating" element={<FloatingBtn />} />
            <Route path="/nFastCard" element={<NFastCard />} />
            <Route path="/review/:nfastSequence" element={<Review />} />
            <Route path="/mynft" element={<MyNftPage />} />
            <Route path="/mytrans" element={<MyTransPage />} />
            <Route path="/mybookmark" element={<MyBookmarkPage />} />
            <Route path="/myinfo" element={<MyInfoPage />} />
            <Route path="/store/:storeSequence" element={<StorePage />} />
            <Route path="/loginCustomer" element={<LoginCustomer />} />
            <Route path="/loginSeller" element={<LoginSeller />} />
            <Route path="/PageSeller" element={<SellerPage />} />
            <Route path="/introSeller1" element={<IntroSeller1 />} />
            <Route path="/introSeller2" element={<IntroSeller2 />} />
            <Route path="/introSeller3" element={<IntroSeller3 />} />
            <Route path="/RegisterSeller" element={<SellerRegister />} />
          </Routes>
        </Pages>
        {/* <Footer /> */}
      </BrowserRouter>
    </Wrapper>
  );
}
export default App;
