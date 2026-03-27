"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === currentRole) {
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Welcome to my portfolio</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-4">
            Hello! I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              {personalInfo.name}
            </span>
          </h1>
          
          <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground/80">
              I'm a <span className="text-primary border-r-2 border-primary pr-1 animate-pulse">{displayedText}</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
            {personalInfo.bioShort}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
            >
              Get In Touch
            </a>
            
            {/* @ts-ignore */}
            {personalInfo.resumeLink && (
              <a
                /* @ts-ignore */
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 flex items-center gap-2 rounded-full bg-accent text-white font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-accent/30"
              >
                <FaFileDownload /> Resume
              </a>
            )}

            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-transparent text-foreground border border-foreground/20 font-medium hover:bg-foreground/5 transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <FaGithub size={28} />
            </a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-foreground/70 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>

        {/* Right column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Outline rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute inset-8 rounded-full overflow-hidden bg-linear-to-tr from-primary/20 to-accent/20 flex items-center justify-center p-2 backdrop-blur-sm border border-white/10 shadow-2xl">
              {/* Replace with actual image, using a placeholder for now */}
              <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/My Profile image.jpeg" 
                  alt="Priyaank Sinha Profile" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-foreground/50 hover:text-primary transition-colors flex flex-col items-center">
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
