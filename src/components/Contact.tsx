"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const contactInfo = [
    {
      label: "GitHub Profile",
      value: "github.com/yakubov45",
      href: "https://github.com/yakubov45",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
        </svg>
      ),
    },
    {
      label: "Email Address",
      value: "muhammadyoqubjonov7@gmail.com",
      href: "mailto:muhammadyoqubjonov7@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Telegram Contact",
      value: "@yakubjan_m",
      href: "https://t.me/yakubjan_m",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Uzbekistan",
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] block mb-2">
            07 // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Let&apos;s <span className="gradient-heading">Connect</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            I am always interested in learning, building new projects, and connecting with people who are interested in technology and Artificial Intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                onClick={() => info.href && window.open(info.href, "_blank")}
                className={`academic-card p-4 flex items-center gap-4 group ${
                  info.href ? "cursor-pointer" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/15 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">
                    {info.label}
                  </span>
                  <span className="text-xs font-semibold text-zinc-100 group-hover:text-white break-all">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}

            <div className="academic-card p-5 border-white/25 bg-white/[0.03]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <span className="text-xs font-semibold text-white">
                  Open for Internship & Collaboration
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Available for junior developer opportunities, AI research collaborations, and open-source contributions.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-3 academic-card p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-white/15 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-white/15 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project idea, inquiry, or connection..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-white/15 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-white/15 text-white text-xs placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                  status === "sent"
                    ? "bg-white/20 text-white border border-white/40"
                    : status === "error"
                    ? "bg-zinc-900 text-zinc-300 border border-white/30"
                    : "bg-white hover:bg-zinc-200 text-black shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                }`}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending Message..."}
                {status === "sent" && "✓ Message Sent Successfully!"}
                {status === "error" && "Failed to send. Please try again."}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
