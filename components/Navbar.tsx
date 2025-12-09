"use client";

import Link from "next/link";
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
  const btnRef = useRef<HTMLButtonElement>(null);
  const iconHamburgerRef = useRef<HTMLSpanElement>(null);
  const iconCloseRef = useRef<HTMLSpanElement>(null);

  // store original body/html styles so we can restore them exactly
  const originalBodyStyles = useRef<{
    overflow?: string;
    htmlOverflow?: string;
    paddingRight?: string;
  } | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Service", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact Us", href: "/#contact" },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      
      // Use setTimeout to ensure menu closes before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If link has a hash, prevent default and handle navigation
    if (href.includes("#")) {
      e.preventDefault();
      const [path, sectionId] = href.split("#");
      
      // If we're on the home page, just scroll
      if (window.location.pathname === "/" || window.location.pathname === "") {
        scrollToSection(sectionId);
      } else {
        // If on a different page, navigate to home and then scroll
        window.location.href = href;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const landingPageHeight = window.innerHeight * 0.5;

      if (window.scrollY > landingPageHeight) {
        if (!isScrolled) {
          setIsScrolled(true);
          gsap.fromTo(
            navRef.current,
            { y: -100 },
            {
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        }
      } else {
        if (isScrolled) {
          setIsScrolled(false);
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // compute top offset and remaining height
  const computeLayout = () => {
    const menu = menuRef.current;
    if (!menu || !navRef.current) return { top: 0, height: 0 };
    const navRect = navRef.current.getBoundingClientRect();
    const top = Math.max(0, Math.ceil(navRect.height));
    const height = Math.max(0, window.innerHeight - top);
    return { top, height };
  };

  // lock body scroll when menu open to remove extra scrollbar (preserve padding to avoid layout shift)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      // save original styles only once per open
      if (!originalBodyStyles.current) {
        originalBodyStyles.current = {
          overflow: document.body.style.overflow,
          htmlOverflow: document.documentElement.style.overflow,
          paddingRight: document.body.style.paddingRight,
        };
      }

      // avoid layout shift by adding padding equal to scrollbar width
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // restore original styles
      if (originalBodyStyles.current) {
        document.body.style.overflow = originalBodyStyles.current.overflow ?? "";
        document.documentElement.style.overflow = originalBodyStyles.current.htmlOverflow ?? "";
        document.body.style.paddingRight = originalBodyStyles.current.paddingRight ?? "";
        originalBodyStyles.current = null;
      }
    }

    // cleanup on unmount
    return () => {
      if (originalBodyStyles.current) {
        document.body.style.overflow = originalBodyStyles.current.overflow ?? "";
        document.documentElement.style.overflow = originalBodyStyles.current.htmlOverflow ?? "";
        document.body.style.paddingRight = originalBodyStyles.current.paddingRight ?? "";
        originalBodyStyles.current = null;
      }
    };
  }, [isOpen]);

  // Open/close animations: menu "flows" down from bottom of navbar (height anim)
  useEffect(() => {
    const menu = menuRef.current;
    const items = (listRef.current?.querySelectorAll("a") ?? []) as NodeListOf<HTMLElement>;
    if (!menu) return;

    tlRef.current?.kill();

    const { top, height } = computeLayout();

    // set base styles so menu sits under nav
    gsap.set(menu, {
      position: "fixed",
      left: 0,
      right: 0,
      top,
      overflow: "hidden",
      zIndex: 60,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(6px)",
      display: "block",
      height: 0, // start collapsed
    });

    // icon animation (crossfade + rotate)
    const iconTl = gsap.timeline();
    if (isOpen) {
      iconTl.to(iconHamburgerRef.current, { opacity: 0, scale: 0.85, rotate: -10, duration: 0.16, ease: "power2.in" }, 0)
            .fromTo(iconCloseRef.current, { opacity: 0, scale: 0.9, rotate: 10 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.22, ease: "power2.out" }, "-=0.1");
    } else {
      iconTl.to(iconCloseRef.current, { opacity: 0, scale: 0.85, rotate: 10, duration: 0.14, ease: "power2.in" }, 0)
            .fromTo(iconHamburgerRef.current, { opacity: 0, scale: 0.9, rotate: -10 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.2, ease: "power2.out" }, "-=0.08");
    }

    // animate menu flowing down (height from 0 -> computed height) and menu items with stagger
    if (isOpen) {
      // prepare items
      if (items.length) gsap.set(items, { opacity: 0, y: 18, transformOrigin: "left center" });

      const tl = gsap.timeline();
      tl.to(menu, { height, duration: 0.45, ease: "power3.out" }, 0) // grow downwards
        .fromTo(menu, { y: -6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.36, ease: "power2.out" }, 0)
        .to(items, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out" }, "-=0.24");

      tlRef.current = tl;
    } else {
      // collapse back up
      const tl = gsap.timeline();
      if (items.length) {
        tl.to(items, { opacity: 0, y: 10, duration: 0.18, stagger: 0.04, ease: "power2.in" }, 0);
      }
      tl.to(menu, { height: 0, duration: 0.36, ease: "power2.inOut" }, "-=0.12")
        .to(menu, { opacity: 0, duration: 0.08 }, "-=0.2")
        .set(menu, { display: "none" }, "+=0");

      tlRef.current = tl;
    }

    // ensure layout updates on resize while open
    const onResize = () => {
      if (!isOpen) return;
      const { top: newTop, height: newH } = computeLayout();
      gsap.set(menu, { top: newTop });
      // adjust to new height without jump
      gsap.to(menu, { height: newH, duration: 0.28, ease: "power2.out" });
    };
    window.addEventListener("resize", onResize);

    return () => {
      iconTl.kill();
      tlRef.current?.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`${
        isScrolled ? "fixed" : "absolute"
      } top-0 left-0 right-0 z-200 ${isScrolled ? "shadow-md bg-[#151515]" : "backdrop-blur-xsm bg-black/20"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-22">
          <div className="">
            <Link href="/" className="flex items-center text-xl font-medium uppercase tracking-wider">
              <span className="inline-block font-semibold tracking-tighter transition-all duration-300">
                METATECH AUTOMATION
              </span>
            </Link>
          </div>

          <div className="hidden md:block tracking-wider uppercase text-sm">
            <div className="ml-10 flex items-center space-x-12">
              {/* For desktop navigation */}
              {navLinks.map((link) => (
                <Link
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-medium transition-all duration-300 text-white hover:text-[#d8d8d8] cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              ref={btnRef}
              onClick={() => setIsOpen((s) => !s)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md focus:outline-none leading-none transition-transform duration-200 relative text-white"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span ref={iconHamburgerRef} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <GiHamburgerMenu size={22} aria-hidden />
              </span>
              <span ref={iconCloseRef} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "absolute", opacity: 0, pointerEvents: "none" }}>
                <TfiClose size={22} aria-hidden />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation container — starts collapsed and flows down from navbar bottom */}
      <div
        className="md:hidden transition-colors duration-300"
        ref={menuRef}
        style={{ display: "none", height: 0, overflow: "hidden" }}
        aria-hidden={!isOpen}
      >
        <div ref={listRef} className="h-full flex flex-col text-white">
          <div className="px-5 pt-6 pb-3 space-y-1 sm:px-3 overflow-auto">
            {/* For mobile navigation */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-3 py-5 font-medium uppercase tracking-wider text-sm transition-all duration-300 border-b border-white/10 hover:bg-white/10 cursor-pointer"
              >
                <span>{link.name}</span>
                <span aria-hidden="true" className="ml-2">
                  {">"}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto px-5 pb-8">
            <div className="text-sm text-[#d8d8d8]/70">Contact</div>
            <div className="mt-3 space-y-2">
              <a className="block text-sm hover:text-[#d8d8d8] transition-colors" href="mailto:info@metatechautomation.com">info@metatechautomation.com</a>
              <a className="block text-sm hover:text-[#d8d8d8] transition-colors" href="tel:+919876543210">+91 8208619287</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}