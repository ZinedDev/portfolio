// Hero
// import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
// import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
// import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
//import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon'
import AtIcon from 'remixicon-react/AtLineIcon'

export const heroIcons = [

    // <InstagramLineIcon />,
    // <FacebookCircleLineIcon />,
    // <DribbbleLineIcon />,
    // <YoutubeLineIcon />,

    {
        id: '#contact',
        icon: <AtIcon />,
        label: 'Contact',
    },
    {
        id: 'https://github.com/zineddev',
        icon: <GithubLineIcon />,
        label: 'Github',
    },
    {
        id: 'https://linkedin.com/in/denizwassmuth',
        icon: <LinkedinLineIcon />,
        label: 'Linkedin',
    },

    // {
    //     id: 'instagram',
    //     Icon: InstagramLineIcon,
    //     url: 'https://instagram.com/yourprofile',
    //     label: 'Instagram',
    // },
    // {
    //     id: 'facebook',
    //     Icon: FacebookCircleLineIcon,
    //     url: 'https://facebook.com/yourprofile',
    //     label: 'Facebook',
    // },
    // {
    //     id: 'dribbble',
    //     Icon: DribbbleLineIcon,
    //     url: 'https://dribbble.com/yourprofile',
    //     label: 'Dribbble',
    // },
    // {
    //     id: 'youtube',
    //     Icon: YoutubeLineIcon,
    //     url: 'https://youtube.com/yourprofile',
    //     label: 'Youtube',
    // },
    // {
    //     id: 'github',
    //     Icon: GithubLineIcon,
    //     url: 'https://github.com/yourprofile',
    //     label: 'Github',
    // },
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
    {
        title: 'Github Repos',
        amount: 348,
        icon: <GithubFillIcon />,
    },
    {
        title: 'Successful Projects',
        amount: 227,
        icon: <Projector2LineIcon />,
    },
    {
        title: 'Satisfied clients',
        amount: 176,
        icon: <GroupLineIcon />,
    },
    {
        title: 'Awards and Recognition',
        amount: 107,
        icon: <AwardFillIcon />,
    },
]

import WindowLineIcon from "remixicon-react/WindowLineIcon";
import GamepadLineIcon from "remixicon-react/GamepadLineIcon";
import ClipboardLineIcon from "remixicon-react/ClipboardLineIcon";
import RunLineIcon from "remixicon-react/RunLineIcon";

