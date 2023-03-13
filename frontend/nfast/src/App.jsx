import React from "react";
// import { BrowserView, MobileView } from "react-device-detect";
import Header from "./components/common/Header";
import Mainpage from "./pages/mainpage";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ marginTop: "3%" }}>
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
