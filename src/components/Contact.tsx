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
    { icon: "📍", label: c.location, sub: c.locationSub, color: "#4F8EF7" },
    { icon: "📧", label: "muhammadyoqubjonov7@gmail.com", sub: c.emailSub, color: "#8B5CF6", href: "mailto:muhammadyoqubjonov7@gmail.com" },
    { icon: "💻", label: "github.com/yakubov45", sub: c.githubSub, color: "#22D3EE", href: "https://github.com/yakubov45" },
    { icon: "✈️", label: "@yakubjan_m", sub: c.telegramSub, color: "#EC4899", href: "https://t.me/yakubjan_m" },
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
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[rgba(79,142,247,0.05)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[rgba(139,92,246,0.05)] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="tag mb-4 inline-block">{c.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">{c.title} <span className="gradient-text">{c.titleGrad}</span></h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{c.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }} className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map(item => (
              <div key={item.label} onClick={() => item.href && window.open(item.href, "_blank")} className="bento-card p-5 flex items-start gap-4" style={{ cursor: item.href ? "pointer" : "default" }}>
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: `${item.color}18`, boxShadow: `0 0 20px ${item.color}20` }}>{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold break-all" style={{ color: item.href ? item.color : "#F0F4FF" }}>{item.label}</p>
                  <p className="text-xs text-[#4B5678] mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
            <div className="bento-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                <span className="text-sm font-semibold text-[#F0F4FF]">{c.availableTitle}</span>
              </div>
              <p className="text-xs text-[#8B96B5] leading-relaxed">{c.availableDesc}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="lg:col-span-3 bento-card p-8">
            <h3 className="text-xl font-bold text-[#F0F4FF] mb-6">{c.formTitle}</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#4B5678] mb-2">{c.name}</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={c.namePh} className="w-full px-4 py-3 rounded-xl bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.15)] text-[#F0F4FF] text-sm placeholder-[#4B5678] focus:outline-none focus:border-[rgba(79,142,247,0.5)] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#4B5678] mb-2">{c.email}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={c.emailPh} className="w-full px-4 py-3 rounded-xl bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.15)] text-[#F0F4FF] text-sm placeholder-[#4B5678] focus:outline-none focus:border-[rgba(79,142,247,0.5)] transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-[#4B5678] mb-2">{c.subject}</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder={c.subjectPh} className="w-full px-4 py-3 rounded-xl bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.15)] text-[#F0F4FF] text-sm placeholder-[#4B5678] focus:outline-none focus:border-[rgba(79,142,247,0.5)] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-mono text-[#4B5678] mb-2">{c.message}</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={c.messagePh} className="w-full px-4 py-3 rounded-xl bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.15)] text-[#F0F4FF] text-sm placeholder-[#4B5678] focus:outline-none focus:border-[rgba(79,142,247,0.5)] transition-all resize-none" />
              </div>
              <motion.button type="submit" disabled={status === "sending" || status === "sent"} whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(79,142,247,0.4)" }} whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all ${status === "sent" ? "bg-[rgba(16,185,129,0.2)] border border-[rgba(16,185,129,0.3)] text-[#10B981]" : status === "error" ? "bg-[rgba(239,68,68,0.2)] border border-[rgba(239,68,68,0.3)] text-red-400" : "bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white shadow-lg"}`}>
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
