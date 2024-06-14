import { useEffect } from "react";
import React from "react";
import { Header } from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home";
import Serivices from "./components/Services/Serivices";
import Banner from "./components/Banner/Banner";
import Appstore from "./components/Appstore/Appstore";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />
      <Serivices />
      <Banner />
      <Appstore />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
