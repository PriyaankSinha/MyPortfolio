"use client";

import { projects } from "@/data";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaUsers, FaCalendarAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
              className="bg-background rounded-2xl overflow-hidden shadow-2xl border border-primary/10 group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full shadow-md ${
                      project.status === "Completed" 
                        ? "bg-green-100 text-green-800 border border-green-200" 
                        : "bg-background/90 text-foreground border border-primary/20 backdrop-blur-sm"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 flex flex-col grow relative">
                <div className="flex flex-col mb-4">
                  {/* Client Badge */}
                  {project.client && (
                     <div className="mb-3">
                       <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                         {project.client}
                       </span>
                     </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{project.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                  <span className="flex items-center gap-2"><FaCalendarAlt /> {project.duration}</span>
                  <span className="flex items-center gap-2"><FaUsers /> {project.teamSize}</span>
                </div>

                <p className="text-foreground/80 mb-6 grow">
                  {project.description}
                </p>

                <div className="mb-6 focus-within:ring-0">
                  <h4 className="text-sm font-bold text-foreground mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-primary/10">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-lg font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link if available */}
                {project.link && (
                  <div className="mt-6">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-lg font-semibold transition-colors"
                    >
                      <FaGithub size={18} /> View Code
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
