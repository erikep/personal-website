export const site = {
  name: "Erik",
  fullName: "Erik Esteban Perez",
  title: "Software Engineer",
  tagline:
    "Full-stack engineer building developer tools and personal productivity software.",
  school: "University of St. Thomas",
  majors: ["Computer Engineering", "Catholic Studies"],
  email: "estebaerik2@gmail.com",
  location: "St. Paul, Minnesota",
  /** Canonical site origin — update when a custom domain is attached. */
  url: "https://erik.epsystems.workers.dev",
  /** Default Open Graph / Twitter share image (served from /public). */
  ogImage: "/images/og.jpg",
  socials: {
    github: "https://github.com/erikep",
    linkedin: "https://www.linkedin.com/in/erikestebanperez/",
  },
} as const;

export type Site = typeof site;
