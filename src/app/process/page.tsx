'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Compass, Code2, ClipboardCheck, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const phases = [
  {
    num: "01",
    name: "Discovery & Blueprinting",
    subtitle: "Setting the Architectural Foundation",
    duration: "Week 1 - 2",
    icon: Compass,
    details: "We start by deeply researching target markets, translating client strategies into formal database blueprints, microservice route maps, and UI system spacing parameters. No line of code is written until the blueprint is bulletproof.",
    deliverables: [
      "Technical specifications brief",
      "Database schema relationships map",
      "Interactive structural site wireframe",
      "API endpoint mock definitions"
    ]
  },
  {
    num: "02",
    name: "High-Fidelity Interface Design",
    subtitle: "Crafting the Brand's Visual Language",
    duration: "Week 3 - 5",
    icon: FileText,
    details: "We map layouts into high-end, responsive Figma frames. This phase sets up the custom theme: our custom HSL tokens, typography pairs (Outfit & Inter), glassmorphism components, and custom icon vectors.",
    deliverables: [
      "Figma design workspace link",
      "Premium typography & grid rules",
      "Interactive visual layout prototype",
      "Production-ready SVGs & media assets"
    ]
  },
  {
    num: "03",
    name: "Type-Safe System Engineering",
    subtitle: "Translating Designs to High-Performance Code",
    duration: "Week 6 - 10",
    icon: Code2,
    details: "Our engineers build the backend endpoints in .NET Core (C#) or Node.js, and compile the frontend interfaces in Next.js 15 (React 19 & TypeScript). We implement strictly-typed hooks, validated inputs (Zod), and database relationships (Prisma).",
    deliverables: [
      "Strict-typed GitHub codebase repo",
      "Fully documented REST/GraphQL endpoints",
      "Responsive React component layouts",
      "Database migrations files"
    ]
  },
  {
    num: "04",
    name: "Rigorous Diagnostics & QA",
    subtitle: "Auditing Codebases for Ultimate Scalability",
    duration: "Week 11 - 12",
    icon: ClipboardCheck,
    details: "We perform automated end-to-end integration audits, unit diagnostics, load test endpoints to verify sub-50ms API responses, and run rigorous CSS tests to target 100/100 Lighthouse performance metrics.",
    deliverables: [
      "Unit & integration test report logs",
      "Lighthouse SEO & speed audits",
      "Vulnerability scan certificates",
      "User-acceptance test review documentation"
    ]
  },
  {
    num: "05",
    name: "Dockerized Release & Live Ops",
    subtitle: "Continuous Deployment on Global Edge Networks",
    duration: "Continuous",
    icon: Play,
    details: "We containerize the applications with Docker files, configure GitHub Actions pipelines for automated CI/CD flow, deploy nodes on Vercel or cloud endpoints, and set up live system diagnostics.",
    deliverables: [
      "Containerized Docker configurations",
      "CI/CD deployment flow workflows",
      "Global edge cache rules",
      "Uptime status alert endpoints"
    ]
  }
];

export default function Process() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <PageTransition>
      <div className="flex flex-col gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <span className="text-xs text-indigo-400 font-bold font-heading uppercase tracking-widest">
            Methodology
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Our Engineering Process
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We follow a rigorous, stage-gated development framework. By dividing design, coding, testing, and cloud configuration into structured milestones, we eliminate technical debt.
          </p>
        </section>

        {/* Interactive Timeline Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT side: Phase tab triggers */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {phases.map((ph, idx) => {
              const Icon = ph.icon;
              const isSelected = selectedPhase === idx;
              return (
                <button
                  key={ph.num}
                  onClick={() => setSelectedPhase(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-5 relative ${
                    isSelected 
                      ? 'glass-panel bg-neutral-900/60 border-indigo-500/30 shadow-lg' 
                      : 'bg-transparent border-white/[0.04] hover:border-white/[0.1] opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Selected Indicator */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeProcessBorder"
                      className="absolute left-[-1px] top-4 bottom-4 w-[3px] bg-indigo-500 rounded-r"
                    />
                  )}
                  
                  <div className={`p-3 rounded-xl border flex-shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' 
                      : 'bg-white/[0.02] border-white/[0.06] text-neutral-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-bold font-heading uppercase tracking-wider ${
                      isSelected ? 'text-indigo-400' : 'text-neutral-500'
                    }`}>
                      PHASE {ph.num} — {ph.duration}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5 font-heading">
                      {ph.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT side: Active phase detailed metrics */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 sm:p-12 rounded-3xl border border-indigo-500/10 relative overflow-hidden"
              >
                {/* Background glow orb */}
                <div className="absolute right-[-50px] top-[-50px] w-64 h-64 bg-indigo-500/[0.03] rounded-full blur-[80px] pointer-events-none" />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-indigo-400 font-bold tracking-wider font-heading uppercase">
                      DETAILS & SCOPE — {phases[selectedPhase].duration}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight">
                      {phases[selectedPhase].name}
                    </h2>
                    <p className="text-sm text-neutral-300 italic">
                      &ldquo;{phases[selectedPhase].subtitle}&rdquo;
                    </p>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed border-t border-white/[0.05] pt-6">
                    {phases[selectedPhase].details}
                  </p>

                  <div className="flex flex-col gap-4 pt-4">
                    <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider">
                      Key Phase Deliverables:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phases[selectedPhase].deliverables.map((del) => (
                        <li key={del} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </section>

        {/* Workflow Briefing Call Banner */}
        <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.06] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] pointer-events-none" />
          <div className="flex flex-col gap-4 max-w-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Need a detailed workflow briefing?</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We can host a detailed technical review, walking through code structure standards, automated testing libraries, and cloud architecture plans designed specifically for your product launch.
            </p>
          </div>
          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-6 h-11 flex-shrink-0 transition-all duration-300 glow-btn flex items-center gap-1.5 justify-center"
            )}
          >
            Request Roadmap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </PageTransition>
  );
}
