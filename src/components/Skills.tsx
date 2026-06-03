import Heading from "./sub/Heading.tsx";
import {techStack} from "../assets";
import {motion} from "framer-motion";
import StackIcon from "tech-stack-icons";

export default function Skills() {

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: (i + 1) * 0.04,
            },
        }),
        hidden: {
            opacity: 0,
        },
    }

    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <Heading text={"Skills"}/>
            <div className={"w-full flex flex-wrap justify-between gap-5 px-5 max-sm:px-2"}>
                {techStack.map((data, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{scale: 1.1}}
                        animate={{
                            y: [0, (i % 2 === 0 ? 2 : -2), 0],
                            x: [0, (i % 3 === 0 ? 2 : -2), 0],
                        }}
                        transition={{
                            y: {
                                duration: 2 + (i % 3),
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            x: {
                                duration: 3 + (i % 2),
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        viewport={{ once: false}}
                        className={"flex items-center justify-center gap-x-2 p-2 max-sm:p-1 border rounded-xl border-yellow-600 bg-amber-100 dark:bg-zinc-600 transition-colors duration-500"}>
                        {/*<img*/}
                        {/*    key={i}*/}
                        {/*    src={data.icon}*/}
                        {/*    alt= {data.name + " Icon"}*/}
                        {/*    width={100}*/}
                        {/*    height={100}*/}
                        {/*    className={"h-auto w-10"}*/}
                        {/*/>*/}
                        <StackIcon
                            name={data.name.toLowerCase().replace(' ', '')}
                            className="h-auto w-10 max-xs:w-8"
                        />
                        <p className={"text-sm text-gray-600 dark:text-white transition-colors duration-500 max-sm:hidden"}>
                            {data.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}