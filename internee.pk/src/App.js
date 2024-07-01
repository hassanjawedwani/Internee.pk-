import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Registeration from "./components/Registeration";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registeration" element={<Registeration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;