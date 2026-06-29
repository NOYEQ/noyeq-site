'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Sectors', path: '/sectors' },
  { name: 'Ventures', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Innovation', path: '/innovation' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto max-w-7xl w-full pointer-events-auto rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-neutral-950/95 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6' 
            : 'bg-transparent border-transparent py-5 px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/noyeq_logo.png"
              alt="NOYEQ"
              width={220}
              height={56}
              priority
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-white ${
                    isActive ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/[0.05]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-white text-black hover:bg-neutral-200 rounded-full text-xs font-semibold px-5 h-9 transition-all duration-300 glow-btn flex items-center gap-1.5"
              )}
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute left-4 right-4 mt-2 p-6 glass-panel rounded-2xl shadow-2xl md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.path}
                >
                  <Link
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      pathname === item.path ? 'text-white font-semibold' : 'text-neutral-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </div>
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08] pt-4 mt-2">
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-white text-black hover:bg-neutral-200 rounded-full py-5 text-sm font-semibold justify-center shadow-lg flex items-center"
                  )}
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
