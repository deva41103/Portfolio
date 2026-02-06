"use client";
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, Heart, Code2 } from 'lucide-react';

const DATA = {
    name: "Devashish Mohan Dhumal",
    role: "B.Tech in Artificial Intelligence",
    email: "devashishdhumal@gmail.com",
    phone: "+91-9881333770",
    github: "https://github.com/deva41103",
    linkedin: "https://linkedin.com/in/devashish-dhumal-b675a7257",
};

const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
];

const socialLinks = [
    { icon: Github, href: DATA.github, label: 'GitHub' },
    { icon: Linkedin, href: DATA.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${DATA.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${DATA.phone}`, label: 'Phone' },
];

const Footer = React.memo(function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#050505]">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 group-hover:border-purple-500/50 transition-all">
                                <Code2 className="w-5 h-5 text-purple-400 group-hover:text-pink-400 transition-colors" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                Devashish Dhumal
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Building intelligent applications with AI/ML and modern web technologies.
                            Passionate about creating impactful solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${DATA.email}`}
                                className="text-gray-400 hover:text-white text-sm transition-colors block"
                            >
                                {DATA.email}
                            </a>
                            <a
                                href={`tel:${DATA.phone}`}
                                className="text-gray-400 hover:text-white text-sm transition-colors block"
                            >
                                {DATA.phone}
                            </a>
                            <div className="flex gap-3 pt-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 text-gray-400 hover:text-white transition-all hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p className="flex items-center gap-2">
                            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1.5">
                            Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> using Next.js & Framer Motion
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </footer>
    );
});

export default Footer;
