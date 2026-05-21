import { lazy } from "react";

const Hero = lazy(() => import("../components/Hero.tsx"));
const About = lazy(() => import("../components/About.tsx"));
const Contact = lazy(() => import("../components/Contact.tsx"));
const Skills = lazy(() => import("../components/Skills.tsx"));
const Questions = lazy(() => import("../components/Questions.tsx"));
const Projects = lazy(() => import("../components/Projects.tsx"));

export const sections = [
    {
        id: "home",
        component: <Hero/>
    },
    {
        id: "about",
        component: <About/>
    },
    {
        id: "skills",
        component: <Skills/>
    },
    {
        id: "projects",
        component: <Projects />
    },
    {
        id: "contact",
        component: <Contact/>
    },
    {
        id: "questions",
        component: <Questions/>
    }
];