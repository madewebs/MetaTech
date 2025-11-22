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
          <div className="max-w-7xl mx-auto py-20 px-4 md:px-12" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Control Panels
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 text-center">
              Custom electrical panels built to spec.
            </p>
          </div>
        </header>

        <main className="bg-[#efefef] relative z-10 text-[#151515]">
          <div className="max-w-7xl mx-auto py-20 px-4" ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Control Panels
            </h2>
            <div className="md:text-xl text-md text-[#151515]/90 text-left">
              <p className="leading-relaxed">
                Design and manufacture electrical control panels, from compact
                machine control units to MCCs.
              </p>
              <p className="mb-4 leading-relaxed">
                We handle enclosure selection, wiring, labelling, testing and full
                documentation for field installation.
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Build:</span> Industrial enclosures, wiring and cable management.</p>
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Docs:</span> Wiring diagrams, BOMs and test certificates.</p>
              <p className="text-base md:text-lg text-[#151515]/80"><span className="font-semibold text-[#151515]">Support:</span> On-site installation and commissioning support.</p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Custom Panel Design</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Every manufacturing operation has unique requirements, and our custom panel design services ensure your electrical control systems are tailored to your specific needs. We work with your engineering team to understand your control architecture, power requirements, and operational constraints. Our design process begins with a comprehensive analysis of your automation requirements, including voltage levels, current ratings, communication protocols, and environmental conditions.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Our panel designers create detailed electrical schematics using industry-standard CAD tools, ensuring all components are properly selected and sized for optimal performance and reliability. We consider thermal management, future expansion, accessibility for maintenance, and compliance with international electrical standards including IEC, NFPA, and CSA requirements.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Enclosure Selection and Protection</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Selecting the right enclosure is critical for ensuring your control panel performs reliably in demanding manufacturing environments. We specify enclosures based on your specific operating conditions, including temperature, humidity, dust, vibration, and chemical exposure. Our expertise covers stainless steel enclosures for washdown environments, powder-coated steel for standard industrial applications, and polycarbonate or aluminum options for specialized requirements.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We ensure proper IP ratings and environmental protection through careful component placement, ventilation design, and cable entry sealing. Our panels meet or exceed the protection requirements of your specific industry, whether that&apos;s food processing, pharmaceutical manufacturing, automotive production, or petrochemical processing.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Wiring and Cable Management</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Professional wiring and cable management are essential for creating reliable, maintainable control panels. Our technicians use color-coded conductors, proper gauge selection, and organized routing to ensure every connection is clear and accessible. We follow strict standards for wire sizing based on current requirements and voltage drop calculations, minimizing losses and ensuring safe operation under all conditions.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                All internal wiring is terminated using appropriate connectors, terminal blocks, or busbar systems depending on your specifications. Cable trays, conduit, and labeling systems are designed for easy troubleshooting and future modifications. We maintain comprehensive documentation of every wire, connection point, and terminal location to support your maintenance and support teams.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Testing and Certification</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Before shipping any control panel, we conduct comprehensive testing and validation to ensure it meets your specifications and all applicable standards. Our testing protocol includes insulation resistance testing, continuity verification, voltage testing, and functional validation of all control circuits. We document all test results and provide signed certificates of compliance that support your facility&apos;s regulatory requirements.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                For critical applications, we can perform additional testing including thermal imaging under load, harmonic analysis, and power quality assessment. Our quality assurance process ensures that every panel leaving our facility operates safely and reliably from the first moment of installation.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Documentation and Support</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                Comprehensive documentation is critical for the long-term success of your control systems. We provide detailed wiring diagrams showing every component connection, bills of materials with part numbers and suppliers, terminal point lists, and test certificates. Our documentation is created using industry-standard formats and tools, ensuring compatibility with your existing documentation systems and making it easy for your maintenance team to understand and work with your panels.
              </p>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                We offer on-site installation support to ensure proper commissioning and integration with your existing equipment. Our technicians can assist with final connections, troubleshooting, operator training, and documentation handover. Post-installation, we&apos;re available for technical support, spare parts recommendations, and future expansion planning as your production needs evolve.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#151515]">Standards Compliance</h3>
              <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
                All our control panels are designed and manufactured in compliance with relevant international standards including IEC 61439, IEC 61326, NFPA 79, and CSA standards. Our facilities maintain ISO 9001 certification, ensuring consistent quality and process control across all panel manufacturing. Whether your application requires specific safety certifications, EMC compliance, or industry-specific standards, we have the expertise to ensure your panels meet all requirements.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}