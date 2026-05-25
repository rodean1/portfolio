import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
      </main>
    </>
  )
}
