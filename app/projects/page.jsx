'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Layers, Database, BrainCircuit, TrendingUp, Briefcase, Plane, Pill, Film, MessageCircle, Image as ImageIcon, QrCode, Heart, User } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import React from 'react';

const PROJECTS = [
    {
        title: "Hyreso App",
        desc: "Modern job-hiring platform featuring smart filters, recruiter dashboards, and AI interview assistance. Built with Flutter for cross-platform compatibility and Supabase for real-time database management.",
        tech: ["Flutter", "Dart", "Supabase", "AI APIs", "REST APIs"],
        link: "https://play.google.com/store/apps/details?id=com.hyreso.app",
        github: null,
        icon: <Layers />,
        category: "Mobile App",
        featured: true,
        color: "from-teal-400 to-emerald-600"
    },
    {
        title: "Crop Bazar",
        desc: "Agritech marketplace connecting farmers and traders with real-time mandi prices and logistics support. Integrated payment gateway and maps API for seamless user experience.",
        tech: ["Flutter", "REST APIs", "Payment Gateway", "Maps API", "Firebase"],
        link: "https://play.google.com/store/apps/details?id=com.thecropbazar.market",
        github: null,
        icon: <Database />,
        category: "Mobile App",
        featured: true,
        color: "from-green-400 to-green-700"
    },
    {
        title: "AI Sign Language Generator",
        desc: "Web application that converts speech to sign language skeleton poses using NLP and gloss-to-pose ML models. Winner of G.H. Raisoni Hackathon. Utilizes PyTorch for model inference and MediaPipe for pose generation.",
        tech: ["Flask", "PyTorch", "MediaPipe", "WebSockets", "NLP", "Python"],
        link: null,
        github: "https://github.com/deva41103/Beyond_words.git",
        icon: <BrainCircuit />,
        category: "AI/ML",
        featured: true,
        color: "from-indigo-500 to-blue-600"
    },
    {
        title: "StockGPT",
        desc: "An AI-powered stock market assistant that answers user queries and visualizes historical stock price trends. Supports chat-based interaction with backend-driven data processing and chart generation.",
        tech: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
        link: null,
        github: "https://github.com/deva41103/StockGPT",
        icon: <TrendingUp />,
        category: "AI/ML",
        featured: false,
        color: "from-purple-400 to-fuchsia-600"
    },
    {
        title: "Freelancing Platform",
        desc: "A full-stack freelancing web platform where clients post jobs and freelancers bid and collaborate. Implements authentication, role-based access, and database-driven workflows.",
        tech: ["Python", "Flask", "HTML", "CSS", "Bootstrap", "MySQL", "SQLite"],
        link: null,
        github: "https://github.com/deva41103/Freelancing",
        icon: <Briefcase />,
        category: "Web App",
        featured: false,
        color: "from-blue-500 to-cyan-600"
    },
    {
        title: "Travel Planner App",
        desc: "A Flutter-based mobile application to help users plan trips and manage destinations efficiently. Uses REST APIs for dynamic data fetching and smooth user experience.",
        tech: ["Flutter", "Dart", "REST APIs", "JSON"],
        link: null,
        github: "https://github.com/deva41103/travel_planner",
        icon: <Plane />,
        category: "Mobile App",
        featured: false,
        color: "from-sky-400 to-indigo-600"
    },
    {
        title: "Medicine Alarm App",
        desc: "A mobile application that reminds users to take medicines on time with a simple and clean UI. Built to support daily health management using scheduled alerts.",
        tech: ["Flutter", "Dart"],
        link: null,
        github: "https://github.com/deva41103/medicine_alarm",
        icon: <Pill />,
        category: "Mobile App",
        featured: false,
        color: "from-rose-400 to-red-600"
    },
    {
        title: "Anime App",
        desc: "A Flutter application that displays anime-related content using external APIs. Focuses on modern UI design and API-based dynamic content rendering.",
        tech: ["Flutter", "Dart", "REST APIs"],
        link: null,
        github: "https://github.com/deva41103/Anime",
        icon: <Film />,
        category: "Mobile App",
        featured: false,
        color: "from-fuchsia-400 to-pink-600"
    },
    {
        title: "Chat App",
        desc: "A Flask-based web application enabling communication between two users. Implements backend routing, message handling, and frontend interaction.",
        tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
        link: null,
        github: "https://github.com/deva41103/Chatt_App",
        icon: <MessageCircle />,
        category: "Web App",
        featured: false,
        color: "from-pink-400 to-rose-600"
    },
    {
        title: "Image to URL Converter",
        desc: "A web application that uploads images and converts them into accessible URLs. Built with Flask backend handling file uploads and routing.",
        tech: ["Python", "Flask", "HTML", "CSS"],
        link: null,
        github: "https://github.com/deva41103/img_to_url",
        icon: <ImageIcon />,
        category: "Web App",
        featured: false,
        color: "from-cyan-500 to-teal-700"
    },
    {
        title: "QR Code Generator",
        desc: "A Flask-based web tool that generates QR codes from user input. Useful for sharing links and text in a fast and reliable way.",
        tech: ["Python", "Flask", "HTML", "CSS"],
        link: null,
        github: "https://github.com/deva41103/QR_Generator",
        icon: <QrCode />,
        category: "Web App",
        featured: false,
        color: "from-indigo-400 to-purple-600"
    },
    {
        title: "Aroyag Website",
        desc: "A health-focused informational website designed to promote wellness and awareness. Features structured content, clean layout, and responsive design.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: null,
        github: "https://github.com/deva41103/Aroyag",
        icon: <Heart />,
        category: "Web App",
        featured: false,
        color: "from-emerald-400 to-green-600"
    },
    {
        title: "3D Avatar Generator",
        desc: "A project that explores avatar generation using image processing techniques. Demonstrates fundamentals of computer vision and graphical transformation.",
        tech: ["Python", "OpenCV", "NumPy", "Jupyter Notebook"],
        link: null,
        github: "https://github.com/deva41103/3d_avatar_generator",
        icon: <User />,
        category: "AI/ML",
        featured: false,
        color: "from-violet-500 to-purple-700"
    }
];

