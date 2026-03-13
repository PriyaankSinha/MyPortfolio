"use client";

import { personalInfo } from "@/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0b1120] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative border-t border-white/10 mt-20">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-1 border-r border-white/10 pr-6">
            <h2 className="text-3xl font-bold font-heading mb-4 text-white">
              {personalInfo.name}
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Technical Lead with 4+ years of experience in building scalable web applications and leading cross-functional teams.
            </p>
            <div className="flex gap-4">
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors hover:-translate-y-1 transform duration-300">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors hover:-translate-y-1 transform duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 border-r border-white/10 px-6">
            <h3 className="text-xl font-bold mb-6 text-white font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-1 pl-6">
            <h3 className="text-xl font-bold mb-6 text-white font-heading">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>{personalInfo.location}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <FaEnvelope className="text-primary" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <FaPhoneAlt className="text-primary" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 bg-primary text-white rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary-dark transition-colors hover:-translate-y-1 z-50 focus:outline-none"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={20} />
      </button>

    </footer>
  );
}


