import React from "react";
import Nav from "../components/Navbar";
import HomeTitle from "../components/Home/HomeTitle";
import Service from "../components/Service/Service";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import Blog from "../components/Blog/Blog";
import Team from "../components/Team/Team";

function Home() {
  return (
    <>
      <div className="mb-20">
        <Nav />
      </div>
      <HomeTitle />
      <About />
      <Service />
      <Portfolio />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
