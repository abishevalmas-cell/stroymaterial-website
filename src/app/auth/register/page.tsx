'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Building2, ArrowRight, Check, Smartphone, Download } from 'lucide-react'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.stroymaterial.kz'

export default function RegisterPage() {
  const [role, setRole] = useState<'client' | 'supplier' | 'logistics'>('client')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      password: formData.get('password'),
      role,
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.message || 'Ошибка регистрации')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка регистрации')
    } finally {
      setLoading(false)
    }
  }

  const roles = [
    { id: 'client' as const, label: 'Клиент', desc: 'Покупка стройматериалов' },
    { id: 'supplier' as const, label: 'Поставщик', desc: 'Продажа товаров' },
    { id: 'logistics' as const, label: 'Логист', desc: 'Доставка заказов' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Регистрация</h1>
              <p className="text-muted-foreground">Создайте аккаунт на Stroymaterial.kz</p>
            </div>

            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Регистрация успешна!</h3>
                <p className="text-muted-foreground mb-6">Мы отправили код подтверждения на ваш телефон.</p>
                <Link href="/auth/login" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2">
                  Войти в аккаунт
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role selector */}
                <div className="grid grid-cols-3 gap-3">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id)}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        role === r.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/30'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{r.label}</div>
                      <div className="text-xs text-muted-foreground">{r.desc}</div>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Пароль</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Минимум 8 символов"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Регистрация...
                    </div>
                  ) : 'Зарегистрироваться'}
                </button>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                <p className="text-center text-sm text-muted-foreground">
                  Уже есть аккаунт?{' '}
                  <Link href="/auth/login" className="text-primary hover:underline">
                    Войти
                  </Link>
                </p>
              </form>
            )}
          </div>

          {/* App download */}
          <div className="mt-10 bg-card border border-border rounded-2xl p-6 text-center">
            <Smartphone className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Скачайте мобильное приложение</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ваш аккаунт будет работать и на сайте, и в приложении
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary rounded-lg px-4 py-3">
                <Download className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Скоро в</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
              <div className="bg-secondary rounded-lg px-4 py-3">
                <Download className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Скоро в</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
