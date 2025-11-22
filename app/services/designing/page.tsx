"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const bgUrl = "/three.webp";
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white">
        <div
          className="fixed inset-0 -z-20 bg-center bg-cover brightness-40"
          style={{ backgroundImage: `url('${bgUrl}')` }}
          aria-hidden
        />
        <header className="min-h-[60vh] flex items-center">
          <div className="max-w-5xl mx-auto py-20 px-4 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Automation Design
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              End-to-end automation system architecture and delivery.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-7xl mx-auto py-20 px-4" ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Automation Design
            </h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-left">
              <p className="leading-relaxed">
                System architecture, control strategies, I/O mapping and full
                project documentation for turnkey automation projects.
              </p>
              <p className="mb-4 leading-relaxed">
                Offerings include specification, control narrative, network design
                and FAT/SAT support.
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Scope:</span> Feasibility, specification and control design.</p>
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Delivery:</span> Code, HMI, wiring, FAT and commissioning support.</p>
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Standards:</span> IEC/ANSI safety and control best practices.</p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Our Approach</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We understand that every automation project is unique. Our design process begins with a comprehensive feasibility study to understand your production requirements, existing infrastructure, and long-term goals. We work closely with your team to develop tailored control strategies that optimize efficiency while maintaining safety and reliability.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Our engineers create detailed system architecture diagrams, control narratives, and I/O mapping documentation that serves as the blueprint for implementation. We leverage industry-standard practices and the latest automation technologies to ensure your system is scalable, maintainable, and future-proof.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Design Process</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Our systematic design methodology ensures nothing is overlooked. Starting with requirement analysis and feasibility assessment, we develop comprehensive specifications that align with your operational objectives. Our control design incorporates redundancy, safety interlocks, and diagnostic capabilities to minimize downtime and maximize productivity.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Network design is critical in modern automation. We architect robust communication systems with proper topology, cybersecurity measures, and backup protocols. Throughout the design phase, we provide detailed documentation including P&IDs, electrical schematics, control logic diagrams, and commissioning checklists.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Testing and Commissioning</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We provide comprehensive FAT (Factory Acceptance Testing) and SAT (Site Acceptance Testing) support to validate that your automation system performs according to specifications. Our team conducts thorough testing of all control logic, safety systems, and integrations before handover.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Commissioning support includes on-site assistance, operator training, documentation handover, and post-launch support to ensure smooth operation. We document all findings and provide recommendations for optimization and future enhancements.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}