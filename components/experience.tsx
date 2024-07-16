"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated, inView]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={hasAnimated ? true : inView}
              contentStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                position: "relative",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(41, 49, 61, .9)",
                fontSize: "1.5rem",
              }}
            >
              <Link
                className="absolute top-5 right-8 w-10 h-10 overflow-hidden rounded-full"
                href={item.link}
                target="_blank"
              >
                <Image
                  className="w-full h-full object-cover"
                  src={item.logoImg}
                  alt={item.title}
                />
              </Link>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-balance">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <div className="flex justify-center items-center mt-10">
        <Link
          href="https://www.linkedin.com/in/gllmt/"
          className="font-semibold capitalize text-gray-500 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-50 transition"
        >
          View more
        </Link>
      </div>
    </section>
  );
}
