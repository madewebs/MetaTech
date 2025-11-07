"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

export default function Page() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bgUrl = "https://source.unsplash.com/1600x900/?industrial,automation";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
    }, headerRef);
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
        <header className="min-h-[50vh] flex items-center">
          <div className="max-w-5xl mx-auto py-20 px-6 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">Projects</h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90">
              Visual references and recent work imagery.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          {/* show all cards on projects page */}
          <Project showAll />
        </main>
      </div>
      <Footer />
    </>
  );
}