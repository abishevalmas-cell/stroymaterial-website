import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { TrendingUp, BarChart3, Shield, Zap, ArrowRight, Building2, Code, Users } from 'lucide-react'

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 bg-accent-surface rounded-full px-4 py-1.5 mb-6">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Для поставщиков</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={100}>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                  5000+ покупателей{' '}
                  <span className="text-primary">уже ищут ваши товары</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={200}>
                <p className="text-xl text-muted-foreground mb-8">
                  Подключите каталог к AI-платформе. Средний поставщик получает 200+ новых клиентов 
                  и увеличивает продажи на 40% за первые 3 месяца.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/auth/register?role=supplier" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
                    Стать поставщиком
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#integration" className="text-muted-foreground hover:text-foreground px-8 py-4 rounded-full text-lg font-medium border border-border hover:border-primary/50 transition-all">
                    Техническая интеграция
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={200} className="hidden lg:block">
              <div className="relative glass rounded-2xl overflow-hidden">
                <Image src="/images/supplier-hero.png" alt="Панель поставщика" width={800} height={450} className="w-full h-auto" priority />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Активных поставщиков', icon: Building2 },
              { value: '50K+', label: 'Товаров в каталоге', icon: BarChart3 },
              { value: '200+', label: 'Новых клиентов/мес', icon: Users },
              { value: '+40%', label: 'Рост продаж', icon: TrendingUp },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center glass rounded-2xl p-6">
                  <div className="w-10 h-10 bg-accent-surface rounded-lg flex items-center justify-center mx-auto mb-3 icon-animate">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему поставщики выбирают нас</h2>
              <p className="text-muted-foreground text-lg">Не просто площадка — а полноценный инструмент роста продаж</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: '+40% к продажам', description: 'AI-рекомендации показывают ваши товары целевым покупателям. Средняя конверсия в покупку — 12%.', stat: '12% конверсия' },
              { icon: BarChart3, title: 'Аналитика в реальном времени', description: 'Дашборд: спрос, конверсия, популярные категории. Данные обновляются каждую минуту.', stat: 'Live данные' },
              { icon: Shield, title: 'Быстрые расчёты', description: 'Деньги поступают на счёт в течение 24 часов. Защита от фрода, автоматическое зачисление.', stat: '24 часа' },
              { icon: Zap, title: 'Подключение за 1 день', description: 'Личный кабинет для управления товарами. Никаких программистов — всё через интерфейс.', stat: '1 день' },
              { icon: Building2, title: 'Личный кабинет', description: 'Товары, цены, остатки, заказы, аналитика — всё в одном месте. Мобильная версия.', stat: 'Mobile-first' },
              { icon: Code, title: 'REST API + вебхуки', description: 'Полная документация, sandbox для тестирования. SDK для 1С и Битрикс.', stat: 'SDK: 1С, Битрикс' },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 100}>
                <div className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent-surface rounded-xl flex items-center justify-center icon-animate">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-primary font-medium bg-accent-surface px-3 py-1 rounded-full">{benefit.stat}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section id="integration" className="py-24 bg-secondary/40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Как подключиться</h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">От заявки до первых продаж — 4 простых шага</p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                { step: '01', title: 'Оставьте заявку', description: 'Менеджер свяжется в течение 1 часа для обсуждения условий.', time: '~1 час' },
                { step: '02', title: 'Загрузите каталог', description: 'CSV, Excel или прямая интеграция с 1С. API для автоматической выгрузки.', time: '~2 часа' },
                { step: '03', title: 'Настройте условия', description: 'Зоны доставки, минимальные суммы, способы оплаты.', time: '~30 мин' },
                { step: '04', title: 'Получайте заказы', description: 'AI начнёт рекомендовать ваши товары. Обработка через личный кабинет или API.', time: 'Сразу' },
              ].map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 100}>
                  <div className="flex items-start gap-6 glass rounded-2xl p-6 hover:border-primary/30 transition-all">
                    <div className="text-4xl font-extrabold text-primary/30 flex-shrink-0">{step.step}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="text-xs text-primary bg-accent-surface px-3 py-1 rounded-full">{step.time}</span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
              <div className="inline-flex items-center gap-2 bg-accent-surface text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Кейс
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">ТОО "КазЦемент": +40% продаж за 4 месяца</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Крупнейший производитель цемента в Казахстане подключился к Stroymaterial.kz в январе 2025.
                За 4 месяца получил 340 новых клиентов и увеличил онлайн-продажи на 40%.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: '340', label: 'Новых клиентов' },
                  { value: '+40%', label: 'Рост продаж' },
                  { value: '1 день', label: 'Интеграция API' },
                ].map(stat => (
                  <div key={stat.label} className="text-center bg-secondary/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                "API интеграция заняла 1 день. За первый месяц получили 80 заказов через платформу. 
                Сейчас Stroymaterial.kz — наш второй по объёму канал продаж."
              </blockquote>
              <div className="mt-4 text-sm font-semibold">— Данияр Сатпаев, директор по продажам ТОО "КазЦемент"</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="scale">
            <div className="glass rounded-3xl p-12 md:p-16 text-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Первые 3 месяца — без комиссии</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Подключите каталог бесплатно. Первые 3 месяца — 0% комиссии. 
                  Более 500 поставщиков уже увеличивают продажи.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/auth/register?role=supplier" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
                    Подать заявку
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="text-foreground px-8 py-4 rounded-full text-lg font-medium border border-border hover:border-primary/50 transition-all">
                    Задать вопрос
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
