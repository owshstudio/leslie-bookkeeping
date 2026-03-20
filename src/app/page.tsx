"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ClipboardCheck,
  MessageCircle,
  Shield,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

/* Inline Facebook "f" logo SVG — uses currentColor so hover color changes work */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

const viewportOpts = { once: true, amount: 0.01 as const };

const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Stay ahead of the game with monthly bookkeeping. This is ideal for those who are up-to-date and seeking ongoing support. I'll ensure your books are always accurate and ready for whatever comes next.",
    image: "/images/service-monthly-2.png",
    imageAlt: "Monthly bookkeeping service illustration showing organized financial records",
    imageRight: true,
  },
  {
    title: "Cleanup Bookkeeping",
    subtitle: "Falling behind? Don't worry.",
    description:
      "Our Cleanup Bookkeeping service is designed to bring your accounts back on track. We specialize in helping clients who need a comprehensive overhaul of their financial records.",
    image: "/images/service-cleanup-2.png",
    imageAlt: "Cleanup bookkeeping service illustration showing financial records being organized",
    imageRight: false,
  },
  {
    title: "Administrative Work",
    subtitle: "Drowning in paperwork?",
    description:
      "Our Administrative Work service is perfect for those who need reliable assistance with their day-to-day office tasks. You can focus on what you do best, and leave the rest to us.",
    image: "/images/service-admin.png",
    imageAlt: "Administrative work service illustration showing office task management",
    imageRight: true,
  },
  {
    title: "Small Projects",
    subtitle: "Have a specific project you're dreading?",
    description:
      "My Small Projects service is here to help. Whether it's a one-time task or a short-term project, we're ready to step in and get it done for you.",
    bullets: ["Powerpoints", "Presentations", "Excel", "Word"],
    image: "/images/service-projects.png",
    imageAlt: "Small projects service illustration showing presentations and spreadsheets",
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

const serviceOptions = [
  "Monthly Bookkeeping",
  "Cleanup Bookkeeping",
  "Administrative Work",
  "Small Projects",
  "Other",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Bookkeeping Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\n${formData.message}`
    );
    window.location.href = `mailto:lesliebookkeepingllc@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="relative min-h-screen bg-dark">
      {/* Floating particles */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-dark/70 backdrop-blur-xl border-b border-white/5" aria-label="Main navigation">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:px-6 md:px-10 h-[60px] sm:h-[75px]">
          <a href="#" className="flex items-center gap-2 sm:gap-3" aria-label="Leslie Bookkeeping - Home">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full">
              <Image src="/images/logo.png" alt="Leslie Bookkeeping logo" fill sizes="36px" className="object-cover" />
            </div>
            <span className="text-white font-semibold text-[14px] sm:text-[15px]">
              Leslie Bookkeeping
            </span>
          </a>
          {/* Desktop nav */}
          <div className="hidden items-center gap-8 text-[14px] text-[#999] sm:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white" aria-label="Visit Leslie Bookkeeping on Facebook">
              <FacebookIcon className="h-8 w-8" />
            </a>
          </div>
          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-[#999] transition hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t border-white/5 bg-dark/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-5 text-[14px] text-[#999]"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-white">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-white">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-white">Contact</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white" aria-label="Visit Leslie Bookkeeping on Facebook">
              <FacebookIcon className="h-8 w-8" /> Facebook
            </a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="hero-bg pt-[110px] sm:pt-[150px] pb-[240px] sm:pb-[200px]" aria-label="Hero">
          {/* Layered sphere effect */}
          <div className="hero-color-glow" />
          <div className="hero-color-glow-2" />
          <div className="hero-sphere" />
          <div className="hero-arc-wrapper">
            <div className="hero-arc" />
            <div className="hero-arc-glow" />
          </div>
          <div className="hero-bottom-fade" />

          <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mx-auto max-w-3xl font-bold leading-[1.15] text-white"
            style={{ fontSize: "clamp(32px, 5vw, 50px)" }}
            >
              You Run Your Business,
              <br />
              I&apos;ll Handle Your Bookkeeping
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              className="mx-auto mt-5 max-w-xl text-[15px] text-[#999] leading-relaxed"
            >
              Experience the ease and confidence of having your finances expertly
              managed so you can concentrate on what you do best.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <a href="#contact" className="btn-light px-7 py-2.5 text-[14px]">
                Contact
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-7 py-2.5 text-[14px]" aria-label="Follow Leslie Bookkeeping on Facebook">
                Follow
              </a>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.36, ease: "easeOut" }}
              className="mt-16"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#555]">
                Certified by Trusted Accounting Platforms
              </p>
              <div className="mt-5 flex items-center justify-center gap-10">
                <Image
                  src="/images/certifications-2.png"
                  alt="Ambrook certification badge"
                  width={120}
                  height={32}
                  className="opacity-70 h-auto w-auto"
                  style={{ maxHeight: "28px" }}
                />
                <Image
                  src="/images/certifications.png"
                  alt="Intuit QuickBooks certification badge"
                  width={160}
                  height={32}
                  className="opacity-70 h-auto w-auto"
                  style={{ maxHeight: "32px" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative z-10 pt-0 pb-20 md:-mt-10 md:pt-0 md:pb-[100px] bg-dark" aria-label="Services">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              custom={0}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <h2 className="text-[26px] sm:text-[34px] font-bold text-white">
                Bookkeeping for Every Business Need
              </h2>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOpts}
                  custom={idx * 0.3}
                  variants={fadeUp}
                  className={`card-dark p-5 sm:p-8 md:p-10 flex flex-col ${
                    service.imageRight ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-5 sm:gap-8 items-center`}
                >
                  <div className="relative w-full h-40 sm:h-48 sm:w-48 md:h-56 md:w-56 shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 224px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] sm:text-lg font-semibold text-white">{service.title}</h3>
                    {service.subtitle && (
                      <p className="mt-1 text-[13px] sm:text-[14px] italic text-[#888]">{service.subtitle}</p>
                    )}
                    <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] leading-relaxed text-[#999]">{service.description}</p>
                    {service.bullets && (
                      <ul className="mt-2 sm:mt-3 space-y-1 text-[12px] sm:text-[13px] text-[#999]">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-violet" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <a href="#contact" className="btn-dark mt-4 sm:mt-5 px-5 py-2 text-[12px] sm:text-[13px]">
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        {/* How I Do It */}
        <section className="relative z-10 py-20 md:py-[100px]" aria-label="How I Do It">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              custom={0}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <h2 className="text-[26px] sm:text-[34px] font-bold text-white">How I Do It</h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {howIDoIt.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOpts}
                  custom={i + 1}
                  variants={fadeUp}
                  className="card-light p-6 text-center"
                >
                  <div
                    className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${item.color}18` }}
                    aria-hidden="true"
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="mt-4 text-[14px] font-semibold text-[#0a0a0a]">{item.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#666]">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              custom={5}
              variants={fadeUp}
              className="mt-10 text-center text-[14px] text-[#666]"
            >
              Certified and experienced with QuickBooks and Ambrook — supporting
              both traditional small businesses and agricultural operations.
            </motion.p>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        {/* About Me */}
        <section id="about" className="relative z-10 py-20 md:py-[100px]" aria-label="About Me">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              custom={0}
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="shrink-0">
                <Image
                  src="/images/heather.jpg"
                  alt="Heather, owner and professional bookkeeper at Leslie Bookkeeping"
                  width={224}
                  height={224}
                  className="rounded-xl border border-white/10 object-cover w-48 h-48 md:w-56 md:h-56"
                />
              </div>

              <div>
                <h2 className="text-[26px] sm:text-[34px] font-bold text-white">About Me</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#999]">
                  Hi, I&apos;m Heather, a professional bookkeeper, business owner,
                  and mom of two. I help business owners stay organized, confident,
                  and in control of their finances, so they can focus on growing
                  their business instead of stressing about their books.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#999]">
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
              className="mt-12 text-center text-[15px] italic text-[#666]"
            >
              &ldquo;My mission is to display, inspire, and encourage integrity
              for myself and others.&rdquo;
            </motion.p>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        {/* Contact Form */}
        <section id="contact" className="relative z-10 py-20 md:py-[100px]" aria-label="Contact form">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOpts}
              custom={0}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-[26px] sm:text-[34px] font-bold text-white">Contact</h2>
              <p className="mt-3 text-[15px] text-[#888]">
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
              className="mx-auto max-w-2xl space-y-4"
              aria-label="Contact form"
            >
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  aria-label="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input px-4 py-3 text-[14px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  aria-label="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input px-4 py-3 text-[14px]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  aria-label="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input px-4 py-3 text-[14px]"
                />
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="form-input w-full px-4 py-3 text-[14px] text-left flex items-center justify-between"
                    aria-label="Service of interest"
                    aria-expanded={serviceDropdownOpen}
                  >
                    <span className={formData.service ? "text-[#0a0a0a]" : "text-[#999]"}>
                      {formData.service || "Services of Interest"}
                    </span>
                    <svg className="h-4 w-4 text-[#999] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  {serviceDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a24] border border-white/10 rounded-lg overflow-hidden z-50 shadow-xl shadow-black/40">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, service: opt });
                            setServiceDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-[14px] transition hover:bg-white/5 ${
                            formData.service === opt ? "text-white bg-white/5" : "text-[#ccc]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <textarea
                placeholder="Is there anything else I should know?"
                rows={4}
                aria-label="Additional message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input w-full px-4 py-3 text-[14px] resize-none"
              />
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-[14px] font-semibold"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-5 text-[14px] text-[#888]">
              <a href="#contact" className="flex items-center gap-1.5 transition hover:text-white" aria-label="Go to contact form">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Contact
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition hover:text-white" aria-label="Follow Leslie Bookkeeping on Facebook">
                <FacebookIcon className="h-8 w-8" /> Follow
              </a>
            </div>
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image src="/images/logo.png" alt="Leslie Bookkeeping logo" fill sizes="32px" className="object-cover" />
            </div>
            <p className="text-xs text-[#555]">
              Website by{" "}
              <a href="https://owshsystems.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                OWSH Studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
