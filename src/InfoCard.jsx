function InfoCard(props) {
    const title = props.title || "Experience Title";
    const info1 = props.info1 || "";
    const info2 = props.info2 || "TBC"
    const description = props.description || "Check back later for more information...";

    return (
        <section className="bg-(--dark-grey)/50 border-1 border-(--light-blurple)/50 p-5 rounded-lg mt-5">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg text-(--light-blurple)">{title}</h2>
                <h1 className="text-sm font-mono text-(--light-blurple) text-right pl-2">{info1}</h1>
            </div>
            <div>
                <h1 className="font-bold text-base text-(--blurple)">{info2}</h1>
                <p className="font-mono text-base text-(--light-blurple) pt-2">{description}</p>
            </div>
        </section>
    )
}

export default InfoCard;