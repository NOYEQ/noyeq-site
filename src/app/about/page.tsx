'use client';

import { Eye, Shield, Target, Users, Landmark, Flame } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const principles = [
  {
    icon: Target,
    title: "Engineering Integrity",
    description: "We refuse to build superficial software. Every API, microservice, and page template is built to withstand high volume, ensuring long-term code durability."
  },
  {
    icon: Shield,
    title: "Quality Over Convenience",
    description: "We don't take shortcuts in our development cycles. Comprehensive type verification, continuous integration, and automated diagnostics are standard."
  },
  {
    icon: Eye,
    title: "Aesthetic Precision",
    description: "Design is not an afterthought; it is our foundation. We believe beautiful systems induce focus, clarity, and structural trust."
  }
];

const leaders = [
  {
    name: "Founder & Creative Director",
    role: "Core Vision & Strategy",
    bio: "Pioneering the alignment of digital products, scalable infrastructure, and unified design systems under the NOYEQ umbrella brand."
  },
  {
    name: "Principal Software Architect",
    role: "Engineering Leadership",
    bio: "Directing high-performance cloud frameworks, RESTful endpoints, and containerized backend integrations utilizing .NET and Node.js."
  },
  {
    name: "Lead Product Designer",
    role: "UI/UX & Interactive Design",
    bio: "Crafting fluid, highly responsive user experiences, layout animations, and premium glassmorphic visual systems."
  }
];

export default function About() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Intro Hero */}
        <section className="flex flex-col gap-6 max-w-3xl">
          <span className="text-xs text-indigo-400 font-bold font-heading uppercase tracking-widest">
            Company Vision
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            We design tech infrastructure for the next decade.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-2">
            NOYEQ exists to organize, build, and support a cohesive ecosystem of digital tools and automation softwares. We believe the future belongs to companies that combine advanced logic with extreme design discipline.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/[0.06] pt-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Why NOYEQ Exists
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 text-neutral-400 text-sm sm:text-base leading-relaxed">
            <p>
              In an industry that frequently prioritizes disposable software and copy-paste templates, NOYEQ was founded as a boutique technology firm dedicated to genuine craftsmanship. Our goals are long-term: we write code that serves as robust, modular building blocks for future platforms.
            </p>
            <p>
              Whether it is our online compiler suite <strong className="text-white">NQForge</strong>, our upcoming agentic AI modules, or custom enterprise systems built for clients, everything we produce shares a singular DNA: extreme speed, beautiful UI, and unbreakable type safety.
            </p>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full bg-indigo-500/5 blur-[50px]" />
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl w-fit">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Our Mission</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To consolidate advanced programming, artificial intelligence, and premium design into tools and digital products that make computing intuitive, beautiful, and highly productive for developers and enterprises worldwide.
            </p>
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full bg-cyan-500/5 blur-[50px]" />
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl w-fit">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Our Vision</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To establish an umbrella ecosystem containing a diverse yet tightly integrated family of SaaS tools, automated systems, custom APIs, and frameworks, widely recognized for design purity and engineering excellence.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="flex flex-col gap-12 border-t border-white/[0.06] pt-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">Our Core Principles</h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              We live by a set of foundational constraints that guarantee our products are built correctly from the first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {principles.map((pr) => {
              const Icon = pr.icon;
              return (
                <div key={pr.title} className="glass-panel p-8 rounded-2xl flex flex-col gap-4">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">{pr.title}</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">{pr.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leadership Placeholder */}
        <section className="flex flex-col gap-12 border-t border-white/[0.06] pt-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">Our Leadership</h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Meet the minds directing the engineering and brand strategy of the NOYEQ ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div 
                key={leader.name}
                className="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden"
              >
                {/* Visual Avatar Placeholder */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500/25 to-cyan-500/25 border border-white/[0.08] flex items-center justify-center text-neutral-400 font-heading font-semibold text-sm">
                    {leader.name.split(' ').map(w => w[0]).join('').substring(0,2)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-white leading-tight font-heading">{leader.name}</h4>
                    <span className="text-xs text-indigo-400 font-semibold">{leader.role}</span>
                  </div>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed border-t border-white/[0.05] pt-4">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ambitions Block */}
        <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.06] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] pointer-events-none" />
          <div className="flex flex-col gap-4 max-w-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Looking toward the Future</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We are constantly seeking brilliant software craftsmen, automated systems experts, and visionary UX designers. Over the next decade, NOYEQ will scale to house multiple key tech ventures, keeping our standards consistently premium.
            </p>
          </div>
          <div className="flex items-center gap-2 p-3 px-5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-neutral-300 backdrop-blur-sm self-start md:self-auto">
            <Users className="w-4 h-4 text-indigo-400" />
            <span>HQ Location: Bengaluru, IN</span>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
