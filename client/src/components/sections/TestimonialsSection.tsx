/*
 * HERMES PILOT — Testimonials / Case Studies Section
 * 3 realistic stories with KPIs
 * Dark cards, champagne accents, quote marks
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const testimonials = [
    {
      quote: t(
        'Hermes Pilot\'u devreye aldıktan sonra müşteri yanıt süremiz 4 saatten 2 dakikaya düştü. Satış ekibimiz artık yalnızca sıcak leadlerle ilgileniyor.',
        'After deploying Hermes Pilot, our customer response time dropped from 4 hours to 2 minutes. Our sales team now only deals with hot leads.'
      ),
      name: 'Ahmet Yılmaz',
      role: t('Genel Müdür', 'General Manager'),
      company: 'TechRetail A.Ş.',
      kpis: [
        { val: '-92%', label: t('Yanıt Süresi', 'Response Time') },
        { val: '+38%', label: t('Satış', 'Sales') },
      ],
      initials: 'AY',
    },
    {
      quote: t(
        'E-ticaret mağazamızda terk edilen sepet oranı %45\'ten %18\'e düştü. AI, müşterilere doğru anda doğru mesajı gönderiyor.',
        'Our abandoned cart rate in our e-commerce store dropped from 45% to 18%. The AI sends the right message to customers at the right moment.'
      ),
      name: 'Selin Kaya',
      role: t('E-Ticaret Direktörü', 'E-Commerce Director'),
      company: 'ModaShop',
      kpis: [
        { val: '-60%', label: t('Sepet Terk', 'Cart Abandonment') },
        { val: '+52%', label: t('Gelir', 'Revenue') },
      ],
      initials: 'SK',
    },
    {
      quote: t(
        'Randevu sistemimiz tamamen otomatik hale geldi. Ekibimiz artık koordinasyona değil, gerçek işe odaklanıyor. ROI ilk 3 ayda kendini karşıladı.',
        'Our appointment system became fully automated. Our team now focuses on real work, not coordination. ROI paid for itself in the first 3 months.'
      ),
      name: 'Murat Demir',
      role: t('Operasyon Müdürü', 'Operations Manager'),
      company: 'HealthCare Plus',
      kpis: [
        { val: '+200%', label: t('Randevu Kapasitesi', 'Appointment Capacity') },
        { val: '-65%', label: t('Admin Süresi', 'Admin Time') },
      ],
      initials: 'MD',
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B0B0C]" id="testimonials" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9B89A]" />
            <span className="hp-section-label">{t('Başarı Hikayeleri', 'Success Stories')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
            {t('Gerçek Sonuçlar, Gerçek İşletmeler', 'Real Results, Real Businesses')}
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            {t(
              'Hermes Pilot\'u kullanan işletmelerin elde ettiği somut sonuçlar.',
              'Concrete results achieved by businesses using Hermes Pilot.'
            )}
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="hp-card p-7 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-[#C9B89A] opacity-60" />

              {/* Quote text */}
              <p className="text-[#A1A1AA] text-[13.5px] leading-relaxed flex-1 italic">
                "{item.quote}"
              </p>

              {/* KPIs */}
              <div className="flex gap-4 py-4 border-y border-[rgba(245,233,218,0.06)]">
                {item.kpis.map((kpi, ki) => (
                  <div key={ki}>
                    <div className="hp-metric text-xl">{kpi.val}</div>
                    <div className="text-[11px] text-[#A1A1AA] mt-0.5">{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(245,233,218,0.1)] flex items-center justify-center">
                  <span className="text-[11px] font-['Sora'] font-700 text-[#C9B89A]">{item.initials}</span>
                </div>
                <div>
                  <div className="text-[#F8F8F6] text-[13px] font-['Sora'] font-600">{item.name}</div>
                  <div className="text-[#A1A1AA] text-[11px]">{item.role}, {item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
