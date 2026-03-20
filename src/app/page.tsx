"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ClipboardCheck,
  MessageCircle,
  Shield,
  Facebook,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

// Framer Motion whileInView can be invisible on first render in some SSR configs.
// Use viewport={{ once: true, amount: 0.01 }} to trigger as soon as 1% is visible.
const viewportOpts = { once: true, amount: 0.01 as const };

const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Stay ahead of the game with monthly bookkeeping. This is ideal for those who are up-to-date and seeking ongoing support. I'll ensure your books are always accurate and ready for whatever comes next.",
    image: "/images/service-monthly-2.png",
    imageRight: true,
  },
  {
    title: "Cleanup Bookkeeping",
    subtitle: "Falling behind? Don't worry.",
    description:
      "Our Cleanup Bookkeeping service is designed to bring your accounts back on track. We specialize in helping clients who need a comprehensive overhaul of their financial records.",
    image: "/images/service-cleanup-2.png", // magnifying glass / ledger illustration
    imageRight: false,
  },
  {
    title: "Administrative Work",
    subtitle: "Drowning in paperwork?",
    description:
      "Our Administrative Work service is perfect for those who need reliable assistance with their day-to-day office tasks. You can focus on what you do best, and leave the rest to us.",
    image: "/images/service-admin.png",
    imageRight: true,
  },
  {
    title: "Small Projects",
    subtitle: "Have a specific project you're dreading?",
    description:
      "My Small Projects service is here to help. Whether it's a one-time task or a short-term project, we're ready to step in and get it done for you.",
    bullets: ["Powerpoints", "Presentations", "Excel", "Word"],
    image: "/images/service-projects.png",
    imageRight: false,
  },
];

const howIDoIt = [
  {
    icon: Heart,
    title: "Personal Relationships",
    description:
      "I build a strong, personal connection with each client, so I understand your unique business needs, and I tailor my services accordingly.",
    color: "#f97066",
  },
  {
    icon: ClipboardCheck,
    title: "Detail-Oriented Bookkeeping",
    description:
      "From categorizing every transaction with precision to thorough reconciliation, I ensure your financial records are impeccable and insightful.",
    color: "#8b5cf6",
  },
  {
    icon: MessageCircle,
    title: "Effective Communication",
    description:
      "Keeping you informed and engaged is key. I'm always available to answer your questions, provide updates, and offer financial insights.",
    color: "#06b6d4",
  },
  {
    icon: Shield,
    title: "Ready for Challenges",
    description:
      "Regardless of the task, I'm ready to handle all your bookkeeping needs with efficiency and expertise.",
    color: "#d946ef",
  },
];

