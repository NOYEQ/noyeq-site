'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Layers, Sparkles, Terminal, Activity, ChevronRight, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const stats = [
  { value: "5+", label: "Active Sectors", detail: "Digital & Physical" },
  { value: "10M+", label: "People Reached", detail: "Across Global Solutions" },
  { value: "100%", label: "Impact Focus", detail: "Zero Compromises" },
  { value: "1", label: "Unified Goal", detail: "A Better World" }
];

const featuredProducts = [
  {
    title: "NOYEQ Digital",
    tag: "Active",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description: "Our foundational software division. Crafting intelligent systems, web platforms, and mobile solutions to digitize and optimize global businesses.",
    features: ["Custom Software", "Digital Infrastructure", "Automation Logic"],
    link: "/sectors",
    icon: Terminal
  },
  {
    title: "NOYEQ Ventures",
    tag: "Active",
    tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    description: "Our internal startup incubator. Building proprietary products like NQ Forge, developer tools, and AI agents for the future.",
    features: ["SaaS Products", "Developer Tools", "Autonomous AI"],
    link: "/products",
    icon: Sparkles
  },
  {
    title: "NOYEQ Foods",
    tag: "Pipeline",
    tagColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    description: "Our expansion into physical consumer goods, beginning with a sustainable, high-quality peanut butter product line based in Sri Lanka.",
    features: ["FMCG Expansion", "Sustainable Sourcing", "Local Impact"],
    link: "/products",
    icon: Layers
  }
];

const values = [
  {
    title: "Global Impact",
    description: "We are driven by the vision of teaming up for a better world through universal, accessible solutions across multiple industries."
  },
  {
    title: "Universal Foundation",
    description: "Whether writing software or creating physical goods, our methodology is rooted in precision, sustainability, and scale."
  },
  {
    title: "Human-Centered",
    description: "Every product we incubate starts with real human needs. We merge beautiful aesthetics with deep functionality."
  },
  {
    title: "Continuous Evolution",
    description: "We never stagnate. NOYEQ acts as a perpetual motion machine, constantly expanding into new sectors and new ventures."
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
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-neutral-400 text-xs backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Teaming up for a better world.</span>
              <ChevronRight className="w-3 h-3 text-neutral-500" />
            </motion.div>

            {/* Main Title Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05] pb-2 mt-4"
            >
              Many Forms.<br className="hidden sm:block" /> One Core.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              variants={itemVariants}
              className="text-neutral-400 text-lg sm:text-xl max-w-2xl leading-relaxed mt-2"
            >
              NOYEQ is a global parent company building solutions across sectors. From state-of-the-art software systems to physical consumer products, we engineer a better future.
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
                href="/sectors" 
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/[0.08] hover:bg-white/[0.04] hover:text-white rounded-full font-semibold px-8 h-12 text-neutral-300 backdrop-blur-sm flex items-center justify-center"
                )}
              >
                Our Sectors
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
                The NOYEQ Divisions
              </h2>
              <p className="text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
                We are building a unified network of digital and physical solutions. From our core software agency to our upcoming food and product lines.
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
              Built on Universal Excellence.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Whether we are deploying massive cloud architectures or sourcing ingredients for consumer goods, our standards remain absolute. We believe in massive details and sustainable impact.
            </p>
            <div className="h-[1px] w-full bg-white/[0.08]" />
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Sustained Operations</h4>
                <p className="text-xs text-neutral-400">Continuous growth backed by meticulous planning.</p>
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

        {/* DEVELOPMENT PROCESS TIMELINE */}
        <section className="flex flex-col gap-12 relative">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Our Universal Process
            </h2>
            <p className="text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              How we transform complex global challenges into refined, high-performance solutions across sectors.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto w-full flex flex-col gap-12 pt-8">
            {/* Timeline center line */}
            <div className="absolute left-[21px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.08]" />

            {/* Step 1 & 2 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left sm:text-right">
                <span className="text-purple-400 font-heading text-xs font-semibold uppercase tracking-wider">Phase 01</span>
                <h3 className="text-lg font-bold text-white mt-1">Discover & Strategy</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Deep analysis of the market objective. We map out operations, supply chains, or technical architecture before taking action.</p>
              </div>
              <div className="hidden sm:block sm:w-[45%]" />
            </div>

            {/* Step 3 & 4 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              <div className="hidden sm:block sm:w-[45%]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left">
                <span className="text-cyan-400 font-heading text-xs font-semibold uppercase tracking-wider">Phase 02</span>
                <h3 className="text-lg font-bold text-white mt-1">Design & Incubate</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Creating pixel-perfect interfaces or perfecting physical prototypes. Strict quality control ensures rapid, stable progress.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left sm:text-right">
                <span className="text-purple-400 font-heading text-xs font-semibold uppercase tracking-wider">Phase 03</span>
                <h3 className="text-lg font-bold text-white mt-1">Test & Refine</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Rigorous testing for security, performance, or consumer satisfaction. We polish every detail before scaling.</p>
              </div>
              <div className="hidden sm:block sm:w-[45%]" />
            </div>

            {/* Step 6 & 7 */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
              <div className="absolute left-[16px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              <div className="hidden sm:block sm:w-[45%]" />
              <div className="pl-12 sm:pl-0 sm:w-[45%] text-left">
                <span className="text-emerald-500 font-heading text-xs font-semibold uppercase tracking-wider">Phase 04</span>
                <h3 className="text-lg font-bold text-white mt-1">Launch & Scale</h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Deploying the solution to the global market. We provide ongoing support, supply chain logistics, and optimization.</p>
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

            <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wide uppercase">
              NOYEQ Intel
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-2xl leading-[1.15]">
              Stay aligned with our global impact.
            </h2>
            <p className="text-neutral-400 max-w-md text-sm leading-relaxed">
              Join our exclusive network. Receive periodic updates on our new software ventures, physical products, and cross-sector initiatives.
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
