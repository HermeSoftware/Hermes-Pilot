/*
 * HERMES PILOT — FAQ Section
 * Accordion-style Q&A, dark bg, champagne accents
 */
import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const faqs = [
    {
      q: t('Hermes Pilot bir chatbot mu?', 'Is Hermes Pilot a chatbot?'),
      a: t(
        'Hayır. Hermes Pilot bir chatbot değildir. Chatbotlar yalnızca belirli soruları yanıtlar; Hermes Pilot ise gerçek iş süreçlerini anlayan, kararlar alan ve uçtan uca yürüten bir yapay zeka operasyon sistemidir. Satış takibi, lead kalifikasyonu, randevu planlama gibi görevleri bağımsız olarak gerçekleştirir.',
        'No. Hermes Pilot is not a chatbot. Chatbots only answer specific questions; Hermes Pilot is an AI operational system that understands real business processes, makes decisions, and executes them end-to-end. It independently performs tasks like sales follow-up, lead qualification, and appointment scheduling.'
      ),
    },
    {
      q: t('Kurulum ne kadar sürer?', 'How long does setup take?'),
      a: t(
        'Starter planı için ortalama 5 iş günü, Growth planı için 10 iş günü, Enterprise planı için ise projenin kapsamına göre 2-4 hafta sürmektedir. Süreç analizi, entegrasyon ve AI eğitimini içerir.',
        'Starter plan averages 5 business days, Growth plan 10 business days, and Enterprise plan 2-4 weeks depending on project scope. The process includes analysis, integration, and AI training.'
      ),
    },
    {
      q: t('Hermes Pilot çalışanların yerini mi alır?', 'Does Hermes Pilot replace employees?'),
      a: t(
        'Hayır. Hermes Pilot, çalışanlarınızın tekrarlayan ve zaman alan görevlerini üstlenerek onların daha değerli işlere odaklanmasını sağlar. Ekibiniz stratejik kararlar, müşteri ilişkileri ve yaratıcı çalışmalar için daha fazla zaman kazanır.',
        'No. Hermes Pilot takes over repetitive and time-consuming tasks from your employees, allowing them to focus on more valuable work. Your team gains more time for strategic decisions, customer relationships, and creative work.'
      ),
    },
    {
      q: t('Hangi sistemlerle entegre olur?', 'Which systems does it integrate with?'),
      a: t(
        'Hermes Pilot; Salesforce, HubSpot, Pipedrive gibi CRM sistemleri, WhatsApp Business, Shopify, WooCommerce, Trendyol gibi e-ticaret platformları, Google Calendar, Calendly gibi takvim uygulamaları ve REST API aracılığıyla özel sistemlerle entegre olabilir.',
        'Hermes Pilot can integrate with CRM systems like Salesforce, HubSpot, Pipedrive; e-commerce platforms like WhatsApp Business, Shopify, WooCommerce, Trendyol; calendar apps like Google Calendar, Calendly; and custom systems via REST API.'
      ),
    },
    {
      q: t('Verilerim güvende mi?', 'Is my data secure?'),
      a: t(
        'Evet. Tüm veriler şifreli kanallar üzerinden iletilir ve GDPR/KVKK uyumlu altyapıda saklanır. Verileriniz üçüncü taraflarla paylaşılmaz. Enterprise planında on-premise kurulum seçeneği de mevcuttur.',
        'Yes. All data is transmitted through encrypted channels and stored in GDPR/KVKK-compliant infrastructure. Your data is not shared with third parties. On-premise installation is also available for Enterprise plans.'
      ),
    },
    {
      q: t('Destek nasıl sağlanıyor?', 'How is support provided?'),
      a: t(
        'Starter planında e-posta desteği, Growth planında 7/24 öncelikli destek, Enterprise planında ise dedicated hesap yöneticisi ve SLA garantisi sunulmaktadır. Tüm planlarda onboarding ve eğitim desteği dahildir.',
        'Starter plan includes email support, Growth plan includes 24/7 priority support, and Enterprise plan includes a dedicated account manager and SLA guarantee. Onboarding and training support is included in all plans.'
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-[#0D0D0F]" id="faq" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left: Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9B89A]" />
              <span className="hp-section-label">{t('Sık Sorulan Sorular', 'FAQ')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
              {t('Merak Ettikleriniz', 'Your Questions Answered')}
            </h2>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-6">
              {t(
                'Hermes Pilot hakkında en sık sorulan soruların yanıtları.',
                'Answers to the most frequently asked questions about Hermes Pilot.'
              )}
            </p>
            <a href="#contact" className="hp-btn-outline">
              {t('Başka Sorunuz Var mı?', 'Have More Questions?')}
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 1}
                className={`rounded-xl border transition-all duration-200 ${
                  openIndex === i
                    ? 'border-[rgba(245,233,218,0.15)] bg-[rgba(26,26,30,0.8)]'
                    : 'border-[rgba(245,233,218,0.06)] bg-transparent hover:border-[rgba(245,233,218,0.1)]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-['Sora'] font-600 text-[#F8F8F6] text-[14px] leading-snug pr-4">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[rgba(245,233,218,0.07)] flex items-center justify-center text-[#C9B89A]">
                    {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[#A1A1AA] text-[13.5px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
