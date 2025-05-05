import Link from "next/link";
import Home from "./components/home/home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About /> 
      <Skills />
      <Contact />
      <Footer />  
    </>
  );
}
