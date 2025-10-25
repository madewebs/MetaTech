"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ffffff] px-8 md:px-16 lg:px-24 relative"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
        >
          About Us
        </h2>

        <div ref={contentRef} className="">
          <div className="grid  gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
                Who We Are
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a leading provider of industrial automation solutions,
                specializing in cutting-edge robotics, cobots, and automated
                production systems. With years of experience, we help businesses
                transform their operations through intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}