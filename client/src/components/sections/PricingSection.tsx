/*
 * HERMES PILOT — Pricing Section
 * 3 tiers: Starter / Growth / Enterprise
 * Dark cards, champagne accent for recommended plan
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function PricingSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const plans = [
    {
      name: 'Starter',
      tagline: t('Küçük işletmeler için', 'For small businesses'),
      setup: t('₺9.900 Kurulum', '€490 Setup'),
      price: t('₺4.900/ay', '€245/mo'),
      highlight: false,
      features: [
        t('1 AI Modülü (seçiminize göre)', '1 AI Module (your choice)'),
        t('WhatsApp entegrasyonu', 'WhatsApp integration'),
        t('Temel CRM entegrasyonu', 'Basic CRM integration'),
        t('Aylık raporlama', 'Monthly reporting'),
        t('E-posta desteği', 'Email support'),
        t('5 iş günü kurulum', '5 business day setup'),
      ],
      cta: t('Başlayın', 'Get Started'),
    },
    {
      name: 'Growth',
      tagline: t('Büyüyen işletmeler için', 'For growing businesses'),
      setup: t('₺19.900 Kurulum', '€990 Setup'),
      price: t('₺9.900/ay', '€495/mo'),
      highlight: true,
      badge: t('En Popüler', 'Most Popular'),
      features: [
        t('3 AI Modülü (tüm modüller)', '3 AI Modules (all modules)'),
        t('WhatsApp + CRM + E-Ticaret', 'WhatsApp + CRM + E-Commerce'),
        t('Gelişmiş entegrasyonlar', 'Advanced integrations'),
        t('Haftalık raporlama & analitik', 'Weekly reporting & analytics'),
        t('Öncelikli destek (7/24)', 'Priority support (24/7)'),
        t('10 iş günü kurulum', '10 business day setup'),
        t('Özel AI eğitimi', 'Custom AI training'),
      ],
      cta: t('Demo Talep Et', 'Request Demo'),
    },
    {
      name: 'Enterprise',
      tagline: t('Kurumsal çözümler için', 'For enterprise solutions'),
      setup: t('Özel Fiyatlandırma', 'Custom Pricing'),
      price: t('Teklif Alın', 'Get Quote'),
      highlight: false,
      features: [
        t('Sınırsız AI Modülü', 'Unlimited AI Modules'),
        t('Tüm entegrasyonlar + özel API', 'All integrations + custom API'),
        t('Özel geliştirme & entegrasyon', 'Custom development & integration'),
        t('Gerçek zamanlı dashboard', 'Real-time dashboard'),
        t('Dedicated hesap yöneticisi', 'Dedicated account manager'),
        t('SLA garantisi', 'SLA guarantee'),
        t('On-premise seçeneği', 'On-premise option'),
      ],
      cta: t('Teklif Alın', 'Get Quote'),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0D0D0F]" id="pricing" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9B89A]" />
            <span className="hp-section-label">{t('Fiyatlandırma', 'Pricing')}</span>
            <div className="h-px w-8 bg-[#C9B89A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
            {t('İşletmenize Uygun Plan', 'The Right Plan for Your Business')}
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            {t(
              'Şeffaf fiyatlandırma, gizli ücret yok. Kurulum ücreti bir kez ödenir.',
              'Transparent pricing, no hidden fees. Setup fee is paid once.'
            )}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.highlight
                  ? 'bg-[#1A1A1E] border-2 border-[rgba(245,233,218,0.25)] shadow-[0_0_60px_rgba(245,233,218,0.06)]'
                  : 'hp-card'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-[#F5E9DA] text-[#0B0B0C] text-[11px] font-['Sora'] font-700 px-3 py-1 rounded-full">
                    <Zap size={10} />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-['Sora'] font-800 text-xl text-[#F8F8F6] mb-1">{plan.name}</h3>
                <p className="text-[#A1A1AA] text-[13px]">{plan.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-[rgba(245,233,218,0.08)]">
                <div className="text-[#A1A1AA] text-[12px] mb-1">{plan.setup}</div>
                <div className={`font-['Sora'] font-800 text-3xl ${plan.highlight ? 'text-[#F5E9DA]' : 'text-[#F8F8F6]'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-[#C9B89A]' : 'text-[#A1A1AA]'}`} />
                    <span className="text-[#A1A1AA] text-[13px] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={plan.highlight ? 'hp-btn-primary justify-center text-center' : 'hp-btn-outline justify-center text-center'}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={4}
          className="text-center text-[#A1A1AA] text-[12px] mt-8"
        >
          {t(
            'Tüm planlar KDV hariçtir. Fiyatlar Türk Lirası cinsinden belirtilmiştir. Uluslararası fiyatlandırma için iletişime geçin.',
            'All prices exclude VAT. International pricing available upon request.'
          )}
        </motion.p>
      </div>
    </section>
  );
}
