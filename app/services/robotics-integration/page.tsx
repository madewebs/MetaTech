"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const bgUrl = "/two.webp";
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
        <div
          className="fixed inset-0 -z-20 bg-center bg-cover brightness-40"
          style={{ backgroundImage: `url('${bgUrl}')` }}
          aria-hidden
        />
        <header className="min-h-[60vh] flex items-center">
          <div className="max-w-5xl mx-auto py-20 px-6 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Robotics Integration
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              Seamless robot & cobot solutions for modern production.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Robotics Integration</h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-justify">
              <p className="mb-4 leading-relaxed">
                We integrate industrial robots and collaborative robots (cobots) into production lines,
                handling motion, vision, safety and cycle optimisation. Our engineers work with integrators
                and OEMs to ensure deterministic performance and operator safety.
              </p>
              <p className="mb-4 leading-relaxed">
                Services include cell design, robot programming (KUKA, ABB, Fanuc, UR), vision integration,
                safety zoning and on-site commissioning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Capabilities</h3>
                <p className="text-sm">Pick & place, palletising, welding, vision-guided tasks.</p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Safety</h3>
                <p className="text-sm">Risk assessments, safety PLCs and certification support.</p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Outcomes</h3>
                <p className="text-sm">Higher throughput, consistent quality and safer collaboration.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}