'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const projectsList = [
  {
    id: 1,
    title: "Global Supply Chain Dashboard",
    category: "Enterprise System",
    status: "Completed",
    description: "A centralized dashboard for tracking international shipments, automated inventory alerts, and real-time logistics analytics.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    thumbnail: "bg-gradient-to-tr from-purple-900/30 to-black border border-white/[0.05]"
  },
  {
    id: 2,
    title: "FinTech Compliance Engine",
    category: "Cloud Architecture",
    status: "In Development",
    description: "A high-security backend service designed to process millions of transactions and flag anomalies using custom AI heuristics.",
    techStack: [".NET 8", "C#", "Azure", "Docker"],
    thumbnail: "bg-gradient-to-tr from-cyan-900/30 to-black border border-white/[0.05]"
  },
  {
    id: 3,
    title: "Consumer Mobile Banking",
    category: "Mobile Application",
    status: "Completed",
    description: "A premium mobile banking experience with biometric authentication, instant transfers, and personalized financial insights.",
    techStack: ["React Native", "Node.js", "GraphQL", "Framer Motion"],
    thumbnail: "bg-gradient-to-tr from-indigo-900/30 to-black border border-white/[0.05]"
  },
  {
    id: 4,
    title: "Automated Data Scraper",
    category: "Automation",
    status: "Active",
    description: "An autonomous agent that crawls competitor websites for pricing changes and updates an internal corporate tracking database.",
    techStack: ["Python", "Playwright", "AWS Lambda", "SQL Server"],
    thumbnail: "bg-gradient-to-tr from-emerald-900/30 to-black border border-white/[0.05]"
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Heading */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <span className="text-xs text-purple-400 font-bold font-heading uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Selected Client Projects
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            A showcase of custom software, enterprise architectures, and digital products we have engineered for our partners.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsList.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-6 group"
            >
              {/* Thumbnail Placeholder */}
              <div className={`w-full aspect-video rounded-3xl ${project.thumbnail} relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}>
                <Code2 className="w-12 h-12 text-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{project.category}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold ${
                    project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                    project.status === 'Active' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 
                    'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

      </div>
    </PageTransition>
  );
}