const FB_URL = "https://www.facebook.com/profile.php?id=100088005292186";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currency: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Bookkeeping Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCurrency: ${formData.currency}\n\n${formData.message}`
    );
    window.location.href = `mailto:lesliebookkeepingllc@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-cosmic-900">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-cosmic-900/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-6 py-3.5">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image src="/images/logo.png" alt="Leslie Bookkeeping" fill className="object-cover" />
            </div>
            <span className="text-white font-semibold text-[15px]">
              Leslie Bookkeeping
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-gray-400 sm:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="aurora-bg pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-[36px] sm:text-[44px] font-bold leading-tight text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            You Run Your Business, I&apos;ll Handle Your Bookkeeping
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-[15px] italic text-gray-400 leading-relaxed"
          >
            Experience the ease and confidence of having your finances expertly
            managed so you can concentrate on what you do best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-glow rounded-full px-7 py-2.5 text-sm font-medium text-white bg-transparent">
              Contact
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-violet px-7 py-2.5 text-sm font-medium text-white transition hover:bg-violet-light">
              Follow
            </a>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36, ease: "easeOut" }}
            className="mt-14"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Certified by Trusted Accounting Platforms
            </p>
            <div className="mt-6 flex items-center justify-center gap-8">
              <Image
                src="/images/certifications.png"
                alt="Certified by QuickBooks and Ambrook"
                width={320}
                height={82}
                className="opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services */}
      <section id="services" className="py-[70px]">
        <div className="mx-auto max-w-[1000px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-[28px] sm:text-[32px] font-bold text-white">
              Bookkeeping for Every Business Need
            </h2>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                custom={idx * 0.3}
                variants={fadeUp}
                className={`glow-card rounded-2xl p-8 flex flex-col ${
                  service.imageRight ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  {service.subtitle && (
                    <p className="mt-1 text-sm italic text-violet-light">{service.subtitle}</p>
                  )}
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-400">{service.description}</p>
                  {service.bullets && (
                    <ul className="mt-3 space-y-1 text-[14px] text-gray-400">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a href="#contact" className="btn-glow mt-5 inline-block rounded-full px-6 py-2 text-sm font-medium text-white bg-transparent">
                    Learn More
                  </a>
                </div>
                <div className="relative h-56 w-56 shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="224px"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* How I Do It */}
      <section className="py-[70px]">
        <div className="mx-auto max-w-[1000px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-[28px] sm:text-[32px] font-bold text-white">How I Do It</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howIDoIt.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                custom={i + 1}
                variants={fadeUp}
                className="glow-card rounded-2xl p-6 text-center"
              >
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={5}
            variants={fadeUp}
            className="mt-10 text-center text-sm italic text-gray-500"
          >
            Certified and experienced with QuickBooks and Ambrook — supporting
            both traditional small businesses and agricultural operations.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Me */}
      <section id="about" className="py-[70px]">
        <div className="mx-auto max-w-[1000px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0}
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="shrink-0">
              <div
                className="relative h-56 w-56 rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.1)",
                }}
              >
                <Image
                  src="/images/heather.jpg"
                  alt="Heather — Leslie Bookkeeping"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[28px] sm:text-[32px] font-bold text-white">About Me</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-400">
                Hi, I&apos;m Heather, a professional bookkeeper, business owner,
                and mom of two. I help business owners stay organized, confident,
                and in control of their finances, so they can focus on growing
                their business instead of stressing about their books.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-400">
                With a strong attention to detail and a practical, no-nonsense
                approach, I don&apos;t just track your numbers — I help you
                understand them and use them to make better decisions.
              </p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={1}
            variants={fadeUp}
            className="mt-12 text-center text-[15px] italic text-gray-500"
          >
            &ldquo;My mission is to display, inspire, and encourage integrity
            for myself and others.&rdquo;
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Form */}
      <section id="contact" className="py-[70px]">
        <div className="mx-auto max-w-[1000px] px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={0}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-[28px] sm:text-[32px] font-bold text-white">Contact</h2>
            <p className="mt-3 text-[15px] text-gray-400">
              Ready to take control of your finances? Let&apos;s talk.
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            custom={1}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glow-card mx-auto max-w-2xl rounded-2xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="cosmic-input rounded-xl px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="cosmic-input rounded-xl px-4 py-3 text-sm"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="cosmic-input rounded-xl px-4 py-3 text-sm"
              />
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="cosmic-input rounded-xl px-4 py-3 text-sm"
              >
                <option value="">Currency of interest</option>
                <option value="USD">USD — US Dollar</option>
                <option value="CAD">CAD — Canadian Dollar</option>
                <option value="EUR">EUR — Euro</option>
                <option value="GBP">GBP — British Pound</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <textarea
              placeholder="Is there anything else I should know?"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="cosmic-input mt-5 w-full rounded-xl px-4 py-3 text-sm resize-none"
            />
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="rounded-full px-10 py-3 text-sm font-semibold text-white transition"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #7c3aed, #d946ef)" }}
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#contact" className="flex items-center gap-1.5 transition hover:text-white">
                <Mail className="h-3.5 w-3.5" /> Contact
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition hover:text-white">
                <Facebook className="h-3.5 w-3.5" /> Follow
              </a>
            </div>
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image src="/images/logo.png" alt="Leslie Bookkeeping" fill className="object-cover" />
            </div>
            <p className="text-xs text-gray-600">Website by OWSH Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
