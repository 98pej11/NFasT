import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/commons/Header";
import NfastCard from "./components/NfastCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NfastCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
