import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./components/Contact.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
