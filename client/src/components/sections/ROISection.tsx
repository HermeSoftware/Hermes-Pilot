/*
 * HERMES PILOT — ROI / Performance Section
 * Big metrics, champagne numbers, dark full-width section
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ROISection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const metrics = [
    {
      value: 40,
      suffix: '%',
      prefix: '+',
      label: t('Satış Dönüşümü Artışı', 'Sales Conversion Increase'),
      desc: t('Ortalama müşteri verilerine göre', 'Based on average customer data'),
    },
    {
      value: 60,
      suffix: '%',
      prefix: '-',
      label: t('Operasyonel Maliyet Azalması', 'Operational Cost Reduction'),
      desc: t('Tekrarlayan görev otomasyonu ile', 'Through repetitive task automation'),
    },
    {
      value: 94,
      suffix: '%',
      prefix: '',
      label: t('Müşteri Memnuniyeti', 'Customer Satisfaction'),
      desc: t('Anlık yanıt ve tutarlı hizmet', 'Instant response and consistent service'),
    },
    {
      value: 24,
      suffix: '/7',
      prefix: '',
      label: t('Kesintisiz Operasyon', 'Uninterrupted Operation'),
      desc: t('Tatil, hastalık, yorgunluk yok', 'No holidays, illness, or fatigue'),
    },
    {
      value: 3,
      suffix: 'x',
      prefix: '',
      label: t('Lead Yanıt Hızı', 'Lead Response Speed'),
      desc: t('Manuel süreçlere kıyasla', 'Compared to manual processes'),
    },
    {
      value: 2,
      suffix: t(' Hafta', ' Weeks'),
      prefix: '<',
      label: t('Kurulum Süresi', 'Setup Duration'),
      desc: t('Analiz\'den canlıya geçişe', 'From analysis to go-live'),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B0B0C]" id="roi" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,233,218,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
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
            <span className="hp-section-label">{t('Performans & ROI', 'Performance & ROI')}</span>
            <div className="h-px w-8 bg-[#C9B89A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
            {t('Ölçülebilir Sonuçlar', 'Measurable Results')}
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            {t(
              'Hermes Pilot\'u kullanan işletmelerin elde ettiği ortalama performans iyileştirmeleri.',
              'Average performance improvements achieved by businesses using Hermes Pilot.'
            )}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="hp-card p-6 sm:p-8 flex flex-col gap-2"
            >
              <div className="hp-metric text-4xl sm:text-5xl leading-none">
                <span className="text-[#A1A1AA] text-2xl sm:text-3xl">{metric.prefix}</span>
                <CountUp end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-[#F8F8F6] font-['Sora'] font-600 text-sm mt-1">
                {metric.label}
              </div>
              <div className="text-[#A1A1AA] text-[12px] leading-relaxed">
                {metric.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={7}
          className="mt-12 text-center"
        >
          <p className="text-[#A1A1AA] text-sm mb-4">
            {t('Bu sonuçları işletmenizde elde etmeye hazır mısınız?', 'Ready to achieve these results in your business?')}
          </p>
          <a href="#contact" className="hp-btn-primary">
            {t('Ücretsiz Analiz Talep Et', 'Request Free Analysis')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
