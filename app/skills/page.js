"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Terminal,
    Layers,
    Database,
    BrainCircuit,
    Code2,
    Smartphone,
    Globe,
    Cpu,
    CheckCircle2
} from 'lucide-react';

const SKILLS = {
    languages: {
        title: "Languages",
        icon: Terminal,
        color: "purple",
        items: ["Python", "Dart", "Java", "JavaScript", "SQL", "HTML/CSS"]
    },
    frameworks: {
        title: "Frameworks & Libraries",
        icon: Layers,
        color: "pink",
        items: ["Flutter", "Next.js", "React", "Flask", "Django", "Tailwind CSS", "Bootstrap", "Framer Motion"]
    },
    databases: {
        title: "Databases & Backend",
        icon: Database,
        color: "cyan",
        items: ["MySQL", "SQLite", "PostgreSQL", "Supabase", "Firebase", "REST APIs", "WebSockets"]
    },
    ai_ml: {
        title: "AI/ML & Data Science",
        icon: BrainCircuit,
        color: "purple",
        items: ["Scikit-learn", "OpenCV", "NLP", "PyTorch", "TensorFlow", "MediaPipe", "Pandas", "NumPy"]
    }
};

const SERVICES = [
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Cross-platform mobile applications using Flutter with beautiful UI/UX and robust functionality.",
        features: ["iOS & Android Apps", "Real-time Features", "API Integration", "State Management"]
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Modern, responsive web applications using Next.js, React, and cutting-edge technologies.",
        features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"]
    },
    {
        icon: BrainCircuit,
        title: "AI/ML Solutions",
        description: "Intelligent solutions powered by machine learning and artificial intelligence.",
        features: ["ML Model Development", "NLP Applications", "Computer Vision", "Data Analysis"]
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        description: "End-to-end application development from database design to frontend implementation.",
        features: ["Backend APIs", "Database Design", "Frontend Development", "Cloud Deployment"]
    }
];

const colorClasses = {
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        hover: "hover:border-purple-500/50"
    },
    pink: {
        bg: "bg-pink-500/10",
        border: "border-pink-500/30",
        text: "text-pink-400",
        hover: "hover:border-pink-500/50"
    },
    cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        hover: "hover:border-cyan-500/50"
    }
};

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[20%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                        Skills & Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Technical <span className="gradient-text">Expertise</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The tools and technologies I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {Object.entries(SKILLS).map(([key, category], idx) => {
                        const Icon = category.icon;
                        const colors = colorClasses[category.color];

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group p-6 rounded-2xl bg-white/[0.03] border border-white/5 ${colors.hover} hover:bg-white/[0.05] transition-all duration-300`}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform`}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-semibold text-lg">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-xs font-medium bg-white/5 rounded-full border border-white/10 text-gray-300 group-hover:border-white/20 group-hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Services Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            What I <span className="gradient-text">Offer</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive development services to bring your ideas to reality
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {SERVICES.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 group-hover:scale-110 transition-transform">
                                            <Icon className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Stack Visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/10 text-center"
                >
                    <Cpu className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                    <h2 className="text-3xl font-bold mb-4">
                        Always <span className="gradient-text">Learning</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                        Technology evolves rapidly, and so do I. I'm constantly exploring new tools,
                        frameworks, and best practices to deliver cutting-edge solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["TypeScript", "Docker", "AWS", "GraphQL", "Redis"].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
