import Heading from "./sub/Heading.tsx";
import AboutImage from "../../public/about-1.png";
import CV from "../../public/CV_TechStack_DW.pdf";
import {aboutText, downloadIcon, arrowLeftIcon, professions} from "../assets";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import Profession from "./sub/Profession.tsx";

export default function About() {

    const [text, setText] = useState(aboutText);

    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <Heading text={"About Me"}/>
            <div className={"w-full flex flex-row items-center justify-between gap-x-10"}>
                <motion.img
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: .6, delay: .1}}
                    viewport={{once: false}}
                    src={AboutImage}
                    alt="About Me"
                    width={400}
                    height={400}
                    className={"relative w-100 max-lg:w-50 max-md:w-25 max-sm:w-12.5 max-xs:w-7.5 max-sm:hidden"}
                />
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{delay: 0.1, type: "spring", stiffness: window.innerWidth > 768 ? 60 : 30}}
                    viewport={{once: false}}
                    className={"relative content-center place-content-evenly h-60 max-sm:h-80 flex flex-col w-full max-w-200 p-5 xl:right-15 text-justify border border-yellow-600 rounded-xl bg-amber-100 dark:bg-zinc-600 transition-colors duration-500"}
                >
                    <AnimatePresence mode={"wait"}>
                        <motion.p
                            key={text === aboutText ? "default" : text}
                            initial={{opacity: 0, x: -5}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 20}}
                            transition={{duration: 0.4, delay: 0.2}}
                            className={"text-left font-light text-[18px] max-sm:text-[14px] tracking-normal whitespace-pre-line first-letter:pl-2 text-gray-600 dark:text-white transition-all duration-500 "}
                        >
                            {text}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>
            </div>
            <motion.a
                href={CV}
                download={""}
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {opacity: 0, y: 100, scale: .5},
                    visible: {opacity: 1, y: 0, scale: 1, transition: {duration: .4, delay: 0.2}}
                }}
                viewport={{once: false}}
                className={"w-max mt-5 max-sm:mt-2 mr-22 max-sm:mr-0 flex items-center gap-x-2 rounded-full px-3 py-2 " +
                    "bg-red-600 hover:bg-red-500 font-light text-white transition-colors duration-200"
                }
            >
                <span>Download</span>
                <span className={"text-xl"}>{downloadIcon}</span>
            </motion.a>
            <span
                className={"relative bottom-18 right-11 -rotate-90 scale-[2.5] text-yellow-600 dark:text-zinc-600 transition-colors duration-500 max-sm:hidden"}
            >
                {arrowLeftIcon}
            </span>
            <div
                className={"mt-20 max-xs:mt-1 max-sm:mt-2 p-10 w-full flex flex-wrap max-sm:flex-col items-center max-sm:items-start justify-between gap-y-2"}>
                {professions.map((profession, i) => (
                    <motion.div
                        key={i}
                        onMouseOver={() => setText(profession.text)}
                        onMouseOut={() => setText(aboutText)}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: i % 2 ? (window.innerWidth < 640 ? -25 : -50) : (window.innerWidth < 640 ? 25 : 50),
                                y: i % 2 ? (window.innerWidth < 640 ? -25 : -50) : (window.innerWidth < 640 ? 25 : 50),
                                scale: 0
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1,
                                transition: {duration: .4, delay: (i + 1) * 0.2}
                            }
                        }}
                        viewport={{once: false, margin: "20px"}}
                        whileHover={{scale: 1.1, transition: {duration: .2}}}
                        className={"cursor-pointer"}
                    >
                        <Profession
                            title={profession.title}
                        >
                            {profession.icon}
                        </Profession>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}