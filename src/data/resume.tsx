import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, ComputerIcon } from "lucide-react";

export const DATA = {
  name: "Sourabh Soni",
  initials: "SS",
  url: "https://dillion.io", //Todo: change url
  location: "Bangalore, India",
  locationLink: "https://maps.app.goo.gl/7A1SVmzbTimWEBTaA",
  description:
    "Full Stack Developer, with expiries in React and node. pushing for FullStack with Node,Go and Docker",
  summary:
    "I'm a **Full Stack Software Engineer** with **5+ years of experience** building scalable, high-performance apps. At [Ideas To Impacts](https://www.linkedin.com/company/ideas-to-impacts/mycompany/), I led [GiftBee's](https://www.giftbee.com/) development, transforming Austria’s gifting market with seamless full-stack integration. Previously at [LeagueX](https://www.leaguex.com/), I unified web + native apps and optimized performance to **60+ FPS**. Skilled in **[React](https://react.dev/)**, **[Next.js](https://nextjs.org/)**, **[Node.js](https://nodejs.org/)**, **Nest.js**, **PostgreSQL**, **MongoDB**, and **AWS**, I thrive on solving complex problems with clean, efficient solutions. With a [B-Tech in Computer Science](/#education), I enjoy the strategy of **chess** and the creativity of **Minecraft builds** outside of work.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "C++",
    "Redux",
    "Zustand",
    "Solito",
    "Expo",
    "Sass",
    "API",
    "Rest",
    "React Native",
    "React Native Web",
    "Node.js",
    "Yarn",
    "Npm",
    "Bun",
    "Webpack",
    "Babel",
    "Django",
    "Go",
    "Graphql",
    "Version Control (Git)",
    "JSON",
    "Database",
    "Graphic Design",
    "Data Structures",
    "Algorithms",
    "CMD",
    "Linux",
    "Object Oriented Programming",
    "Computer Science",
    "Programming",
    "Problem Solving",
    "Basics of Software Engineer",
    "Bootstrap",
    "AI workflows",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: ComputerIcon, label: "work Experience" },
    { href: "/#education", icon: NotebookIcon, label: "Education" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "ssourabh025@gmail.com", //Todo: add email and phoneNumber in discretion
    tel: "+919516550023",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SSOURABH58",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sourabh58",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ssourabh025@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ideas To Impacts",
      href: "https://www.ideastoimpacts.com/",
      badges: [],
      location: "Remote",
      title: "Front End Developer",
      logoUrl: "/ideas_to_impacts_logo.jpg",
      start: "April 2024",
      end: "Present",
      description: `Led the development of GiftBee, a React.js application impacting the
Australian gifting market. Collaborated with designers, marketers, and
product owners to translate the vision into reality. Built 12 core user flows
using React, Bootstrap, and Redux, optimizing performance and user
experience. Refactored a legacy 50k+ line codebase, improving error
handling, reducing re-renders by 60%, and eliminating unnecessary API
calls, resulting in a 20% performance gain. Proactively communicated
inefficiencies to the team and CEO, enhancing overall project success.`,
    },
    {
      company: "LeagueX",
      badges: [],
      href: "https://www.leaguex.com/",
      location: "Bangalore",
      title: "Front End Developer (React Native)",
      logoUrl: "/leaguex_gaming_logo.jpg",
      start: "June 2021",
      end: "April 2024",
      description: `Experienced in 2 React Native and Solito+Next.js projects, optimizing
performance with 60fps animations and modernising codebases for cost
efficiency. Achieved a 30% reduction in API calls using Redux, ensuring
robust product security. Developed a unified web+native app with
Solito+Next.js, addressing bleeding-edge compatibility and performance
challenges. Proficient in TypeScript, established a mono-repo with
tree-shaking for efficient code management. Skilled in layout design,
fonts, animations, navigation, and authentication. Demonstrated
expertise in project planning, scoping, prioritization, and managing
customer requirements.`,
    },
    {
      company: "Mowito",
      href: "https://mowito.in",
      badges: [],
      location: "Remote",
      title: "Front End Developer",
      logoUrl: "/mowito_logo.jpg",
      start: "February 2021",
      end: "May 2021",
      description: `Designed and developed a dynamic real-time data dashboard,
showcasing strong frontend and UI/UX skills. Implemented web sockets
for seamless robot communication and constant backend data streaming.
Deployed 5 interactive tables with 80+ server-side attributes,
collaborating on 10+ networking/messaging protocols for a scalable
architecture. Played a key role in research and testing, boosting existing
systems' performance by 33%. I also developed efficient Rest APIs using
Node.js to meet project requirements`,
    },
  ],
  education: [
    {
      school: "SSIPMT",
      href: "https://www.ssipmt.com/",
      degree: "B-Tech Computer Science and Engineering",
      logoUrl: "/ssipmt_logo.jpg",
      start: "2019",
      end: "2023",
    },
    {
      school: "kendriya vidyalaya",
      href: "https://kvsangathan.nic.in/",
      degree: "PCME + CS",
      logoUrl: "/KV.svg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "EightQueen's",
      href: "http://hungry-edison-1bfbab.netlify.app/",
      dates: "8 Queens Problem",
      active: true,
      description: `Developed a ReactJS web app to visualize the Eight Queens algorithm,
enhancing user understanding with over 10 control options. Implemented
Sass for efficient CSS management, resulting in a visually appealing UI
and satisfying animations.`,
      technologies: ["React.js"],
      links: [
        {
          type: "Website",
          href: "http://hungry-edison-1bfbab.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SSOURABH58/8Queens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/8qs.mp4",
    },
    {
      title: "MyToDo's",
      href: "https://amazing-goldstine-9a484b.netlify.app/",
      dates: "To-Do list",
      active: true,
      description: `MyTodo is a user-friendly To-Do list ReactJS web app designed for
efficient task management. Leveraging React.js, I integrated REST APIs, a
proxy server to control API usage within a limit of 300 calls per day, and
third-party climate APIs for enhanced functionality. Additionally, I
implemented a local store for storing user tasks and utilized Redux for
state management, ensuring a seamless and responsive user experience.`,
      technologies: ["React.js", "Node.js", "REST APIs"],
      links: [
        {
          type: "Website",
          href: "https://amazing-goldstine-9a484b.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SSOURABH58/ReactToDolist",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/todo.mp4",
    },
    {
      title: "Binary Tree Visualizer",
      href: "https://agitated-booth-a97bf4.netlify.app/",
      dates: "Visualize a Binary Tree",
      active: true,
      description: `Binary Tree Visualizer, I continued to utilize React.js to develop a visually
engaging application dedicated to generating and visualizing Binary
Search Trees. this project showcased impressive animations and
integrated various Binary Tree sorting algorithms. The application
featured an intuitive user interface allowing users to input tree structures,
explore traversal algorithms interactively, and gain a deeper
understanding of Binary Search Trees.`,
      technologies: ["React.js"],
      links: [
        {
          type: "Website",
          href: "https://agitated-booth-a97bf4.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SSOURABH58/binary-tree-visualizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/btree.mp4",
    },
  ],
} as const;
