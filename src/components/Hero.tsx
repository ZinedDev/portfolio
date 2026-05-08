import HeroImage from "../../public/portfolio-3.png";
import {heroIcons} from "../assets";
import {useMotionValue, useTransform, motion, useSpring} from "framer-motion";
import {useState} from "react";


export default function Hero() {

    const [windowOffset, setWindowOffset] = useState({
        innerWidth: typeof window !== "undefined" ? window.innerWidth : 0,
        innerHeight: typeof window !== "undefined" ? window.innerHeight : 0
    });
    const [mouseMove, setMouseMove] = useState(false); // did the mouse move?
    const [buttonHover, setButtonHover] = useState(false);

    // Initialize x and y at the center of the screen
    const x = useMotionValue(windowOffset.innerWidth / 2);
    const y = useMotionValue(windowOffset.innerHeight / 2);

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        x.set(clientX)
        y.set(clientY)

        //console.log(x.get(), y.get())
    }

    const handleMouseEnter = () => {
        setWindowOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight})
        setMouseMove(true)
    }

    const handleMouseLeave = () => {
        x.set(windowOffset.innerWidth / 2);
        y.set(windowOffset.innerHeight / 2);
        setMouseMove(false)
    }

    const {innerWidth, innerHeight} = windowOffset;

    // make the value change of x and y behave like a spring (stiffness = quickness, damping = friction applied to the motion)
    const xSpring = useSpring(x, {stiffness: 100, damping: 10})
    const ySpring = useSpring(y, {stiffness: 100, damping: 10})

    // when mouse moves on x, rotate the image on y, when mouse moves on y, rotate the image on x
    const rotateY = useTransform(xSpring, [0, innerWidth], [25, -25])
    const rotateX = useTransform(ySpring, [0, innerHeight], [-25, 25])

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: (i + 1) * 0.2,
                type: "spring",
                stiffness: 100,
            },
        }),
        hidden: {
            opacity: 0,
            x:(window.innerWidth < 640 ? -50 : -100),
        },
    }

    return (
        <div
            className={"min-h-screen flex flex-col items-center justify-center"}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{hidden: {opacity: 0, y: -100}, visible: {opacity: 1, y: 0}}}
                    transition={{duration: 0.4, delay: 0.2, type: "spring", stiffness: 100}}
                    viewport={{once: false}}
                    className={"flex flex-col items-center justify-center gap-y-3 font-light capitalize"}>
                    <motion.div
                        className="flex items-center justify-center"
                        style={{
                            //perspective: "1200px",
                            rotateX: mouseMove ? rotateX : 0,
                            rotateY: mouseMove ? rotateY : 0,
                            transition: mouseMove ? "0.1s" : "1s",
                            //transformStyle: "preserve-3d" // 3. Enhances 3D rendering
                        }}
                    >
                        <img
                            src={HeroImage}
                            alt="a capoeira roda"
                            width={400}
                            height={400}
                            className={"relative h-auto w-150 max-sm:w-80 border-yellow-600"}
                        />
                        <motion.span
                            className={"absolute text-3xl font-semibold text-red-500"}
                            initial={{scale: 0}}
                            animate={{
                                opacity: buttonHover ? 0 : 1,
                                scale: buttonHover ? 6 : 0,
                                y: buttonHover ? -40 : 0
                            }}
                            transition={{opacity: {delay: 0.4}}}
                        >
                            Hi
                        </motion.span>
                    </motion.div>
                    {/*<h1 className={"text-center text-3xl font-bold tracking-wider text-gray-500 dark:text-white transition-colors"}>My name is Chiko*/}
                    {/*    &</h1>*/}
                    {/*<p className={"text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors"}>I like Capoeira 👌</p>*/}
                </motion.div>
                <div
                    className={'mt-8 flex items-center justify-center gap-x-10 text-3xl text-yellow-600'}>
                    {heroIcons.map((icon, i) => (
                        <motion.a
                            href={icon.id}
                            aria-label={icon.label}
                            key={'#' + i + '-' + icon.label}
                            target={icon.id.startsWith("http") || icon.id.startsWith("www") ? "_blank" : "_self"}
                            rel={icon.id.startsWith("http") || icon.id.startsWith("www") ? "noreferrer" : ""}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            variants={variants}
                            whileHover={{scale: 1.25}}
                            viewport = {{once: false}}
                            className={"rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"}
                        >
                            {icon.icon}
                        </motion.a>
                    ))}
                </div>
                <motion.a
                    href="#contact"
                    initial = {{opacity: 0, x: 200}}
                    whileInView = {{opacity: 1, x: 0}}
                    transition={{duration: .3, delay: 0.2, type: "spring", stiffness: 100}}
                    viewport = {{once: false}}
                    className={
                        "mx-auto mt-7 block w-max rounded-lg bg-red-600 hover:bg-red-500 transition-colors duration-200 px-3 py-1 font-light capitalize tracking-wider text-white "
                    }
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                >
                    Talk to me
                </motion.a>
            </div>
        </div>
    )
}