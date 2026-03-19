/*
 * HERMES PILOT — Hero Section
 * Asymmetric layout: left text block, right dashboard mockup
 * Dark obsidian bg with champagne accents, grid texture
 * Parallax scroll + stagger animations
 */
import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ReactNode } from 'react';
import { useRef } from 'react';

function T({ tr, en, lang }: { tr: ReactNode; en: ReactNode; lang: string }) {
  return <>{lang === 'tr' ? tr : en}</>;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0B0C]">
      {/* Animated Background */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 grid-bg opacity-60"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(245,233,218,0.04) 0%, transparent 70%)',
        }}
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 50]),
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663456768397/8GMxCz3UWYoDuFcMnULRih/hero-bg-pattern-SGa3owHkTr9ynfcNH8xGYe.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 opacity-20"
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Section label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-3"
            >
              <motion.div
                className="h-px w-8 bg-[#C9B89A]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="hp-section-label">
                {t('Yapay Zeka Operasyon Sistemi', 'AI Operational Intelligence System')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl xl:text-6xl font-['Sora'] text-[#F8F8F6] leading-[1.08] tracking-[-0.03em]"
              style={{ fontWeight: 800 }}
            >
              <T
                lang={lang}
                tr={
                  <>
                    İş Süreçlerinizi<br />
                    <span className="text-[#F5E9DA] champagne-glow">7/24 Yöneten</span>
                    <br />
                    Yapay Zeka
                  </>
                }
                en={
                  <>
                    <span className="text-[#F5E9DA] champagne-glow">AI That Runs</span>
                    <br />
                    Your Business
                    <br />
                    24/7
                  </>
                }
              />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-lg font-['Inter'] font-400"
            >
              {t(
                'Hermes Pilot bir chatbot değil. Satış, destek ve operasyonlarınızı uçtan uca yürüten, gelir artıran ve maliyetleri düşüren dijital çalışan sistemidir.',
                'Hermes Pilot is not a chatbot. It\'s a digital employee system that executes your sales, support, and operations end-to-end — increasing revenue and reducing costs.'
              )}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#contact"
                className="hp-btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('Demo Talep Et', 'Request Demo')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#solution"
                className="hp-btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('İletişime Geç', 'Learn More')}
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              {[
                { val: '+40%', label: t('Satış Artışı', 'Sales Growth') },
                { val: '7/24', label: t('Kesintisiz', 'Uninterrupted') },
                { val: '-60%', label: t('Maliyet Azalması', 'Cost Reduction') },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i + 4}
                  className="flex-1"
                >
                  <div className="text-2xl font-['Sora'] font-700 text-[#F5E9DA]">{stat.val}</div>
                  <div className="text-[12px] text-[#A1A1AA]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Image with Parallax */}
          <motion.div style={{ y: imageY }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(245,233,218,0.1)] to-transparent blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663456768397/8GMxCz3UWYoDuFcMnULRih/hero-dashboard-iVXQh5ezohcKyawqTy5R7F.webp"
                alt={t('Hermes Pilot Dashboard', 'Hermes Pilot Dashboard')}
                className="w-full h-auto rounded-2xl border border-[rgba(245,233,218,0.1)] shadow-2xl relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[11px] text-[#A1A1AA] uppercase tracking-widest">
          {t('Aşağı Kaydır', 'Scroll Down')}
        </span>
        <motion.div className="w-px h-6 bg-gradient-to-b from-[#C9B89A] to-transparent" />
      </motion.div>
    </section>
  );
}