export const professions = [
    {
        title: 'Game Dev',
        icon: <GamepadLineIcon />,
        text: 'Gaming was a passion of mine from a young age on. In 2022 I decided to shift my attention from just playing games to learn how to make them. ' +
                'I have been learning C++ and Unreal Engine for several years now. At this stage I feel quite comfortable programming and implementing gameplay mechanics as well as creating VFXs with Niagara. ' +
                'Currently I am expanding my knowledge on profiling and performance optimization. There is a small game in the works, and I am excited to share it with you soon! '
    },
    {
        title: 'Web Dev',
        icon: <WindowLineIcon />,
        text: 'From 2025 - 2026 I participated in a 4 month intensive bootcamp at neueFische Gmbh, receiving a certificate in Full Stack Java Development. ' +
                'What started as a side quest to delve deeper into Software Development has come to be a motivating main focus. Creating this website was a lot of fun and is a testament to my dedication to grow as a developer. ' +
                'I am currently working on several other personal projects, which will soon be presented on this website. '
    },
    {
        title: 'Special Needs Education',
        icon: <ClipboardLineIcon />,
        text: 'I studied Special Needs Education at the University of Hamburg in two steps (B.A. 2008 - 2012 & M.A. 2014 - 2018). ' +
                'My studies focused on children with difficulties in learning and social development. ' +
                'From 2007 till 2023 I worked in various types of social work related professional fields: Assisting bodily and/or mentally disabled people, ' +
                'teaching, educating and coaching of pre-schoolers to 10 graders, inside and outside the school system, providing support and consultation in protectories etc. '
    },
    {
        title: 'Trainer',
        icon: <RunLineIcon />,
        text: 'In addition and parallel to my studies in Special needs education, I studied Sports at the University of Hamburg. ' +
                'Since 2007 I have continuously been practicing Capoeira and engage in various activities surrounding fitness and rehabilitation. ' +
                'I started giving Capoeira lessons as well as other movement related classes around 2010 and still do so today. ' +
                'My experience in teaching and coaching is based on working with children and adults of all ages. '
    },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
    "Well, hello there!? \n" +
    "I am Deniz... thank you for visiting! \n\n" +
    "Feel free to check out my experiences, skills and interests. \n" +
    "Hover over the icons at the bottom and learn what I am about. \n\n"+
    "You can also download a tech stack focused version of my resume by clicking the red button below. \n\n"
// End of About Me

// Experience
export const experienceData = [
    {
        year: 1,
        title: 'Foundation and Basics',
        education:
            'High School Diploma: Focus on computer science, mathematics, and art/design courses.',
        experience: [
            'Basic HTML/CSS: Learn through online tutorials and courses.',
            'Personal Projects: Create simple personal websites or blogs.',
        ],
    },
    {
        year: 2,
        title: 'Advanced Learning and Early Experience',
        education:
            'Associate’s Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.',
        experience: [
            'Freelance Work: Take on small freelance projects to build a portfolio.',
            'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
        ],
    },
    {
        year: 3,
        title: 'Specialized Education and Real-World Application',
        education:
            'Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js).',
        experience: [
            'Internships: Secure internships with tech companies or design agencies.',
            'Contribute to Open Source: Collaborate on open-source projects.',
        ],
    },
    {
        year: 4,
        title: 'Building Expertise and Expanding Skills',
        education: 'Certifications: Obtain certifications in advanced web technologies.',
        experience: [
            'Full-Time Position: Work as a junior web developer or designer.',
            'Portfolio Development: Continuously update your portfolio with professional and personal projects.',
        ],
    },
    {
        year: 5,
        title: 'Mastery and Leadership',
        education: 'Workshops and Conferences: Attend industry events to stay updated.',
        experience: [
            'Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.',
            'Freelance and Consulting: Consider starting a freelance business or consulting practice.',
        ],
    },
]


export const techStack = [
    {
        name: 'Unreal Engine',
    },
    {
        name: 'C++',
    },
    {
        name: 'Java',
    },
    {
        name: 'TypeScript',
    },
    {
        name: 'HTML5',
    },
    {
        name: 'CSS3',
    },
    {
        name: 'TailwindCSS',
    },
    {
        name: 'Rider',
    },
    // {
    //     name: 'IntelliJ',
    // },
    {
        name: 'Visual Studio',
    },
    {
        name: 'VS Code',
    },
    {
        name: 'Spring',
    },
    {
        name: 'React',
    },
    {
        name: 'Vite JS',
    },
    {
        name: 'Motion',
    },
    {
        name: 'OpenAI',
    },
    {
        name: 'Github',
    },
    {
        name: 'Copilot Github',
    },
    {
        name: 'Sonar Qube',
    },
    {
        name: 'MongoDB',
    },
    {
        name: 'Postman',
    },
    {
        name: 'NPM',
    },
    {
        name: 'Vercel',
    },
]


// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

// /* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
    {
        image: '/reviews/client-4.png',
        name: 'Mark T., Freelance Graphic Designer',
        comment:
            "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
        stars: [1, 1, 1, 1, 0.5],
    },
    {
        image: '/reviews/client-2.png',
        name: 'Sarah B., E-commerce Store Owner',
        comment:
            "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
        stars: [1, 1, 1, 1, 1],
    },
    {
        image: '/reviews/client-3.png',
        name: 'Emily R., CEO of Tech Startup',
        comment:
            "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
        stars: [1, 1, 1, 1, 1],
    },
    {
        image: '/reviews/client-1.png',
        name: 'Bob W., Lifestyle Blogger',
        comment:
            "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
        stars: [1, 1, 1, 1, 0.5],
    },
    {
        image: '/reviews/client-5.png',
        name: 'David H., Director of Non-Profit Organization',
        comment:
            "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
        stars: [1, 1, 1, 1, 1],
    },
]

