"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLenis } from "lenis/react";

export default function Hero404() {
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // const lenis = useLenis();

  return (
    <section
      ref={ref}
      id="home"
      className="b-28 max-w-[50rem] text-center mb-10 sm:mb-0"
    >
      <motion.h1
        className="relative mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] text-balance sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Error 404,</span>
        <br />
        <span className="font-bold">Page not found</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          href="/"
        >
          {/* <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />{" "} */}
          Go back to the homepage{" "}
        </Link>

        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV-Pierre-Guillemot-Developpeur-Frontend.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-[0.10rem] transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/gllmt/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/gllmt"
          target="_blank"
        >
          <FaGithubSquare />
        </a> */}
      </motion.div>
    </section>
  );
}
