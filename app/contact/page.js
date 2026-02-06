"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    MessageSquare,
    User,
    AtSign,
    CheckCircle2
} from 'lucide-react';

const DATA = {
    name: "Devashish Mohan Dhumal",
    email: "devashishdhumal@gmail.com",
    phone: "+91-9881333770",
    location: "Nagpur, India",
    github: "https://github.com/deva41103",
    linkedin: "https://linkedin.com/in/devashish-dhumal-b675a7257",
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                        Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Let's <span className="gradient-text">Connect</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to chat? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.05 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Feel free to reach out through any of these channels. I typically respond within 24 hours.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            <a
                                href={`mailto:${DATA.email}`}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <p className="font-medium">{DATA.email}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${DATA.phone}`}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-500/30 hover:bg-white/[0.05] transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                                    <p className="font-medium">{DATA.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Location</p>
                                    <p className="font-medium">{DATA.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
                            <div className="flex gap-4">
                                <a
                                    href={DATA.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all group"
                                >
                                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">GitHub</span>
                                </a>
                                <a
                                    href={DATA.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all group"
                                >
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                <h3 className="font-bold text-green-400">Available for Work</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                I'm currently open to new opportunities and exciting projects!
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-green-400">Message Sent!</h3>
                                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">
                                            Subject
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                placeholder="Project Inquiry"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                                    >
                                        <Send size={18} />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
