'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#030303]">
      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-35" />
      
      {/* Glowing vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030303_95%)] opacity-70" />

      {/* Moving Ambient Glow Blobs */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 70, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[5%] w-[45vw] h-[45vw] rounded-full opacity-[0.12] mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -70, 60, 0],
          y: [0, 90, -50, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] rounded-full opacity-[0.10] mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{
          duration: 33,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[25%] left-[35%] w-[35vw] h-[35vw] rounded-full opacity-[0.06] mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a855f7 0%, transparent 75%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}
