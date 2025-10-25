"use client";

import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import bgcon from "@/public/bgcon.svg";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    
    // You can add a success message here if needed
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="w-full py-16 md:py-24 relative px-4 md:px-16">
      {/* Background Image */}
      <Image
        src={bgcon}
        alt="Contact Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl tracking-tight font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-tight">
            Have a question or want to discuss your automation needs? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
                Let's Build the Future Together
              </h3>
              <p className="text-md text-gray-200 leading-snug">
                Ready to transform your business with cutting-edge automation solutions? 
                Our team of experts is here to help you every step of the way.
              </p>
            </div>

            {/* Contact Details */}
            {/* <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
                  <MdEmail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <a href="mailto:contact@automation.com" className="text-gray-200 hover:text-white transition-colors">
                    contact@automation.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
                  <MdPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-gray-200 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                  <p className="text-gray-200">
                    123 Automation Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div> */}

            {/* Map */}
            <div className="rounded-sm overflow-hidden shadow-lg h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492346644!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#eeeeee] backdrop-blur-sm rounded-sm shadow-lg p-6">
            <h3 className="text-2xl font-medium text-gray-700 mb-4">
             For enquirys, please fill out the form below:
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm  focus:outline-none outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none outline-none transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none outline-none transition-all resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#011945] border hover:bg-transparent hover:border-[#011945] hover:text-[#011945] text-white py-3 rounded-sm font-medium text-md ransition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}