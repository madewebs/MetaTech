"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "Home", href: "" },
    { name: "About", href: "/#" },
    { name: "Service", href: "/#" },
    { name: "Projects", href: "/#" },
    { name: "Contact Us", href: "/#" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Handle scroll with animation
  useEffect(() => {
    const handleScroll = () => {
      const landingPageHeight = window.innerHeight * 0.50;
      
      if (window.scrollY > landingPageHeight) {
        if (!isScrolled) {
          setIsScrolled(true);
          
          // Slide down animation
          gsap.fromTo(
            navRef.current,
            { y: -100, backgroundColor: "rgba(255, 255, 255, 0.05)" },
            {
              y: 0,
              backgroundColor: "rgba(255, 255, 255, 1)",
              duration: 0.5,
              ease: "power2.out",
            }
          );
        }
      } else {
        if (isScrolled) {
          setIsScrolled(false);
          
          // Reset to transparent
          gsap.to(navRef.current, {
            y: 0,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // GSAP open/close animation
  useEffect(() => {
    const menu = menuRef.current;
    const items = listRef.current?.querySelectorAll("a") ?? [];
    if (!menu) return;

    tlRef.current?.kill();

    if (isOpen) {
      // Opening animation
      gsap.set(menu, { 
        display: "block",
        height: 0,
        overflow: "hidden"
      });
      gsap.set(items, { opacity: 0, y: -15 });

      const tl = gsap.timeline();
      tl.to(menu, { 
        height: "auto", 
        duration: 0.4, 
        ease: "power2.out" 
      })
      .to(items, { 
        opacity: 1, 
        y: 0, 
        duration: 0.2, 
        stagger: 0.03, 
        ease: "power2.out" 
      }, "-=0.2");

      tlRef.current = tl;
    } else if (menu.style.display !== "none") {
      // Closing animation - only run if menu was open
      const tl = gsap.timeline();
      tl.to(items, { 
        opacity: 0, 
        y: -15, 
        duration: 0.2, 
        stagger: 0.03, 
        ease: "power2.in" 
      })
      .to(menu, { 
        height: 0, 
        duration: 0.3, 
        ease: "power2.inOut" 
      }, "-=0.1")
      .set(menu, { display: "none" });

      tlRef.current = tl;
    }

    return () => {
      tlRef.current?.kill();
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`${
        isScrolled ? "fixed" : "absolute"
      } top-0 left-0 right-0 z-200 border-b ${
        isScrolled ? "border-gray-200 shadow-md" : "border-white/10 backdrop-blur-xsm"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-26">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-xl font-medium uppercase tracking-wider">
              <Image
                alt="Meta Tech Automation Logo"
                src="/logo.webp"
                width={115}
                height={115}
              />
              <span
                className={`hidden md:inline-block font-semibold tracking-tighter transition-all duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                }`}
              >
                METATECH <span className="text-[#0196c7]">A</span>UTOMATION
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block tracking-wider uppercase text-sm">
            <div className="ml-10 flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:text-[#0196c7]"
                      : "text-white hover:text-gray-300 drop-shadow-md"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none leading-none transition-all duration-300 ${
                isScrolled ? "text-gray-900" : "text-white drop-shadow-lg"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <TfiClose size={22} aria-hidden />
              ) : (
                <GiHamburgerMenu size={25} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden backdrop-blur-sm border-t transition-colors duration-300 ${
          isScrolled
            ? "bg-white/95 border-gray-200"
            : "bg-black/20 border-white/10"
        }`}
        ref={menuRef}
        style={{ display: "none", height: 0, overflow: "hidden" }}
        aria-hidden={!isOpen}
      >
        <div ref={listRef}>
          <div className="px-5 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between px-3 py-5 font-medium uppercase tracking-wider text-sm transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-900 border-b border-gray-200 hover:bg-gray-100"
                    : "text-white border-b border-white/10 hover:bg-white/5"
                }`}
                onClick={handleLinkClick}
              >
                <span>{link.name}</span>
                <span aria-hidden="true" className={`ml-2 ${isScrolled ? "text-gray-400" : "text-gray-300"}`}>
                  {">"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}