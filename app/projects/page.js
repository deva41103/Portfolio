"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ExternalLink,
    Github,
    Layers,
    Database,
    BrainCircuit,
    Filter
} from 'lucide-react';

const PROJECTS = [
    {
        title: "Hyreso App",
        desc: "Modern job-hiring platform featuring smart filters, recruiter dashboards, and AI interview assistance. Built with Flutter for cross-platform compatibility and Supabase for real-time database management.",
        tech: ["Flutter", "Dart", "Supabase", "AI APIs", "REST APIs"],
        link: "https://play.google.com/store/apps/details?id=com.hyreso.app",
        github: null,
        icon: <Layers className="w-8 h-8" />,
        category: "Mobile App",
        featured: true
    },
    {
        title: "Crop Bazar",
        desc: "Agritech marketplace connecting farmers and traders with real-time mandi prices and logistics support. Integrated payment gateway and maps API for seamless user experience.",
        tech: ["Flutter", "REST APIs", "Payment Gateway", "Maps API", "Firebase"],
        link: "https://play.google.com/store/apps/details?id=com.thecropbazar.market",
        github: null,
        icon: <Database className="w-8 h-8" />,
        category: "Mobile App",
        featured: true
    },
    {
        title: "AI Sign Language Generator",
        desc: "Web application that converts speech to sign language skeleton poses using NLP and gloss-to-pose ML models. Winner of G.H. Raisoni Hackathon. Utilizes PyTorch for model inference and MediaPipe for pose generation.",
        tech: ["Flask", "PyTorch", "MediaPipe", "WebSockets", "NLP", "Python"],
        link: null,
        github: "https://github.com/deva41103/Beyond-words.git",
        icon: <BrainCircuit className="w-8 h-8" />,
        category: "AI/ML",
        featured: true
    }
];

const categories = ["All", "Mobile App", "AI/ML", "Web App"];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[30%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[30%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                        Portfolio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A collection of projects showcasing my expertise in AI/ML and App Development
                    </p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                    className="flex items-center justify-center gap-3 mb-16 flex-wrap"
                >
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Filter size={16} />
                        <span>Filter:</span>
                    </div>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            layout
                            className="group relative rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold">
                                    Featured
                                </div>
                            )}

                            {/* Project Icon/Image */}
                            <div className="h-64 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black p-6 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,50,255,0.15),transparent_70%)]" />
                                <div className="relative z-10 p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                    {project.icon}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-2">
                                    <span className="text-xs px-2 py-1 rounded bg-white/10 text-purple-400 border border-white/10">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.desc}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-sm font-medium text-white transition-all"
                                        >
                                            <ExternalLink size={16} />
                                            View Live
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`${project.link ? 'flex-none' : 'flex-1'} inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all`}
                                        >
                                            <Github size={16} />
                                            {!project.link && 'View Code'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </motion.div>
                )}

                {/* More Projects CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-400 mb-4">Want to see more of my work?</p>
                    <a
                        href="https://github.com/deva41103"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full font-semibold transition-all active:scale-95"
                    >
                        <Github size={18} />
                        Visit My GitHub
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
