import React from "react";
import Hero from "../components/landing/hero";
import Benefits from "../components/landing/benefits";
import Colleagues from "../components/landing/colleagues";
import Uses from "../components/landing/uses";
import Introduce from "../components/landing/introduce";
import Footer from "../components/landing/footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Colleagues />
      <Uses/>
      <Introduce/>
      <Footer/>
    </div>
  );
};

export default Landing;
