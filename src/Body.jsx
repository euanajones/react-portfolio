import SplashBanner from "./SplashBanner.jsx";
import Experiences from "./Experiences.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Technologies from "./Technologies.jsx";

function Body() {
    return (
        <main className="w-full h-full bg-gradient-to-b from-(--blurple) from-10% to-(--dark-blurple) to-100% flex flex-col items-center">
            <SplashBanner />
            <Technologies />
            <Experiences />
            <Projects />
            <Contact />
        </main>
    )
}

export default Body;