import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Now from "./components/Now";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <div
        id="top"
        style={{ position: "absolute", top: 0 }}
        aria-hidden="true"
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        {/* <Now /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
