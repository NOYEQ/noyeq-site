'use client';

import { Terminal, AppWindow, Smartphone, Cloud, Cog, Share2, Layers, ShieldAlert, PenTool, HelpCircle, ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const serviceGroups = [
  {
    title: "Application Engineering",
    description: "We architect resilient consumer-facing and developer-focused applications designed for maximum client retention.",
    services: [
      {
        icon: AppWindow,
        name: "Web Applications",
        details: "Next-generation single page apps and server-side rendered portals using React, Next.js, and TypeScript. Optimized for sub-second page loads, SEO, and visual excellence."
      },
      {
        icon: Smartphone,
        name: "Mobile Applications",
        details: "Native iOS and Android systems built with clean modular architectures. Native integrations for biometric security, geolocation, and background sync."
      },
      {
        icon: Terminal,
        name: "Custom Software",
        details: "Bespoke desktop systems, developer command-line interfaces, and custom frameworks customized precisely to client engineering teams."
      }
    ]
  },
  {
    title: "Cloud & Enterprise Solutions",
    description: "We deploy secure, highly replicable backends and enterprise networks that scale horizontally.",
    services: [
      {
        icon: Cloud,
        name: "Cloud Architectures",
        details: "Provisioning microservice networks on Microsoft Azure and AWS. Containerized deployments with Docker and Kubernetes, backed by Infrastructure-as-code."
      },
      {
        icon: Layers,
        name: "Enterprise Software",
        details: "Heavy-duty business tools, database managers, and internal tracking consoles built using secure, typed .NET C# codebases."
      },
      {
        icon: ShieldAlert,
        name: "Custom Internal Systems",
        details: "Proprietary dashboards, secure authentication firewalls, and active analytics trackers built for internal corporate coordination."
      }
    ]
  },
  {
    title: "Automation & Integrations",
    description: "Eliminate administrative overhead. We sync disparate data pipelines and configure autonomous task agents.",
    services: [
      {
        icon: Cog,
        name: "Business Automation",
        details: "Intelligent workflow managers, data scrapers, automated alert routers, and background job queues built for hands-off system execution."
      },
      {
        icon: Share2,
        name: "System Integrations",
        details: "Connecting legacy SQL structures to modern REST and GraphQL interfaces. Seamlessly syncing ERPs, CRMs, and custom APIs."
      }
    ]
  },
  {
    title: "Design & Strategy",
    description: "Aligning aesthetic identity with corporate goals. We design interfaces that convey structural trust.",
    services: [
      {
        icon: PenTool,
        name: "UI/UX Design Studio",
        details: "Figma layouts, interactive system wireframes, branding guidelines, high-end motion guidelines, and pixel-perfect design systems."
      },
      {
        icon: HelpCircle,
        name: "Software Consulting",
        details: "Deep-dive codebase reviews, system audit reports, database query optimization guidelines, and strategic product roadmapping."
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
          <span className="text-xs text-indigo-400 font-bold font-heading uppercase tracking-widest">
            Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Engineering & Design Solutions
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            We provide boutique design-led engineering services. From complex cloud migrations to interactive web layouts and customized enterprise integrations, we deliver production-ready code.
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
                <span className="text-xs text-indigo-400 font-bold font-heading">
                  DIVISION 0{groupIdx + 1}
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
                      <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
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
          <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(99,102,241,0.05)_0%,transparent_75%] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white max-w-xl leading-tight">
            Have a custom architecture project?
          </h2>
          <p className="text-neutral-400 max-w-md text-xs sm:text-sm leading-relaxed">
            We partner with digital departments, CTOs, and founders to translate conceptual specifications into scalable containerized frameworks.
          </p>

          <Link 
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "bg-white text-black hover:bg-neutral-200 rounded-full font-semibold px-8 h-12 mt-2 transition-all duration-300 glow-btn flex items-center gap-2 justify-center"
            )}
          >
            Consult on Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </PageTransition>
  );
}
