import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Force Dark Theme
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Start a Project', path: '/request' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Actual Logo */}
          <img
            src="/four-square-design-logo.jpg"
            alt="Four Square Logo"
            className="w-auto h-12 md:h-14 transition-all group-hover:scale-105 rounded-sm"
          />
          <div className="flex flex-col">
            <span className="text-slate-900 dark:text-white text-xl md:text-2xl font-serif italic font-bold leading-tight">
              Four Square
            </span>
            <span className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] -mt-0.5">
              Designs
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-charcoal-700 dark:text-slate-300 font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-xs font-bold uppercase tracking-widest transition-all hover:text-amber-600 dark:hover:text-amber-400 relative group",
                  location.pathname === link.path ? "text-amber-600 dark:text-amber-400" : ""
                )}
              >
                {link.name}
                <span className={clsx(
                  "absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl shadow-2xl py-10 px-8 md:hidden flex flex-col gap-6 border-t border-slate-100 dark:border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-xl font-serif italic py-3 border-b border-slate-100 dark:border-white/5 transition-colors",
                    location.pathname === link.path ? "text-amber-500" : "text-slate-800 dark:text-slate-200"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 p-6 bg-slate-50 dark:bg-white/5 rounded-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4 font-bold">Inquiries</p>
              <div className="flex items-center gap-3 text-slate-700 dark:text-amber-400 font-medium">
                <div className="w-10 h-10 bg-white dark:bg-white/10 rounded-full flex items-center justify-center shadow-sm">
                  <Phone size={18} />
                </div>
                {/* <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Direct Line</span>
                  <span className="text-base tracking-tight">+91 76001 34301</span>
                </div> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
