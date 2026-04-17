'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Building2, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('otp')
  }

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
              <h1 className="text-3xl font-bold mb-2">Вход в аккаунт</h1>
              <p className="text-muted-foreground">Войдите или создайте новый аккаунт</p>
            </div>

            {step === 'phone' ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-card border border-border rounded-xl px-4 py-4 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-center"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Получить код
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Нет аккаунта?{' '}
                  <Link href="/auth/register" className="text-primary hover:underline">
                    Зарегистрироваться
                  </Link>
                </p>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Код отправлен на ваш номер</p>
                  <div className="flex gap-3 justify-center">
                    {[1, 2, 3, 4].map((i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-14 h-16 bg-card border border-border rounded-xl text-center text-2xl font-bold text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep('phone')}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Подтвердить
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Не пришёл код?{' '}
                  <button onClick={() => setStep('phone')} className="text-primary hover:underline">
                    Отправить снова
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
