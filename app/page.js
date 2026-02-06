"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  BrainCircuit,
  Layers,
  Database,
  ExternalLink
} from 'lucide-react';

const DATA = {
  name: "Devashish Mohan Dhumal",
  role: "B.Tech in Artificial Intelligence",
  location: "Nagpur, India",
  tagline: "Building Intelligence into Applications",
  description: "I specialize in crafting robust AI/ML solutions and high-performance mobile applications using Flutter & Next.js.",

  featuredProjects: [
    {
      title: "Hyreso App",
      desc: "Modern job-hiring platform featuring smart filters, recruiter dashboards, and AI interview assistance.",
      tech: ["Flutter", "Dart", "Supabase", "AI APIs"],
      link: "https://play.google.com/store/apps/details?id=com.hyreso.app",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Crop Bazar",
      desc: "Agritech marketplace connecting farmers and traders with real-time mandi prices and logistics support.",
      tech: ["Flutter", "REST APIs", "Payment Gateway", "Maps API"],
      link: "https://play.google.com/store/apps/details?id=com.thecropbazar.market",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "AI Sign Language Generator",
      desc: "Web app converting speech to sign language skeleton poses using NLP and gloss-to-pose ML models.",
      tech: ["Flask", "PyTorch", "MediaPipe", "WebSockets"],
      link: "https://github.com/deva41103/Beyond-words.git",
      icon: <BrainCircuit className="w-6 h-6" />
    }
  ]
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-400 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Sparkles size={14} />
              <span>Available for new opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              {DATA.tagline.split(' ').map((word, index) => {
                const isHighlight = word === 'Intelligence';
                return (
                  <span key={index}>
                    {isHighlight ? (
                      <span className="gradient-text">{word}</span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                );
              })}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Hi, I'm <strong className="text-white">{DATA.name}</strong>. A {DATA.role} from {DATA.location}.{' '}
              {DATA.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
              >
                View My Work <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full font-semibold transition-all active:scale-95"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex items-center justify-center gap-8 flex-wrap"
            >
              {[
                { icon: Smartphone, label: 'Flutter' },
                { icon: Code2, label: 'Next.js' },
                { icon: BrainCircuit, label: 'AI/ML' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <item.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-400">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
              Featured Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Recent <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              A selection of projects that showcase my expertise in AI and App Development
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {DATA.featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-3xl bg-[#0e0e0e] border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
              >
                <div className="h-56 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,50,255,0.15),transparent_70%)]" />
                  <div className="relative z-10 p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    {project.icon}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500" />
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 py-3 rounded-xl bg-white/5 hover:bg-purple-600 text-sm font-medium text-white transition-all"
                  >
                    View Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
