'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Building2, Menu, X, Sun, Moon, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/ThemeProvider'

const navLinks = [
  { href: '/clients', label: 'Клиентам' },
  { href: '/suppliers', label: 'Поставщикам' },
  { href: '/logistics', label: 'Логистам' },
  { href: '/blog', label: 'Блог' },
  { href: '/contact', label: 'Контакты' },
]

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navigate = (href: string) => {
    setMobileOpen(false)
    router.push(href)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass-strong border-b border-border shadow-lg shadow-black/5' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Stroymaterial.kz</span>
        </Link>

        {/* Desktop nav - centered */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="w-px h-5 bg-border mx-1" />

          <Link
            href="/auth/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md transition-colors"
          >
            Войти
          </Link>
          <a
            href="https://wa.me/77001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile right actions */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-accent-surface text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 mt-3 border-t border-border flex flex-col gap-2">
              <button
                onClick={() => navigate('/auth/login')}
                className="w-full text-center text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Войти
              </button>
              <a
                href="https://wa.me/77001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-whatsapp text-white px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
