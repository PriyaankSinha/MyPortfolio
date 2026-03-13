"use client";

import { education, certifications, publications, patents } from "@/data";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBookOpen, FaCalendarAlt, FaExternalLinkAlt, FaCheckCircle, FaLightbulb } from "react-icons/fa";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-xl border border-primary/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary text-xl mb-6">
                <FaGraduationCap />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
              <p className="text-lg text-primary font-medium mb-4">{edu.institution}</p>
              
              <div className="flex justify-between items-center text-foreground/70 font-medium">
                <span>{edu.duration}</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">CGPA: {edu.cgpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificationsAndPublications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Certifications</h2>
              <div className="w-16 h-1 bg-primary mx-auto lg:mx-0 rounded-full" />
            </motion.div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-6 lg:p-8 rounded-2xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all group flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-xl shadow-lg shrink-0">
                        <FaCertificate />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    {/* @ts-ignore */}
                    {cert.status && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 border border-green-200 text-xs font-bold rounded-full whitespace-nowrap">
                        {/* @ts-ignore */}
                        {cert.status}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4 bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <span className="flex items-center gap-2"><FaCalendarAlt /> Issued: {cert.date}</span>
                    {/* @ts-ignore */}
                    {cert.validity && (
                      <>
                        <span className="w-1 h-1 bg-foreground/30 rounded-full" />
                        <span className="flex items-center gap-2"><FaCheckCircle className="text-foreground/40" /> Valid: {/* @ts-ignore */}{cert.validity}</span>
                      </>
                    )}
                  </div>

                  {/* @ts-ignore */}
                  {cert.description && (
                    <p className="text-foreground/80 text-sm mb-4 grow">
                      {/* @ts-ignore */}
                      {cert.description}
                    </p>
                  )}

                  {/* @ts-ignore */}
                  {cert.credentialId && (
                    <p className="text-foreground/50 text-xs font-mono mb-4 break-all">
                      {/* @ts-ignore */}
                      Credential ID: {cert.credentialId}
                    </p>
                  )}

                  {/* @ts-ignore */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mb-6 mt-auto pt-4 border-t border-primary/10">
                      <h4 className="text-sm font-bold text-foreground mb-3">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {/* @ts-ignore */}
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold transition-colors w-full sm:w-auto self-end"
                  >
                    <FaExternalLinkAlt size={14} /> Show Certificate
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Publications</h2>
              <div className="w-16 h-1 bg-primary mx-auto lg:mx-0 rounded-full" />
            </motion.div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl shadow-lg border border-primary/10 flex items-start gap-4 hover:border-primary/30 transition-colors group"
                >
                  <div className="mt-1 bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <FaBookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{pub.title}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{pub.details}</p>
                    
                    {/* @ts-ignore */}
                    {pub.date && (
                      <p className="flex items-center gap-1 text-foreground/60 text-xs mb-3">
                        <FaCalendarAlt size={10} /> {/* @ts-ignore */}{pub.date}
                      </p>
                    )}
                    
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">{pub.description}</p>
                    
                    {/* @ts-ignore */}
                    {pub.link && (
                      <a
                        /* @ts-ignore */
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors text-sm"
                      >
                        Read Publication <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Patents */}
            {patents && patents.length > 0 && (
              <div className="mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10 text-center lg:text-left"
                >
                  <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Patents</h2>
                  <div className="w-16 h-1 bg-primary mx-auto lg:mx-0 rounded-full" />
                </motion.div>

                <div className="space-y-6">
                  {patents.map((patent, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-background p-6 rounded-xl shadow-lg border border-primary/10 flex items-start gap-4 hover:border-primary/30 transition-colors group"
                    >
                      <div className="mt-1 bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <FaLightbulb size={24} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1 leading-tight uppercase group-hover:text-primary transition-colors">
                          {patent.title}
                        </h3>
                        
                        <div className="flex flex-col gap-1 mb-3">
                          <span className="text-primary font-bold text-sm">
                            Patent No: {patent.patentNo}
                          </span>
                          <span className="flex items-center gap-1 text-foreground/60 text-xs">
                            <FaCalendarAlt size={10} /> Issued: {patent.date}
                          </span>
                        </div>
                        
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {patent.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
