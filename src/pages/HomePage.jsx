import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { About } from "../sections/About"
import { Contact } from "../sections/Contact"
import { Hero } from "../sections/Hero"
import { Projects } from "../sections/Projects"
import { Proof } from "../sections/Proof"

export function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
