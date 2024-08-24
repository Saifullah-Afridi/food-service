import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import AboutUs from "./pages/AboutUs";
import FooterSection from "./components/FooterSection";
import HotelCards from "./components/HotelCards";
import HotelDetail from "./components/HotelDetail";
import FoodCards from "./components/FoodCards";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HotelCards />} />
          <Route path="resturants" element={<HotelCards />} />
          <Route path="food/:id" element={<FoodCards />} />
        </Route>
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>

      <FooterSection />
    </BrowserRouter>
  );
};

export default App;
