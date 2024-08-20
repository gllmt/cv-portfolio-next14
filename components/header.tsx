"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });

  return (
    <header className="z-[99] relative">
      {pathname === "/" ? (
        <motion.div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[4.5rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full dark:bg-gray-900 dark:border-black/10 dark:bg-opacity-100"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
      ) : (
        <></>
      )}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {pathname === "/" ? (
            links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {link.name === "Home" ? (
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-500 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-100 dark:text-gray-100 dark:hover:text-gray-100":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      lenis?.scrollTo(link.hash, { offset: -150 });
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-900 rounded-full absolute inset-0 -z-10 dark:bg-[#2a2683] dark:text-slate-100"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                ) : (
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-400 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-100 dark:text-gray-100 hover:text-gray-300 dark:hover:text-gray-100":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      lenis?.scrollTo(link.hash, { offset: -100 });
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-900 rounded-full absolute inset-0 -z-10 dark:bg-[#2a2683] dark:text-slate-500"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                )}
              </motion.li>
            ))
          ) : (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href="/"
                className="flex w-full items-center justify-center px-5 py-4 text-slate-100 hover:text-gray-300 transition dark:text-gray-100 dark:hover:text-gray-300"
              >
                Home
                <motion.span
                  className="bg-gray-900 rounded-full absolute inset-0 -z-10 dark:bg-[#2a2683] dark:text-slate-100"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              </Link>
            </motion.li>
          )}
        </ul>
      </nav>
    </header>
  );
}
