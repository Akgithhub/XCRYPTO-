import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Exchanges from "./Components/Exchanges";
import Coins from "./Components/Coins";
import CoinDetails from "./Components/CoinDetails";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/header" element={<Header/>}/> */}
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
