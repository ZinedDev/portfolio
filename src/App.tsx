import "./App.css";
import Navbar from "./components/Navbar.tsx";
import {useEffect, useRef, useState} from "react";
import Toggle from "./components/sub/Toggle.tsx";
import Load from "./components/sub/Load.tsx";
import {motion} from "framer-motion";
import {sections} from "./assets/Sections.tsx";

function App() {

    const [id, setId] = useState("home");
    const compsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that is currently intersecting
                const visibleEntry = entries.find(entry => entry.isIntersecting);
                if (visibleEntry) {
                    setId(visibleEntry.target.id);
                }
            },
            {
                // rootMargin creates a narrow "detection band" in the center of the viewport
                // This ensures we only highlight the section the user is actually looking at
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            },
        )

        if (!compsRef.current) return;
        const compsArray = Array.from(compsRef.current.children)
        compsArray.forEach((comp) => {
            observer.observe(comp)
        })
    }, [])

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
            },
        },
        hidden: {
            opacity: 0,
            y: 0,
            transition: {
                duration: .5,
            },
        },
    }

    return (
        <>
            <Load/>
            <Toggle>
                <Navbar id={id}/>
                <div ref={compsRef} className={"h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory no-scrollbar scroll-p-0"}>
                    {
                        sections.map((section, i) => (
                            <motion.div
                                key={i}
                                id={section.id}
                                variants={variants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}}
                                className={"w-full min-h-screen snap-center"}
                            >
                                {section.component}
                            </motion.div>
                        ))
                    }
                </div>
            </Toggle>
        </>
    )
}

export default App
