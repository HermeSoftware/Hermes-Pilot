/*
 * HERMES PILOT — How It Works Section
 * 4-step process with visual flow diagram
 * Process visual image + step cards
 */
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Plug, Brain, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    {
      icon: <Search size={20} />,
      number: '01',
      title: t('Süreç Analizi', 'Process Analysis'),
      desc: t(
        'İşletmenizin mevcut süreçlerini, darboğazlarını ve otomasyon fırsatlarını derinlemesine analiz ediyoruz.',
        'We deeply analyze your business\'s current processes, bottlenecks, and automation opportunities.'
      ),
      duration: t('1-2 Gün', '1-2 Days'),
    },
    {
      icon: <Plug size={20} />,
      number: '02',
      title: t('Sistem Entegrasyonu', 'System Integration'),
      desc: t(
        'CRM, WhatsApp, e-ticaret ve diğer sistemlerinizle kesintisiz entegrasyon kuruyoruz. Mevcut altyapınız korunur.',
        'We set up seamless integration with your CRM, WhatsApp, e-commerce, and other systems. Your existing infrastructure is preserved.'
      ),
      duration: t('3-5 Gün', '3-5 Days'),
    },
    {
      icon: <Brain size={20} />,
      number: '03',
      title: t('AI Eğitimi', 'AI Training'),
      desc: t(
        'Yapay zekayı işletmenizin diline, süreçlerine ve kurallarına göre özelleştirip eğitiyoruz.',
        'We customize and train the AI according to your business\'s language, processes, and rules.'
      ),
      duration: t('5-7 Gün', '5-7 Days'),
    },
    {
      icon: <Rocket size={20} />,
      number: '04',
      title: t('Lansman & Optimizasyon', 'Launch & Optimization'),
      desc: t(
        'Sistemi canlıya alıyor, performansı izliyor ve sürekli optimize ediyoruz. Gerçek zamanlı raporlarla sonuçları takip edin.',
        'We go live, monitor performance, and continuously optimize. Track results with real-time reports.'
      ),
      duration: t('Sürekli', 'Ongoing'),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B0B0C]" id="how-it-works" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9B89A]" />
            <span className="hp-section-label">{t('Süreç', 'Process')}</span>
            <div className="h-px w-8 bg-[#C9B89A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
            {t('Nasıl Çalışır?', 'How Does It Work?')}
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            {t(
              '4 adımda işletmenize entegre olur, 2 haftadan kısa sürede canlıya geçer.',
              'Integrates into your business in 4 steps, goes live in less than 2 weeks.'
            )}
          </p>
        </motion.div>

        {/* Process Visual */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="mb-12 rounded-2xl overflow-hidden border border-[rgba(245,233,218,0.08)]"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663456768397/8GMxCz3UWYoDuFcMnULRih/process-visual-iVXQh5ezohcKyawqTy5R7F.webp"
            alt={t('Hermes Pilot 4 Adımlı Süreç', 'Hermes Pilot 4-Step Process')}
            className="w-full h-auto max-h-56 object-cover"
          />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 2}
              className="hp-card p-6 flex flex-col gap-4 relative"
            >
              {/* Connector line (not last) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-[rgba(245,233,218,0.15)] z-10" />
              )}

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[rgba(245,233,218,0.07)] flex items-center justify-center text-[#C9B89A]">
                  {step.icon}
                </div>
                <span className="text-[11px] font-['Sora'] font-600 text-[#3A3A3E] tracking-widest">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="font-['Sora'] font-700 text-[#F8F8F6] text-[15px] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#A1A1AA] text-[13px] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-auto pt-3 border-t border-[rgba(245,233,218,0.06)]">
                <span className="text-[11px] text-[#C9B89A] font-['Inter'] font-500">
                  ⏱ {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
