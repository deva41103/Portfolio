"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Briefcase,
    BookOpen,
    MapPin,
    Mail,
    Phone,
    Download,
    Code2,
    Sparkles
} from 'lucide-react';

const DATA = {
    name: "Devashish Mohan Dhumal",
    role: "B.Tech in Artificial Intelligence",
    location: "Nagpur, India",
    email: "devashishdhumal@gmail.com",
    phone: "+91-9881333770",

    about: "Motivated B.Tech Artificial Intelligence student with a strong interest in software development and emerging technologies. I'm passionate about building impactful AI/ML and Application solutions that solve real-world problems. With hands-on experience in Flutter development and machine learning, I strive to create innovative solutions that make a difference.",

    education: [
        {
            degree: "B.Tech in Artificial Intelligence",
            institution: "G.H. Raisoni College of Engineering",
            location: "Nagpur, India",
            period: "2021 - 2025",
            description: "Focused on AI/ML, Deep Learning, and Software Development"
        }
    ],

    experience: [
        {
            company: "Dataventics Software Solutions",
            role: "Full Stack Developer",
            duration: "Internship",
            period: "2024",
            desc: "Gained hands-on experience of FLUTTER with complete production-ready App Development. Worked on real-world projects and learned industry best practices."
        },
        {
            company: "Prodigy Infotech",
            role: "Machine Learning Intern",
            duration: "Internship",
            period: "2024",
            desc: "Gained hands-on experience with ML models and small-scale projects. Implemented various machine learning algorithms and data preprocessing techniques."
        }
    ],

    achievements: [
        "Winner of G.H. Raisoni Hackathon (AI Sign Language Generator)",
        "HackerRank Software Engineer Certified",
        "HackerRank Python (4-Star)",
        "Kaggle Machine Learning Certified",
        "Django Web Development (CPD Certified)"
    ],

    interests: [
        "Mobile App Development",
        "Artificial Intelligence & Machine Learning",
        "Web Development",
        "Open Source Contribution",
        "Problem Solving & Competitive Programming"
    ]
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[20%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-600/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                        About Me
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Know Me <span className="gradient-text">Better</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Passionate developer crafting intelligent applications
                    </p>
                </motion.div>

                {/* Introduction Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-all">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                                <Sparkles className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{DATA.name}</h2>
                                <p className="text-purple-400 font-medium">{DATA.role}</p>
                                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                                    <MapPin size={14} />
                                    {DATA.location}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">{DATA.about}</p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={`mailto:${DATA.email}`}
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail size={16} />
                                {DATA.email}
                            </a>
                            <a
                                href={`tel:${DATA.phone}`}
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                <Phone size={16} />
                                {DATA.phone}
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Education & Experience Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                                <BookOpen size={24} />
                            </div>
                            Education
                        </h2>
                        <div className="space-y-6">
                            {DATA.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all"
                                >
                                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {edu.location}
                                        </span>
                                        <span>{edu.period}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                                <Briefcase size={24} />
                            </div>
                            Experience
                        </h2>
                        <div className="space-y-6">
                            {DATA.experience.map((exp, i) => (
                                <div
                                    key={i}
                                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-400 border border-white/10">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Achievements & Interests Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                                <Award size={24} />
                            </div>
                            Achievements
                        </h2>
                        <div className="grid gap-4">
                            {DATA.achievements.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-pink-500/30 hover:bg-white/[0.05] transition-all group"
                                >
                                    <div className="mt-1 p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                                        <Award size={18} />
                                    </div>
                                    <span className="text-gray-300 text-sm leading-relaxed pt-1">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interests */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                                <Code2 size={24} />
                            </div>
                            Interests
                        </h2>
                        <div className="grid gap-4">
                            {DATA.interests.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all group"
                                >
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Download Resume CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95">
                        <Download size={18} />
                        Download Resume
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
