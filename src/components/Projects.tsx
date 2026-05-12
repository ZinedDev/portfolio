import Heading from "./sub/Heading.tsx";
import Project from "./sub/Project.tsx";
import {projectsData, projectsButton} from "../assets";
import {useEffect, useRef, useState} from "react";
import {animate, motion} from "framer-motion";


export default function Projects() {

    const [tech, setTech] = useState("All");
    const [index, setIndex] = useState(0);
    const prevIndex = useRef(0); // does not trigger re-render on change
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const handleClick = () => {
        if (buttonsRef.current[prevIndex.current]) {
            animate(buttonsRef.current[prevIndex.current]!, {opacity: .8, scale: 1})
        }
        if (buttonsRef.current[index]) {
            animate(buttonsRef.current[index]!, {opacity: 1, scale: 1.1})
        }
    }

    useEffect(() => {
        if (buttonsRef.current[index]) {
            handleClick();
        }
        prevIndex.current = index;
    }, [index])

    return (
        <div className={"min-h-screen flex flex-col items-center "}>
            <Heading text={"Projects"}/>
            <div className={"flex flex-wrap items-center justify-center gap-5 max-sm:gap-2 py-5 max-sm:py-2 px-2"}>
                {projectsButton.map((buttonText, i) => (
                    <motion.button
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                        variants={{
                            hidden: {
                                x: i % 3 ? (window.innerWidth < 640 ? -50 : -100) : (window.innerWidth < 640 ? 50 : 100),
                                y: i % 2 ? (window.innerWidth < 640 ? -50 : -100) : (window.innerWidth < 640 ? 50 : 100),
                                opacity: 0.0,
                                scale: 0.0,
                            },
                            visible: {x: 0, y: 0, opacity: .8, scale: 1, transition: {duration: .4, delay: (i + 1) * 0.04}}
                        }}
                        viewport={{once: false}}
                        ref={(el) => {
                            if (el) buttonsRef.current[i] = el;
                        }}
                        onClick={() => {
                            setTech(buttonText)
                            setIndex(i)
                        }}
                        className={"border border-yellow-600 rounded-xl p-2 max-sm:p-1.5 text-sm max-sm:text-xs font-light tracking-wider text-gray-600 dark:text-white bg-amber-100 dark:bg-zinc-600 transition-colors duration-500"}
                    >
                        {buttonText}
                    </motion.button>
                ))}
            </div>
            <div className={"mt-10 max-sm:mt-5 flex flex-wrap items-center justify-center gap-5"}>
                {projectsData.filter((project) => {
                    return project.tech.some((item) =>
                        (tech === "All" ? true : item === tech))
                })
                    .map((data, i) => (
                        <motion.div
                            key={`id-${data.name}`}
                            layout
                            transition={{ layout: { type: "spring", stiffness: 100, restDelta: 10 } }}
                        >
                            <Project
                                key={i}
                                index={i}
                                data={data}
                            />
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}