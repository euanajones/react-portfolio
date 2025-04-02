import InfoCard from "./InfoCard.jsx";

function Experiences(){
    return (
        <section className="px-15 pt-10 w-full">
            <div className="flex items-center">
                <h3 className="font-bold text-xl text-(--light-blurple) mr-4">Experiences</h3>
                <hr className="flex-1 border-(--light-blurple)" />
            </div>
            <p className="font-mono text-(--light-blurple) text-sm">My highlighted academic/personal experiences.</p>
            <InfoCard
                title = "Competitions Officer"
                info1 = "09.25 - Current"
                info2 = "Sheffield Ethical Hackers Society"
            />
            <InfoCard
                title = "1st Year Representative"
                info1 = "10.24 - 06.25"
                info2 = "Sheffield Computer Science Society"
                description = "
                Represented all 1st year Computer Science students for the society, helping organise events such as HackSheffield9
                and the 2025 Charity Summer Ball.
                "
            />
            <InfoCard
                title = "HackSheffield9 Organiser"
                info1 = "11.24"
                info2 = "Sheffield Computer Science Society"
                description = "
                Helped organise a large scale hackathon on the day alongside team of committee. Worked alongside other committee
                members and volunteers to deliver a high impact and successful event.
                "
            />
        </section>
    )
}

export default Experiences;