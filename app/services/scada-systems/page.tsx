"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const bgUrl = "/three.webp";
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">SCADA Systems</h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">Real-time monitoring, control and historian solutions.</p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">SCADA Systems</h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-justify">
              <p className="mb-4 leading-relaxed">
                Design and deploy Supervisory Control and Data Acquisition systems for plant-wide monitoring,
                alarming and historian storage. We integrate securely with PLCs, MES and cloud services.
              </p>
              <p className="mb-4 leading-relaxed">
                Deliverables include operator screens, alarm strategy, trending, OPC/UA connectivity and secure remote access.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Platforms</h3>
                <p className="text-sm">Ignition, WinCC, FactoryTalk and bespoke HMI solutions.</p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Integration</h3>
                <p className="text-sm">OPC/UA, Modbus, MQTT and historian configuration.</p>
              </div>

              <div className="p-4 rounded-md bg-white shadow">
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm">Testing, training and maintenance packages.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}