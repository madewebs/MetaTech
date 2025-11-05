"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
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
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: captionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Content title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Paragraphs animations with stagger
      paragraphsRef.current.forEach((paragraph, index) => {
        if (paragraph) {
          gsap.from(paragraph, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 85%",
              once: true,
            },
          });
        }
      });

      // Button animation
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='w-full bg-[#d8d8d8] text-[#151515] py-12 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Header Section */}
        <div className='mb-12'>
          <h2 ref={headingRef} className='text-4xl md:text-5xl font-medium mb-4'>
            About Us
          </h2>
          <p ref={captionRef} className='text-[#151515]/70 text-md md:text-xl max-w-3xl'>
            Pioneering automation excellence since 2009, transforming industries through innovative solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Image Section */}
          <div ref={imageRef} className='relative h-[400px] md:h-full rounded-sm overflow-hidden'>
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1200&fit=crop"
              alt="About Us"
              fill
              className='object-cover'
              unoptimized
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#151515]/60 to-transparent'></div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className='flex flex-col justify-start space-y-6'>
            <h3 ref={titleRef} className='text-3xl md:text-4xl font-medium tracking-tight'>
              Driving Industrial Revolution 4.0
            </h3>
            <p 
              ref={(el) => {
                paragraphsRef.current[0] = el;
              }}
              className='text-base md:text-lg text-[#151515]/80 leading-relaxed text-justify'
            >
              We are a leading automation solutions provider, specializing in PLC programming, 
              robotics integration, and advanced control systems. Our team of expert engineers 
              brings decades of combined experience to deliver tailored solutions that optimize 
              operations and drive efficiency.
            </p>
            <p 
              ref={(el) => {
                paragraphsRef.current[1] = el;
              }}
              className='text-base md:text-lg text-[#151515]/80 leading-relaxed text-justify'
            >
              From concept to commissioning, we partner with clients across industries to 
              implement cutting-edge automation technologies that enhance productivity, 
              reduce costs, and ensure sustainable growth in an increasingly competitive landscape.
            </p>
            <div ref={buttonRef} className='pt-4'>
              <Link href="/about" className='bg-[#151515] text-[#d8d8d8] px-8 py-3 rounded-sm hover:bg-[#303030] transition-colors duration-300 uppercase tracking-wider text-sm font-medium'>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
