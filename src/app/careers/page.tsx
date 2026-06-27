'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, MapPin, Code2, Layers, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

const roles = [
  {
    title: "Senior Full-Stack Engineer",
    division: "NQForge & Products Team",
    location: "Bengaluru (Hybrid)",
    details: "Requires deep experience in Next.js 15, React 19, TypeScript, and .NET Core C# API creation. You will construct modular developer tools and orchestrate containerized applications.",
    icon: Code2
  },
  {
    title: "Senior Systems & DevOps Architect",
    division: "Cloud & Infrastructure Team",
    location: "Remote (India)",
    details: "Focusing on PostgreSQL scaling, database replication, multi-region container deployments on Azure/AWS, and constructing CI/CD actions files.",
    icon: Layers
  },
  {
    title: "Interactive UX / Product Designer",
    division: "Design & Identity Studio",
    location: "Bengaluru (Hybrid)",
    details: "Crafting visual styles, glassmorphic layout tokens, vector icon sets, and high-fidelity Framer Motion micro-animations. A portfolio displaying motion craft is required.",
    icon: PenTool
  }
];

export default function Careers() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Careers Intro */}
        <section className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs w-fit font-semibold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5" />
            Careers coming soon
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Build the digital foundations of tomorrow.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            We are assembling a boutique studio of creative software craftsmen, database engineers, and interaction designers who reject generic implementations and strive for pixel perfection.
          </p>
        </section>

        {/* Form Container */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
          
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl">
            <div className="flex flex-col gap-3 max-w-lg">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                Want to know when hiring opens?
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Register your email address below. We will alert you the moment positions open and provide early briefings on candidate criteria.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto flex-shrink-0">
              <div className="relative w-full sm:w-64">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full py-3 pl-4 pr-10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <Button
                type="submit"
                className="bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-6 h-12 transition-all duration-300 glow-btn"
              >
                Join Talent List
              </Button>
            </form>
          </div>
          {success && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-emerald-400 font-semibold mt-3 pl-4"
            >
              Successfully registered! We will email you notifications.
            </motion.p>
          )}
        </section>

        {/* Upcoming Openings */}
        <section className="flex flex-col gap-12 border-t border-white/[0.06] pt-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">Upcoming Open Positions</h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Preview our planned hiring pipeline for late 2026. Review roles and details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role) => {
              const RoleIcon = role.icon;
              return (
                <div key={role.title} className="glass-panel p-8 rounded-3xl flex flex-col justify-between gap-6 relative overflow-hidden">
                  <div className="flex flex-col gap-4">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                      <RoleIcon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-bold text-white font-heading leading-snug">{role.title}</h3>
                      <span className="text-[10px] text-indigo-400 font-semibold uppercase">{role.division}</span>
                    </div>

                    <p className="text-neutral-400 text-xs leading-relaxed border-t border-white/[0.05] pt-4 mt-2">
                      {role.details}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                    <span>{role.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
