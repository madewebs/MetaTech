"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      className="w-full py-10 md:py-18 bg-[hsl(60,100%,100%)] px-4 md:px-24 relative overflow-hidden"
    >
      {/* Background SVG for Desktop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.webp"
          alt="Background"
          fill
          className="object-cover opacity-75"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#022e70] tracking-tighter "
        >
          Powering Tomorrow, Today.
        </h2>

        <div className="">
          <div className="grid gap-12 items-center">
            <div>
              <p className="text-md md:text-xl text-[#282828] leading-snug tracking-wide">
                We are a leading provider of industrial automation solutions,
                specializing in cutting-edge robotics, cobots, and automated
                production systems. With years of experience, we help businesses
                transform their operations through intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}