"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isMobile = () => {
    if (typeof navigator === "undefined") return false;
    return /Android|iPhone|iPad|iPod|Windows Phone|IEMobile/i.test(navigator.userAgent);
  };

  const encodeMailBody = (text: string) => {
    // encode and normalize newlines to CRLF
    return encodeURIComponent(text).replace(/%0A/g, '%0D%0A');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const to = 'amarnathsooraj7575@gmail.com';
    const subject = 'Enquiry';
    const bodyLines = [
      `Name: ${formData.name || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Company: ${formData.company || 'Not provided'}`,
      '',
      'Message:',
      formData.message || 'No message provided',
    ];
    const bodyRaw = bodyLines.join('\n');
    const encBody = encodeMailBody(bodyRaw);
    const encSub = encodeURIComponent(subject);

    // mailto format (will be used on mobile)
    const mailto = `mailto:${to}?subject=${encSub}&body=${encBody}`;

    // On mobile navigate to mailto (uses OS mail handler / Gmail app if registered)
    if (isMobile()) {
      // Use location.href to trigger mail handler on mobile
      window.location.href = mailto;
      return;
    }

    // Desktop: prefer Gmail web compose, fallback to mailto if blocked
    const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encSub}&body=${encBody}`;

    try {
      const opened = window.open(gmailWeb, '_blank', 'noopener,noreferrer');
      if (!opened) {
        const a = document.createElement('a');
        a.href = mailto;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch {
      const a = document.createElement('a');
      a.href = mailto;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className='relative w-full overflow-hidden'>
      {/* Fixed Background */}
      <div 
        className='fixed inset-0 -z-10'
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='absolute inset-0 bg-[#151515]/85'></div>
      </div>

      {/* Content */}
      <div className='relative w-full text-[#d8d8d8] py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          {/* Header Section */}
          <div className='mb-16'>
            <h2 className='text-4xl md:text-5xl font-medium mb-4'>
              Get In Touch
            </h2>
            <p className='text-[#d8d8d8]/70 text-md md:text-xl'>
              Let&apos;s discuss how we can transform your automation needs into reality.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Form Section */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                  Full Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-[#d8d8d8]/10 border border-[#d8d8d8]/20 rounded-sm text-[#d8d8d8] placeholder-[#d8d8d8]/50 focus:outline-none focus:border-[#0196c7] transition-colors'
                  placeholder='Full Name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-[#d8d8d8]/10 border border-[#d8d8d8]/20 rounded-sm text-[#d8d8d8] placeholder-[#d8d8d8]/50 focus:outline-none focus:border-[#0196c7] transition-colors'
                  placeholder='Email'
                />
              </div>

              <div>
                <label htmlFor='phone' className='block text-sm font-medium mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-[#d8d8d8]/10 border border-[#d8d8d8]/20 rounded-sm text-[#d8d8d8] placeholder-[#d8d8d8]/50 focus:outline-none focus:border-[#0196c7] transition-colors'
                  placeholder='Phone Number'
                />
              </div>

              <div>
                <label htmlFor='company' className='block text-sm font-medium mb-2'>
                  Company Name
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-[#d8d8d8]/10 border border-[#d8d8d8]/20 rounded-sm text-[#d8d8d8] placeholder-[#d8d8d8]/50 focus:outline-none focus:border-[#0196c7] transition-colors'
                  placeholder='Your Company'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 bg-[#d8d8d8]/10 border border-[#d8d8d8]/20 rounded-sm text-[#d8d8d8] placeholder-[#d8d8d8]/50 focus:outline-none focus:border-[#0196c7] transition-colors resize-none'
                  placeholder='Tell us about your automation needs...'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-[#0196c7] text-white px-8 py-4 rounded-sm hover:bg-[#0196c7]/80 transition-colors duration-300 uppercase tracking-wider text-sm font-medium'
              >
                Send Enquiry via Email
              </button>
            </form>

            {/* Info Section */}
            <div className='space-y-4'>
              <div className='bg-[#d8d8d8]/5 border border-[#d8d8d8]/10 p-8 rounded-sm'>
                <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-sm text-[#d8d8d8]/70 mb-1'>Email</p>
                    <p className='text-md'>info@automation.com</p>
                  </div>
                  <div>
                    <p className='text-sm text-[#d8d8d8]/70 mb-1'>Phone</p>
                    <p className='text-md'>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className='text-sm text-[#d8d8d8]/70 mb-1'>Address</p>
                    <p className='text-md'>123 Automation Street<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              {/* Map Location */}
              <div className='bg-[#d8d8d8]/5 border border-[#d8d8d8]/10 rounded-sm overflow-hidden'>
                <h3 className='text-xl font-semibold p-8 pb-4'>Our Location</h3>
                <div className='w-full h-[250px]'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346679!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
