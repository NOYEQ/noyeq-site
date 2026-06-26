'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Smartphone, Share2, ShieldAlert, Cpu, ExternalLink, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const categories = ['All', 'Active', 'Beta', 'Pipeline'];

const productsList = [
  {
    id: "nqforge",
    title: "NQForge",
    tag: "Active",
    tagClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    category: "Active",
    type: "Utilities & Tools",
    description: "The flagship developer workspace. Consolidates rapid code compilers, formatter utilities, encoder suites, regex testing modules, and global networking diagnostics.",
    features: ["Fully serverless engine", "50+ Developer tools built-in", "Zero setup required"],
    icon: Terminal,
    link: "#",
    linkText: "Launch NQForge"
  },
  {
    id: "core-ai",
    title: "NOYEQ Core AI",
    tag: "Beta",
    tagClass: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    category: "Beta",
    type: "AI & Automation",
    description: "Orchestrate multi-agent autonomous logic workflows. Designed to translate natural language inquiries directly into backend database migrations and system commands.",
    features: ["Agentic reasoning models", "Enterprise context storage", "Custom API connectors"],
    icon: Sparkles,
    link: "#",
    linkText: "Request Access"
  },
  {
    id: "mobile-platform",
    title: "NOYEQ Mobile",
    tag: "Beta",
    tagClass: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    category: "Beta",
    type: "Mobile Applications",
    description: "Secure cross-platform dashboard for remote server monitoring, container metrics, and instant error alerts synced directly to iOS and Android.",
    features: ["Biometric verification", "Websocket live sync", "Custom telemetry graphs"],
    icon: Smartphone,
    link: "#",
    linkText: "View Prototype"
  },
  {
    id: "nqlink-api",
    title: "NQLink API",
    tag: "Pipeline",
    tagClass: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    category: "Pipeline",
    type: "APIs & Geolocation",
    description: "High-performance edge APIs for instant country code lookup, client request translation, security validation, and static database caches.",
    features: ["Sub-5ms global response", "Secure JWT validation", "Robust DDoS mitigation"],
    icon: Share2,
    link: "#",
    linkText: "View Documentation"
  },
  {
    id: "enterprise-hub",
    title: "NOYEQ Enterprise",
    tag: "Pipeline",
    tagClass: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    category: "Pipeline",
    type: "Business Software",
    description: "Custom internal dashboards built for supply chains, client ticketing architectures, and automated inventory sync networks.",
    features: ["Active PostgreSQL replication", "Custom workspace roles", "Docker container bundles"],
    icon: Layers,
    link: "#",
    linkText: "Request Briefing"
  },
  {
    id: "oss-tools",
    title: "NQ Open Source",
    tag: "Active",
    tagClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    category: "Active",
    type: "Open-Source Packages",
    description: "A growing collection of lightweight theme engines, Tailwind layout helpers, and Next.js boilerplate packages published for the dev community.",
    features: ["MIT Licensed", "Strict TypeScript typings", "Zero extra dependencies"],
    icon: Cpu,
    link: "#",
    linkText: "Explore Repos"
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProducts = activeTab === 'All' 
    ? productsList 
    : productsList.filter(p => p.category === activeTab);

  return (
    <PageTransition>
      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Heading */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs text-indigo-400 font-bold font-heading uppercase tracking-widest">
              Digital Ventures
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
              The NOYEQ Ecosystem
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              We design modular, high-capacity products across compilers, automation engines, APIs, and client-centric databases. All aligned under our unified engineering core.
            </p>
          </div>

          {/* Filtering Tab Group */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-full w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                  activeTab === cat ? 'text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeTab === cat && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Grid Catalog */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={product.id}
                    className="glass-panel glass-panel-hover rounded-3xl flex flex-col justify-between overflow-hidden relative"
                  >
                    {/* Glowing highlight corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/[0.03] rounded-bl-full pointer-events-none" />

                    <div className="p-8 flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl w-fit">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-neutral-400 font-semibold uppercase font-heading">
                            {product.type}
                          </span>
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold ${product.tagClass}`}>
                            {product.tag}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold font-heading text-white">{product.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{product.description}</p>
                      </div>

                      <ul className="flex flex-col gap-2.5 border-t border-white/[0.05] pt-4 mt-2">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5 text-xs text-neutral-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-white/[0.02] border-t border-white/[0.05] flex items-center justify-between">
                      <span className="text-xs text-neutral-400 font-medium">
                        {product.tag === 'Active' ? 'Explore active system' : 'View developer log'}
                      </span>
                      <a 
                        href={product.link}
                        className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-indigo-400 transition-colors"
                      >
                        {product.linkText}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Future product request panel */}
        <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.08] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(6,182,212,0.03)_0%,transparent_75%] pointer-events-none" />
          
          <div className="flex flex-col gap-4 max-w-xl">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              Do you have a product proposal?
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We frequently partner with talented software entrepreneurs, creators, and engineers to bootstrap, design, and release new technology platforms. Get in touch to present your idea.
            </p>
          </div>

          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-6 h-11 flex-shrink-0 transition-all duration-300 glow-btn flex items-center gap-1.5 justify-center"
            )}
          >
            Pitch Venture
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </PageTransition>
  );
}
