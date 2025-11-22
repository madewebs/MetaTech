"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  });

  const clients = [
    { id: 1, name: "Company 1", logo: "assets/tata.webp" },
    { id: 2, name: "Company 2", logo: "assets/force.webp" },
    { id: 3, name: "Company 3", logo: "assets/ford.webp" },
    { id: 4, name: "Company 4", logo: "assets/hitachi.webp" },
    { id: 5, name: "Company 5", logo: "assets/hyundai.png" },
    { id: 6, name: "Company 6", logo: "assets/mahi.webp" },
    { id: 7, name: "Company 7", logo: "assets/mahiold.webp" },
    { id: 8, name: "Company 8", logo: "assets/talkisha.webp" },
    { id: 9, name: "Company 8", logo: "assets/webasto.webp" },
    { id: 10, name: "Company 8", logo: "assets/wooshin.png" },
    { id: 11, name: "Company 9", logo: "assets/kia.webp" },


  ];

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Caption animation
      gsap.from(captionRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: captionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Counter animations
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          // Animate clients counter
          gsap.to(counts, {
            clients: 30,
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              setCounts(prev => ({ ...prev, clients: Math.floor(this.targets()[0].clients) }));
            }
          });

          // Animate projects counter
          gsap.to(counts, {
            projects: 50,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: function() {
              setCounts(prev => ({ ...prev, projects: Math.floor(this.targets()[0].projects) }));
            }
          });

          // Animate years counter
          gsap.to(counts, {
            years: 6,
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              setCounts(prev => ({ ...prev, years: Math.floor(this.targets()[0].years) }));
            }
          });

          // Animate satisfaction counter
          gsap.to(counts, {
            satisfaction: 98,
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              setCounts(prev => ({ ...prev, satisfaction: Math.floor(this.targets()[0].satisfaction) }));
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#151515] text-[#d8d8d8] pt-20 overflow-hidden">
      <div className='mx-auto max-w-5xl px-4'>
        {/* Header Section */}
        <div className="md:text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-medium mb-4">
            Our Trusted Clients
          </h2>
          <p ref={captionRef} className="text-[#d8d8d8]/70 text-md md:text-xl max-w-3xl md:mx-auto">
            Partnering with industry leaders worldwide to deliver exceptional automation solutions and drive innovation across diverse sectors.
          </p>
        </div>

        {/* Logos Grid (static display, no GSAP animation) */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 items-center">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-2">
              <div className="relative w-32 h-20 md:w-36 md:h-24">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* Stats Section */}
      <div ref={statsRef} className="bg-[#fefefe] text-[#151515] py-16 mt-20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#0196c7] mb-2">
              {counts.clients}+
            </h3>
            <p className="text-sm md:text-base">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#0196c7] mb-2">
              {counts.projects}+
            </h3>
            <p className="text-sm md:text-base">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#0196c7] mb-2">
              0{counts.years}+
            </h3>
            <p className="text-sm md:text-base">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#0196c7] mb-2">
              {counts.satisfaction}%
            </h3>
            <p className="text-sm md:text-base">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
