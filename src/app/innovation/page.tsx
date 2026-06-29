'use client';

import { Cpu, Database, Cloud, Server, ArrowRight, ShieldCheck, Zap, Repeat } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const techGroups = [
  {
    title: "Client-Side & Interfaces",
    icon: Cpu,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    techs: [
      { name: "Next.js & React 19", role: "SSR & SPA interface frameworks", detail: "Provides hydration speed and Largest Contentful Paint (LCP) optimizations." },
      { name: "TypeScript", role: "Strict compile-time type verification", detail: "Eliminates syntax failures and simplifies code reviews." },
      { name: "Tailwind CSS v4", role: "Utility styling & CSS theme variables", detail: "Supports responsive, lightweight utility grids and dark themes." }
    ]
  },
  {
    title: "Server & Application Logic",
    icon: Server,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    techs: [
      { name: ".NET Core (C#)", role: "Enterprise backend service layer", detail: "Supports massive parallel executions, multi-threading, and secure APIs." },
      { name: "Node.js & Express", role: "Fast asynchronous API routing", detail: "Used for developer utilities, compilers, and serverless edge functions." },
      { name: "REST APIs & GraphQL", role: "Self-documenting data endpoints", detail: "Designed with strict Zod input validates and security checks." }
    ]
  },
  {
    title: "Databases & Storage Systems",
    icon: Database,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    techs: [
      { name: "PostgreSQL", role: "Primary relational database layer", detail: "Optimized with complex indexing, JSONB storage, and read replication." },
      { name: "Prisma ORM", role: "Type-safe database query client", detail: "Generates strict client schemas, preventing runtime SQL injection." },
      { name: "Redis Cache", role: "In-memory caching and session store", detail: "Drastically lowers database queries, keeping responses below 10ms." }
    ]
  },
  {
    title: "DevOps & Cloud Systems",
    icon: Cloud,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    techs: [
      { name: "Docker & Containers", role: "Standardized execution nodes", detail: "Ensures parity between development, testing, and production environments." },
      { name: "Microsoft Azure & AWS", role: "Global cloud hosting networks", detail: "Orchestrates load balancers, database clusters, and DNS rules." },
      { name: "CI/CD & GitHub Actions", role: "Automated unit tests & deployments", detail: "Builds, audits, and deploys codebases upon code merges automatically." }
    ]
  }
];

const philosophyItems = [
  {
    icon: ShieldCheck,
    title: "Strict Validation",
    desc: "We enforce complete verification across all ventures. From static code typing to rigorous material sourcing for physical products, we reject assumptions."
  },
  {
    icon: Zap,
    title: "Efficiency Budgets",
    desc: "Our solutions follow strict speed and efficiency parameters. Whether it is a sub-50ms server response or streamlined supply chain logistics, we optimize relentlessly."
  },
  {
    icon: Repeat,
    title: "Scalable Architectures",
    desc: "Our systems, both digital and physical, are structured to support safe, repetitive scaling. We eliminate bottlenecks and prevent operational friction."
  }
];

export default function Technology() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Title */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <span className="text-xs text-purple-400 font-bold font-heading uppercase tracking-widest">
            Innovation Engine
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Our Innovation Framework
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We approach global problems with a strict methodology. Whether we are engineering cloud architectures or supply chains, we deploy scalable, rigorous processes that guarantee quality.
          </p>
        </section>

        {/* Philosophy Points */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {philosophyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-panel p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
                {/* Visual accent */}
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/[0.01] rounded-tl-full pointer-events-none" />
                
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-white">{item.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Tech Group Catalog */}
        <section className="flex flex-col gap-16 border-t border-white/[0.06] pt-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">Digital Technology Matrix</h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              An inventory of core framework selections deployed across NOYEQ Digital&apos;s software systems, AI pipelines, and enterprise architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.title} className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.05] flex flex-col gap-6">
                  
                  {/* Group header */}
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${group.color}`}>
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white">{group.title}</h3>
                  </div>

                  {/* Tech stack items inside group */}
                  <div className="flex flex-col gap-6 mt-2">
                    {group.techs.map((tech) => (
                      <div key={tech.name} className="flex flex-col gap-1 border-l-2 border-white/[0.08] pl-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-white font-heading">{tech.name}</h4>
                          <span className="text-[10px] text-neutral-400 font-semibold uppercase">{tech.role}</span>
                        </div>
                        <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">{tech.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack Banner CTA */}
        <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.06] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] pointer-events-none" />
          <div className="flex flex-col gap-4 max-w-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Partner with our innovators</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We apply strict innovation principles to every project we undertake. If you are looking to build a digital platform or a physical venture, let&apos;s explore how we can architect the solution.
            </p>
          </div>
          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-6 h-11 flex-shrink-0 transition-all duration-300 glow-btn flex items-center gap-1.5 justify-center"
            )}
          >
            Consult Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </PageTransition>
  );
}
