'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Landmark, MessageSquare, ArrowRight, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import PageTransition from '@/components/PageTransition';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  organization: z.string().min(2, { message: "Organization must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid business email." }),
  type: z.enum(["project", "partnership", "venture", "general"]),
  message: z.string().min(10, { message: "Message details must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: "project"
    }
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API compile and write
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <PageTransition>
      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Intro */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <span className="text-xs text-indigo-400 font-bold font-heading uppercase tracking-widest">
            Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-[1.1]">
            Let&apos;s build something durable.
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Reach out to our strategy desk. Whether you have a custom software project request, an ecosystem partnership brief, or a product proposal, we are ready to align.
          </p>
        </section>

        {/* Form and Coordinates grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT: Coordinates */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-32">
            
            {/* Coordinate cards */}
            <div className="flex flex-col gap-6">
              
              <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-neutral-500 font-semibold uppercase font-heading">
                    Electronic Mail
                  </h4>
                  <a href="mailto:hello@noyeq.com" className="text-sm font-bold text-white hover:text-indigo-400 transition-colors mt-0.5 block">
                    hello@noyeq.com
                  </a>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-neutral-500 font-semibold uppercase font-heading">
                    Corporate Studio
                  </h4>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Bengaluru, India
                  </p>
                  <p className="text-xs text-neutral-400 leading-normal">
                    Remote Hybrid operations globally.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-neutral-500 font-semibold uppercase font-heading">
                    Ecosystem Slack
                  </h4>
                  <span className="text-xs text-neutral-400 mt-0.5 block leading-normal">
                    Developer networks & logs sync.
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex flex-col gap-3.5 pl-2">
              <h4 className="text-[10px] text-neutral-500 font-bold font-heading uppercase tracking-wider">
                Follow NOYEQ
              </h4>
              <div className="flex items-center gap-4 text-neutral-400">
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5 text-xs">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.08] relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(99,102,241,0.02)_0%,transparent_70%] pointer-events-none" />

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center gap-4 py-12"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                  <h3 className="text-xl font-bold font-heading text-white">Inquiry Compiled Successfully</h3>
                  <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
                    Thank you. Your proposal has been secure-registered inside the NOYEQ inbox. A systems architect will review the specs and reach out within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  
                  {/* Name & Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-xs text-neutral-300 font-semibold">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g. John Doe"
                        {...register("name")}
                        className="bg-white/[0.02] border-white/[0.08] rounded-xl h-11 text-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 placeholder-neutral-600 focus:bg-white/[0.04] transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 font-medium pl-1">{errors.name.message}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="organization" className="text-xs text-neutral-300 font-semibold">Organization</Label>
                      <Input
                        id="organization"
                        placeholder="e.g. Acme Corp"
                        {...register("organization")}
                        className="bg-white/[0.02] border-white/[0.08] rounded-xl h-11 text-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 placeholder-neutral-600 focus:bg-white/[0.04] transition-colors"
                      />
                      {errors.organization && (
                        <span className="text-[11px] text-rose-400 font-medium pl-1">{errors.organization.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Email & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-xs text-neutral-300 font-semibold">Business Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g. john@acme.com"
                        {...register("email")}
                        className="bg-white/[0.02] border-white/[0.08] rounded-xl h-11 text-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 placeholder-neutral-600 focus:bg-white/[0.04] transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 font-medium pl-1">{errors.email.message}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="type" className="text-xs text-neutral-300 font-semibold">Inquiry Category</Label>
                      <select
                        id="type"
                        {...register("type")}
                        className="w-full bg-[#0d0d12] border border-white/[0.08] rounded-xl h-11 px-3 text-sm text-neutral-300 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.04] transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a3a3a3' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1.25rem',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <option value="project">Project Request</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="venture">Venture Pitch</option>
                        <option value="general">General Message</option>
                      </select>
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-xs text-neutral-300 font-semibold">Message & Scope Details</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Outline project scopes, server specifications, or partnership ideas..."
                      {...register("message")}
                      className="bg-white/[0.02] border-white/[0.08] rounded-xl text-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 placeholder-neutral-600 focus:bg-white/[0.04] transition-colors resize-none p-3"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 font-medium pl-1">{errors.message.message}</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-neutral-200 text-black rounded-xl py-3.5 mt-2 h-11 text-xs font-semibold justify-center transition-all duration-300 glow-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Compiling Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        Transmit Proposal
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
