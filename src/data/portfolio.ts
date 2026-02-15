export const SECTIONS = ["about", "projects", "skills", "contact"] as const;
export type Section = (typeof SECTIONS)[number];

export const NEOFETCH_ART = `╭──────────────╮
│              │
│    > _       │
│              │
│              │
╰──────────────╯
  ════════════`;

export const hero = {
  name: "Luke",
  title: "Software Developer",
  description: ["A developer who spends too much time in the terminal."],
};

export const about = {
  bio: [
    "I like building things for the web, mostly with React, TypeScript, and Remix. Frontend is home, but I go full stack when a project calls for it.",
    "I keep things simple where I can. Accessible by default, no more dependencies than needed, no cleverness for the sake of it.",
  ],
  info: [
    { key: "focus", value: "Frontend-leaning Full Stack" },
    { key: "values", value: "Clean Architecture, Accessibility, Minimal Deps" },
  ],
};

export const projects = [
  {
    folder: "extensions/Optube/",
    name: "Optube",
    description:
      "A Chrome extension purely focused on decluttering YouTube to each own's personal preference with a netflix style cinematic mode.",
    tech: ["React", "TypeScript"],
    link: "https://optube.dev",
  },

  {
    folder: "micro-saas/Inzora",
    name: "Inzora (WIP)",
    description:
      "Automated pain point scanner for Reddit, with a dashboard purely focused on actionalble insights to find a gap in the market for your next project.",
    tech: ["React", "TypeScript", "NodeJS/Express", "Prisma ORM"],
    link: "",
  },
];

export const skills = {
  rows: [
    { key: "Languages", value: "TypeScript, SQL" },
    { key: "Frontend", value: "React, Remix (React Router), Vite" },
    { key: "Mobile", value: "React Native (Expo)" },
    { key: "Backend", value: "Node.js, Express" },
    { key: "Database", value: "MySQL, PostgreSQL, Prisma" },
  ],
};

export const contact = {
  links: [
    {
      command: "open",
      value: "ljhdevsoftware@gmail.com",
      url: "mailto:ljhdevsoftware@gmail.com",
    },
    {
      command: "open",
      value: "github.com/ljh-wd",
      url: "https://github.com/ljh-wd",
    },
  ],
};
