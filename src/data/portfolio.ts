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
    folder: "iOS/Loosy",
    name: "Loosy",
    description:
      "A quiet city guide for digital nomads. Land somewhere new and find laptop-friendly cafés, culture, and corners worth your time. Built natively for iOS with Expo.",
    tech: ["React Native / Expo", "Expo UI (SwiftUI)"],
    link: "https://loosy.app",
  },
  {
    folder: "iOS/Flickable",
    name: "Flickable",
    description:
      "IOS app that cleans your photos in a satisfying fashion, with smart suggestions.",
    tech: ["React Native / Expo"],
    link: "https://www.flickable.app",
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
      value: "linkedn/luke-h",
      url: "https://www.linkedin.com/in/luke-h-002229254/",
    },
    {
      command: "open",
      value: "buymeacoffee.com/ljhdev",
      url: "https://buymeacoffee.com/ljhdev",
    },
  ],
};
