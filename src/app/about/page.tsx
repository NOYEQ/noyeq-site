'use client';

import { Eye, Shield, Target, Users, Landmark, Flame } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const principles = [
  {
    icon: Target,
    title: "Universal Excellence",
    description: "Whether it is digital infrastructure or physical consumer goods, we refuse to cut corners. Every venture is built for longevity and global impact."
  },
  {
    icon: Shield,
    title: "Sustainable Foundations",
    description: "We focus on real-world impact. We create solutions that don't just solve immediate problems but scale sustainably across different sectors."
  },
  {
    icon: Eye,
    title: "Design with Purpose",
    description: "Design is not an afterthought; it is our foundation. We believe beautiful execution induces clarity, trust, and wider adoption."
  }
];

const leaders = [
  {
    name: "Founder & Creative Director",
    role: "Core Vision & Strategy",
    bio: "Pioneering the alignment of digital products, scalable infrastructure, and physical brand ventures under the NOYEQ mother brand."
  },
  {
    name: "Head of Digital Operations",
    role: "Engineering Leadership",
    bio: "Directing high-performance cloud frameworks, SaaS ventures, and digital systems that form the foundation of our technology division."
  },
  {
    name: "Head of Product Innovation",
    role: "Venture Expansion",
    bio: "Leading research and development for new sectors, including FMCG and global physical products, merging aesthetics with utility."
  }
];

export default function About() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Intro Hero */}
        <section className="flex flex-col gap-6 max-w-3xl">
          <span className="text-xs text-purple-400 font-bold font-heading uppercase tracking-widest">
            The Mother Company
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Teaming up for a better world.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-2">
            NOYEQ is not just a technology agency. We are a global parent company building solutions across sectors. We exist to create impactful ventures that help businesses grow and people thrive globally.
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
              NOYEQ was founded with a singular, overarching belief: complex global challenges require unified, cross-sector solutions. We are a mother company dedicated to genuine craftsmanship, whether we are writing code or sourcing physical goods.
            </p>
            <p>
              We are currently focused on establishing an unbreakable foundation of <strong className="text-white">Digital Solutions</strong>—building the software, AI tools, and architectures of tomorrow. However, our horizon expands far beyond software. We are actively planning ventures in FMCG, agriculture, and physical products, starting with sustainable initiatives in Sri Lanka and scaling worldwide.
            </p>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full bg-purple-500/5 blur-[50px]" />
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl w-fit">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Our Mission</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To consolidate advanced engineering, strategic product design, and real-world utility into a family of ventures that make life and business better across the globe.
            </p>
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full bg-cyan-500/5 blur-[50px]" />
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl w-fit">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Our Vision</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To establish an umbrella ecosystem containing a diverse yet tightly integrated network of brands, from high-performance digital tools to premium physical goods.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="flex flex-col gap-12 border-t border-white/[0.06] pt-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">Our Core Principles</h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              We live by a set of foundational constraints that guarantee our ventures are built correctly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {principles.map((pr) => {
              const Icon = pr.icon;
              return (
                <div key={pr.title} className="glass-panel p-8 rounded-2xl flex flex-col gap-4">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
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
              Meet the minds directing the global strategy of the NOYEQ parent company.
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500/25 to-cyan-500/25 border border-white/[0.08] flex items-center justify-center text-neutral-400 font-heading font-semibold text-sm">
                    {leader.name.split(' ').map(w => w[0]).join('').substring(0,2)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-white leading-tight font-heading">{leader.name}</h4>
                    <span className="text-xs text-purple-400 font-semibold">{leader.role}</span>
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
              We are constantly seeking brilliant operators, partners, and innovators. Over the next decade, NOYEQ will scale to house multiple key global ventures across digital platforms and physical products.
            </p>
          </div>
          <div className="flex items-center gap-2 p-3 px-5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-neutral-300 backdrop-blur-sm self-start md:self-auto">
            <Users className="w-4 h-4 text-purple-400" />
            <span>HQ Location: Bengaluru, IN</span>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
