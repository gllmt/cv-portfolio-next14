import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import lcaImg from "@/public/capture-lca.webp";
import glistenImg from "@/public/capture-glisten.webp";
import fIImg from "@/public/capture-Fi.webp";
import logoAdveris from "@/public/adveris-logo.webp";
import logoPierre from "@/public/pierre-logo.webp";
import logoW2p from "@/public/logow2p.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance full stack developer",
    location: "France",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prismic and more. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
    logoImg: logoPierre,
    link: "https://www.pierreguillemot.com/",
  },
  {
    title: "Front-End Developer",
    location: "Paris, FR",
    description:
      "I worked as a confirmed front-end developer at Adveris on around fifteen full-stack projects with Next.js, Wordpress and Symfony...",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
    logoImg: logoAdveris,
    link: "https://www.adveris.com/",
  },
  {
    title: "Front-End Developer",
    location: "Toulouse, FR",
    description:
      "I worked as a front-end developer at W2P Digital, which has since been renamed Supercolor. I was involved in a variety of web projects, primarily utilizing WordPress and Vue.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
    logoImg: logoW2p,
    link: "https://www.supercolor.cool/",
  },
] as const;

export const projectsData = [
  {
    title: "La Conciergerie Administrative",
    description:
      "I worked as a full-stack developer. It's a website for a services company that offers administrative services to companies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Node.js"],
    imageUrl: lcaImg,
    link: "https://lca.pierreguillemot.dev/",
  },
  {
    title: "Glisten AI",
    description:
      "Glisten AI is a web app that uses AI to help you listen to your music. It's a project I made for fun and to learn more about AI.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prismic"],
    imageUrl: glistenImg,
    link: "https://dark-modern-animated-website.vercel.app/",
  },
  {
    title: "Finance Innovation",
    description:
      "As a full-stack developer at Adveris, I developed this website in collaboration with a web designer. It's good example and I find it a great success.",
    tags: ["Twig", "JavaScript", "Wordpress", "PHP", "gsap"],
    imageUrl: fIImg,
    link: "https://finance-innovation.org/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Wordpress",
  "Prismic",
  "GSAP",
  "Framer Motion",
] as const;
