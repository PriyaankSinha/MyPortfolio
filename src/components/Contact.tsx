"use client";

import { useState, useRef } from "react";
import { contactDetails } from "@/data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace these keys with actual EmailJS keys from the user later
    const serviceId = "service_f9oifjj";
    const templateId = "template_b59pwb3";
    const publicKey = "OKUIItl2aFTkxqUBc";

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            setSubmitStatus("success");
            setIsSubmitting(false);
            formRef.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            setSubmitStatus("error");
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations, opportunities, or just a quick hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-6 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-6 group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-sm text-foreground/50 font-semibold uppercase tracking-wider mb-1">Email</h3>
                <a href={`mailto:${contactDetails.email}`} className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-6 group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-sm text-foreground/50 font-semibold uppercase tracking-wider mb-1">Phone</h3>
                <a href={`tel:${contactDetails.phone}`} className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {contactDetails.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-6 group hover:border-primary/30 transition-colors"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-sm text-foreground/50 font-semibold uppercase tracking-wider mb-1">Location</h3>
                <p className="text-lg font-bold text-foreground">
                  {contactDetails.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-background rounded-2xl shadow-2xl border border-primary/10 p-8 sm:p-10"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-semibold text-foreground">Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-semibold text-foreground">Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 text-green-600 rounded-lg border border-green-500/20 mt-4 text-center font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 text-red-600 rounded-lg border border-red-500/20 mt-4 text-center font-medium">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
