'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Check, Send, MessageCircle } from 'lucide-react'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.stroymaterial.kz'

export default function ContactPage() {
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
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Ошибка отправки')

      setSubmitted(true)
    } catch (err) {
      setError('Не удалось отправить сообщение. Попробуйте через WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Свяжитесь с{' '}
              <span className="text-primary">нами</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Самый быстрый способ связаться — написать в мессенджер
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
              </a>
              <a
                href="https://t.me/stroymaterial_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-telegram text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Контакты</h2>
                <div className="space-y-4">
                  <a href="tel:+77001234567" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-medium">+7 700 123 45 67</div>
                    </div>
                  </a>
                  <a href="mailto:info@stroymaterial.kz" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">info@stroymaterial.kz</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Адрес</div>
                      <div className="font-medium">Алматы, ул. Абая 150, офис 301</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Режим работы</div>
                      <div className="font-medium">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                  <p className="text-muted-foreground">Карта загрузится здесь</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Сообщение отправлено!</h3>
                    <p className="text-muted-foreground">Мы ответим вам в течение 24 часов.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-semibold mb-6">Написать нам</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тема</label>
                      <select name="subject" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                        <option>Общий вопрос</option>
                        <option>Для поставщиков</option>
                        <option>Для логистов</option>
                        <option>Техническая поддержка</option>
                        <option>Партнёрство</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        placeholder="Ваше сообщение..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-primary-foreground py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Отправить сообщение
                        </>
                      )}
                    </button>
                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
