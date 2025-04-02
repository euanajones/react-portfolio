import React, { useState, useEffect, useRef } from 'react';

export default function SplashBanner() {
    const titles = ["Computer Scientist", "Motorsport Fan", "Cub Scout Leader", "Ethical Hacker", "Competition Officer", "Ambition Scholar"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = 100;

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentTitle = titles[index];

            if (!isDeleting) {
                setText(currentTitle.substring(0, charIndex + 1) + "|");
                setCharIndex(charIndex + 1);

                if (charIndex === currentTitle.length) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentTitle.substring(0, charIndex - 1) + "|");
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);

    }, [charIndex, isDeleting, index, titles]);

    return (
        <section className="flex flex-col p-15 w-full">
            <h3 className="font-mono text-xl text-(--light-blurple) text-center">Hello, my name is...</h3>
            <h1 className="text-5xl font-bold text-(--light-blurple) tracking-wide text-center">EUAN JONES</h1>
            <div className="font-mono text-2xl font-bold text-center bg-(--light-blurple) rounded-lg mt-2 mb-10">{text}</div>
            <p className="font-mono text-l font-bold text-center text-(--light-blurple)">
                A First Year Computer Science Student at The University Of Sheffield. Interested in Cybersecurity,
                Software Engineering, Quantum Computing and the Motorsport Industry. Enthusiastic about applying
                knowledge to new areas, and expanding current skill set.
            </p>
        </section>
    );
}