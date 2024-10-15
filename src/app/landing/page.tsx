import AboutMe from "./components/AboutMe"
import ContactMe from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Testimonials from "./components/Testomonials"
import TopBar from "./components/TopBar"

import "./styles.css"

function LandingPage() {
    return (
        <div className="py-8 px-8 mt-16 flex flex-col gap-20">
            <Hero />
            <AboutMe />
            <Services />
            <Projects />
            <Testimonials />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default LandingPage