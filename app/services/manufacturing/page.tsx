"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const bgUrl = "/two.webp";
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
          <div className="max-w-5xl mx-auto py-20 px-6 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Control Panels
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              Custom electrical panels built to spec.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Control Panels
            </h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-justify">
              <p className="mb-4 leading-relaxed">
                Design and manufacture electrical control panels, from compact
                machine control units to MCCs.
              </p>
              <p className="mb-4 leading-relaxed">
                We handle enclosure selection, wiring, labelling, testing and full
                documentation for field installation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Build</h3>
                <p className="text-sm">
                  Industrial enclosures, wiring and cable management.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Docs</h3>
                <p className="text-sm">Wiring diagrams, BOMs and test certificates.</p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm">
                  On-site installation and commissioning support.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}