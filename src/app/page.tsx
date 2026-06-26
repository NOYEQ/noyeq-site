'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Sparkles, Terminal, Activity, ChevronRight, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stats = [
  { value: "99.99%", label: "System Reliability", detail: "Active SLA" },
  { value: "10M+", label: "Tasks Compiled", detail: "Across NQForge" },
  { value: "100%", label: "Craftsmanship Focus", detail: "Zero Compromises" },
  { value: "40ms", label: "Average Response Time", detail: "Global Edge Network" }
];

const featuredProducts = [
  {
    title: "NQForge",
    tag: "Active",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description: "A comprehensive developer-focused platform containing premium online utilities, compilers, calculators, and API testing suites. Crafting code at scale.",
    features: ["Fully Serverless", "Zero Configuration", "Instant Compilation"],
    link: "/products",
    icon: Terminal
  },
  {
    title: "NOYEQ Core AI",
    tag: "Beta",
    tagColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    description: "Next-generation autonomous agent orchestration platform. Integrate contextual reasoning models directly into business automation systems with ease.",
    features: ["Agentic Frameworks", "Context-Aware Logic", "Secure Orchestration"],
    link: "/products",
    icon: Sparkles
  },
  {
    title: "Enterprise Systems",
    tag: "Pipeline",
    tagColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    description: "Bespoke SaaS architectures, central business automations, and containerized internal databases built for unmatched high-performance workflows.",
    features: ["Active Replication", "Ironclad Security", "Docker & Kubernetes Ready"],
    link: "/products",
    icon: Layers
  }
];

