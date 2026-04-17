import Link from 'next/link'
import { Building2, Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

const DASHBOARD_URLS = {
  admin: process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3001',
  supplier: process.env.NEXT_PUBLIC_SUPPLIER_URL || 'http://localhost:3002',
  b2b: process.env.NEXT_PUBLIC_B2B_URL || 'http://localhost:3003',
}

const footerLinks = {
  product: [
    { href: '/clients', label: 'Клиентам' },
    { href: '/suppliers', label: 'Поставщикам' },
    { href: '/logistics', label: 'Логистам' },
    { href: '/tracking', label: 'Отследить заказ' },
    { href: '/calculator', label: 'Калькулятор доставки' },
  ],
  company: [
    { href: '/blog', label: 'Блог' },
    { href: '/contact', label: 'Контакты' },
    { href: '/about', label: 'О компании' },
    { href: '/careers', label: 'Вакансии' },
  ],
  support: [
    { href: '/faq', label: 'FAQ' },
    { href: '/terms', label: 'Условия' },
    { href: '/privacy', label: 'Конфиденциальность' },
  ],
  dashboards: [
    { href: DASHBOARD_URLS.admin, label: 'Админ-панель', external: true },
    { href: DASHBOARD_URLS.supplier, label: 'Кабинет поставщика', external: true },
    { href: DASHBOARD_URLS.b2b, label: 'B2B кабинет', external: true },
  ],
}

export function Footer() {
  return (
    <footer className="glass-strong border-t border-border relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent-surface rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Stroymaterial.kz</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              AI-маркетплейс строительных материалов для Казахстана
            </p>
            <div className="space-y-3">
              <a href="tel:+77001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +7 700 123 45 67
              </a>
              <a href="mailto:info@stroymaterial.kz" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@stroymaterial.kz
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Алматы, Казахстан
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              {footerLinks.product.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Панели</h4>
            <ul className="space-y-2">
              {footerLinks.dashboards.map(link => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мессенджеры</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/77001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-whatsapp text-white rounded-xl px-4 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://t.me/stroymaterial_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-telegram text-white rounded-xl px-4 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Stroymaterial.kz. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
