import Hero from "../components/Hero.tsx";
import About from "../components/About.tsx";
import Contact from "../components/Contact.tsx";
import Skills from "../components/Skills.tsx";
import Questions from "../components/Questions.tsx";
import Projects from "../components/Projects.tsx";

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