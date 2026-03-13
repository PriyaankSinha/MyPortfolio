"use client";

import { skills } from "@/data";
import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaDatabase, FaTools, FaRobot, FaLanguage } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  FaCode: <FaCode />,
  FaGlobe: <FaGlobe />,
  FaDatabase: <FaDatabase />,
  FaTools: <FaTools />,
  FaRobot: <FaRobot />,
  FaLanguage: <FaLanguage />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-xl border border-primary/10"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-primary/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-xl shadow-lg">
                  {/* @ts-ignore */}
                  {iconMap[skillGroup.icon]}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium inline-block text-foreground/80">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