// Projects
export const projectsData = [
    {
        name: 'zineddev.com',
        desc: 'A personal portfolio website showcasing my work and skills.',
        url: '/portfolio-2.png',
        width: '400',
        height: '400',
        tech: ['IntelliJ', 'TypeScript', 'HTML', 'CSS', 'TailwindCSS', 'Vite', 'React', 'FramerMotion'],
    },
    {
        name: 'RodaAppi - work in progress',
        desc: 'A web application for browsing and posting capoeira events.',
        url: '/work-in-progress-1.png',
        width: '400',
        height: '400',
        tech: ['IntelliJ', 'Java', 'TypeScript', 'HTML', 'CSS', 'TailwindCSS', 'Vite', 'React', 'FramerMotion', 'RestAPI', 'Spring', 'MongoDB'],
    },
    // {
    //     name: 'RodaAppi - work in progress',
    //     desc: 'A web application for browsing and posting capoeira events.',
    //     url: '/work-in-progress-1.png',
    //     width: '400',
    //     height: '400',
    //     tech: ['IntelliJ', 'Java', 'TypeScript', 'HTML', 'CSS', 'TailwindCSS', 'Vite', 'React', 'FramerMotion', 'RestAPI', 'Spring', 'MongoDB'],
    // },


]

export const projectsButton = [
    'All',
    'UE',
    'C++',
    'Java',
    'TS',
    'HTML',
    'CSS',
    'Tailwind',
    'React',
    'Vite',
    'Motion',
    'Spring',
    'MongoDB',
]

// Pricing Plans
export const pricingPlans = [
    {
        title: 'Basic',
        pricing: '$500 - $1,000',
        features: [
            'Up to 5 pages',
            'Responsive design ',
            'Basic SEO ',
            'Contact form',
            'Social media links',
            '1 month support',
        ],
        recommended: 'Small businesses, personal websites, bloggers',
    },
    {
        title: 'Premium',
        pricing: '$5,000 - $10,000',
        features: [
            'Unlimited pages',
            'Responsive design',
            'Comprehensive SEO',
            'Contact form ',
            'Social media links',
            'Advanced security',
            'E-commerce (unlimited products)',
            'Blog setup',
            'Google Analytics with custom reports',
            '6 months support',
        ],
        recommended: 'Medium-sized businesses, online stores, service providers',
    },
    {
        title: 'Standard',
        pricing: '$1,500 - $3,000',
        features: [
            'Up to 10 pages',
            'Responsive design',
            'Advanced SEO',
            'CContact form',
            'Social media links',
            'E-commerce (20 products)',
            'Blog setup',
            'Google Analytics',
            '3 months support',
        ],
        recommended: 'Large businesses, complex e-commerce sites, custom web applications',
    },
]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'
export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
    {
        question: 'Are you open to work?',
        answer:
            'Yes. My focus right now is building web applications and/or games. That said... I am always open to new collaborations and opportunities if a task connects to my fields of interest.',
    },
    {
        question: 'Do you offer freelance work?',
        answer:
        'Yes, I am available for freelance work. Please feel free to reach out, whether your project involves software development or anything else that might fit my skillset.',
    },
    {
        question: 'What is your experience level concerning web development?',
        answer:
            'I am still at the beginning stage, but I have been working on various projects since December 2025, expanding my knowledge, skills and stack on a daily basis.',
    },
    {
        question: 'What is your experience level concerning game development? ',
        answer:
            'I still have no professional experience making games. But after working on various personal game projects since 2022, I would consider myself an intermediate practitioner. Knowledgeable but still learning and improving.',
    },
    {
        question: 'Do you use AI in your development process? ',
        answer:
        'Yes, I have been using AI for about a year now. What I use it most for is optimization, debugging and last but not least research and explanation. I have neither a long history of coding experience nor traditional or university grade training in software development. ' +
            'Using AI has helped me to break down complex themes and understand them more easily. It has facilitated my learning process and made my workflows more efficient.',
    },

]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'

//import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
// import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
// import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
    {
        id: 'home',
        name: 'Home',
        icon: <Home5LineIcon />,
    },
    {
        id: 'about',
        name: 'About',
        icon: <UserLineIcon />,
    },
    // {
    //     id: 'experience',
    //     name: 'MyRoad',
    //     icon: <HistoryLineIcon />,
    // },
    {
        id: 'skills',
        name: 'Skills',
        icon: <BriefcaseLineIcon />,
    },
    // {
    //     id: 'reviews',
    //     name: 'Reviews',
    //     icon: <UserStarLineIcon />,
    // },
    {
        id: 'projects',
        name: 'Projects',
        icon: <ProjectorLineIcon />,
    },
    // {
    //     id: 'pricing',
    //     name: 'Pricing',
    //     icon: <PriceTag3LineIcon />,
    // },
    {
        id: 'contact',
        name: 'Contact',
        icon: <ContactsBook2LineIcon />,
    },
    {
        id: 'questions',
        name: 'Questions',
        icon: <QuestionAnswerLineIcon />,
    },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon/>

