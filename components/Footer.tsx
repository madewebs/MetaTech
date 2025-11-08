"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  const services = [
    { name: "PLC Expertise", href: "/#" },
    { name: "Drive Expertise", href: "/#" },
    { name: "Designing", href: "/#" },
    { name: "Manufacturing", href: "/#" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative">
      {/* Background Image */}
      <Image
        src="/bg.webp"
        alt="Footer Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#151515]/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg tracking-tight">
                METATECH <span className="text-[#0196c7]">A</span>UTOMATION
              </h3>
              <p className="text-sm leading-relaxed">
                Leading provider of industrial automation solutions, specializing in
                robotics, cobots, and intelligent production systems.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-full"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {/* <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MdLocationOn className="text-[#0196c7] mt-1 flex-shrink-0" size={20} />
                  <span className="text-sm leading-relaxed">
                    Plot No:85,Sr.No.35, Sai Darshan Nagar,Dattwadi<br/>Akurdi, Pune-411035,Maharashtra, India
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdPhone className="text-[#0196c7] flex-shrink-0" size={20} />
                  <a
                    href="tel:+918208619287"
                    className="text-sm"
                  >
                   +91 8208619287
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MdEmail className="text-[#0196c7] flex-shrink-0" size={20} />
                  <a
                    href="mailto:metatechautomation@gmail.com"
                    className="text-sm"
                  >
                    metatechautomation@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-1 text-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-xs text-justify">
                © {currentYear} MetaTech Automation. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <Link
                  href="/#"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/#"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/#"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}