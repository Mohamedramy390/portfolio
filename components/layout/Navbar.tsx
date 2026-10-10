"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { WhatsApp } from "@/components/ui/icons";
import { profile, navigation } from "@/data/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
        id="main-nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <a
              href="/"
              className="text-lg font-bold text-text-primary hover:text-accent transition-colors"
              id="nav-logo"
            >
              {profile.firstName}
              <span className="text-accent">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-bg-card"
                  id={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-lg hover:bg-emerald-500/20 transition-all"
                id="nav-whatsapp"
                title="Chat on WhatsApp"
              >
                <WhatsApp className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all"
                id="nav-resume"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-6"
            >
              {navigation.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-text-secondary hover:text-text-primary transition-colors"
                  id={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <motion.a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navigation.length * 0.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-all"
                  id="mobile-nav-whatsapp"
                >
                  <WhatsApp className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
                <motion.a
                  href={profile.resumePath}
                  download
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + navigation.length * 0.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all"
                  id="mobile-nav-resume"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
