/*
 * HERMES PILOT — Final CTA + Contact Section
 * Urgency + value reinforcement, contact form
 * Full-width dark section with champagne glow
 */
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function CTASection() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 bg-[#0B0B0C]" id="contact" ref={ref}>
      <div className="hp-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,233,218,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA Content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9B89A]" />
                <span className="hp-section-label">{t('Başlayın', 'Get Started')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-['Sora'] font-700 text-[#F8F8F6] leading-tight tracking-[-0.02em] mb-4">
                {lang === 'tr' ? (
                  <>İşletmenizi<br /><span className="text-[#F5E9DA] champagne-glow">Dönüştürmeye</span><br />Hazır mısınız?</>
                ) : (
                  <>Ready to<br /><span className="text-[#F5E9DA] champagne-glow">Transform</span><br />Your Business?</>
                )}
              </h2>
              <p className="text-[#A1A1AA] text-base leading-relaxed mb-8">
                {t(
                  'Ücretsiz süreç analizi ile başlayın. Uzmanlarımız işletmenizin otomasyon potansiyelini değerlendirip size özel bir yol haritası sunar.',
                  'Start with a free process analysis. Our experts will evaluate your business\'s automation potential and present a customized roadmap.'
                )}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
              className="flex flex-col gap-3 mb-8"
            >
              {[
                t('Ücretsiz süreç analizi', 'Free process analysis'),
                t('2 hafta içinde canlıya geçiş', 'Go live within 2 weeks'),
                t('Ölçülebilir ROI garantisi', 'Measurable ROI guarantee'),
                t('7/24 teknik destek', '24/7 technical support'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-[#C9B89A] flex-shrink-0" />
                  <span className="text-[#A1A1AA] text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              className="hp-card p-5"
            >
              <div className="text-[11px] text-[#A1A1AA] mb-2">{t('İletişim', 'Contact')}</div>
              <div className="flex flex-col gap-1.5">
                <a href="mailto:info@hermespilot.com" className="text-[#F5E9DA] text-sm hover:text-white transition-colors">
                  info@hermespilot.com
                </a>
                <a href="tel:+902121234567" className="text-[#A1A1AA] text-sm hover:text-[#F8F8F6] transition-colors">
                  +90 212 123 45 67
                </a>
                <span className="text-[#A1A1AA] text-sm">
                  {t('İstanbul, Türkiye', 'Istanbul, Turkey')}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            {submitted ? (
              <div className="hp-card p-10 flex flex-col items-center justify-center gap-4 text-center min-h-[400px]">
                <CheckCircle2 size={40} className="text-[#C9B89A]" />
                <h3 className="font-['Sora'] font-700 text-xl text-[#F8F8F6]">
                  {t('Mesajınız Alındı!', 'Message Received!')}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-xs">
                  {t(
                    'En kısa sürede sizinle iletişime geçeceğiz. Genellikle 1 iş günü içinde yanıt veriyoruz.',
                    'We\'ll get back to you as soon as possible. We typically respond within 1 business day.'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="hp-card p-7 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-[#A1A1AA] font-['Inter'] font-500">
                      {t('Ad Soyad *', 'Full Name *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder={t('Adınız Soyadınız', 'Your Full Name')}
                      className="bg-[rgba(255,255,255,0.04)] border border-[rgba(245,233,218,0.1)] rounded-lg px-3 py-2.5 text-[13px] text-[#F8F8F6] placeholder-[#3A3A3E] focus:outline-none focus:border-[rgba(245,233,218,0.3)] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-[#A1A1AA] font-['Inter'] font-500">
                      {t('Şirket', 'Company')}
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder={t('Şirket Adı', 'Company Name')}
                      className="bg-[rgba(255,255,255,0.04)] border border-[rgba(245,233,218,0.1)] rounded-lg px-3 py-2.5 text-[13px] text-[#F8F8F6] placeholder-[#3A3A3E] focus:outline-none focus:border-[rgba(245,233,218,0.3)] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-[#A1A1AA] font-['Inter'] font-500">
                    {t('E-posta *', 'Email *')}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder={t('ornek@sirket.com', 'example@company.com')}
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(245,233,218,0.1)] rounded-lg px-3 py-2.5 text-[13px] text-[#F8F8F6] placeholder-[#3A3A3E] focus:outline-none focus:border-[rgba(245,233,218,0.3)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-[#A1A1AA] font-['Inter'] font-500">
                    {t('Telefon', 'Phone')}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+90 5XX XXX XX XX"
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(245,233,218,0.1)] rounded-lg px-3 py-2.5 text-[13px] text-[#F8F8F6] placeholder-[#3A3A3E] focus:outline-none focus:border-[rgba(245,233,218,0.3)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-[#A1A1AA] font-['Inter'] font-500">
                    {t('Mesajınız', 'Your Message')}
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={t('İşletmeniz ve ihtiyaçlarınız hakkında kısaca bilgi verin...', 'Briefly describe your business and needs...')}
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(245,233,218,0.1)] rounded-lg px-3 py-2.5 text-[13px] text-[#F8F8F6] placeholder-[#3A3A3E] focus:outline-none focus:border-[rgba(245,233,218,0.3)] transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="hp-btn-primary justify-center mt-1 group">
                  {t('Demo Talep Et', 'Request Demo')}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <p className="text-[11px] text-[#3A3A3E] text-center">
                  {t(
                    'Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.',
                    'Your information is kept confidential and not shared with third parties.'
                  )}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
