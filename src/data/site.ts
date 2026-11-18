export const site = {
  name: "Erik",
  fullName: "Erik",
  title: "Software Engineer",
  tagline:
    "Full-stack engineer building developer tools and personal productivity software.",
  school: "University of St. Thomas",
  majors: ["Computer Engineering", "Catholic Studies"],
  email: "hello@example.com",
  location: "Minnesota",
  socials: {
    github: "https://github.com/erikep",
    linkedin: "https://www.linkedin.com/in/erikep",
  },
} as const;

export type Site = typeof site;
