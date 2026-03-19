/*
 * HERMES PILOT — Solution Section
 * Not a chatbot — real AI operational system
 * Dark bg, champagne accents, outcome statements
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Zap, Network, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function SolutionSection() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const outcomes = [
    {
      icon: <Zap size={16} />,
      text: t('Gerçek iş süreçlerini uçtan uca yürütür', 'Executes real business processes end-to-end'),
    },
    {
      icon: <Network size={16} />,
      text: t('CRM, WhatsApp, e-ticaret sistemleriyle entegre çalışır', 'Integrates with CRM, WhatsApp, e-commerce systems'),
    },
    {
      icon: <Clock size={16} />,
      text: t('7/24 kesintisiz operasyon, sıfır yorgunluk', '24/7 uninterrupted operation, zero fatigue'),
    },
    {
      icon: <CheckCircle2 size={16} />,
      text: t('Satış, destek ve randevu süreçlerini otomatikleştirir', 'Automates sales, support, and appointment processes'),
    },
    {
      icon: <CheckCircle2 size={16} />,
      text: t('Ölçülebilir ROI ve gerçek zamanlı raporlama', 'Measurable ROI and real-time reporting'),
    },
    {
      icon: <CheckCircle2 size={16} />,
      text: t('İnsan çalışanlarla uyumlu çalışır, onları destekler', 'Works alongside human employees, supporting them'),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B0B0C]" id="solution" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
            className="relative order-2 lg:order-1"
          >
            {/* Big statement card */}
            <div className="hp-card p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(245,233,218,0.3) 0%, transparent 70%)',
                }}
              />
              <div className="relative">
                <div className="hp-section-label mb-6">{t('Hermes Pilot Nedir?', 'What is Hermes Pilot?')}</div>
                <div className="text-5xl font-['Sora'] font-800 text-[#F5E9DA] leading-none mb-2">
                  {t('Dijital', 'Digital')}
                </div>
                <div className="text-5xl font-['Sora'] font-800 text-[#F8F8F6] leading-none mb-2">
                  {t('Çalışan', 'Employee')}
                </div>
                <div className="text-5xl font-['Sora'] font-800 text-[#3A3A3E] leading-none mb-8">
                  {t('Sistemi', 'System')}
                </div>
                <p className="text-[#A1A1AA] text-sm leading-relaxed border-l-2 border-[#C9B89A] pl-4">
                  {t(
                    'Bir chatbot değil. Gerçek iş süreçlerini anlayan, kararlar alan ve uçtan uca yürüten yapay zeka operasyon sistemi.',
                    'Not a chatbot. An AI operational system that understands real business processes, makes decisions, and executes them end-to-end.'
                  )}
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[
                { val: '98%', label: t('Görev Tamamlama', 'Task Completion') },
                { val: '<2dk', label: t('Yanıt Süresi', 'Response Time') },
                { val: '∞', label: t('Ölçeklenebilirlik', 'Scalability') },
              ].map((stat, i) => (
                <div key={i} className="hp-card p-4 text-center">
                  <div className="hp-metric text-2xl">{stat.val}</div>
                  <div className="text-[11px] text-[#A1A1AA] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9B89A]" />
                <span className="hp-section-label">{t('Çözüm', 'The Solution')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
                {lang === 'tr' ? (
                  <>Sadece Konuşmaz,<br /><span className="text-[#F5E9DA]">İş Yapar</span></>
                ) : (
                  <>Doesn't Just Talk,<br /><span className="text-[#F5E9DA]">Gets Work Done</span></>
                )}
              </h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed">
                {t(
                  'Hermes Pilot, işletmenizin ihtiyaçlarına göre özelleştirilen, mevcut sistemlerinizle entegre olan ve gerçek iş süreçlerini otomatikleştiren bir yapay zeka operasyon sistemidir.',
                  'Hermes Pilot is an AI operational system customized to your business needs, integrated with your existing systems, and automating real business processes.'
                )}
              </p>
            </motion.div>

            {/* Outcome list */}
            <div className="flex flex-col gap-3">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 2}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[rgba(245,233,218,0.08)] flex items-center justify-center text-[#C9B89A] flex-shrink-0 mt-0.5">
                    {outcome.icon}
                  </div>
                  <span className="text-[#A1A1AA] text-sm leading-relaxed">{outcome.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={8}
              className="pt-2"
            >
              <a href="#contact" className="hp-btn-primary">
                {t('Sistemi Keşfedin', 'Explore the System')}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
