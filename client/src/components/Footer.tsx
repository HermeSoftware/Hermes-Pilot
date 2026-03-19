/*
 * HERMES PILOT — Footer
 * Dark obsidian, champagne accents, TR/EN toggle-ready
 * Company info, links, social, legal
 */
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = {
    product: [
      { label: t('Çözüm', 'Solution'), href: '#solution' },
      { label: t('Özellikler', 'Capabilities'), href: '#capabilities' },
      { label: t('Nasıl Çalışır', 'How It Works'), href: '#how-it-works' },
      { label: t('Entegrasyonlar', 'Integrations'), href: '#integrations' },
      { label: t('Fiyatlandırma', 'Pricing'), href: '#pricing' },
    ],
    company: [
      { label: t('Hakkımızda', 'About Us'), href: '#' },
      { label: t('Blog', 'Blog'), href: '#' },
      { label: t('Kariyer', 'Careers'), href: '#' },
      { label: t('Basın', 'Press'), href: '#' },
    ],
    legal: [
      { label: t('Gizlilik Politikası', 'Privacy Policy'), href: '#' },
      { label: t('Kullanım Koşulları', 'Terms of Service'), href: '#' },
      { label: t('KVKK', 'GDPR'), href: '#' },
      { label: t('Çerez Politikası', 'Cookie Policy'), href: '#' },
    ],
  };

  return (
    <footer className="relative bg-[#0B0B0C] border-t border-[rgba(245,233,218,0.06)]">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#F5E9DA] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="#0B0B0C" />
                  <path d="M8 5L11 6.75V10.25L8 12L5 10.25V6.75L8 5Z" fill="#F5E9DA" />
                </svg>
              </div>
              <span className="font-['Sora'] font-700 text-[15px] text-[#F8F8F6] tracking-tight">
                Hermes<span className="text-[#C9B89A]"> Pilot</span>
              </span>
            </div>
            <p className="text-[#A1A1AA] text-[13px] leading-relaxed mb-4 max-w-[200px]">
              {t(
                '7/24 çalışan yapay zeka operasyon sistemi.',
                'AI operational system working 24/7.'
              )}
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {['Li', 'Tw', 'Ig'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[rgba(245,233,218,0.06)] flex items-center justify-center text-[#A1A1AA] hover:text-[#F5E9DA] hover:bg-[rgba(245,233,218,0.1)] transition-all text-[11px] font-['Sora'] font-700"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-['Sora'] font-600 text-[#F8F8F6] text-[13px] mb-4">
              {t('Ürün', 'Product')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] text-[13px] hover:text-[#F8F8F6] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-['Sora'] font-600 text-[#F8F8F6] text-[13px] mb-4">
              {t('Şirket', 'Company')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#A1A1AA] text-[13px] hover:text-[#F8F8F6] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Sora'] font-600 text-[#F8F8F6] text-[13px] mb-4">
              {t('İletişim', 'Contact')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="mailto:info@hermespilot.com" className="text-[#A1A1AA] text-[13px] hover:text-[#F5E9DA] transition-colors">
                  info@hermespilot.com
                </a>
              </li>
              <li>
                <a href="tel:+902121234567" className="text-[#A1A1AA] text-[13px] hover:text-[#F8F8F6] transition-colors">
                  +90 212 123 45 67
                </a>
              </li>
              <li>
                <span className="text-[#A1A1AA] text-[13px]">
                  {t('Levent, İstanbul', 'Levent, Istanbul')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hp-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3A3A3E] text-[12px]">
            © {year} Hermes Software. {t('Tüm hakları saklıdır.', 'All rights reserved.')}
          </p>
          <div className="flex gap-4">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#3A3A3E] text-[12px] hover:text-[#A1A1AA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
