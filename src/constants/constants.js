import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5, AiOutlineCloudServer } from "react-icons/ai";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const projects = [
    {
        title: "MERN BetterBank",
        description:
            "This Full Stack MERN Bank was created in React Redux using Node and Express to interact with a MongoDB Atlas database modeled using Mongoose. This app has complete CRUD functionality and uses JSON Web Tokens for authentication.",
        image: "/images/bank.png",
        tags: ["MongoDB", "Express", "React", "Node", "JWT"],
        source: "https://github.com/BNewman917/mern-bad-bank",
        visit: "http://brent-newmanfullstackbankapp.herokuapp.com/",
        id: 0,
    },
    {
        title: "Sanity E-Commerce",
        description:
            "Fully mobile-responsive ecommerce website build using React in Next.js. Stripe integration to process payments, and Sanity to manage products and content.",
        image: "/images/ecommerce.png",
        tags: ["Next.js", "React", "Stripe", "Sanity"],
        source: "https://github.com/BNewman917/sanity-ecommerce",
        visit: "https://sanity-ecommerce-beta-seven.vercel.app/",
        id: 1,
    },
    {
        title: "Dictionary",
        description:
            "A basic dictionary built with JavaScript, HTML, and CSS. It allows the user to search for a word and get its definition, parts of speech, and hear it pronounced.",
        image: "/images/books.png",
        tags: ["Javascript", "HTML", "CSS"],
        source: "https://github.com/BNewman917/dictionary",
        visit: "https://bnewman917.github.io/dictionary/",
        id: 2,
    },
];

export const timeline = [
    {
        year: "2020",
        title: "First item",
        active: true,
    },
    {
        year: "2021",
        title: "Second item",
        active: true,
    },
    {
        year: "2022",
        title: "Third item",
        active: false,
    },
];

export const technologies = [
    {
        icon: <SiMongodb size={30} />,
        text: `MongoDB`,
    },
    {
        icon: <SiExpress size={30} />,
        text: `ExpressJS`,
    },
    {
        icon: <FaReact size={30} />,
        text: `ReactJS`,
    },
    {
        icon: <FaNodeJs size={30} />,
        text: `NodeJS`,
    },
    {
        icon: <TbBrandNextjs size={30} />,
        text: `NextJS`,
    },
    {
        icon: <AiOutlineHtml5 size={30} />,
        text: `HTML`,
    },
    {
        icon: <IoLogoCss3 size={30} />,
        text: `CSS`,
    },
    {
        icon: <IoLogoJavascript size={30} />,
        text: `JavaScript`,
    },
    {
        icon: <FaGitAlt size={30} />,
        text: `Git`,
    },
    {
        icon: <AiOutlineCloudServer size={30} />,
        text: `Rest API`,
    },
];
