import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  ejs,
  bootstrap,
  paloalto,
  ezeagro,
  tshirt,
  todolist,
  threejs,
  bash,
  sql,
  vscode,
  postman,
  express,
  aaryaman,
  ISC2,
  CCT,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "feedbacks",
    title: "Testimonial",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cyber Security",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "ejs",
  //   icon: ejs,
  // },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "bash",
    icon: bash,
  },
  {
    name: "sql",
    icon: sql,
  },
  // {
  //   name: "vscode",
  //   icon: vscode,
  // },
  {
    name: "postman",
    icon: postman,
  },
  // {
  //   name: "express",
  //   icon: express,
  // },
];

const experiences = [
  {
    title: "Cyber Security Intern",
    company_name: "Palo Alto Networks (Virtual)",
    icon: paloalto,
    iconBg: "#383E56",
    date: "September 2023 - November 2023",
    points: [
      "Led execution of conducted security checks with buck-security increasing security.",
      "Identified and resolved 15 vulnerabilities, enhancing overall network resilience and data protection.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `I want to extend my sincere gratitude for your exceptional skills and dedication throughout our projects. Your mastery of full stack and cyber security at such a young age is truly remarkable. Your critical thinking paired with your expertise is invaluable. Thank you for your invaluable contributions`,
    name: "Aaryaman Prakash",
    designation: "Analyst",
    company: "KPMG",
    image: aaryaman,
  },
];

const projects = [
  {
    name: "EZE-Agro",
    description:
      "EZE-Agro is a React project that displays real-time information about soil conditions in a farm. It utilizes cloud technologies and IoT to provide up-to-date data from Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ezeagro,
    source_code_link: "https://github.com/PranavChaturvedi26/EZE-Agro",
    live_project_link: "https://eze-agro.vercel.app/",
  },
  {
    name: "3D-Tshirt",
    description:
      "Create your own style with our new 3D Swag Customization App. Pick colors, add logos, and try AI designs to make your virtual swag unique. Built using React.js, Three.js, and OpenAI to show the usage of a 3D world with AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "https://github.com/PranavChaturvedi26/3D-TShirt",
    live_project_link: "https://3d-shirt-rho.vercel.app/",
  },
  {
    name: "Todolist",
    description: "Todo List",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "uuid",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/PranavChaturvedi26/TodoList",
    live_project_link: "https://todo-list-fawn-rho.vercel.app/",
  },
];

const certifications = [
  {
    title: "Object Oriented Programming in Java",
    type: "Practical Certification",
    icon: java,
    iconBg: "#050C18",
    date: "Jun 2023",
    points: ["Java, OOPS, Compilers, JVM, JDK, IDEs."],
    credential: "https://coursera.org/verify/9WU5TGVDLTPE",
  },
  {
    title: "Official ISC2 CC Online Self-Paced Training",
    type: "Certification",
    icon: ISC2,
    iconBg: "#fff",
    date: "Aug 2023",
    points: [
      "Networking, Cybersecurity, Protocols, Operating Systems, Vulnerabilities, Cyber Attacks.",
    ],
    credential:
      "https://drive.google.com/file/d/11XpIuVcEHqApr0wLNCwroo4t0eqJaYPi/view?usp=drive_link",
  },
  {
    title: "Developing Cloud Apps with Node.js and React",
    type: "Practical Certification",
    icon: nodejs,
    iconBg: "#050C18",
    date: "Nov 2023",
    points: ["Rest API, Node JS, Express Js, React, Databases."],
    credential: "https://coursera.org/verify/P2QXHGEWAY6T",
  },
  {
    title: "Certified Cybersecurity Technician",
    type: "Practical Certification",
    icon: CCT,
    iconBg: "#ff5722",
    date: "April 2024",
    points: [
      "Cybersecurity, Network Security, Vulnerabilities, Cyber Attacks and Defence, Rthical Hacking.",
    ],
    credential:
      "https://drive.google.com/file/d/14dkv0jb5zeo_9vIA5KrZKRSpw4EsOiB4/view?usp=sharing",
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  certifications,
  projects,
};
