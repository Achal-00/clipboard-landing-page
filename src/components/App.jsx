import React from "react";
import LandingSection from "./LandingSection";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import Footer from "./Footer";

export default function App() {
  return (
    <section className="container">
      <LandingSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </section>
  );
}
