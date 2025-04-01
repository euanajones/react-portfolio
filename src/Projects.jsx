import InfoCard from "./InfoCard.jsx";

function Projects(){
    return (
        <section className="pr-10 pl-10 pt-10">
            <div className="flex items-center">
                <h3 className="font-bold text-xl text-(--light-blurple) mr-4">Projects</h3>
                <hr className="flex-1 border-(--light-blurple)" />
            </div>
            <p className="font-mono text-(--light-blurple) text-sm">My highlighted academic/personal projects.</p>
            <InfoCard
                title = "Neural Network From Scratch"
                info1 = "Python"
                info2 = "Planned"
            />
            <InfoCard
                title = "F1 Data Analysis Course"
                info1 = "Research"
                info2 = "In progress"
            />
        </section>
    )
}

export default Projects;