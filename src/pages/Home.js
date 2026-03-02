import Hero from "../components/Hero";
import InfoStrip from "../components/InfoStrip";
import About from "../components/About";
import Courses from "../components/Courses";
import GermanProgram from "../components/GermanProgram";
import Results from "../components/Results";
import StudentsSection from "../components/StudentsSection";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <InfoStrip />
      <About />
      <Courses />
      <GermanProgram />
      <Results />
      <StudentsSection />
    </>
  );
}

export default Home;
