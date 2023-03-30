import React from "react";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NFastCard from "./components/commons/NFastCard";
import FloatingBtn from "./components/commons/FloatingBtn";
import Intro1 from "./components/intropage/Intro1";
import Intro2 from "./components/intropage/Intro2";
import Intro3 from "./components/intropage/Intro3";
import Intro4 from "./components/intropage/Intro4";
import Intro5 from "./components/intropage/Intro5";
import Intro6 from "./components/intropage/Intro6";
import Register from "./components/intropage/Register";
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
import CustomerIntroduce from "./pages/customer/CustomerIntroduce";
// import Footer from "./components/commons/Footer";

const Pages = styled.div`
  margin-top: 80px;
  // margin-left: 10%;
  // margin-right: 10%;
  position: relative;
`;
const IntroPage = styled.div`
  // margin-top: 80px;
  // margin-left: 10%;
  // margin-right: 10%;
  position: relative;
`;
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
            <Route path="/store/:storeSequence" element={<StorePage />} />
            <Route path="/loginCustomer" element={<LoginCustomer />} />
            <Route path="/loginSeller" element={<LoginSeller />} />
            <Route path="/sellerPage" element={<SellerPage />} />
            <Route path="/intro1" element={<Intro1 />} />
            <Route path="/intro2" element={<Intro2 />} />
            <Route path="/intro3" element={<Intro3 />} />
            <Route path="/intro4" element={<Intro4 />} />
            <Route path="/intro5" element={<Intro5 />} />
            <Route path="/intro6" element={<Intro6 />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Pages>
        <IntroPage>
          <Routes>
            <Route path="/introduce" element={<IntroducePage />} />
          </Routes>
        </IntroPage>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
