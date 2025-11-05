"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bgUrl = "https://images.unsplash.com/photo-1508898578281-774ac4893a2b?w=1920&h=1080&fit=crop&q=80";

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full text-white">
        {/* Hero background */}
        <div
          className="fixed inset-0 -z-20 bg-center bg-cover brightness-40"
          style={{ backgroundImage: `url('${bgUrl}')` }}
          aria-hidden
        />

        <header className="min-h-[60vh] flex items-center text-center">
          <div className="max-w-5xl mx-auto py-20 px-6 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
              We design and deliver industrial automation solutions — PLCs, SCADA, robotics and control systems
              that increase throughput, improve quality and reduce downtime.
            </p>
          </div>
        </header>

        <main className="bg-[#f7f7f7] relative z-10 text-[#111827]">
          <section className="max-w-6xl mx-auto py-16 px-6">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Our Mission</h2>
                <p className="text-md md:text-lg text-[#111827]/80 leading-relaxed">
                  Deliver pragmatic automation engineering that balances robust control architecture with
                  practical maintainability. We partner with manufacturers to modernize equipment, digitize
                  operations and translate data into reliable outcomes.
                </p>

                <ul className="mt-6 grid gap-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#111827] text-white">✓</span>
                    <span className="text-[#111827]/90">Turnkey PLC & HMI solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#111827] text-white">✓</span>
                    <span className="text-[#111827]/90">SCADA & data historian integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#111827] text-white">✓</span>
                    <span className="text-[#111827]/90">Robotics & cobot cell integration</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1542831371-d531d36971e6?w=1200&h=800&fit=crop&q=80"
                  alt="Team and automation"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-semibold mb-2">Experienced team</h3>
                  <p className="text-sm text-[#111827]/80">
                    Our engineers have hands-on experience across control platforms, safety systems and commissioning —
                    enabling fast ramp-up and predictable delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border-t border-b py-12">
            <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-[#111827]/70 mt-1">Projects delivered</div>
              </div>

              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-[#111827]/70 mt-1">Years combined experience</div>
              </div>

              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-[#111827]/70 mt-1">Satisfaction & support</div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto py-14 px-6">
            <h3 className="text-2xl font-semibold mb-4">Values</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Practical Engineering</h4>
                <p className="text-sm text-[#111827]/80">Solutions that are maintainable and suited to your production environment.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Safety First</h4>
                <p className="text-sm text-[#111827]/80">Designs that prioritise operator safety and compliance.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Data Driven</h4>
                <p className="text-sm text-[#111827]/80">Practical use of data to reduce downtime and improve yield.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}