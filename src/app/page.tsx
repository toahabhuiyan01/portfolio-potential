import AboutMe from "./_landing/components/AboutMe"
import ContactMe from "./_landing/components/Contact"
import Footer from "./_landing/components/Footer"
import Hero from "./_landing/components/Hero"
import Projects from "./_landing/components/Projects"
import Services from "./_landing/components/Services"
import Testimonials from "./_landing/components/Testomonials"

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