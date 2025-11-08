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
          <div className="max-w-5xl mx-auto py-20 px-4 md:px-12" ref={headingRef}>
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
          <div className="mx-auto max-w-5xl px-4">
            <div ref={contentRef} className="space-y-12">
              {/* Rockwell */}
              <section>
                <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#151515]">Rockwell / Allen Bradley</h2>
                <p className="text-base md:text-lg text-[#151515]/80 mb-4 text-justify">
                  Rockwell is one of the leading automation solution providers worldwide. We have a highly experienced team in Rockwell/AB products, including PLC, HMI, Drives, Servo, and Safety Devices. Our services cover both programming and hardware support.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-[#151515]">PLC Series:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                      <li>Micro Logix</li>
                      <li>Compact Logix</li>
                      <li>Control Logix</li>
                      <li>Guard Logix</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-[#151515]">Communication Protocols:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                      <li>Ethernet</li>
                      <li>DeviceNet</li>
                      <li>RS 232</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-[#151515]">Software Skills:</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                    <li>RS Logix 500</li>
                    <li>RS Logix 5000</li>
                    <li>Studio 5000</li>
                    <li>CCW</li>
                    <li>Factory Talk Studio</li>
                    <li>RSNetWorx</li>
                  </ul>
                </div>
                <p className="text-[#151515]/80 mt-4 text-justify ">
                  Our team has extensive experience with standard programming in Rockwell, including DCP Std, APA/FNA Std, and GM Std used by major OEMs.
                </p>
              </section>

              {/* Siemens */}
              <section className="border-t pt-8">
                <h2 className="text-xl md:text-3xl font-semibold mb-4 text-[#151515]">Siemens</h2>
                <p className="text-base md:text-lg text-[#151515]/80 mb-4 text-justify">
                  Siemens is a leading automation solution provider for industries. Our team has over 6 years of experience in Siemens products and their applications at both hardware and software levels.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-[#151515]">Communication Protocols:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                      <li>Profibus</li>
                      <li>Profinet</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-[#151515]">Software Skills:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                      <li>Simatic Manager</li>
                      <li>TIA Portal</li>
                      <li>WinCC</li>
                      <li>V-Assistant</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Mitsubishi */}
              <section className="border-t pt-8">
                <h2 className="text-xl md:text-3xl font-semibold mb-4 text-[#151515]">Mitsubishi</h2>
                <p className="text-base md:text-lg text-[#151515]/80 mb-4 text-justify">
                  Mitsubishi is a leading automation service provider commonly used by major Japanese manufacturers like Suzuki and Honda. Our services are primarily in software with an experienced team working on Mitsubishi PLC, HMI, and Drives.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-[#151515]">PLC Series:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                      <li>MELSEC-Q Series</li>
                      <li>MELSEC-F Series</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-[#151515]">Communication Protocols:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                      <li>DeviceNet</li>
                      <li>CC Link</li>
                      <li>RS 232</li>
                      <li>RS 485</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-[#151515]">Software Skills:</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#151515]/80">
                    <li>GX Developer</li>
                    <li>GX Works</li>
                    <li>GT Designer</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}
