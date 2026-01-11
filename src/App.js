import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ProblemSolving from "./components/Problem";
function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Education/>
    <ProblemSolving/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
