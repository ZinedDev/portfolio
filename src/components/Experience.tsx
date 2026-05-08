import Heading from "./sub/Heading.tsx";
import ExperienceImage from "../../public/education.png";
import {experienceData, arrowLeftIcon} from "../assets";
import {motion, useScroll, useSpring} from "framer-motion";
import {useRef} from "react";


export default function Experience() {

    const date = new Date().getFullYear();

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "end end"]
    });

    const scrollY = useSpring(scrollYProgress, {stiffness: 200, damping: 50});

    return (
        <div id={"experience"}
            className={"relative py-20"}>
            <Heading text={"Experience & Education"}/>
            <img
                src={ExperienceImage}
                alt="experience"
                width={400}
                height={400}
                className={"absolute -top-4 right-0 opacity-70 max-lg:hidden"}
            />
            <div
                ref={containerRef}
                className={"relative w-full h-full flex flex-col items-center justify-center gap-y-10 max-lg:gap-y-20 py-10"}
            >
                {experienceData.map((data, i) => (
                    <div
                        key={`id-${i}`}
                        className={`w-150 max-xl:w-120 max-sm:w-full px-12 max-sm:px-0 relative ${i % 2 === 0 ? 
                            '-left-75 max-xl:-left-60 max-lg:-left-0' : 'left-75 max-xl:left-60 max-lg:left-0'}`}
                    >
                        <motion.div
                            initial={{opacity: 0, x: i % 2 === 0 ? -80 : 80}}
                            whileInView={{opacity: 1 , x: 0}}
                            transition={{duration: .8, type: 'spring', stiffness: 25, delay: i * 0.2}}
                            viewport={{once: true}}
                            className={"relative flex flex-col gap-y-3 rounded-md border border-red.300 bg-white dark:bg-zinc-700 transition-colors duration-500 p-4 tracking-wide max-sm:text-sm z-20"}>
                            <h1 className={"text-xl max-sm:text-lg font-light text-gray-600 dark:text-gray-200 transition-colors duration-500"}>{data.title}</h1>
                            <p className={"text-gray-800 dark:text-gray-300 transition-colors duration-500"}>
                                <span className={"block font-light"}>Education</span>
                                <span className={"block pl-2 font-extralight"}>{data.education}</span>
                            </p>
                            <div className={"text-gray-800 dark:text-gray-300 transition-colors duration-500"}>
                                <span className={"font-light"}>Experience</span>
                                <ul className={"pl-2"}>
                                    {data.experience.map((exp, j) => (
                                        <li key={`id-${j}`} className={"my-1 font-extralight"}>{exp}</li>
                                    ))}
                                </ul>
                            </div>
                            <span className={`absolute top-20 text-amber-600 dark:text-amber-900 transition-colors duration-500 -translate-y-1/2 ${i % 2 === 0 ? "left-full rotate-180" : "right-full "} max-lg:hidden`}>{arrowLeftIcon}</span>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1}}
                            viewport={{ once: true }}
                            className={`w-14 absolute top-20 border-2 border-gray-300 dark:border-gray-600 rounded-full aspect-square grid place-items-center text-amber-600 dark:text-gray-300 font-light -translate-y-1/2
                            ${i % 2 === 0 ? "left-full -translate-x-1/2 max-lg:left-1/2" : "right-full translate-x-1/2 max-lg:right-1/2"} z-10 bg-amber-50 dark:bg-amber-900 transition-colors duration-500`}>{date - experienceData.length + i + 1}
                        </motion.div>
                    </div>
                ))}
                <motion.div
                    initial={{ scaleY: 0 }}
                    style={{ scaleY: scrollY }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={"absolute w-1 h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-500 origin-top"}>
                </motion.div>
            </div>
        </div>
    )
}