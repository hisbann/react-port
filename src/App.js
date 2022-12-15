import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar /> 
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      {/* <Home/> 
      <About  />
      <Services />
      <ButtonRefresh /> */}
    </div>
  );
}

export default App;
