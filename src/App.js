import React from "react";
import Home from "./Components/Home";
import Order from "./Components/Order";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Meals from "./Components/Meals";  
import Curries from "./Components/Curries";  

function App() {
  return (
    <div>
      <BrowserRouter basename="/Ivaturis-Veg-Kitchen">
        <Navbar />
        <Categories />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/curries" element={<Curries />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
