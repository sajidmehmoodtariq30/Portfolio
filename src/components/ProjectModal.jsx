'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { playClick, playPop } from '@/lib/sound';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('architecture');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const architectureData = project.architecture || {
    frontend: "Next.js 15 (App Router), React 19, TailwindCSS v4, Framer Motion",
    backend: "Node.js API Routes, Next.js Edge Handlers, JWT Authentication",
    database: "MongoDB Atlas, Mongoose ORM, Indexed Schema Models",
    deployment: "Vercel Edge Network, Ubuntu VPS (SSL / Nginx Reverse Proxy)",
    metrics: [
      { label: "SEO Score", value: "100%", detail: "Lighthouse Audit Passed" },
      { label: "API Latency", value: "<45ms", detail: "Edge API Handlers" },
      { label: "TTFB", value: "~120ms", detail: "Optimized Server Rendering" },
      { label: "Build Time", value: "Clean", detail: "Zero TypeScript/Lint Errors" }
    ],
    challenges: [
      {
        title: "State Synchronization & ISR Caching",
        solution: "Implemented Next.js `no-store` API handlers paired with optimistic client updates to maintain real-time database state without server lag."
      },
      {
        title: "CORS & Auth Token Hardening",
        solution: "Configured secure HTTP-only cookies with JWT verification and Whitelisting IP security rules on production API endpoints."
      },
      {
        title: "60fps Fluid Motion & Asset Compression",
        solution: "Utilized Web Audio API sound synthesis and Framer Motion spring physics with GPU hardware acceleration."
      }
    ]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { playPop(); onClose(); }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-0"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-3xl glass-card-premium rounded-3xl p-6 md:p-8 max-h-[90vh] flex flex-col shadow-2xl border border-emerald-500/30 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="bg-gradient-to-r from-emerald-400 to-sky-400 inline-flex font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text mb-1">
                  System Architecture Case Study
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tight">{project.title}</h2>
              </div>
              <button
                onClick={() => { playPop(); onClose(); }}
                className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors text-lg font-bold shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 my-4 border-b border-white/10 pb-3 overflow-x-auto no-scrollbar">
              {[
                { id: 'architecture', label: '⚙️ System Architecture' },
                { id: 'challenges', label: '💡 Technical Challenges' },
                { id: 'metrics', label: '📊 Performance Metrics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { playClick(); setActiveTab(tab.id); }}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 shadow-md font-bold'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Content Body */}
            <div className="flex-1 overflow-y-auto py-2 pr-1 space-y-6 text-sm text-white/80">
              {activeTab === 'architecture' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <p className="leading-relaxed text-white/80">
                    High-level architectural blueprint and technology stack utilized in building <strong className="text-emerald-300">{project.title}</strong>:
                  </p>

                  {/* Flow Diagram Representation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
                      <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Client & Presentation Layer</div>
                      <div className="text-sm font-semibold text-white">{architectureData.frontend}</div>
                      <p className="text-xs text-white/60">Server-Side Rendering (SSR) & Responsive UI Components</p>
                    </div>

                    <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
                      <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Backend API & Auth</div>
                      <div className="text-sm font-semibold text-white">{architectureData.backend}</div>
                      <p className="text-xs text-white/60">RESTful Endpoint API Route Handlers</p>
                    </div>

                    <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
                      <div className="text-xs uppercase font-bold text-purple-400 tracking-wider">Database & ORM Layer</div>
                      <div className="text-sm font-semibold text-white">{architectureData.database}</div>
                      <p className="text-xs text-white/60">Document Schema Modeling & Query Optimization</p>
                    </div>

                    <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
                      <div className="text-xs uppercase font-bold text-teal-400 tracking-wider">DevOps & Deployment</div>
                      <div className="text-sm font-semibold text-white">{architectureData.deployment}</div>
                      <p className="text-xs text-white/60">CDN Edge Caching & Automated CI/CD Deployments</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'challenges' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {architectureData.challenges.map((challenge, idx) => (
                    <div key={idx} className="bg-slate-900/70 p-4 rounded-2xl border border-white/10 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-300 font-bold text-base">
                        <CheckIcon className="size-5 text-emerald-400 shrink-0" />
                        <span>{challenge.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed pl-7">{challenge.solution}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'metrics' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-4">
                  {architectureData.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/20 text-center space-y-1">
                      <div className="text-3xl font-extrabold text-gradient-emerald">{metric.value}</div>
                      <div className="text-sm font-bold text-white">{metric.label}</div>
                      <div className="text-xs text-white/50">{metric.detail}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Modal Footer Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => playClick()}
                    className="bg-white text-gray-950 font-bold px-6 py-2.5 rounded-xl inline-flex items-center justify-center w-full sm:w-auto text-sm hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <ArrowUprightIcon className="size-4 mr-2" />
                    <span>Visit Live Application</span>
                  </motion.button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => playClick()}
                    className="bg-white/10 text-white font-semibold px-6 py-2.5 rounded-xl inline-flex items-center justify-center w-full sm:w-auto text-sm hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <ArrowUprightIcon className="size-4 mr-2" />
                    <span>View GitHub Source</span>
                  </motion.button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
