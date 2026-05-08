import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Load() {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    },[])

    return (
        <motion.div
            initial={{top:0, opacity: 1}}
            animate={{top: load ? "-100%" : 0, opacity: load ? 0 : 1}}
            transition={{duration: .5}}
            className={"w-full h-full fixed left-0 top-0 flex items-center justify-center bg-linear-to-t from-amber-100 to-amber-200 z-50"}>
        </motion.div>
    )
}
