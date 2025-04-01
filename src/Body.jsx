import SplashBanner from "./SplashBanner.jsx";
import Experiences from "./Experiences.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Body() {
    return (
        <main className="w-full h-full bg-gradient-to-b from-(--blurple) from-10% to-(--dark-blurple) to-100%">
            <SplashBanner />
            <Experiences />
            <Projects />
            <Contact />
        </main>
    )
}

export default Body;