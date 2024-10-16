import AboutMe from "./components/AboutMe"
import ContactMe from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Testimonials from "./components/Testomonials"

import "./styles.css"

function LandingPage() {
    return (
        <div className="mt-28 flex flex-col gap-20">
            <div className="flex items-center flex-col gap-20">
                <Hero />
                <AboutMe />
                <Services />
                <Projects />
                <Testimonials />
                <ContactMe />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage