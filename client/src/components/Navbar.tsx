/*
 * HERMES PILOT — Navbar
 * Dark obsidian background, champagne accent, sticky with blur
 * Language toggle: TR / EN
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#solution', label: t('Çözüm', 'Solution') },
    { href: '#capabilities', label: t('Özellikler', 'Capabilities') },
    { href: '#how-it-works', label: t('Nasıl Çalışır', 'How It Works') },
    { href: '#pricing', label: t('Fiyatlandırma', 'Pricing') },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0C]/95 backdrop-blur-xl border-b border-[rgba(245,233,218,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-[#F5E9DA] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="#0B0B0C" strokeWidth="0" />
                <path d="M8 5L11 6.75V10.25L8 12L5 10.25V6.75L8 5Z" fill="#F5E9DA" strokeWidth="0" />
              </svg>
            </div>
            <span className="font-['Sora'] font-700 text-[15px] text-[#F8F8F6] tracking-tight">
              Hermes<span className="text-[#C9B89A]"> Pilot</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#A1A1AA] hover:text-[#F8F8F6] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[rgba(245,233,218,0.12)] text-[12px] font-medium text-[#A1A1AA] hover:text-[#F5E9DA] hover:border-[rgba(245,233,218,0.25)] transition-all duration-200"
              title={lang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
            >
              <span className={lang === 'tr' ? 'text-[#F5E9DA]' : 'text-[#A1A1AA]'}>TR</span>
              <span className="text-[#3A3A3E]">/</span>
              <span className={lang === 'en' ? 'text-[#F5E9DA]' : 'text-[#A1A1AA]'}>EN</span>
            </button>

            <a href="#contact" className="hp-btn-outline text-[13px] py-2 px-4">
              {t('İletişim', 'Contact')}
            </a>
            <a href="#contact" className="hp-btn-primary text-[13px] py-2 px-4">
              {t('Demo Talep Et', 'Request Demo')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="px-2 py-1 text-[11px] font-medium text-[#A1A1AA] border border-[rgba(245,233,218,0.12)] rounded"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#A1A1AA] hover:text-[#F8F8F6] transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0D0D0F]/98 backdrop-blur-xl border-b border-[rgba(245,233,218,0.08)]"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[14px] text-[#A1A1AA] hover:text-[#F8F8F6] border-b border-[rgba(245,233,218,0.05)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-3">
                <a href="#contact" className="hp-btn-outline text-[13px] py-2 px-4 flex-1 justify-center" onClick={() => setMobileOpen(false)}>
                  {t('İletişim', 'Contact')}
                </a>
                <a href="#contact" className="hp-btn-primary text-[13px] py-2 px-4 flex-1 justify-center" onClick={() => setMobileOpen(false)}>
                  {t('Demo Talep Et', 'Request Demo')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
