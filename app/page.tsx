"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Sponsers from "@/components/Sponsers";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const prevIndexRef = useRef(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const images = [
    {
      src: "one.webp",
      text: "Automated Production Lines.",
      subtext: "End-to-end controls for precision, safety, and uptime. Seamless integration of machinery with real-time monitoring to maximize efficiency.",
    },
    {
      src: "three.webp",
      text: "Cobots and Robotics.",
      subtext: "Collaborative robots integrated with vision and safety. Advanced cobots work alongside humans with AI-driven vision and safety protocols.",
    },
  ];

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
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
    setTimeout(() => startAutoplay(), 1000);
  };

  const prev = () => {
    goTo(currentImage - 1);
    setTimeout(() => startAutoplay(), 1000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next
      next();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right - prev
      prev();
    }
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
      // Set z-index for all slides
      slideRefs.current.forEach((slide, idx) => {
        if (!slide) return;
        if (idx === curr) {
          gsap.set(slide, { zIndex: 2, opacity: 0 });
        } else if (idx === prev) {
          gsap.set(slide, { zIndex: 1, opacity: 1 });
        } else {
          gsap.set(slide, { zIndex: 0, opacity: 0 });
        }
      });

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Prepare current text
      if (currChildren.length) gsap.set(currChildren, { y: 12, opacity: 0 });

      // Animate out previous text (if different)
      if (prev !== curr && prevChildren.length) {
        tl.to(prevChildren, { y: -8, opacity: 0, duration: 0.3, stagger: 0.03 }, 0);
      }

      // Fade in current image smoothly
      if (currSlide) {
        tl.to(currSlide, { opacity: 1, duration: 0.5, ease: "power1.inOut" }, 0.1);
      }

      // Hide previous slide after fade in completes
      if (prev !== curr && prevSlide) {
        tl.set(prevSlide, { opacity: 0, zIndex: 0 }, 0.6);
      }

      // Animate in current text
      if (currChildren.length) {
        tl.to(currChildren, { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power1.out" }, 0.3);
      }

      tlRef.current = tl;
    });
    prevIndexRef.current = curr;
    return () => ctx.revert();
  }, [currentImage]);

  return (
    <>
      <Navbar />
      {/* hero slides */}
      <div 
        id='#home'
        className="relative min-h-[90vh] w-full overflow-hidden font-light z-100"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              className="object-cover brightness-40"
              priority={index === 0}
              sizes="100vw"
              unoptimized
            />
            <div className="relative h-full w-full flex justify-center p-6 md:px-22">
              <div className="w-full md:max-w-screen flex items-center md:px-16">
                <div
                  className=""
                  ref={(el) => {
                    if (el) textRefs.current[index] = el;
                  }}
                >
                  <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl mb-4 tracking-tight">
                    {item.text}
                  </h1>
                  {item.subtext && (
                    <p className="text-md md:text-lg tracking-wider">
                      {item.subtext}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom-left nav arrows */}
        <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="h-8 w-8 flex items-center justify-center rounded-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="h-8 w-8 flex items-center justify-center rounded-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out"
          >
            <span aria-hidden>→</span>
          </button>
        </div>

        {/* Bottom-center indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
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
      <section id="#about">
          <About />
        </section>

        <section id="#services">
          <Services />
        </section>

        <section id="#projects">
          <Project showAll={false} limit={3} />
          <Sponsers />
        </section>

        <section id="#contact">
          <Contact />
        </section>
        <Footer />
    </>
  );
}