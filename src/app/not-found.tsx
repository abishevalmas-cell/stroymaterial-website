'use client'

import Link from 'next/link'
import { Home, Search, MessageCircle, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 */}
          <div className="text-9xl md:text-[12rem] font-extrabold text-primary/20 leading-none mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Возможно, она была перемещена, удалена или никогда не существовала.
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Home, label: 'Главная', href: '/' },
              { icon: Search, label: 'Каталог', href: '/clients' },
              { icon: MessageCircle, label: 'Контакты', href: '/contact' },
            ].map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group flex flex-col items-center gap-2"
              >
                <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            ))}
            <button
              onClick={() => window.history.back()}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group flex flex-col items-center gap-2"
            >
              <ArrowLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Назад</span>
            </button>
          </div>

          {/* CTA */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <p className="text-muted-foreground mb-6">
              Не можете найти то, что искали? Напишите нам — мы поможем.
            </p>
            <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2">
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
