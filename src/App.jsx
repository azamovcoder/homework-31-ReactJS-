import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
