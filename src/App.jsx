import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyDubai from "./components/WhyDubai";
import InvestmentJourney from "./components/InvestmentJourney";
import Roadshows from "./components/Roadshows";
import PrivateConsultation from "./components/PrivateConsultation";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Roadshow from "./pages/Roadshow";
import Meetings from "./pages/Meetings";
import AboutPage from "./pages/Aboutpage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WhyDubai />
              <InvestmentJourney />
              <Roadshows />
              <PrivateConsultation />
            </>
          }
        />

        <Route path="/events" element={<Events />} />

        <Route path="/roadshow" element={<>
        <Roadshow/></>} />
        <Route path="/meetings" element={<>
        <Meetings/></>} />
        <Route path="/about" element={<>
          <AboutPage/>
        </>} />
        <Route path="/contact" element={<>
        <Contact/></>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;