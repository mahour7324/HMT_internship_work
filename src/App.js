import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div classNameName="App">
      {/*-------------------------------------------------------------------------------------------------------------------------------------- */}
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
          
        </Routes>
      </BrowserRouter>

      {/*-------------------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default App;
