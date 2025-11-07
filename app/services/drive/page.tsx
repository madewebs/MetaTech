"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const bgUrl = "/one.webp";
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
          <div className="max-w-5xl mx-auto py-20 px-6 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Drive Systems
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              Motion control, VFDs and servo systems.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Drive Systems
            </h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-justify">
              <p className="mb-4 leading-relaxed">
                Design and implement variable frequency drive (VFD) and servo motor
                systems for precise motion control.
              </p>
              <p className="mb-4 leading-relaxed">
                From single-axis parameterisation to multi-axis coordinated motion we
                provide commissioning, tuning and diagnostics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Vendors</h3>
                <p className="text-sm">
                  Siemens, ABB, Schneider, Yaskawa and more.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Services</h3>
                <p className="text-sm">
                  Commissioning, tuning and networked drives integration.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Benefits</h3>
                <p className="text-sm">
                  Improved efficiency, smoother operation and extended equipment life.
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