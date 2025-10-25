"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  // GSAP open/close animation
  useEffect(() => {
    const menu = menuRef.current;
    const items = listRef.current?.querySelectorAll("a") ?? [];
    if (!menu) return;

    // ensure closed baseline
    gsap.set(menu, { overflow: "hidden" });
    if (isOpen) {
      gsap.to(menu, { height: "auto", duration: 0.45, ease: "power2.out" });
      gsap.fromTo(
        items,
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, stagger: 0.05, ease: "power2.out", delay: 0.05 }
      );
    } else {
      gsap.to(menu, { height: 0, duration: 0.35, ease: "power2.inOut" });
    }
  }, [isOpen]);

  return (
    <nav className="z-50 backdrop-blur-xl border-b border-gray-200/30 ">
      {/* glassy without color styles */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-26">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-xl font-medium uppercase tracking-wider">
              <Image
                alt="Meta Tech Automation Logo"
                src="/logo.webp"
                width={115}
                height={115}
              />
              <span className="hidden md:inline-block font-semibold tracking-tighter text-[#012157]">METATECH <span className="text-[#0196c7]">A</span>UTOMATION</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block tracking-wider uppercase text-sm">
            <div className="ml-10 flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium transition-all duration-1000"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none leading-none transition-transform duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <TfiClose size={22} aria-hidden />
              ) : (
                <GiHamburgerMenu  size={22} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden h-0 overflow-hidden" ref={menuRef} aria-hidden={!isOpen}>
        <div ref={listRef}>
          <div className="px-5 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-3 py-5 font-medium uppercase tracking-wider text-sm border-b border-gray-600"
                onClick={handleLinkClick}
              >
                <span>{link.name}</span>
                <span aria-hidden="true" className="ml-2 text-gray-300">{">"}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}