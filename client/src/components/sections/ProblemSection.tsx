/*
 * HERMES PILOT — Problem Section
 * Pain points with icon cards, dark bg, champagne accents
 */
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, TrendingDown, DollarSign, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ProblemSection() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const problems = [
    {
      icon: <Clock size={20} />,
      title: t('Yavaş Yanıt Süreleri', 'Slow Response Times'),
      desc: t(
        'Müşterileriniz anında yanıt bekliyor. Gecikmeler, kaybedilen fırsatlar ve düşen müşteri memnuniyeti anlamına gelir.',
        'Your customers expect instant responses. Delays mean lost opportunities and declining customer satisfaction.'
      ),
      stat: t('Müşterilerin %78\'i ilk yanıt veren firmayı tercih eder', '78% of customers choose the first company to respond'),
    },
    {
      icon: <TrendingDown size={20} />,
      title: t('Kaybedilen Potansiyel Müşteriler', 'Lost Leads'),
      desc: t(
        'Takip edilmeyen müşteri adayları rakiplerinize gidiyor. Manuel süreçler, her gün gelir kaybettiriyor.',
        'Untracked leads go to your competitors. Manual processes cost you revenue every single day.'
      ),
      stat: t('Takip edilmeyen leadlerin %63\'ü rakibe gider', '63% of untracked leads go to competitors'),
    },
    {
      icon: <DollarSign size={20} />,
      title: t('Yüksek Operasyonel Maliyetler', 'High Operational Costs'),
      desc: t(
        'Tekrarlayan görevler için büyük ekipler oluşturmak, büyüme yerine maliyet yaratır. Ölçeklenme imkansızlaşır.',
        'Building large teams for repetitive tasks creates costs instead of growth. Scaling becomes impossible.'
      ),
      stat: t('Operasyon maliyetlerinin %40\'ı tekrarlayan görevlerden kaynaklanır', '40% of operational costs come from repetitive tasks'),
    },
    {
      icon: <AlertCircle size={20} />,
      title: t('Verimsiz İş Süreçleri', 'Inefficient Business Processes'),
      desc: t(
        'Entegre olmayan sistemler, manuel veri girişi ve koordinasyon sorunları ekibinizin zamanını çalıyor.',
        'Disconnected systems, manual data entry, and coordination issues steal your team\'s time.'
      ),
      stat: t('Çalışanlar zamanlarının %30\'unu tekrarlayan görevlere harcıyor', 'Employees spend 30% of their time on repetitive tasks'),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0D0D0F]" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9B89A]" />
            <span className="hp-section-label">{t('Sorun', 'The Problem')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
            {lang === 'tr' ? (
              <>İşletmenizi Yavaşlatan<br /><span className="text-[#F5E9DA]">4 Kritik Sorun</span></>
            ) : (
              <>4 Critical Issues<br /><span className="text-[#F5E9DA]">Slowing Your Business</span></>
            )}
          </h2>
          <p className="text-[#A1A1AA] text-base leading-relaxed">
            {t(
              'Büyüyen işletmeler aynı sorunlarla karşılaşır. Hermes Pilot bu sorunları ortadan kaldırmak için tasarlandı.',
              'Growing businesses face the same challenges. Hermes Pilot was designed to eliminate these problems.'
            )}
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              whileHover={{
                y: -12,
                boxShadow: '0 30px 60px rgba(245,233,218,0.12)',
              }}
              whileTap={{ scale: 0.98 }}
              className="hp-card p-6 flex flex-col gap-4 cursor-pointer transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(245,233,218,0.08)] flex items-center justify-center text-[#C9B89A]">
                {problem.icon}
              </div>
              <div>
                <h3 className="font-['Sora'] font-600 text-[#F8F8F6] text-[15px] mb-2 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-[#A1A1AA] text-[13px] leading-relaxed">
                  {problem.desc}
                </p>
              </div>
              <div className="mt-auto pt-3 border-t border-[rgba(245,233,218,0.06)]">
                <p className="text-[11px] text-[#C9B89A] leading-relaxed italic">
                  {problem.stat}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
