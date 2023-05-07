import portfolio from '../Assets/port.PNG'
import cocktail from '../Assets/cocktail.PNG'
import utchat from '../Assets/utchat.PNG'
import Autopolira from '../Assets/Autopolira.png'


export const LinksData = [
    {
        key: "a1",
        to: "home",
        offset: 0,
        title: "Home"
    },
    {
        key: "a2",
        to: "about",
        offset: -64,
        title: "About"
    },
    {
        key: "a3",
        to: "projects",
        offset: -64,
        title: "Projects"
    },
    {
        key: "a4",
        to: "contact",
        offset: -64,
        title: "Contact"
    },
];

export const ProjectsData = [{
    name: "My first portfolio",
    flexDirection: true,
    date: "2022.08",
    src: portfolio,
    alt: "portfolio",
    p_tag: "My first personal portfolio website created with React.js and CSSModules.",
    href: "https://unisltu.github.io/portfolio/",
    libraries: "React | CSSModules | React-Icons | GitHub Calender | NPM",
},
{
    name: "Random cocktail generator",
    flexDirection: false,
    date: "2022.08",
    src: cocktail,
    alt: "cocktail",
    p_tag: "Random cocktail generator made using TheCocktailDB API. ",
    href: "https://unisltu.github.io/cocktails/",
    libraries: "React | CSSModules | Axios | API",
},
{
    name: "Ut. chat",
    flexDirection: true,
    date: "2022.09",
    src: utchat,
    alt: "utchat",
    p_tag: "A simple chat website where you can chat in real time. It uses Firebase API to manage massages and accounts. The website has features like: Google authentication, emoji picker, sending and editing messages.",
    href: "https://unisltu.github.io/utchat/",
    libraries: "React | Typescript | CSSModules | Firebase",
},
{
    name: "New look for Autopolira",
    flexDirection: false,
    date: "2023.04",
    src: Autopolira,
    alt: "Autopolira",
    p_tag: "A car detailing website using Next.js and Strapi. Next.js provides fast performance and efficient development, while Strapi offers a headless CMS for easy content management. With these technologies, Autopolira can showcase their services, manage content, and provide a seamless user experience. Work still in progress.",
    href: "https://autopolira-repo.vercel.app/",
    libraries: "Next.js | Typescript | Tailwind | Zustand | Strapi",
},
]