const categories = ["All", "Mobile App", "AI/ML", "Web App"];

export default function MoreProjects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCategory, setActiveCategory] = useState("All");

    // Custom cursor tracker
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // Smooth scrolling setup with Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    const filteredProjects = PROJECTS.filter(p => activeCategory === "All" || p.category === activeCategory);

    return (
        <section className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-foreground relative overflow-hidden selection:bg-[#106c57]/30 dark:selection:bg-emerald-500/30">

            {/* Custom Animated Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#106c57] dark:border-emerald-400 pointer-events-none z-[100] mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.1
                }}
            />

            {/* Background design matching global theme */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#106c57]/5 dark:bg-emerald-600/5 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#106c57]/5 dark:bg-cyan-600/5 blur-[120px]" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05]"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 pointer-events-none">
                <div className="max-w-7xl mx-auto flex items-center pointer-events-auto">
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white dark:bg-[#111] border border-zinc-200 dark:border-white/10 shadow-lg px-5 py-2.5 rounded-full inline-flex items-center gap-3 text-zinc-800 dark:text-white font-mono uppercase tracking-widest text-sm cursor-pointer hover:border-[#106c57] dark:hover:border-emerald-500 transition-colors group"
                        >
                            <ArrowLeft size={16} className="text-[#106c57] dark:text-emerald-400 group-hover:-translate-x-1 transition-transform" />
                            Back Home
                        </motion.button>
                    </Link>
                </div>
            </nav>


            {/* Header Content */}
            <header className="relative z-10 pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
                <div
                    className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
                    style={{
                        backgroundImage: "url('/sketch.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-[#106c57]/30 dark:bg-emerald-400/30"></div>
                        <span className="text-sm font-semibold tracking-[0.3em] uppercase opacity-70 text-[#106c57] dark:text-emerald-400">
                            Project Showcase
                        </span>
                        <div className="h-[1px] w-12 bg-[#106c57]/30 dark:bg-emerald-400/30"></div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[#106c57] dark:text-emerald-400"
                    >
                        Complete <br className="md:hidden" />
                        <span className="text-zinc-800 dark:text-white">
                            Arsenal
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-mono tracking-tight max-w-2xl mx-auto mb-12"
                    >
                        Explore a collection of {PROJECTS.length} applications, tools, and experiments I've built to solve complex problems.
                    </motion.p>

                    {/* Category Filter */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 relative z-20"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full font-mono uppercase tracking-widest text-xs md:text-sm transition-all duration-300 border ${
                                    activeCategory === cat 
                                    ? 'bg-[#106c57] border-[#106c57] text-white dark:bg-emerald-500 dark:border-emerald-500 shadow-[0_0_15px_rgba(16,108,87,0.4)] dark:shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                                    : 'bg-white/50 dark:bg-black/50 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:border-[#106c57]/50 dark:hover:border-emerald-400/50 hover:text-zinc-900 dark:hover:text-white backdrop-blur-sm'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Animated Scroll Mouse Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16 flex flex-col items-center gap-3 opacity-80"
                    >
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-semibold text-[#106c57] dark:text-emerald-400">Scroll</span>
                        <div className="w-6 h-10 border-2 border-[#106c57]/50 dark:border-emerald-400/50 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 14, 0], opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-[#106c57] dark:bg-emerald-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Alternating Zig-Zag Layout */}
            <main className="relative z-10 px-6 md:px-12 pb-48 max-w-6xl mx-auto mt-12">
                <div className="flex flex-col gap-32 md:gap-48">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <ProjectRow key={project.title} project={project} index={idx} />
                        ))}
                    </AnimatePresence>
                </div>
            </main>
        </section>
    );
}

// Normal Scrolling Alternating Row Component
function ProjectRow({ project, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 w-full`}
        >
            {/* Text Section / Info */}
            <div className="flex-1 flex flex-col items-start text-left w-full order-2 md:order-none">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300 bg-zinc-200/60 dark:bg-white/10 px-4 py-1.5 rounded-full border border-zinc-300 dark:border-white/10 uppercase tracking-wider shadow-sm">
                        {project.category}
                    </span>
                    {project.featured && (
                        <span className="text-xs text-[#106c57] dark:text-emerald-400 font-mono uppercase font-bold tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#106c57] dark:bg-emerald-400 animate-pulse"></span>
                            Featured
                        </span>
                    )}
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                    {project.title}
                </h3>

                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl font-medium">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 bg-black/5 dark:bg-white/5 text-xs font-mono uppercase tracking-wider rounded-md opacity-80 text-zinc-800 dark:text-zinc-200 font-semibold border border-black/5 dark:border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#106c57] dark:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-lg hover:shadow-xl hover:bg-[#0d5948] dark:hover:bg-emerald-400"
                        >
                            Live Preview <ExternalLink size={16} />
                        </a>
                    )}
                    
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        >
                            Source Code <Github size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Visual Card Section */}
            <div className="flex-1 w-full order-1 md:order-none">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/5 dark:shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-[#0c0c0c] flex items-center justify-center">

                    {/* Background Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-700`} />

                    {/* Grid Pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] dark:opacity-[0.1]"></div>

                    {/* Big Central Tech Icon */}
                    <motion.div
                        className="relative z-10 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl text-zinc-800 dark:text-white"
                        whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 5 : -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        {/* Clone the icon element to make it massive to fit the design */}
                        {React.cloneElement(project.icon, {
                            className: "w-[120px] h-[120px] md:w-[160px] md:h-[160px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]",
                            strokeWidth: 1.5
                        })}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
