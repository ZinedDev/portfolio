import {questionArrow} from "../../assets";
import {useState} from "react";
import {motion} from "framer-motion";

export default function Question({data, index}: { data: { question: string, answer: string }, index: number }) {

    const [show, setShow] = useState(false);

    const variants = {
        visible: (i:number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: (i + 1) * 0.08
            }
        }),
        hidden: {
            opacity: 0,
            x: -50,
        }
    }

    return (
        <motion.li
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{margin: "10px", once: false}}
            variants={variants}
            //key={`q&a-${index}`}
            className={"p-1 rounded-lg"}
        >
            <h1
                onClick={() => setShow(!show)}
                className={`flex items-center text-xl font-light text-gray-800 dark:text-gray-100 transition-all duration-500 hover:text-yellow-600 hover:scale-110 origin-left tracking tracking-wide cursor-pointer
                ${show && "border-b text-yellow-600"
                }`}
            >
                <motion.span
                    animate={{rotate: show ? 180 : 0}}
                    transition={{duration: 0.2}}
                >
                    {questionArrow}
                </motion.span>
                <span>{data.question}</span>
            </h1>
            <motion.p
                initial={{scaleY: 0, height: 0, opacity: 0}}
                animate={{scaleY: show ? 1 : 0, height: show ? 'auto' : 0, opacity: show ? 1 : 0}}
                transition={{duration: 0.2, type: 'spring', stiffness: show ? 250 : 50, opacity: {delay: show ? 0.2 : 0}}}
                className={"box-border origin-top px-2 text-lg font-light tracking-wide text-gray-900 dark:text-gray-100 transition-colors duration-500 first-letter:pl-3"}
            >
                {data.answer}
            </motion.p>
        </motion.li>
    )
}