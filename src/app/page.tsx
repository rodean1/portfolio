import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Skills from './components/Skills'
import Now from './components/Now'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Now />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
