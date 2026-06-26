'use client';

import Link from 'next/link';
import { ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="relative border-t border-white/[0.05] bg-neutral-950/60 backdrop-blur-md pt-20 pb-10 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full bg-indigo-500/10 blur-[60px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <rect x="15" y="15" width="70" height="70" rx="16" stroke="currentColor" strokeWidth="10" className="opacity-40" />
                <path d="M50 15V85" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M15 50H85" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <circle cx="50" cy="50" r="12" fill="url(#footer-logo-grad)" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="100" y2="100">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-heading font-bold text-xl tracking-wider text-white">
                NOYEQ
              </span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              NOYEQ is a leading global technology house building the future of software, artificial intelligence, and automated platforms. We design digital products that empower human potential.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-4 text-neutral-400">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:info@noyeq.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-white text-sm font-semibold tracking-wider uppercase">
              Ecosystem
            </h3>
            <ul className="flex flex-col gap-3 text-neutral-400 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products Portfolio
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  NQForge
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-neutral-500 cursor-default">
                  Future AI Platforms
                </span>
              </li>
              <li>
                <span className="text-neutral-500 cursor-default">
                  Enterprise Solutions
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-white text-sm font-semibold tracking-wider uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-neutral-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Careers
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    Soon
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter block */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="font-heading text-white text-sm font-semibold tracking-wider uppercase">
              Subscribe
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Stay updated on product launches and technological breakthroughs from the NOYEQ labs.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full py-2.5 pl-4 pr-10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-white text-black hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {submitted && (
              <span className="text-[11px] text-emerald-400 font-medium">
                Successfully subscribed to updates.
              </span>
            )}
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} NOYEQ Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
