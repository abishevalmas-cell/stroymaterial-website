import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ArrowRight, Check, Target, Users, TrendingUp, Award, Calendar, MapPin, MessageCircle, Send } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-primary text-sm font-medium">О компании</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Stroymaterial.kz — <span className="text-primary">заказ стройматериалов</span> через мессенджер
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Напишите в WhatsApp или Telegram — AI-помощник найдёт лучшие варианты, сравнит цены и оформит заказ. Без каталогов, регистраций и звонков.
              </p>
              <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
              </a>
            </div>
            <div className="relative">
              <Image src="/images/hero-phone.png" alt="Stroymaterial.kz платформа" width={500} height={400} className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Calendar, value: '2023', label: 'Год основания' },
              { icon: Users, value: '5 000+', label: 'Пользователей' },
              { icon: TrendingUp, value: '50K+', label: 'Товаров в каталоге' },
              { icon: Award, value: '500+', label: 'Поставщиков' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Наша миссия</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Цифровизация строительного рынка Казахстана</h2>
            <p className="text-lg text-muted-foreground">
              Строительный рынок Казахстана — это миллиарды тенге оборота, но закупки до сих пор происходят через обзвон поставщиков. Наш AI-помощник в WhatsApp решает это за секунды.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Для клиентов',
                description:
                  'Напишите в WhatsApp что нужно — помощник найдёт лучшие цены за 30 секунд. Без регистрации и каталогов.',
                benefits: ['Экономия до 30%', 'Кэшбэк 1-5%', 'Удобная онлайн-оплата'],
              },
              {
                title: 'Для поставщиков',
                description: 'Получайте новых клиентов без маркетинговых затрат. Средний поставщик получает +40% продаж за первый квартал.',
                benefits: ['Новые клиенты', '0% комиссия 3 мес', 'Аналитика спроса'],
              },
              {
                title: 'Для логистов',
                description: 'Стабильные заказы на доставку. Средний логист зарабатывает от 500 000 ₸/мес с удобным графиком.',
                benefits: ['500K+ ₸/мес', 'Гибкий график', 'Фото-подтверждение'],
              },
            ].map(card => (
              <div key={card.title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all">
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground mb-6">{card.description}</p>
                <ul className="space-y-2">
                  {card.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наш путь</h2>
            <div className="space-y-8">
              {[
                { date: 'Январь 2023', title: 'Запуск платформы', description: 'Первые 50 поставщиков и 500 клиентов в Алматы.' },
                { date: 'Июнь 2023', title: 'Расширение на Астану', description: '200+ поставщиков, 2000+ клиентов.' },
                { date: 'Январь 2024', title: 'AI-ассистент', description: 'Запуск AI-помощника для подбора материалов и расчётов.' },
                { date: 'Июнь 2024', title: '5000+ пользователей', description: '50K+ товаров, 500+ поставщиков по всему Казахстану.' },
                { date: '2025', title: 'Лидер рынка', description: 'Цель — 50 000 пользователей и выход на рынки Центральной Азии.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                    {i < 4 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-primary font-medium mb-1">{item.date}</div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Команда</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Более 30 специалистов: разработчики, аналитики, менеджеры по работе с клиентами и логисты. Объединённые целью — сделать рынок стройматериалов прозрачным и удобным.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { role: 'Разработка', count: '12+' },
                { role: 'Поддержка', count: '8+' },
                { role: 'Аналитика', count: '5+' },
                { role: 'Продажи', count: '5+' },
              ].map(member => (
                <div key={member.role} className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-primary mb-1">{member.count}</div>
                  <div className="text-sm text-muted-foreground">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Попробуйте прямо сейчас</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Напишите в WhatsApp или Telegram — AI-помощник ответит за секунды. Без регистрации, без приложения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a href="https://t.me/stroymaterial_bot" target="_blank" rel="noopener noreferrer" className="bg-telegram text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
