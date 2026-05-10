import {motion} from "framer-motion";
import {useState} from "react";

interface ProjectProps {
  data: {
    url: string;
    width: string | number;
    height: string | number;
    name: string;
    desc: string;
  };
  index: number;
}

export default function Project({data, index}: ProjectProps) {

  const [show, setShow] = useState(false);

  return (
    <motion.div
        initial={{opacity: 0, y: index % 2 ? 100 : -100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: false}}
        transition={{duration: 1, type: "spring", stiffness: 100, delay: index * 0.1}}
        onClick={() => setShow((show) => !show)}
        className={"relative w-87.5 max-sm:w-full h-max  cursor-pointer"}>
      <img
          src={data.url}
          alt="Project Image"
          width={data.width}
          height={data.height}
          className={"rounded-lg opacity-80 border border-yellow-600"}
      />
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: show ? 1 : 0}}
            viewport={{once: false}}
            className={"absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-amber-100 dark:bg-zinc-600 p-6 rounded-lg transition-colors duration-500"}>
          <h2 className={"text-xl font-bold tracking-wide text-gray-600 dark:text-white transition-colors duration-500"}>
            {data.name}
          </h2>
          <p className={"text-justify text-gray-600 dark:text-white first-letter:pl-2 transition-colors duration-500"}>
            {data.desc}
          </p>
        </motion.div>
    </motion.div>
  )
}