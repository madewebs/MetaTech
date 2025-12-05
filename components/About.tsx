"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Caption animation
      gsap.from(captionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: captionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Content title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Paragraphs animations with stagger
      paragraphsRef.current.forEach((paragraph, index) => {
        if (paragraph) {
          gsap.from(paragraph, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 85%",
              once: true,
            },
          });
        }
      });

      // Button animation
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Handle smooth scroll to contact section with GSAP animation
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const contactSection = document.getElementById("#contact");
    if (contactSection) {
      // Animate scroll using GSAP
      gsap.to(window, {
        scrollTo: {
          y: contactSection,
          autoKill: false,
        },
        duration: 1.2,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="w-full bg-[#fefefe] text-[#151515] py-12 overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-medium mb-4">
            About Us
          </h2>
          <p
            ref={captionRef}
            className="text-[#151515]/70 text-md md:text-xl max-w-3xl"
          >
            A specialized engineering firm dedicated to delivering high-quality industrial automation solutions. Our vision is to become the first choice for industrial line building, system designing, and robotic solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div
            ref={imageRef}
            className="relative h-[400px] md:h-full rounded-xs overflow-hidden"
          >
            <Image
              src="/about.webp"
              alt="About Metatech Automation"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/60 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="flex flex-col justify-start space-y-6">
            <h3 ref={titleRef} className="text-2xl md:text-3xl font-medium tracking-tight">
              Our Story & Expertise
            </h3>

            <p
              ref={(el) => {
                paragraphsRef.current[0] = el;
              }}
              className="text-base md:text-lg text-[#151515]/80 leading-relaxed"
            >
              Metatech Automation, making us a dream organization built by automation professionals for automation excellence. As the demand for automation continues to rise across industries, we are committed to providing best-in-class, customized automation solutions tailored to meet the unique needs of our clients.
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[1] = el;
              }}
              className="text-base md:text-lg text-[#151515]/80 leading-relaxed"
            >
              Our highly skilled team brings extensive experience across major automation platforms, including Siemens, Rockwell, Mitsubishi, and others. We are driven by a shared passion for innovation, precision, and client satisfaction.
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[2] = el;
              }}
              className="text-base md:text-lg text-[#151515]/80 leading-relaxed font-medium"
            >
              Core Services:
            </p>

            <ul
              ref={(el) => {
                paragraphsRef.current[3] = el;
              }}
              className="text-base md:text-lg text-[#151515]/80 leading-relaxed space-y-2"
            >
              <li>• PLC Programming</li>
              <li>• HMI / SCADA Development</li>
              <li>• Industrial Drives Integration</li>
              <li>• Customized Industrial Automation Systems</li>
            </ul>

            <div className="pt-4">
              <div ref={buttonRef}>
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="bg-[#151515] text-[#d8d8d8] px-8 py-3 rounded-sm hover:bg-[#303030] transition-colors duration-300 uppercase tracking-wider text-sm font-medium inline-block cursor-pointer"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
