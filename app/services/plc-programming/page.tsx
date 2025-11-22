"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function PLCProgramming() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
   const bgUrl = "/one.webp";
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 80%", once: true },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 85%", once: true },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Hero Section with Image */}
        <div
          className="fixed inset-0 -z-20 bg-center bg-cover brightness-40"
          style={{ backgroundImage: `url('${bgUrl}')` }}
          aria-hidden
        />
        <header className="min-h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto py-20 px-4 md:px-12" ref={headingRef}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">
              PLC Programming
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center font-wide">
              End-to-end automation system architecture and delivery.
            </p>
          </div>
        </header>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            
          </div>
        </div>

        {/* Content Section */}
        <div className="py-12 bg-[#fefefe]">
          <div className="mx-auto max-w-7xl px-4">
            <div ref={contentRef} className="space-y-8">
              {/* Rockwell */}
              <section>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#151515]">Rockwell / Allen Bradley</h2>
                <p className="text-sm md:text-base text-[#151515]/60 mb-4 italic">Industry-leading automation platform for precision manufacturing</p>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  Rockwell is one of the leading automation solution providers worldwide. We have a highly experienced team in Rockwell/AB products, including PLC, HMI, Drives, Servo, and Safety Devices. Our services cover both programming and hardware support.
                </p>
                <div className="space-y-2 mb-3">
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">PLC Series:</span> Micro Logix, Compact Logix, Control Logix, Guard Logix.</p>
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Communication Protocols:</span> Ethernet, DeviceNet, RS 232.</p>
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Software Skills:</span> RS Logix 500, RS Logix 5000, Studio 5000, CCW, Factory Talk Studio, RSNetWorx.</p>
                </div>
                <p className="text-[#151515]/80 text-left text-base md:text-lg mb-3">
                  Our team has extensive experience with standard programming in Rockwell, including DCP Std, APA/FNA Std, and GM Std used by major OEMs.
                </p>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  We specialize in developing robust control logic for complex manufacturing processes using CompactLogix and ControlLogix platforms. Our programmers are proficient in ladder logic, structured text, and function block diagrams, ensuring optimal code efficiency and maintainability. We have successfully delivered projects ranging from simple machine controls to large-scale integrated production systems managing multiple processes simultaneously.
                </p>
                <p className="text-base md:text-lg text-[#151515]/80 text-left">
                  Our experience extends to safety-critical applications using Guard Logix controllers, where we implement and validate safety logic according to SIL ratings and functional safety standards. We provide comprehensive documentation, testing protocols, and training support to ensure smooth implementation and long-term operational success.
                </p>
              </section>

              {/* Siemens */}
              <section className="border-t pt-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#151515]">Siemens</h2>
                <p className="text-sm md:text-base text-[#151515]/60 mb-4 italic">Comprehensive automation solutions with modular architecture</p>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  Siemens is a leading automation solution provider for industries globally. Our team has over 6 years of experience in Siemens products and their applications at both hardware and software levels, delivering solutions that meet the highest standards of industrial automation.
                </p>
                <div className="space-y-2 mb-3">
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">PLC Series:</span> S7-1200, S7-1500, S7-300, S7-400.</p>
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Communication Protocols:</span> Profibus, Profinet, Industrial Ethernet.</p>
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Software Skills:</span> Simatic Manager, TIA Portal, WinCC, V-Assistant, Sinamics Drive Control.</p>
                </div>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  Our expertise encompasses the complete Siemens automation ecosystem, from compact controllers for standalone machines to large distributed systems using Profinet and Industrial Ethernet. We leverage the TIA Portal engineering environment to create scalable, modular control solutions that reduce development time and improve system flexibility. Our team is skilled in both legacy systems (S7-300/400) and modern platforms (S7-1200/1500), ensuring we can support your entire facility&apos;s automation needs.
                </p>
                <p className="text-base md:text-lg text-[#151515]/80 text-left">
                  We develop comprehensive HMI applications using WinCC, providing intuitive operator interfaces with real-time data visualization, trend analysis, and alarm management. Our integration expertise extends to networked drive systems using Sinamics controllers, enabling coordinated motion control and synchronized process management across your production floor.
                </p>
              </section>

              {/* Mitsubishi */}
              <section className="border-t pt-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#151515]">Mitsubishi</h2>
                <p className="text-sm md:text-base text-[#151515]/60 mb-4 italic">Reliable automation for automotive and precision manufacturing</p>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  Mitsubishi is a leading automation service provider commonly used by major Japanese manufacturers like Suzuki and Honda. Our services are primarily in software with an experienced team working on Mitsubishi PLC, HMI, and Drives, providing solutions tailored to automotive and precision manufacturing applications.
                </p>
                <div className="space-y-2 mb-3">
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">PLC Series:</span> MELSEC-Q Series, MELSEC-F Series, MELSEC-iQ-F Series.</p>
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Communication Protocols:</span> DeviceNet, CC Link, RS 232, RS 485, Ethernet.</p>
                  <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Software Skills:</span> GX Developer, GX Works, GX Works2, GT Designer, GOT HMI Programming.</p>
                </div>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  We have deep expertise in Mitsubishi&apos;s Q-series and F-series PLCs, which are widely deployed in high-speed manufacturing environments requiring reliable, deterministic control. Our programmers excel at structured programming techniques using GX Works 2, creating modular and maintainable code that minimizes commissioning time. We understand the unique requirements of automotive suppliers and precision manufacturers who depend on Mitsubishi systems for their critical production lines.
                </p>
                <p className="text-base md:text-lg text-[#151515]/80 text-left">
                  Our HMI development experience with GT Designer and Mitsubishi GOT touchscreen panels enables us to create user-friendly interfaces that improve operator efficiency and reduce training requirements. We specialize in implementing CC Link network systems for distributed I/O and device control, as well as integrating Mitsubishi servo and inverter drives for coordinated motion applications. Our support extends to troubleshooting, optimization, and system upgrades for existing installations.
                </p>
              </section>

              {/* General Programming Services */}
              <section className="border-t pt-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#151515]">Our Programming Approach</h2>
                <p className="text-sm md:text-base text-[#151515]/60 mb-4 italic">Best practices in code quality, documentation, and system validation</p>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  Regardless of platform, our programming methodology follows industry best practices and ensures the highest quality control systems. We begin each project with detailed requirements analysis and functional specification development, ensuring alignment with your production objectives and operational constraints. Our engineers create structured, modular code that is easy to understand, maintain, and modify throughout the system&apos;s lifecycle.
                </p>
                <p className="text-base md:text-lg text-[#151515]/80 mb-3 text-left">
                  We implement comprehensive error handling, diagnostic capabilities, and logging functions that provide visibility into system operation and simplify troubleshooting. Our code follows standardized naming conventions and documentation practices, making it accessible to your maintenance team and future support engineers. We provide detailed source code comments, logic flowcharts, and operator manuals that facilitate knowledge transfer and long-term system stewardship.
                </p>
                <p className="text-base md:text-lg text-[#151515]/80 text-left">
                  Testing and validation are integral parts of our programming process. We conduct unit testing during development, integration testing with other system components, and comprehensive factory acceptance testing (FAT) before delivery. Our rigorous testing protocols identify potential issues early, reducing commissioning time and ensuring reliable operation from day one of production use.
                </p>
              </section>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}
