/*
 * HERMES PILOT — Integrations Section
 * CRM, WhatsApp, E-commerce, Calendar, APIs
 * Integration visual image + logo grid
 */
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const integrations = [
  { name: 'Salesforce', category: 'CRM', abbr: 'SF' },
  { name: 'HubSpot', category: 'CRM', abbr: 'HS' },
  { name: 'WhatsApp', category: 'Mesajlaşma', abbr: 'WA' },
  { name: 'Shopify', category: 'E-Ticaret', abbr: 'SH' },
  { name: 'WooCommerce', category: 'E-Ticaret', abbr: 'WC' },
  { name: 'Google Calendar', category: 'Takvim', abbr: 'GC' },
  { name: 'Calendly', category: 'Takvim', abbr: 'CL' },
  { name: 'Slack', category: 'İletişim', abbr: 'SL' },
  { name: 'Zapier', category: 'Otomasyon', abbr: 'ZP' },
  { name: 'REST API', category: 'API', abbr: 'API' },
  { name: 'Webhook', category: 'API', abbr: 'WH' },
  { name: 'Trendyol', category: 'E-Ticaret', abbr: 'TR' },
];

export default function IntegrationsSection() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 bg-[#0D0D0F]" id="integrations" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9B89A]" />
                <span className="hp-section-label">{t('Entegrasyonlar', 'Integrations')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
                {lang === 'tr' ? (
                  <>Mevcut Sistemlerinizle<br /><span className="text-[#F5E9DA]">Sorunsuz Entegrasyon</span></>
                ) : (
                  <>Seamless Integration<br /><span className="text-[#F5E9DA]">With Your Existing Systems</span></>
                )}
              </h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed mb-6">
                {t(
                  'Hermes Pilot, kullandığınız CRM, e-ticaret, mesajlaşma ve takvim sistemleriyle doğrudan entegre olur. Altyapınızı değiştirmenize gerek yok.',
                  'Hermes Pilot directly integrates with your CRM, e-commerce, messaging, and calendar systems. No need to change your infrastructure.'
                )}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
              className="flex flex-col gap-3"
            >
              {[
                { cat: t('CRM Sistemleri', 'CRM Systems'), desc: t('Salesforce, HubSpot, Pipedrive ve daha fazlası', 'Salesforce, HubSpot, Pipedrive and more') },
                { cat: t('Mesajlaşma', 'Messaging'), desc: t('WhatsApp Business, SMS, E-posta', 'WhatsApp Business, SMS, Email') },
                { cat: t('E-Ticaret', 'E-Commerce'), desc: t('Shopify, WooCommerce, Trendyol, Hepsiburada', 'Shopify, WooCommerce, Trendyol, Hepsiburada') },
                { cat: t('Takvim & Randevu', 'Calendar & Scheduling'), desc: t('Google Calendar, Calendly, Outlook', 'Google Calendar, Calendly, Outlook') },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9B89A] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-[#F8F8F6] text-sm font-['Sora'] font-600">{item.cat}: </span>
                    <span className="text-[#A1A1AA] text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              className="mt-6"
            >
              <a href="#contact" className="hp-btn-outline">
                {t('Entegrasyon Listesini Gör', 'View Integration List')}
              </a>
            </motion.div>
          </div>

          {/* Right: Integration visual + logo grid */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
              className="rounded-2xl overflow-hidden border border-[rgba(245,233,218,0.08)]"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663456768397/8GMxCz3UWYoDuFcMnULRih/integration-visual-dvSFyg3vDUjcHKnEngdMVw.webp"
                alt={t('Hermes Pilot Entegrasyon Diyagramı', 'Hermes Pilot Integration Diagram')}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Logo grid */}
            <div className="grid grid-cols-4 gap-2">
              {integrations.map((intg, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i * 0.5 + 4}
                  className="hp-card p-3 flex flex-col items-center gap-1.5 cursor-default"
                  title={`${intg.name} — ${intg.category}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(245,233,218,0.07)] flex items-center justify-center">
                    <span className="text-[10px] font-['Sora'] font-700 text-[#C9B89A]">{intg.abbr}</span>
                  </div>
                  <span className="text-[10px] text-[#A1A1AA] text-center leading-tight">{intg.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
