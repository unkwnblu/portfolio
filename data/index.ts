import React, { ReactElement } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

interface SocialMediaItem {
  id: number;
  img: string | ReactElement;
  href: string;
}

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/mk-2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Password Managing Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/mk-4.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "My-Pay",
    des: " A landing page for an application launch that focuses on seamless payment solutions.",
    img: "/mypay.svg",
    iconLists: ["/fig.svg", "/tail.svg", "/ts.svg", "/re.svg", "/next.svg"],
    link: "#",
  },
  {
    id: 2,
    title: "Image Searcher",
    des: "Created an image searcher with unsplash API to call images directly from unsplash",
    img: "/pr-1.svg",
    iconLists: ["/tail.svg", "/ts.svg", "/re.svg", "/vit.svg"],
    link: "https://unkwnblu.github.io/image-searcher/",
  },
  {
    id: 3,
    title: "School Chatbot powered by Gemini AI",
    des: "An AI-powered chatbot designed to assist students with their academic inquiries and provide personalized support.",
    img: "/pr-2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vit.svg"],
    link: "https://ai-chatbot-taupe-six-32.vercel.app/",
  },
  {
    id: 4,
    title: "A1 Media",
    des: "A modern media company website that showcases the latest in entertainment, news, and culture.",
    img: "/pr-4.svg",
    iconLists: ["/html.svg", "/css.svg", "/php.svg", "/sql.svg", "/fig.svg"],
    link: "https://thea1media.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Dwayne is a genuine UX/UI expert. They took our initial concept and created an incredibly intuitive and visually stunning interface. Our user testing showed a significant drop in time-to-completion for key tasks, proving the efficiency of their design. They don't just make things look good; they make them work better for the user.",
    name: "Bright Sule",
    title: "CEO of Spaceworm Clothing",
  },
  {
    quote:
      "Working with Dwayne on the front-end was seamless. They quickly grasped our brand's aesthetic and were excellent at translating complex functional requirements into clean, modern designs. Their ability to listen to feedback and quickly provide iterative prototypes ensured we launched a product that users immediately loved.",
    name: "Noah Olatoye",
    title: "Director at InstinctHub",
  },
  {
    quote:
      "We hired Dwayne for a critical project, and their full-stack proficiency was immediately apparent. On the back-end, they built a robust, scalable API that handled heavy traffic without a hitch. Their commitment to clean code and on-time delivery was exceptional. A true full-stack powerhouse.",
    name: "Dr. Adefila",
    title: "Founder & CEO of QSTC Security",
  },
  {
    quote:
      "Dwayne is the rare developer who can handle a project from the initial user sketch to the final database deployment. Their ability to manage the entire application stack—from the beautiful front-end design to the secure server logic—saved us significant time and resources. They take complete ownership and deliver quality at every level.",
    name: "Tobi ",
    title: "Manage at A1 Media",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/sp.svg",
    nameImg: "/sp.svg",
  },
  {
    id: 2,
    name: "Postpaid",
    img: "/post.svg",
    nameImg: "/post-text.svg",
  },
  {
    id: 3,
    name: "A1 Media",
    img: "/a1.svg",
    nameImg: "/a1-text.svg",
  },
  {
    id: 4,
    name: "Nokslock",
    img: "/nk.svg",
    nameImg: "/nk-text.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Worked at Instinct Hub assisting in the development of web based projects using React and Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend & Ui Designer - Postpaid",
    desc: "Developed and maintained the user interface of the Postpaid web application, ensuring a seamless user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Ui/Ux Designer - Freelance",
    desc: "Created user-centered designs by understanding business requirements, and user feedback.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Developer - Nokslock",
    desc: "Spearheaded a team of developers to build scalable web applications, ensuring code quality and timely delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: React.createElement(FaGithub),
    href: "https://github.com/unkwnblu",
  },
  {
    id: 2,
    img: React.createElement(FaInstagram),
    href: "https://instagram.com/blu.devs",
  },
  {
    id: 3,
    img: React.createElement(FaLinkedinIn),
    href: "https://www.linkedin.com/in/dwayne-agbale/",
  },
];
