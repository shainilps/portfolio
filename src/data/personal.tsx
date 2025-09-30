import { ExperienceItem, Project, TechStackItem, TILCategory } from "../types";

export function Link({ text, link }: { text: string; link: string }) {
  return (
    <a className="underline text-blue-900" target="_blank" href={link}>
      {text}
    </a>
  );
}

export const tilCategories: TILCategory[] = [
  {
    date: "September 2025",
    learned: [
      <>
        changed my github username to my name <b>shainilps</b> from{" "}
        <b>codeshaine</b>
      </>,
      <>my internship is over!!, wil join company as a fulltime tomorrow.</>,
      <>contributed to my company projects from last two months</>,
      <>made p2ms script for bsv from scratch. felt good.</>,
    ],
  },
  {
    date: "May 2025",
    learned: [
      <>
        Joined <Link text="Timechain Labs" link="https://timechainlabs.io" /> as
        Backend Intern
      </>,
      <>
        Started to working on{" "}
        <Link text="drakai" link="https://drakai.netlify.app" />
      </>,
      <>
        Learnt about{" "}
        <Link text="BSV Blockchain" link="https://docs.bsvblockchain.org/" /> by
        company
      </>,
      <>Started Learning about Solana and Etherium</>,
    ],
  },
  {
    date: "April 2025",
    learned: [
      <>
        Built <Link text="yam" link="https://github.com/shainilps/yam" />
      </>,
      <>
        Built a{" "}
        <Link
          text="Video Transcoding"
          link="https://github.com/shainilps/transcode"
        />{" "}
        Application
      </>,
    ],
  },
  {
    date: "March 2025",
    learned: [
      <>
        Built{" "}
        <Link
          link="https://github.com/shainilps/ekashuunyam-monorepo"
          text="ekashunyam"
        />
      </>,
      <>
        Built{" "}
        <Link
          link="https://github.com/shainilps/laughing-pancake"
          text="Jetara"
        />
      </>,
      <>Turned off copilot :/</>,
      <>
        Learned some <Link text="elm" link="https://elm-lang.org/" />
      </>,
      <>Started using zed</>,
    ],
  },
  {
    date: "Feb 2025",
    learned: [
      <>
        Learned about cryptography, wrote a{" "}
        <Link
          text="blog post"
          link="https://shainilps.bearblog.dev/crypgology-using-golang/"
        />
      </>,
    ],
  },
  {
    date: "Jan 2025",
    learned: [
      <>
        Built{" "}
        <Link
          link="https://github.com/shainilps/curlify"
          text="curlify
             "
        />
      </>,
    ],
  },
];

export const skills: TechStackItem[] = [
  {
    heading: "Languages",
    skills: ["JavaScript", "TypeScript", "Go", "C++", "HTML/CSS"],
  },
  {
    heading: "Frameworks",
    skills: ["Express", "React", "Next.js", "Echo (go)"],
  },
  { heading: "Database", skills: ["PostgreSQL, MongoDB", "Redis"] },
  {
    heading: "DevOps",
    skills: ["Docker", "AWS EC2", "AWS S3", "GitHub WorkFlow(CI/CD)"],
  },
];

export const projects: Project[] = [
  {
    projName: "Carter: Full-Stack E-Commerce Platform",
    shortDesc:
      "A full-featured e-commerce application built with modern web technologies.",
    gbLink: "https://github.com/shainilps/carter",
    liveLink: "",
    techTags: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Passport.js",
    ],
  },
  {
    projName: "Ekashunyam: Fest Website",
    shortDesc:
      "Dynamic Inter-College Fest website for event Registration and Management.",
    gbLink: "https://github.com/axioz-dev",
    liveLink: "https://ekashunyam.xyz/",
    techTags: [
      "Next",
      "TypeScript",
      "NextAuth",
      "Postgres",
      "Tailwind",
      "vercel",
      "GSAP",
    ],
  },
  {
    projName: "Jetara: Event Mangagement site",
    shortDesc: "An College level Event Publishing and Management site",
    gbLink: "https://github.com/axioz-dev",
    liveLink: "https://laughing-pancake-kohl.vercel.app",
    techTags: [
      "Next",
      "TypeScript",
      "Postgres",
      "TRPC",
      "NextAuth",
      "Tailwind",
      "vercel",
    ],
  },
  {
    projName: "Yam",
    shortDesc:
      "A Tool for setting up Linters, Formatters, Test and Git Hooks and many more for Typescript and Javascript projects",
    gbLink: "https://github.com/shainilps/yam",
    liveLink: "",
    techTags: ["TypeScript", "Nodejs"],
  },
  {
    projName: "Curlify",
    shortDesc: "A Terminal User Interface API testing tool similar to postman",
    gbLink: "https://github.com/shainilps/curlify",
    liveLink: "",
    techTags: ["Go", "BubbleTea", "Bubbles"],
  },
  {
    projName: "Transcode",
    shortDesc: "Multi Threaded video Transcoding and Compression System",
    gbLink: "https://github.com/shainilps/transcode",
    liveLink: "",
    techTags: ["Go", "MultiThreading"],
  },

  {
    projName: "Echoes",
    shortDesc: "HTMX + Go based anonnymous message sharing app",
    gbLink: "https://github.com/shainilps/echoes",
    liveLink: "",
    techTags: ["Go", "HTMX", "AWS"],
  },
  {
    projName: "CLI TODO Application",
    shortDesc:
      "A Command-Line TODO application written in Go to manage tasks with add, complete, delete, and list functionalities.",
    gbLink: "https://github.com/shainilps/go-todo-app",
    liveLink: "",
    techTags: ["Go", "CLI"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "TimeChain Labs",
    role: "Goalng Developer Intern",
    period: "May 2025 - Present",
    description: ["Working on Project Neucron", "Working on Project Assetizer"],
    technologies: ["Go", "Backend"],
  },
];

export const social = {
  email: "shainilps.work@gmail.com",
  github: "https://github.com/shainilps",
  linkedin: "https://linkedin.com/in/shainilps",
  twitter: "https://twitter.com/code_shaine",
  resume: "/resume.pdf",
  calendar: "https://calendly.com/codeshaine/30min",
  blog: "https://shainilps.bearblog.dev",
};
