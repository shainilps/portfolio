import { Command } from "../components/CommandArea";
import {
  FaGithub,
  FaLink,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
export function GetOutput(
  command: string,
  setCommandList: React.Dispatch<React.SetStateAction<Command[]>>
): JSX.Element | "" {
  switch (command.toLowerCase().trim()) {
    case "clear":
      setCommandList([]);
      return "";
    case "blogs":
      window.open("https://codeshaine.bearblog.dev/", "_blank");
      return "";
    case "resume":
      const url = "/resume.pdf";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Shainil_PS_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "";
    case "about":
      return (
        <div className="">
          <div>
            <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#f6c177] mb-2">
              About Shainil P.S.
            </h1>
            <div>
              <p className="mt-2">
                Who’s this guy? Oh, just{" "}
                <span className="text-[#f6c177]">Shainil</span>, a full-stack
                developer who thinks his love for{" "}
                <span className="text-[#f6c177]">JavaScript</span> and{" "}
                <span className="text-[#f6c177]">TypeScript</span> makes him
                special (spoiler: it does, kinda). He’s all about building
                scalable apps, diving deep into{" "}
                <span className="text-[#f6c177]">DSA</span>, and pretending to
                be normal while absolutely geeking out over{" "}
                <span className="text-[#f6c177]">Go</span>.
              </p>
              <p className="mt-2">
                This portfolio? Yeah, he made it terminal-themed because
                "aesthetic," but really, he just wanted to show off. Behind the
                scenes, he’s working on cool stuff and trying not to
                overcomplicate things (failing occasionally).
              </p>
              <p className="mt-2">
                Oh, and don’t let his chill vibe fool you—he’s serious about
                clean, efficient code. But ask him about switching stacks, and
                suddenly it’s 'JavaScript forever!' one day, 'Go is the future!'
                the next, and now he’s tossing around AI and functional
                languages like he’s collecting programming skills like Pokémon.
                Pick a side, man.
              </p>
              <p className="text-xs mt-2">
                - ChatGPT (I had to write this because Shainil refuses to brag
                about himself)
              </p>
            </div>
          </div>
        </div>
      );
    case "goals":
      return (
        <div className="">
          <ul className="list-disc list-inside">
            <li className="m-2 text-[#31748f]">
              gaining{" "}
              <span className="text-[#f6c177]">Industry Experience</span>
            </li>
            <li className="m-2 text-[#31748f]">
              Making meaningful{" "}
              <span className="text-[#f6c177]">open source</span> contributions
            </li>
            <li className="m-2 text-[#31748f]">
              Explore and Excel{" "}
              <span className="text-[#f6c177]">system design</span> and{" "}
              <span className="text-[#f6c177]">cloud technologies</span>
            </li>
            <li className="m-2 text-[#31748f]">
              learning{" "}
              <span className="text-[#f6c177]">terminal applications</span>{" "}
              development with golang
            </li>
          </ul>
          <p className=" ">
            Last updated on <span className="text-[#f6c177]">2-12-2024</span>
          </p>
        </div>
      );
    case "projects":
      const projects = [
        {
          projName: "Carter – Full-Stack E-Commerce Platform",
          shortDesc:
            "A full-featured e-commerce application built with modern web technologies.",
          gbLink: "https://github.com/codeshaine/carter",
          liveLink: "",
          techTags: [
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
          projName: "Ekashunyam Fest Website",
          shortDesc:
            "Dynamic inter-college fest website for event registration and management with JWT authentication.",
          gbLink: "https://github.com/axioz-dev",
          liveLink: "https://ekashunyam.tech/",
          techTags: [
            "React",
            "Express",
            "MongoDB",
            "Tailwind",
            "AWS",
            "JWT",
            "GSAP",
          ],
        },
        {
          projName: "Joke API",
          shortDesc:
            "A simple API for managing jokes with CRUD operations and Docker containerization.",
          gbLink: "https://github.com/codeshaine/joke-api",
          liveLink: "",
          techTags: ["Express", "Docker"],
        },
        {
          projName: "URL Shortener",
          shortDesc:
            "A URL shortening service built with Go, PostgreSQL, and Chi for routing, with click tracking and expiration functionality.",
          gbLink: "https://github.com/codeshaine/url-shortner",
          liveLink: "",
          techTags: ["Go", "PostgreSQL", "Chi", "Docker"],
        },
        {
          projName: "CLI TODO Application",
          shortDesc:
            "A command-line TODO application written in Go to manage tasks with add, complete, delete, and list functionalities.",
          gbLink: "https://github.com/codeshaine/go-todo-app",
          liveLink: "",
          techTags: ["Go", "CLI"],
        },
      ];

      return (
        <div className="">
          {projects.map((item, index) => {
            return (
              <div
                key={index}
                // className="bg-gradient-to-r from-[#292639] to-[#2b5e72] p-6 rounded-lg mb-6"
                className="bg-gradient-to-r from-[#292639] to-[#2b5e72] p-6 rounded-lg mb-6 border-b-4 border-b-[#f6c177] hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Name */}
                <h2 className="text-[#f6c177] lg:text-3xl text-xl font-bold mb-2">
                  {item.projName}
                </h2>

                {/* Short Description */}
                <p className="text-[#e0def4] mb-4">{item.shortDesc}</p>

                {/* Technologies Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.techTags.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#2e3440] text-[#c4a7e7] px-3 py-1 rounded-lg shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                  {/* GitHub Link */}
                  {item.gbLink && (
                    <a
                      href={item.gbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f6c177] hover:text-[#9ccfd8] flex items-center"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}

                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f6c177] hover:text-[#9ccfd8] flex items-center"
                    >
                      <FaLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    case "skills":
      return (
        <div>
          {[
            {
              heading: "Languages",
              skills: ["JavaScript", "TypeScript", "Go", "C++", "HTML/CSS"],
            },
            {
              heading: "Frameworks & Libraries",
              skills: [
                "Node.js",
                "Express",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Prisma",
                "Mongoose",
                "Jest",
                "Vitest",
              ],
            },
            {
              heading: "Tools,Platforms & Databases",
              skills: [
                "Git",
                "GitHub",
                "MongoDb",
                "PostgreSQL",
                "Docker",
                "AWS EC2",
                "AWS S3",
                "Netlify",
                "GitHub WorkFlow(CI/CD)",
                "Vercel",
                "Linux",
                "neovim",
              ],
            },
          ].map((section) => (
            <div key={section.heading} className="mb-4">
              <h2 className="text-lg lg:text-xl md:text-xl mb-2 text-[#f6c177]">
                {section.heading}
              </h2>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#2e3440] text-[#c4a7e7]  px-3 py-1 rounded-lg shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "socials":
      return (
        <div>
          <p className="mb-2">
            Interested in connecting with me? Feel free to reach out! I'm active
            on <span className="text-[#f6c177]">Twitter(X)</span> and{" "}
            <span className="text-[#f6c177]">Email</span>.
          </p>
          {[
            {
              social: "Github",
              link: "https://github.com/codeshaine",
              username: "codeshaine",
              icon: <FaGithub />,
            },
            {
              social: "Twitter(X)",
              link: "https://x.com/code_shaine",
              username: "code_shaine",
              icon: <FaTwitter />,
            },
            {
              social: "LinkedIn",
              link: "https://www.linkedin.com/in/shainilps/",
              username: "shainilps",
              icon: <FaLinkedin />,
            },
            {
              social: "Email",
              link: "mailto:shainilps.work@gmail.com",
              username: "shainilps.work@gmail.com",
              icon: <FaEnvelope />,
            },
          ].map((item) => {
            return (
              <div className="flex items-center mb-2">
                <span className="text-[#f6c177]  mr-2">{item.icon}</span>
                <span className="text-[#f6c177] w-28">{item.social}</span>
                <a
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-[#c4a7e7] hover:text-[#9c5de9] hover:underline"
                >
                  {item.username}
                </a>
              </div>
            );
          })}
        </div>
      );
    case "help":
      return (
        <>
          <div className="">
            <p className="text-[#c4a7e7] col-span-2">All available commands:</p>
            {[
              { comm: "about", desc: "- Learn more about me" },

              {
                comm: "projects",
                desc: "- A glimpse into my work!",
              },

              {
                comm: "skills",
                desc: "- Checkout my technical skills",
              },
              {
                comm: "socials",
                desc: "- You can find me here!",
              },
              {
                comm: "resume",
                desc: "- My Professional journey",
              },
              {
                comm: "goals",
                desc: "- Explore my interests",
              },
              {
                comm: "blogs",
                desc: "- A collection of my thoughts and occasional rants",
              },
              {
                comm: "clear",
                desc: "- Clear the Terminal",
              },
              {
                comm: "sudo rm -rf /*",
                desc: "- Try it on you risk",
              },
            ].map((item) => {
              return (
                <div className="flex items-center">
                  <span className="text-[#f6c177] lg:w-36 min-w-24 md:w-36">
                    {item.comm}
                  </span>
                  <span className="text-[#31748f]">{item.desc}</span>
                </div>
              );
            })}
          </div>
        </>
      );
    case "sudo rm -rf /*":
      const newWindow = window.open("about:blank", "_blank");
      if (newWindow) {
        newWindow.document.write(`
            <html>
              <head>
                <title>System Alert</title>
                <style>
                  body {
                    background-color: #222;
                    color: #fff;
                    font-family: Arial, sans-serif;
                  }
                  h1, h2 {
                    text-align: center;
                    font-size: 2.5em;
                  }
                  #progress-bar {
                    width: 0%;
                    height: 20px;
                    background-color: #ff4500;
                    border-radius: 5px;
                    transition: width 0.3s ease-in-out;
                  }
                  .content {
                    text-align: center;
                    margin: 20px;
                  }
                </style>
              </head>
              <body>
                <div class="content">
                  <h1 style="color: #ff6347;">🚨 OH NO! SYSTEM MELTDOWN! 🚨</h1>
                  <h2 style="color: #ffda44;">Your data is being... well, it's gone.!!</h2>
                  <p>Your computer is busy wiping out every single byte of data.</p>
                  <div style="width: 80%; margin: 0 auto; background-color: #444; border-radius: 10px;">
                    <div id="progress-bar"></div>
                  </div>
                  <p id="progress-text" style="font-size: 1.2em; margin-top: 10px;">Progress: 0%</p>
                </div>
                <script>
                  let progress = 0;
                  const progressBar = document.getElementById('progress-bar');
                  const progressText = document.getElementById('progress-text');
                  const interval = setInterval(() => {
                    if (progress < 100) {
                      progress += 5;
                      progressBar.style.width = progress + '%';
                      progressText.textContent = \`Progress: \${progress}%\`;
                    } else {
                      clearInterval(interval);
                      setTimeout(() => {
                        document.body.innerHTML = "<h1 style='color: lime;'>Phew! You were one step away from clean wipe :)</h1>";
                        document.body.innerHTML += "<p style='font-size: 1.5em; text-align:center'>Your files are safe. No worries</p>";
                      }, 1000);
                    }
                  }, 200);
                </script>
              </body>
            </html>
          `);
      } else {
        window.location.href = "about:blank";
      }

      return "";
    default:
      return (
        <div>
          <p className="text-[#eb6f92]">Command not found</p>
          <p>
            Try <span className="text-[#f6c177]">help</span> to see available
            commands
          </p>
        </div>
      );
  }
}