const values = [
  {
    title: "Innovation & Agility",
    description: "Pioneering new standards in digital architecture. We iterate fast, test thoroughly, and deploy continuously."
  },
  {
    title: "Engineering Excellence",
    description: "Our systems are built on scalable architectures (.NET Core, Next.js, and Docker) designed to outlive trends."
  },
  {
    title: "Human-Centered Design",
    description: "We merge premium visual aesthetics with precise functionality. Beautiful UI leads to effortless UX."
  },
  {
    title: "Long-Term Craftsmanship",
    description: "We don't build disposable code. Every line is formatted, documented, and optimized for sustainable scale."
  }
];

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 sm:gap-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center pt-10 sm:pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6 max-w-4xl"
          >
            {/* Glowing top badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 text-xs backdrop-blur-md"
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Announcing NOYEQ Core Ecosystem v2.0</span>
              <ChevronRight className="w-3 h-3 text-neutral-500" />
            </motion.div>

            {/* Main Title Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient-purple-cyan leading-[1.1] pb-1"
            >
              We craft the software structures of tomorrow.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              variants={itemVariants}
              className="text-neutral-400 text-base sm:text-xl max-w-2xl leading-relaxed"
            >
              NOYEQ is a premium technology ecosystem. We build highly refined web architectures, autonomous intelligence systems, custom APIs, and scalable digital products.
            </motion.p>

            {/* Buttons & Call to Actions */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
            >
              <Link 
                href="/products" 
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-8 h-12 transition-all duration-300 glow-btn flex items-center gap-2 justify-center"
                )}
              >
                Explore Ecosystem
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/services" 
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/[0.08] hover:bg-white/[0.04] hover:text-white rounded-full font-semibold px-8 h-12 text-neutral-300 backdrop-blur-sm flex items-center justify-center"
                )}
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-300 mb-1">{stat.label}</div>
                <div className="text-xs text-neutral-500">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURED ECOSYSTEM PRODUCTS */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                The NOYEQ Ecosystem
              </h2>
              <p className="text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
                We are building a unified network of software, AI engines, utility tools, and business platforms. Explore our key active and upcoming initiatives.
              </p>
            </div>
            <Link 
              href="/products" 
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-indigo-400 hover:text-indigo-300 self-start md:self-auto p-0 flex items-center gap-1.5"
              )}
            >
              View entire products catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProducts.map((prod, index) => {
              const Icon = prod.icon;
              return (
                <motion.div
                  key={prod.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass-panel glass-panel-hover rounded-2xl flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold ${prod.tagColor}`}>
                        {prod.tag}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-xl font-bold font-heading text-white">{prod.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{prod.description}</p>
                    </div>

                    <ul className="flex flex-col gap-2 pt-2">
                      {prod.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white/[0.02] border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-xs text-neutral-400">Learn architecture details</span>
                    <Link href={prod.link} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* OUR PHILOSOPHY & VALUES */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Built on Craftsmanship & Long-term Thinking.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              We design software designed to stand the test of time. We believe in massive details, pixel-perfect alignment, rigorous unit testing, and highly responsive interactions.
            </p>
            <div className="h-[1px] w-full bg-white/[0.08]" />
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Sustained Velocity</h4>
                <p className="text-xs text-neutral-400">Continuous deployment backed by automated tests.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col gap-3"
              >
                <span className="text-xs text-indigo-400 font-semibold font-heading">0{i + 1} / VALUE</span>
                <h3 className="text-lg font-bold text-white font-heading">{v.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PIPELINE / GROWTH TIMELINE */}
        <section className="flex flex-col gap-12 relative">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Ecosystem Roadmap & Growth
            </h2>
            <p className="text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Tracing our path from NQForge launches to corporate milestones, continuous technology integrations, and our upcoming 2027 enterprise pipelines.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto w-full flex flex-col gap-12 pt-8">
            {/* Timeline center line */}
            <div className="absolute left-[21px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.08]" />

            {/* Inception */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left sm:text-right">
                <span className="text-indigo-400 font-heading text-xs font-semibold">Q1 2025</span>
                <h3 className="text-lg font-bold text-white mt-1">NOYEQ Inception</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Core systems designed. Corporate structure initialized to support an upcoming suite of AI-driven tools.</p>
              </div>
              <div className="hidden sm:block sm:w-[45%]" />
            </div>

            {/* NQForge Launch */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              <div className="hidden sm:block sm:w-[45%]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left">
                <span className="text-cyan-400 font-heading text-xs font-semibold">Q3 2025</span>
                <h3 className="text-lg font-bold text-white mt-1">NQForge Beta Release</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Successfully launched NQForge, consolidating core calculations, compilers, and API developer utilities into a single fast platform.</p>
              </div>
            </div>

            {/* Present Integration */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left sm:text-right">
                <span className="text-indigo-400 font-heading text-xs font-semibold">Q2 2026 (Current)</span>
                <h3 className="text-lg font-bold text-white mt-1">Unified Infrastructure</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Consolidating ecosystem branding. Launching the official corporate portal, setting up ready frameworks for AI logic APIs.</p>
              </div>
              <div className="hidden sm:block sm:w-[45%]" />
            </div>

            {/* Future Ventures */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-neutral-600" />
              <div className="hidden sm:block sm:w-[45%]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left">
                <span className="text-neutral-500 font-heading text-xs font-semibold">2027 & Beyond</span>
                <h3 className="text-lg font-bold text-neutral-300 mt-1">Autonomous Systems</h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Unveiling advanced agent architectures, mobile workspace components, and robust custom business softwares under the NOYEQ brand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA CONTAINER */}
        <section className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative glass-panel rounded-3xl p-8 sm:p-16 text-center overflow-hidden border border-white/[0.08] flex flex-col items-center gap-6"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%] pointer-events-none" />

            <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              NOYEQ Intel
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-2xl leading-[1.15]">
              Stay aligned with our technological progress.
            </h2>
            <p className="text-neutral-400 max-w-md text-sm leading-relaxed">
              Join our exclusive developer newsletter. Receive brief, periodic briefs detailing code improvements, project releases, and engineering breakthroughs.
            </p>

            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-8 h-12 mt-2 transition-all duration-300 glow-btn flex items-center gap-2 justify-center"
              )}
            >
              Join the Network
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
