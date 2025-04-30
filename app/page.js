import Link from "next/link";
import Home from "./components/home/home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />     
    </>
  );
}
