import Heading from "./sub/Heading.tsx";
import {checkIcon, pricingPlans} from "../assets/index.tsx";
import {motion} from "framer-motion";

export default function PricingPlans() {
    return (
        <div id={"pricing"} className={"py-35"}>
            <Heading text={"Pricing Plans"}/>
            <div className={"h-full flex  max-lg:flex-col items-center justify-between gap-8"}>
                {pricingPlans.map((plan, i) => (
                    <motion.div
                        initial={{y: 200, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.4, delay: i * 0.2, scale: {duration: 0.2}}}
                        key={i}
                        className={`max-sm:w-67.5 flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 dark:text-gray-200 
                        ${i === 1 ? "w-92.5 max-xl:w-80 bg-white dark:bg-zinc-500 dark:text-white" : "w-87.5 max-xl:w-75 bg-zinc-200 dark:bg-zinc-600"} transition-colors duration-500`}>
                        <h1 className={"text-3xl max-lg:text-lg font-light tracking-wide text-center"}>{plan.title}</h1>
                        <span className={"text-2xl max-lg:text-xl text-center"}>{plan.pricing}</span>
                        <ul className={"flex flex-col gap-y-2"}>
                            {plan.features.map((feature, j) => (
                                <div key={j} className={"flex items-center gap-x-3"}>
                                    <span className={`text-2xl ${i === 1 ? "text-red-300" : "text-yellow-500"}`}>
                                        {checkIcon}
                                    </span>
                                    <li className={"text-[15-px] font-light tracking-wide"}>{feature}</li>
                                </div>
                            ))}
                        </ul>
                        <p className={"text-sm font-light text-center"}>
                            <span className={"font-semibold"}> Ideal for: </span>
                            {plan.recommended}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}