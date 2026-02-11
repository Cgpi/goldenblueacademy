import Hero from "../components/Hero";
import InfoStrip from "../components/InfoStrip";
import About from "../components/About";
import Courses from "../components/Courses";
import GermanProgram from "../components/GermanProgram";
import Results from "../components/Results";
import StudentsSection from "../components/StudentsSection";

function Home() {
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
