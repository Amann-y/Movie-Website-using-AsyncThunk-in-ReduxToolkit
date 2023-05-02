import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Moviedetail from "./pages/Moviedetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<Moviedetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
