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
          <div className="max-w-5xl mx-auto py-20 px-4 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Drive Systems
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              Motion control, VFDs and servo systems.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-7xl mx-auto py-20 px-4" ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Drive Systems
            </h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-left">
              <p className="leading-relaxed">
                Design and implement variable frequency drive (VFD) and servo motor
                systems for precise motion control.
              </p>
              <p className="mb-4 leading-relaxed">
                From single-axis parameterisation to multi-axis coordinated motion we
                provide commissioning, tuning and diagnostics.
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Vendors:</span> Siemens, ABB, Schneider, Yaskawa and more.</p>
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Services:</span> Commissioning, tuning and networked drives integration.</p>
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Benefits:</span> Improved efficiency, smoother operation and extended equipment life.</p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">VFD Technology</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Variable Frequency Drives are essential components in modern industrial automation, enabling precise control of electric motor speeds and torque. Our expertise covers a wide range of VFD applications from simple fan and pump speed control to complex multi-motor synchronization. We specialize in selecting the right drive technology for your specific application, whether it`&apos`s AC induction motors, permanent magnet motors, or synchronous motors.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Our team understands the critical parameters that affect VFD performance including voltage drop compensation, acceleration ramps, deceleration profiles, and thermal management. We configure drives to match your mechanical load characteristics, ensuring optimal energy efficiency and reduced mechanical stress on equipment. This results in lower operating costs and extended motor lifespan.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Servo Motor Systems</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                For applications requiring high precision and dynamic response, servo motor systems offer unmatched performance. Our servo expertise encompasses feedback control, closed-loop tuning, and real-time synchronization across multiple axes. We work with both stepper and brushless servo motors, selecting the optimal solution based on your speed, torque, and accuracy requirements.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We provide comprehensive commissioning services including servo parameter tuning, encoder calibration, and gain optimization to achieve stable and responsive motion control. Our advanced tuning techniques minimize overshoot, reduce settling time, and eliminate oscillations, resulting in smooth, precise positioning that meets the tightest tolerances.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Multi-Axis Coordination</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Complex manufacturing processes often require multiple axes to operate in perfect synchronization. Whether you need electronic line-shaft control, gantry alignment, or coordinated conveyor systems, we design solutions that maintain timing accuracy across all axes. Our approach uses advanced communication protocols and real-time control algorithms to achieve microsecond-level synchronization.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We handle the complete implementation from hardware selection and network architecture to control logic programming and commissioning. Our multi-axis systems support load sharing, tension control, and adaptive speed compensation, enabling you to achieve production rates and quality levels previously thought impossible.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Commissioning and Support</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Proper commissioning is critical to ensuring your drive systems perform reliably from day one. Our commissioning process includes detailed load testing, parameter verification, safety validation, and performance benchmarking. We use specialized diagnostic equipment to measure motor current, voltage, temperature, and vibration, identifying any potential issues before they cause problems.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Beyond initial startup, we provide ongoing support including preventive maintenance recommendations, diagnostic troubleshooting, and performance optimization. Our technical team is available for remote consultation and on-site support, helping you maximize uptime and extend the life of your drive systems. We maintain comprehensive commissioning records and provide detailed documentation to support your future maintenance and upgrades.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Energy Efficiency</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Drive systems properly configured and tuned can significantly reduce energy consumption compared to fixed-speed alternatives. By matching motor speed to actual load requirements, VFDs eliminate waste and reduce peak power demand. Our efficiency-focused designs incorporate regenerative braking, power factor correction, and thermal optimization to minimize operating costs.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We provide energy audits and consumption analysis to quantify the savings potential of your drive system upgrades. Many of our clients achieve 20-40% energy savings after implementing optimized drive controls, with payback periods of just 2-3 years. These improvements also reduce your environmental footprint and contribute to sustainability goals.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}