"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const bgUrl =
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920&h=1080&fit=crop";

  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white">
        {/* Fixed background (separate element so mobile works reliably) */}
        <div
          className="fixed inset-0 -z-20 bg-center bg-cover brightness-40"
          style={{ backgroundImage: `url('${bgUrl}')` }}
          aria-hidden
        />
        {/* Hero / intro with short tagline - left aligned.
            Inner container spacing now matches main (max-w-5xl mx-auto py-20 px-6 md:px-12) */}
        <header className="min-h-[70vh] flex items-center">
          <div className="max-w-5xl mx-auto py-20 px-6 md:px-12"
            ref={headerRef}>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-left"
            >
              PLC Programming
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              Precision control. Reliable uptime.
            </p>
          </div>
        </header>

        {/* Sections that "override" the fixed bg */}
        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-6xl mx-auto py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              PLC Programming
            </h1>
            <div className="md:text-xl text-md text-[#151515]/90 text-justify">
              <p className="mb-4 leading-relaxed">
                Our PLC programming service delivers reliable, maintainable control
                systems for industrial automation. We develop modular ladder,
                structured text and function block code tailored to your hardware
                platform and operational requirements. Every solution focuses on
                safety, deterministic performance and easy troubleshooting.
              </p>

              <p className="mb-4 leading-relaxed">
                Typical engagements include system design, I/O mapping, HMI
                integration, interlocks, alarm handling, recipe management and
                on-site commissioning. We apply best practices: version control,
                simulation where applicable, comprehensive documentation and
                acceptance testing to minimise commissioning time and long‑term
                support effort.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Platforms</h3>
                <p className="text-sm">
                  Siemens, Rockwell/Allen‑Bradley, Schneider, Mitsubishi, Omron
                  and others.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Deliverables</h3>
                <p className="text-sm">
                  Source code, I/O & tag documentation, HMI screens, test
                  procedures and commissioning support.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Benefits</h3>
                <p className="text-sm">
                  Reduced downtime, predictable behaviour, easier maintenance and
                  faster ramp-up for operators.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm">
                Contact us to discuss a proof‑of‑concept, code audit or full
                system delivery. We can work to your standards or provide a
                turnkey control solution.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
