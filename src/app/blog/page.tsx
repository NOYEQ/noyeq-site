'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, Terminal } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const categories = ["All", "Engineering", "Design", "Updates"];

const posts = [
  {
    id: "nqforge-compilation-edge",
    title: "Compiling at the Edge: Inside NQForge's Serverless Engine",
    excerpt: "How we optimized sub-50ms code formatting and calculations by moving compiler nodes to edge functions on Vercel and AWS.",
    date: "June 25, 2026",
    author: "Software Architect",
    readTime: "6 min read",
    category: "Engineering",
    featured: true,
    desc: "When building NQForge, we faced a critical challenge: cold start compilation lag. In this deep dive, we walk through how we bypassed local Node.js compilation processes and created containerized edge handlers that run formatting and compiling processes instantly in memory..."
  },
  {
    id: "dotnet-csharp-enterprise",
    title: "Why We Adopted C# .NET Core for Enterprise API Layers",
    excerpt: "Exploring the memory efficiency, static typing parameters, and threading optimization in modern .NET runtimes.",
    date: "May 18, 2026",
    author: "Backend Lead",
    readTime: "8 min read",
    category: "Engineering",
    featured: false
  },
  {
    id: "glassmorphism-ux-mechanics",
    title: "The Mechanics of Glassmorphism & Visual Trust",
    excerpt: "A look into subpixel borders, color schemes, and backdrop filter parameters that compose modern high-end UI interfaces.",
    date: "April 29, 2026",
    author: "Creative Director",
    readTime: "5 min read",
    category: "Design",
    featured: false
  },
  {
    id: "global-telemetry-monitoring",
    title: "Establishing Real-Time Server Telemetry Pipelines",
    excerpt: "Implementing WebSocket connections and Redis caching queues to push container logs directly to our mobile platform.",
    date: "March 12, 2026",
    author: "Systems Engineer",
    readTime: "7 min read",
    category: "Updates",
    featured: false
  },
  {
    id: "nextjs15-react19-migration",
    title: "Migrating to Next.js 15 and React 19: Lessons Learned",
    excerpt: "Handling server components, asynchronous layouts, and new Tailwind v4 styling parameters inside a large monorepo.",
    date: "February 04, 2026",
    author: "Frontend Lead",
    readTime: "9 min read",
    category: "Engineering",
    featured: false
  }
];

export default function Blog() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCat = selectedCat === "All" || post.category === selectedCat;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = posts.find(p => p.featured && (selectedCat === "All" || p.category === selectedCat));
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  return (
    <PageTransition>
      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <section className="flex flex-col gap-6 max-w-3xl">
          <span className="text-xs text-indigo-400 font-bold font-heading uppercase tracking-widest">
            NOYEQ Labs
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Engineering Diaries & Visual Insights
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Read our strategic thoughts on systems architecture, client-side speed optimizations, user experience typography, and corporate project updates.
          </p>
        </section>

        {/* Filter and Search Bar */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 border-b border-white/[0.06] pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-full w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                  selectedCat === cat ? 'text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {selectedCat === cat && (
                  <motion.span
                    layoutId="activeBlogFilter"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </section>

        {/* FEATURED POST */}
        {featuredPost && searchQuery === "" && (
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white/[0.08]"
            >
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-6">
                  
                  {/* Category tag & stats */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold uppercase tracking-wider font-heading">
                      {featuredPost.category}
                    </span>
                    <span className="text-neutral-500 text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white hover:text-indigo-300 transition-colors cursor-pointer leading-[1.2]">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                      {featuredPost.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between border-t border-white/[0.05] pt-6 gap-4">
                  <div className="flex items-center gap-6 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-600" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <Link 
                    href="#" 
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white hover:text-indigo-400 p-0 flex items-center gap-1.5 text-sm"
                    )}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative side grid art */}
              <div className="lg:col-span-5 bg-white/[0.01] border-l border-white/[0.05] flex items-center justify-center p-8 relative min-h-[250px] overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-25" />
                <Terminal className="w-16 h-16 text-indigo-500/25 animate-pulse" />
              </div>
            </motion.div>
          </section>
        )}

        {/* REGULAR POSTS GRID */}
        <section>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 text-neutral-500 text-sm">
              No matching articles found in labs.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {regularPosts.map((post) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={post.id}
                    className="glass-panel glass-panel-hover rounded-3xl flex flex-col justify-between overflow-hidden"
                  >
                    <div className="p-8 flex flex-col gap-6">
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold uppercase tracking-wider font-heading">
                          {post.category}
                        </span>
                        <span className="text-neutral-500 text-xs flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold font-heading text-white leading-snug hover:text-indigo-300 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-white/[0.02] border-t border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[10px] text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>
                      <a 
                        href="#" 
                        className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-indigo-400 transition-colors"
                      >
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

      </div>
    </PageTransition>
  );
}
