import React from "react";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFastCard from "./components/commons/NFastCard";
import FloatingBtn from "./components/commons/FloatingBtn";
import IntroSeller1 from "./pages/seller/IntroSeller1";
import IntroSeller2 from "./pages/seller/IntroSeller2";
import IntroSeller3 from "./pages/seller/IntroSeller3";
// import SellerIntro1 from "./components/sellerintropage/SellerIntro1";
// import SellerIntro2 from "./components/sellerintropage/SellerIntro2";
// import SellerIntro3 from "./components/sellerintropage/SellerIntro3";
// import SellerIntro4 from "./components/sellerintropage/SellerIntro4";
// import SellerIntro5 from "./components/sellerintropage/SellerIntro5";
// import SellerIntro6 from "./components/sellerintropage/SellerIntro6";
import SellerRegister from "./components/sellerintropage/SellerRegister";
import Review from "./pages/customer/ReviewPage";
import MyNftPage from "./pages/customer/MyNftPage";
import MyTransPage from "./pages/customer/MyTransPage";
import MyBookmarkPage from "./pages/customer/MyBookmarkPage";
import MainPage from "./pages/customer/MainPage";
import MyInfoPage from "./pages/customer/MyInfoPage";
import StorePage from "./pages/customer/StorePage";
import LoginCustomer from "./pages/customer/LoginPageCustomer";
import LoginSeller from "./pages/seller/LoginPageSeller";
import SellerPage from "./pages/seller/SellerPage";
import Header from "./components/commons/Header";
import CustomerIntroduce from "./pages/customer/CustomerIntroduce";
// import Footer from "./components/commons/Footer";

const Pages = styled.div`
  margin-top: 80px;
  // margin-left: 10%;
  // margin-right: 10%;
  position: relative;
`;
// const IntroPage = styled.div`
//   // margin-top: 80px;
//   // margin-left: 10%;
//   // margin-right: 10%;
//   position: relative;
// `;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Pages>
          <Routes>
            <Route path="/" element={<CustomerIntroduce />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/floating" element={<FloatingBtn />} />
            <Route path="/nFastCard" element={<NFastCard />} />
            <Route path="/review" element={<Review />} />
            <Route path="/mynft" element={<MyNftPage />} />
            <Route path="/mytrans" element={<MyTransPage />} />
            <Route path="/mybookmark" element={<MyBookmarkPage />} />
            <Route path="/myinfo" element={<MyInfoPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/loginCustomer" element={<LoginCustomer />} />
            <Route path="/loginSeller" element={<LoginSeller />} />
            <Route path="/sellerPage" element={<SellerPage />} />
            <Route path="/introSeller1" element={<IntroSeller1 />} />
            <Route path="/introSeller2" element={<IntroSeller2 />} />
            <Route path="/introSeller3" element={<IntroSeller3 />} />
            {/* <Route path="/sellerIntro1" element={<SellerIntro1 />} />
            <Route path="/sellerIntro2" element={<SellerIntro2 />} />
            <Route path="/sellerIntro3" element={<SellerIntro3 />} />
            <Route path="/sellerIntro4" element={<SellerIntro4 />} />
            <Route path="/sellerIntro5" element={<SellerIntro5 />} />
            <Route path="/sellerIntro6" element={<SellerIntro6 />} /> */}
            <Route path="/sellerRegister" element={<SellerRegister />} />
          </Routes>
        </Pages>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
