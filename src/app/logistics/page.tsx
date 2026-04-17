import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'

import { Truck, MapPin, Clock, CheckCircle, ArrowRight, Check, BarChart3, Smartphone, Wallet, Star } from 'lucide-react'

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative">

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-left">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 bg-accent-surface rounded-full px-4 py-1.5 mb-6">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Для логистов</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={100}>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                  Управление{' '}
                  <span className="text-primary">доставкой</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={200}>
                <p className="text-xl text-muted-foreground mb-10">
                  Координируйте доставку стройматериалов от складов поставщиков до объектов клиентов.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/auth/register?role=logistics" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
                    Стать логистом
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground px-8 py-4 rounded-full text-lg font-medium border border-border hover:border-primary/50 transition-all">
                    Возможности
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={200} className="relative">
              <div className="glass rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/logistics-hero.png" alt="Управление доставкой — панель логиста" width={600} height={400} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {[
              { icon: Truck, value: '10K+', label: 'Доставок в месяц' },
              { icon: Wallet, value: '500K+', label: 'Заработок логиста ₸/мес' },
              { icon: Clock, value: '98%', label: 'Вовремя' },
              { icon: Star, value: '4.8', label: 'Средний рейтинг' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 bg-accent-surface rounded-lg flex items-center justify-center mx-auto mb-3 icon-animate">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-secondary/40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности платформы</h2>
              <p className="text-muted-foreground text-lg">Всё для эффективного управления доставкой</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Маршруты на карте', description: 'Визуализация всех заказов на карте. Оптимизация маршрутов для экономии топлива.' },
              { icon: Clock, title: 'Расписание доставок', description: 'Планирование загрузок и разгрузок. Уведомления водителям и клиентам.' },
              { icon: Smartphone, title: 'Мобильное приложение', description: 'Водители отмечают выполнение через приложение. Фото-подтверждение доставки.' },
              { icon: BarChart3, title: 'Аналитика', description: 'Статистика по доставкам: время, расходы, удовлетворённость клиентов.' },
              { icon: CheckCircle, title: 'Статусы заказов', description: 'Прозрачный трекинг: собран -> в пути -> доставлен -> подписан.' },
              { icon: Truck, title: 'Управление автопарком', description: 'Учёт транспорта, водителей, ТО. Напоминания о сервисе.' },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="glass rounded-2xl p-8 hover:border-primary/30 transition-all group h-full">
                  <div className="w-12 h-12 bg-accent-surface rounded-xl flex items-center justify-center mb-6 icon-animate">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Как это работает</h2>
              <p className="text-muted-foreground text-lg mb-12 text-center">От получения заказа до подтверждения доставки</p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                { step: '01', title: 'Получаете заказ', description: 'Новый заказ появляется в панели логиста с адресом, весом и габаритами.' },
                { step: '02', title: 'Назначаете водителя', description: 'Выбираете ближайшего свободного водителя или создаёте маршрут.' },
                { step: '03', title: 'Водитель доставляет', description: 'Водитель забирает груз у поставщика и везёт на объект клиента.' },
                { step: '04', title: 'Подтверждение', description: 'Фото доставки + подпись клиента. Заказ закрыт, оплата начислена.' },
              ].map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 100}>
                  <div className="flex items-start gap-6 glass rounded-2xl p-6">
                    <div className="text-4xl font-extrabold text-primary/30 flex-shrink-0">{step.step}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-secondary/40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Требования к логистам</h2>
              <div className="glass rounded-2xl p-8">
                <div className="space-y-4">
                  {[
                    'Наличие грузового транспорта (от 1.5т)',
                    'Опыт доставки строительных материалов',
                    'Мобильное приложение для водителей',
                    'Возможность работать в выходные',
                    'Страхование груза',
                  ].map(req => (
                    <div key={req} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-accent-surface rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="scale">
            <div className="glass rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Присоединяйтесь к нашей логистической сети</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Получайте стабильные заказы на доставку. Средний заработок логиста — от 500 000 ₸/мес.
              </p>
              <Link href="/auth/register?role=logistics" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2">
                Стать логистом
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
