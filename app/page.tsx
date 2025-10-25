"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const prevIndexRef = useRef(0);

  const images = [
    {
      src: "one.webp",
      text: "Automated Production Lines",
      subtext: "End-to-end controls for precision, safety, and uptime.",
    },
    {
      src: "three.webp",
      text: "Cobots and Robotics",
      subtext: "Collaborative robots integrated with vision and safety.",
    },
  ];

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  const goTo = (idx: number) => {
    setCurrentImage((idx + images.length) % images.length);
  };

  const next = () => {
    goTo(currentImage + 1);
    // Pause autoplay briefly to let manual transition finish smoothly
    setTimeout(() => startAutoplay(), 1200);
  };

  const prev = () => {
    goTo(currentImage - 1);
    // Pause autoplay briefly to let manual transition finish smoothly
    setTimeout(() => startAutoplay(), 1200);
  };

  // Animate image and text simultaneously
  useEffect(() => {
    const curr = currentImage;
    const prev = prevIndexRef.current;
    const currSlide = slideRefs.current[curr];
    const prevSlide = slideRefs.current[prev];
    const currTextWrap = textRefs.current[curr];
    const prevTextWrap = textRefs.current[prev];
    const currChildren = currTextWrap ? Array.from(currTextWrap.children) : [];
    const prevChildren = prevTextWrap ? Array.from(prevTextWrap.children) : [];

    tlRef.current?.kill();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Prepare current slide and text
      if (currSlide) gsap.set(currSlide, { opacity: 0, scale: 1.02 });
      if (currChildren.length) gsap.set(currChildren, { y: 12, opacity: 0 });

      // Animate out previous (if different)
      if (prev !== curr && prevSlide) {
        tl.to(prevSlide, { opacity: 0, scale: 1.01, duration: 0.8 }, 0);
      }
      if (prev !== curr && prevChildren.length) {
        tl.to(prevChildren, { y: -8, opacity: 0, duration: 0.6, stagger: 0.05 }, 0);
      }

      // Animate in current (after out finishes for smoother loop)
      if (currSlide) {
        tl.to(currSlide, { opacity: 1, scale: 1, duration: 1.2 }, 0.4);
      }
      if (currChildren.length) {
        tl.to(currChildren, { y: 0, opacity: 1, duration: 1.2, stagger: 0.08 }, 0.4);
      }

      tlRef.current = tl;
    });
    prevIndexRef.current = curr;
    return () => ctx.revert();
  }, [currentImage]);

  return (
    <>
      <Navbar />
      <div className="relative min-h-[73vh] md:min-h-[75vh] w-full overflow-hidden font-light z-100">
        {/* Slides */}
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) slideRefs.current[index] = el;
            }}
            className="absolute inset-0 z-0 will-change-transform will-change-opacity"
          >
            <Image
              src={item.src}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
              sizes="100vw"
              unoptimized
            />
            <div className="relative h-full w-full flex justify-center p-8 md:px-22 text-[#fefefe]">
              <div className="w-full md:max-w-screen flex items-center md:px-16">
                <div
                  className="tracking-tighter"
                  ref={(el) => {
                    if (el) textRefs.current[index] = el;
                  }}
                >
                  <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
                    {item.text}
                  </h1>
                  {item.subtext && (
                    <p className="text-lg md:text-xl">
                      {item.subtext}
                    </p>
                  )}
                  <button className="border p-2 text-sm mt-3 tracking-normal">
                    KNOW MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom-left nav arrows */}
        <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 text-[#fefefe]">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="h-10 w-10 flex items-center justify-center rounded-md border opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out"
          >
            <span aria-hidden>&lt;</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="h-10 w-10 flex items-center justify-center rounded-md border opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out"
          >
            <span aria-hidden>&gt;</span>
          </button>
        </div>

        {/* Bottom-center indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-[#fefefe]">
          {images.map((_, i) => {
            const active = i === currentImage;
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  goTo(i);
                  startAutoplay();
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full border transition-[width,opacity,transform] duration-600 ease-out will-change-[width,opacity] ${
                  active ? "w-8 opacity-100" : "w-3 opacity-60"
                }`}
              />
            );
          })}
        </div>
      </div>
      <div>rj</div>
    </>
  );
}