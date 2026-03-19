/*
 * HERMES PILOT — Capabilities Section
 * 4 AI capabilities in a premium grid layout
 * Each: name, description, business outcome (KPI/ROI)
 */
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, HeadphonesIcon, UserCheck, CalendarCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function CapabilitiesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const capabilities = [
    {
      icon: <TrendingUp size={22} />,
      number: '01',
      title: t('AI Satış Operatörü', 'AI Sales Operator'),
      desc: t(
        'Potansiyel müşterileri otomatik olarak takip eder, teklifler sunar ve satış sürecini uçtan uca yönetir. İnsan müdahalesine gerek kalmadan satış kapanır.',
        'Automatically follows up with prospects, presents offers, and manages the sales process end-to-end. Sales close without human intervention.'
      ),
      kpi: t('+35% Satış Dönüşümü', '+35% Sales Conversion'),
      tooltip: t('Ortalama müşteri verilerine dayalı tahmin', 'Estimate based on average customer data'),
    },
    {
      icon: <HeadphonesIcon size={22} />,
      number: '02',
      title: t('AI Müşteri Desteği', 'AI Customer Support'),
      desc: t(
        'Müşteri sorularını anlık olarak yanıtlar, sorunları çözer ve gerektiğinde insan ekibine yönlendirir. 7/24 mükemmel müşteri deneyimi.',
        'Instantly answers customer questions, resolves issues, and escalates to human teams when needed. Perfect customer experience 24/7.'
      ),
      kpi: t('%94 Müşteri Memnuniyeti', '94% Customer Satisfaction'),
      tooltip: t('Pilot müşteri sonuçlarına dayalı', 'Based on pilot customer results'),
    },
    {
      icon: <UserCheck size={22} />,
      number: '03',
      title: t('AI Lead Kalifikasyonu', 'AI Lead Qualification'),
      desc: t(
        'Gelen müşteri adaylarını otomatik olarak değerlendirir, puanlar ve satış ekibine hazır hale getirir. Yalnızca kaliteli leadler ilerler.',
        'Automatically evaluates, scores incoming leads, and prepares them for the sales team. Only quality leads advance.'
      ),
      kpi: t('+50% Lead Kalitesi', '+50% Lead Quality'),
      tooltip: t('Nitelikli lead oranı artışı', 'Qualified lead rate increase'),
    },
    {
      icon: <CalendarCheck size={22} />,
      number: '04',
      title: t('AI Randevu Otomasyonu', 'AI Appointment Automation'),
      desc: t(
        'Müşteri takvimlerini analiz eder, uygun zamanları önerir ve randevuları otomatik olarak planlar. Sıfır koordinasyon çabası.',
        'Analyzes customer calendars, suggests suitable times, and automatically schedules appointments. Zero coordination effort.'
      ),
      kpi: t('-70% Koordinasyon Süresi', '-70% Coordination Time'),
      tooltip: t('Randevu planlama süresinde tasarruf', 'Savings in appointment scheduling time'),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0D0D0F]" id="capabilities" ref={ref}>
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
            <span className="hp-section-label">{t('Yetenekler', 'Capabilities')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
            {t('4 Temel AI Operasyon Modülü', '4 Core AI Operation Modules')}
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            {t(
              'Her modül, işletmenizin belirli bir alanını otomatikleştirmek ve optimize etmek için tasarlanmıştır.',
              'Each module is designed to automate and optimize a specific area of your business.'
            )}
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="hp-card p-7 flex flex-col gap-5 group"
              title={cap.tooltip}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-[rgba(245,233,218,0.07)] flex items-center justify-center text-[#C9B89A] group-hover:bg-[rgba(245,233,218,0.12)] transition-colors">
                  {cap.icon}
                </div>
                <span className="text-[11px] font-['Sora'] font-600 text-[#3A3A3E] tracking-widest">
                  {cap.number}
                </span>
              </div>

              <div>
                <h3 className="font-['Sora'] font-700 text-[#F8F8F6] text-lg mb-2 leading-snug tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-[#A1A1AA] text-[13.5px] leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-[rgba(245,233,218,0.06)] flex items-center justify-between">
                <span className="text-[#F5E9DA] font-['Sora'] font-700 text-sm">
                  {cap.kpi}
                </span>
                <span className="text-[11px] text-[#3A3A3E] italic">{cap.tooltip}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
