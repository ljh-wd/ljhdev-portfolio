export const SECTIONS = ["about", "projects", "skills", "contact"] as const;
export type Section = (typeof SECTIONS)[number];

export const NEOFETCH_ART = `      ) )  )
     ( (  (
    ╭───────╮
    │ ~   ~ ├╮
    │       ││
    │       ├╯
    ╰───────╯
     ═══════`;

export const hero = {
  name: "Luke",
  title: "Software Developer",
  description: ["A developer who spends too much time in the terminal."],
};

export const about = {
  bio: ["I enjoy building software valuable to others."],
  info: [
    { key: "focus", value: "Full Stack, Mobile dev, Web dev" },
    {
      key: "principles",
      value: "Clean Architecture, Accessibility, Minimal Deps",
    },

    {
      key: "values",
      value: "Provide useful software to make other peoples lives easier",
    },
  ],
};

export const projects = [
  {
    folder: "extensions/Optube",
    name: "Optube",
    description:
      "A Chrome extension purely focused on decluttering YouTube to each own's personal preference with a netflix style cinematic mode.",
    tech: ["React", "TypeScript"],
    link: "https://optube.dev",
  },

  {
    folder: "micro-saas/Inzora",
    name: "Inzora",
    description:
      "Automated pain point scanner for Reddit, with a dashboard purely focused on actionalble insights to find a gap in the market for your next project.",
    tech: ["React", "TypeScript", "NodeJS/Express", "Prisma ORM"],
    link: "https://inzora.io",
  },

  {
    folder: "swift/Shadow",
    name: "Shadow",
    description:
      "Menubar item for MacOS to control the brightness of individual apps regardless of their size or position on the screen",
    tech: ["SwiftUI"],
    link: "https://www.shadow-menu-bar.dev/",
  },
];

export const skills = {
  rows: [
    { key: "Languages", value: "JavaScript/TypeScript" },
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
    {
      command: "open",
      value: "x.com/ljhdev",
      url: "https://x.com/ljhdev",
    },
    {
      command: "open",
      value: "buymeacoffee.com/ljhdev",
      url: "https://buymeacoffee.com/ljhdev",
    },
  ],
};
