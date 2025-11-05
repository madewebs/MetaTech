"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const services = [
    { 
      id: 1, 
      image: "/one.webp",
      title: "PLC Programming",
      description: "Advanced programmable logic controller solutions for automated systems.",
      href: "/services/plc-programming"
    },
    { 
      id: 2, 
      image: "/two.webp",
      title: "Robotics Integration",
      description: "Seamless integration of industrial robots and cobots.",
      href: "/services/robotics-integration"
    },
    { 
      id: 3, 
      image: "/three.webp",
      title: "SCADA Systems",
      description: "Supervisory control and data acquisition for real-time monitoring.",
      href: "/services/scada-systems"
    },
    { 
      id: 4, 
      image: "/one.webp",
      title: "Drive Systems",
      description: "Variable frequency drives and motion control solutions.",
      href: "/services/drive-systems"
    },
    { 
      id: 5, 
      image: "/two.webp",
      title: "Control Panels",
      description: "Custom electrical control panel design and manufacturing.",
      href: "/services/control-panels"
    },
    { 
      id: 6, 
      image: "/three.webp",
      title: "Automation Design",
      description: "Complete automation system design and implementation.",
      href: "/services/automation-design"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setItemsPerView(mobile ? 1.15 : 3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      // Buttons animation
      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // GSAP Hover Animations for Images
  useEffect(() => {
    imageRefs.current.forEach((imageDiv) => {
      if (imageDiv) {
        const image = imageDiv.querySelector('img');
        
        imageDiv.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.2,
            duration: 0.8,
            ease: "power2.out",
          });
        });

        imageDiv.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  // GSAP Slider Animation
  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: isMobile 
          ? `-${currentIndex * (100 / itemsPerView)}%`
          : `-${currentIndex * (100 / itemsPerView)}%`,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [currentIndex, itemsPerView, isMobile]);

  const maxIndex = Math.max(0, services.length - Math.floor(itemsPerView));

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };


  return (
    <div className="w-full bg-[#d8d8d8] text-[#151515] py-16 overflow-hidden">
      <div className='mx-auto max-w-7xl px-6'>
        <div className="mb-12">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-medium mb-3">
            Our Services
          </h2>
          <p ref={captionRef} className="text-[#151515]/70 text-md md:text-xl max-w-2xl">
            Comprehensive automation solutions tailored to transform your industrial operations with cutting-edge technology and expert precision.
          </p>
        </div>
        
        <div className="relative -mx-6 md:mx-0">
          {/* Grid Container */}
          <div
            className="overflow-hidden px-6 md:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={sliderRef}
              className="flex gap-4 md:gap-6"
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-[85%] md:w-[calc(33.333%-16px)]"
                >
                  <Link href={service.href} className="block">
                    <div className="bg-[#151515] rounded-sm overflow-hidden duration-300 cursor-pointer group">
                      <div 
                        ref={(el) => {
                          imageRefs.current[index] = el;
                        }}
                        className="relative h-[500px] w-full overflow-hidden"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Text Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm md:text-base text-white/80 mb-3 line-clamp-2">
                            {service.description}
                          </p>
                          <span className="text-sm md:text-md font-normal uppercase tracking-widest text-white transition-colors duration-300 flex items-center gap-2">
                            Read More
                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Buttons - Bottom Right */}
          <div ref={buttonsRef} className="flex gap-4 justify-end mt-6 px-6 md:px-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="group relative w-10 h-10 border-2 border-[#151515] disabled:border-[#151515]/30 hover:border-[#151515] transition-all duration-300 disabled:cursor-not-allowed overflow-hidden"
              aria-label="Previous"
            >
              <span className="absolute inset-0 bg-[#151515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 group-disabled:translate-x-0 group-disabled:bg-transparent"></span>
              <FaChevronLeft className="relative z-10 mx-auto text-[#151515] group-hover:text-[#d8d8d8] group-disabled:text-[#151515]/30 transition-colors duration-300" size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="group relative w-10 h-10 border-2 border-[#151515] disabled:border-[#151515]/30 hover:border-[#151515] transition-all duration-300 disabled:cursor-not-allowed overflow-hidden"
              aria-label="Next"
            >
              <span className="absolute inset-0 bg-[#151515] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 group-disabled:translate-x-0 group-disabled:bg-transparent"></span>
              <FaChevronRight className="relative z-10 mx-auto text-[#151515] group-hover:text-[#d8d8d8] group-disabled:text-[#151515]/30 transition-colors duration-300" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
