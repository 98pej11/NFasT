import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
// import NFastCard from "./components/commons/NFastCard";
// import NFastForUse from "./components/NFastForUse";
// import Header from "./components/commons/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
