import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";

import Home from "./pages/Home";
import GermanLanguage from "./pages/GermanLanguage";
import EighthToTenthCoaching from "./pages/EighthToTenthCoaching";
import TwelfthCoaching from "./pages/TwelfthCoaching";
import CommerceCoaching from "./pages/CommerceCoaching";
import AboutUs from "./pages/AboutUs";
import PCMBJeeNeet from "./pages/PCMBJeeNeet";
import EnquiryForm from "./pages/EnquiryForm";
import Courses from "./pages/Courses";
import DoubtSolving from "./pages/DoubtSolving";
import ExamPreparation from "./pages/ExamPreparation";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <SocialIcons />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/german-language" element={<GermanLanguage />} />
        <Route
          path="/eighth-to-tenth-coaching"
          element={<EighthToTenthCoaching />}
        />
        <Route path="/twelfth-coaching" element={<TwelfthCoaching />} />
        <Route path="/commerce-coaching" element={<CommerceCoaching />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pcmb-jee-neet" element={<PCMBJeeNeet />} />
        <Route path="/doubt-solving" element={<DoubtSolving />} />
        <Route path="/exam-preparation" element={<ExamPreparation />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
