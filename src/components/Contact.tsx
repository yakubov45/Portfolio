"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function Contact() {
  const { tr } = useLang();
  const c = tr.contact;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const contactInfo = [
    { icon: "📍", label: c.location, sub: c.locationSub, color: "#00FF9D" },
    { icon: "📧", label: "ismoilturgunboyev@gmail.com", sub: c.emailSub, color: "#00F2FE", href: "mailto:ismoilturgunboyev@gmail.com" },
    { icon: "💻", label: "github.com/Muhammad123-1", sub: c.githubSub, color: "#7F00FF", href: "https://github.com/Muhammad123-1" },
    { icon: "✈️", label: "@ismoil_turgunboyev", sub: c.telegramSub, color: "#FF0844", href: "https://t.me/ismoil_turgunboyev" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

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
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="cyber-tag mb-4 inline-block">{c.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F6FF] mb-4">{c.title} <span className="gradient-text-electric">{c.titleGrad}</span></h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{c.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }} className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map(item => (
              <div key={item.label} onClick={() => item.href && window.open(item.href, "_blank")} className="cyber-card p-5 flex items-start gap-4" style={{ cursor: item.href ? "pointer" : "default" }}>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>{item.icon}</div>
                <div>
                  <p className="text-xs font-mono font-bold break-all" style={{ color: item.href ? item.color : "#F0F6FF" }}>{item.label}</p>
                  <p className="text-[11px] text-[#8B96B5] mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
            <div className="cyber-card p-5 border-[rgba(0,255,157,0.3)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#00FF9D] shadow-[0_0_10px_rgba(0,255,157,0.8)] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#F0F6FF]">{c.availableTitle}</span>
              </div>
              <p className="text-xs text-[#8B96B5] leading-relaxed">{c.availableDesc}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="lg:col-span-3 cyber-card p-8">
            <h3 className="text-lg font-bold text-[#F0F6FF] mb-6 font-mono">{c.formTitle}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#00F2FE] mb-2">{c.name}</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={c.namePh} className="w-full px-4 py-3 rounded-xl bg-[rgba(10,16,31,0.7)] border border-[rgba(0,242,254,0.2)] text-[#F0F6FF] text-xs placeholder-[#4B5678] focus:outline-none focus:border-[#00FF9D] transition-all font-mono" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#00F2FE] mb-2">{c.email}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={c.emailPh} className="w-full px-4 py-3 rounded-xl bg-[rgba(10,16,31,0.7)] border border-[rgba(0,242,254,0.2)] text-[#F0F6FF] text-xs placeholder-[#4B5678] focus:outline-none focus:border-[#00FF9D] transition-all font-mono" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-[#00F2FE] mb-2">{c.subject}</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder={c.subjectPh} className="w-full px-4 py-3 rounded-xl bg-[rgba(10,16,31,0.7)] border border-[rgba(0,242,254,0.2)] text-[#F0F6FF] text-xs placeholder-[#4B5678] focus:outline-none focus:border-[#00FF9D] transition-all font-mono" />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#00F2FE] mb-2">{c.message}</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={c.messagePh} className="w-full px-4 py-3 rounded-xl bg-[rgba(10,16,31,0.7)] border border-[rgba(0,242,254,0.2)] text-[#F0F6FF] text-xs placeholder-[#4B5678] focus:outline-none focus:border-[#00FF9D] transition-all resize-none font-mono" />
              </div>
              <motion.button type="submit" disabled={status === "sending" || status === "sent"} whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,242,254,0.4)" }} whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-bold text-xs font-mono tracking-wide transition-all ${status === "sent" ? "bg-[rgba(0,255,157,0.2)] border border-[rgba(0,255,157,0.4)] text-[#00FF9D]" : status === "error" ? "bg-[rgba(255,8,68,0.2)] border border-[rgba(255,8,68,0.4)] text-red-400" : "bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] shadow-lg"}`}>
                {status === "idle" && c.send}
                {status === "sending" && <span className="flex items-center justify-center gap-2"><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" className="opacity-75" /></svg>{c.sending}</span>}
                {status === "sent" && c.sent}
                {status === "error" && c.error}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
