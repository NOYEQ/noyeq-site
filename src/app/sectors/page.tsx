'use client';

import { Terminal, AppWindow, Cloud, Cog, Share2, Layers, ShieldAlert, HelpCircle, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const serviceGroups = [
  {
    title: "Digital Ecosystems",
    description: "Our foundational sector. We architect resilient software, AI platforms, and enterprise networks designed for global scale.",
    services: [
      {
        icon: Terminal,
        name: "Custom Software",
        details: "Bespoke systems and custom frameworks engineered precisely to solve complex market inefficiencies and team workflows."
      },
      {
        icon: AppWindow,
        name: "Web Platforms",
        details: "Next-generation portals and SaaS applications optimized for sub-second performance, accessibility, and visual excellence."
      },
      {
        icon: Cog,
        name: "AI & Automation",
        details: "Integrating context-aware models, autonomous agents, and predictive logic directly into core operational systems."
      },
      {
        icon: Cloud,
        name: "Enterprise Networks",
        details: "Heavy-duty architectures, secure databases, and internal infrastructure built for massive corporate coordination."
      }
    ]
  },
  {
    title: "Physical & Consumer Goods",
    description: "Expanding our problem-solving methodology from the digital space into tangible, sustainable physical products.",
    services: [
      {
        icon: Layers,
        name: "FMCG Development",
        details: "Incubating high-quality consumer products (e.g., sustainable food lines) focused on ethical sourcing and health."
      },
      {
        icon: Share2,
        name: "Supply Chain Logic",
        details: "Applying software-level precision and automation to physical supply chains for maximum efficiency and transparency."
      },
      {
        icon: ShieldAlert,
        name: "Sustainable Operations",
        details: "Building operations from the ground up that prioritize ecological sustainability alongside economic growth."
      },
      {
        icon: HelpCircle,
        name: "Future Sectors",
        details: "Continuously researching and prototyping solutions in agriculture, logistics, and spatial computing."
      }
    ]
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Header */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <span className="text-xs text-purple-400 font-bold font-heading uppercase tracking-widest">
            Our Sectors
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Global Sectors & Solutions
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We deliver production-ready solutions focused on tangible global outcomes. From intelligent digital systems to sustainable consumer goods, we build infrastructure that drives human progress.
          </p>
        </section>

        {/* Services Group Stack */}
        <section className="flex flex-col gap-20">
          {serviceGroups.map((group, groupIdx) => (
            <div 
              key={group.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/[0.06] pt-12"
            >
              {/* Group Meta Info */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="text-xs text-purple-400 font-bold font-heading">
                  SECTOR 0{groupIdx + 1}
                </span>
                <h2 className="text-2xl font-bold font-heading text-white">{group.title}</h2>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md">
                  {group.description}
                </p>
              </div>

              {/* Group Services Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {group.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={service.name}
                      className="glass-panel p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden"
                    >
                      <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-heading">{service.name}</h3>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Consulting Banner */}
        <section className="glass-panel rounded-3xl p-8 sm:p-16 border border-white/[0.08] relative overflow-hidden flex flex-col items-center text-center gap-6 mb-10">
          <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(168,85,247,0.05)_0%,transparent_75%] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white max-w-xl leading-tight">
            Ready to team up?
          </h2>
          <p className="text-neutral-400 max-w-md text-xs sm:text-sm leading-relaxed">
            We partner with businesses and innovators to translate complex global challenges into scalable, world-class solutions.
          </p>

          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-8 h-12 mt-2 transition-all duration-300 glow-btn flex items-center gap-2 justify-center"
            )}
          >
            Start a Venture
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </PageTransition>
  );
}
