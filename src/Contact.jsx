function Contact(){
    return (
        <section className="px-15 py-10 w-full">
            <div className="flex items-center">
                <h3 className="font-bold text-xl text-(--light-blurple) mr-4">Contact Me</h3>
                <hr className="flex-1 border-(--light-blurple)" />
            </div>
            <p className="font-mono text-(--light-blurple) text-center">
                If you would like to contact me about any enquiries and questions you can contact me at <br/>
                <a className="font-mono text-(--blurple)" href="mailto:joneseuan28@gmail.com?subject=Contact%20From%20euanjones.com&body=Hello%20Euan%2C">joneseuan28@gmail.com</a>.
            </p>
        </section>
    )
}

export default Contact;