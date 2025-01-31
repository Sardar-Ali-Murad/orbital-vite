import React from "react";
import Hero from "../components/landing/hero";
import Benefits from "../components/landing/benefits";
import Colleagues from "../components/landing/colleagues";
import Uses from "../components/landing/uses";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Colleagues />
      <Uses/>
    </div>
  );
};

export default Landing;
