"use client";

import { personalInfo, stats } from "@/data";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaMedal } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
            A passionate Technical Lead with a keen interest in creating innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-4/3 bg-primary/10 relative shadow-2xl border border-primary/10">
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent z-10" />
              {/* Replace with actual team/about image */}
              <div className="w-full h-full bg-cover bg-center flex items-center justify-center text-primary/50"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800')" }}>
                  <span className="z-20 font-medium">Team Collaboration Placeholder</span>
              </div>
            </div>
            
            {/* Floating stats block */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-background shadow-xl rounded-xl p-6 border border-primary/10 z-20 hidden sm:block">
              <div className="flex gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                    <p className="text-sm text-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text/Details side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Hello! I'm {personalInfo.name}
            </h3>
            
            <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            
            <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
              {personalInfo.bioShort.split('. ')[1]}. {personalInfo.bioShort.split('. ')[2]}.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary bg-primary/10 p-2 rounded-lg"><FaCalendarAlt /></div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground/60 uppercase tracking-wider mb-1">Born</h4>
                  <p className="text-foreground font-medium">{personalInfo.birthDate}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary bg-primary/10 p-2 rounded-lg"><FaMapMarkerAlt /></div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground/60 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-foreground font-medium">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary bg-primary/10 p-2 rounded-lg"><FaGraduationCap /></div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground/60 uppercase tracking-wider mb-1">Degree</h4>
                  <p className="text-foreground font-medium">{personalInfo.educationInfo}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary bg-primary/10 p-2 rounded-lg"><FaMedal /></div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground/60 uppercase tracking-wider mb-1">CGPA</h4>
                  <p className="text-foreground font-medium">{personalInfo.cgpa}</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
