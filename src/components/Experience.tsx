"use client";

import { experience } from "@/data";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-0 md:pl-0">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 sm:pl-10 md:pl-0 group"
            >
              {/* Timeline marker for mobile */}
              <div className="md:hidden absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />

              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                
                {/* Timeline center line and marker for desktop */}
                <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-px">
                   <div className="absolute top-6 -left-[7px] w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors shadow-lg shadow-primary/30 z-10" />
                </div>

                {/* Left side: Date and Location */}
                <div className="md:col-span-1 md:text-right md:pt-4 mb-4 md:mb-0">
                  <div className="font-bold text-primary flex items-center md:justify-end gap-2 text-sm sm:text-base">
                    <FaCalendarAlt className="hidden md:inline" />
                    {exp.duration}
                  </div>
                  <div className="text-foreground/60 flex items-center md:justify-end gap-2 text-sm mt-1">
                    <FaMapMarkerAlt className="hidden md:inline" />
                    {exp.location}
                  </div>
                </div>

                {/* Right side: Content */}
                <div className="md:col-span-4 bg-background p-6 rounded-2xl shadow-xl border border-primary/5 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary md:hidden">
                      <FaBriefcase />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-primary/80 mb-4">{exp.company}</h4>
                  
                  <p className="text-foreground/80 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-foreground/70">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
