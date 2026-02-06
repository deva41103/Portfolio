"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 group-hover:border-purple-500/50 transition-all">
                <Code2 className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Devashish Dhumal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  >
                    <span
                      className={`relative z-10 ${isActive
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-white'
                        }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white'
                          : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                          }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default React.memo(Navbar);