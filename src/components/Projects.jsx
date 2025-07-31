const projects = [
    {
        title: "Desk Demons – Postmit (Twitter Clone)",
        description:
            "A collaborative team project aimed at building a basic Twitter clone during the STEP internship. The project emphasized agile delivery processes — including sprint planning, user story writing, QA testing, iteration demos, and showcases. Though simplified in scope, it served as an excellent practice ground for full-cycle product development.",
        techStack: "HTML, CSS, JavaScript, Node.js, Express",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/desk-demons-postmit",
                color: "blue",
            }
        ],
    },
    {
        title: "Cluedo Game – Team Turing",
        description:
            "A team project initiated during the STEP internship to simulate agile development practices such as story writing, sprint planning, QA practices, desk checks, and iteration showcases. Although the game wasn't completed due to COVID lockdowns, it served as a hands-on learning experience in agile team collaboration and delivery cycles.",
        techStack: "HTML, CSS, JavaScript, Node.js (basic setup)",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/teamTuring-cluedo",
                color: "blue",
            },
            {
                label: "Live Demo",
                url: "https://teamturing-cluedo.onrender.com/",
                color: "green",
            },
        ],
    },
    {
        title: "Snake Game",
        description:
            "A classic browser-based Snake game served via a Node.js + Express backend. Built during my STEP internship to practice web fundamentals like routing, DOM manipulation, and event handling using vanilla HTML, CSS, and JavaScript.",
        techStack: "Node.js, Express, HTML, CSS, JavaScript",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/snake-naveen-kumar-vadla",
                color: "blue",
            },
            {
                label: "Live Demo",
                url: "https://snake-naveen-kumar-vadla.onrender.com/",
                color: "green",
            },
        ],
    },
    {
        title: "Pokémon Gallery – Pug & React Variants",
        description:
            "A simple and interactive Pokémon gallery developed in two different variants to explore and compare templating vs. component-based frameworks. The Pug version focuses on server-rendered templates, while the React version is a modern SPA. Both fetch Pokémon data and present it in a user-friendly gallery layout.",
        techStack: "HTML, CSS, JavaScript, Pug, React, Node.js, Express",
        links: [
            {
                label: "Pug Repo",
                url: "https://github.com/naveen-kumar-vadla/pokemon-gallery-pug",
                color: "blue",
            },
            {
                label: "Pug Live",
                url: "https://pokemon-gallery-pug.onrender.com/",
                color: "green",
            },
            {
                label: "React Repo",
                url: "https://github.com/naveen-kumar-vadla/pokemon-gallery-react",
                color: "blue",
            },
            {
                label: "React Live",
                url: "https://pokemon-gallery-react.onrender.com/",
                color: "green",
            },
        ],
    },
    {
        title: "GitHub Badges DS – Distributed CLI Tool",
        description:
            "A command-line tool built to explore the concepts of distributed systems. It fetches GitHub badges for a given user, using a master-worker approach to divide and process tasks concurrently. Developed as a hands-on exercise to learn distributed system principles, data parallelism, and task coordination.",
        techStack: "Node.js, JavaScript, CLI tooling, Concurrency models",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/github_badges_ds",
                color: "blue",
            },
        ],
    },
    {
        title: "MAL – Custom LISP-like Language",
        description:
            "A minimal, LISP-inspired command-line language developed by referring to the 'Make A Lisp' guide. This project aimed to understand interpreters, parsers, tokenization, and evaluation strategies by building each part from scratch.",
        techStack: "C, Shell, CLI Parsing, Language Implementation Concepts",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/mal",
                color: "blue",
            },
        ],
    },
    {
        title: "Assignment Validator (Slack Bot)",
        description:
            "A custom Slack bot designed to help apprenticeship candidates test their coding assignments written in a domain-specific language called Sprint. It processes the code, validates it, and returns real-time feedback including errors or test failures.",
        techStack: "Node.js, Slack SDK, JavaScript, Express",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/assignment-validator",
                color: "blue",
            },
        ],
    },
    {
        title: "Library Management System",
        description:
            "A feature-rich Library Management System built as a final semester project during my diploma. Full-stack app with React frontend and Node.js + MySQL backend, includes books, users, borrow/return, inventory modules.",
        techStack: "React, Node.js, Express, MySQL",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/Library-Management-System",
                color: "blue",
            },
        ],
    },
    {
        title: "CLI Library Management System",
        description:
            "A command-line Library Management System built with Node.js using the Vorpal framework. It offers a CLI for managing books, users, borrowing operations, backed by SQLite3.",
        techStack: "Node.js, Vorpal, SQLite3, JavaScript",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/library-with-vorpal",
                color: "blue",
            },
        ],
    },
    {
        title: "Custom Bash-like Shell",
        description:
            "A custom shell developed using C that replicates many features of Bash. Built during STEP to understand Unix/Linux internals, job control, piping, and system calls.",
        techStack: "C, Linux System Calls",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/shell",
                color: "blue",
            },
            {
                label: "Demo (asciinema)",
                url: "https://asciinema.org/a/ZXYC15GhTAWUcjSDCIyotnO6s",
                color: "green",
            },
        ],
    },
    {
        title: "To-Do Application",
        description:
            "A simple full-stack To-Do app built during STEP internship for pair programming and web development practice. Add/delete/manage tasks with responsive UI.",
        techStack: "HTML, CSS, JavaScript, Node.js, Express, MongoDB",
        links: [
            {
                label: "GitHub Repo",
                url: "https://github.com/naveen-kumar-vadla/todo-naveen-kumar-vadla",
                color: "blue",
            },
            {
                label: "Live Demo",
                url: "https://todo-naveen-kumar-vadla.onrender.com/",
                color: "green",
            },
        ],
    },
];


export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4" id="projects">
            <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white shadow rounded p-6">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                        <p className="text-sm text-gray-600 mb-3">
                            <strong>Tech Stack:</strong> {project.techStack}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-${link.color}-600 hover:underline`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
