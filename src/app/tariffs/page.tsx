import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check, ArrowRight, Star, Zap, Building, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Старт',
    description: 'Для новых поставщиков',
    price: '0 ₸',
    period: 'первые 3 месяца',
    icon: Star,
    highlight: false,
    features: [
      'До 100 товаров',
      'Базовая аналитика',
      'Стандартная поддержка',
      '0% комиссия (3 мес)',
      'Email-уведомления',
    ],
    afterTrial: 'от 49 000 ₸/мес',
    cta: 'Начать бесплатно',
  },
  {
    name: 'Бизнес',
    description: 'Самый популярный',
    price: '99 000 ₸',
    period: '/мес',
    icon: Zap,
    highlight: true,
    features: [
      'До 5 000 товаров',
      'Расширенная аналитика',
      'Приоритетная поддержка',
      '3% комиссия',
      'API-доступ',
      'Реклама в каталоге',
      'Live-данные спроса',
    ],
    afterTrial: 'После пробного периода',
    cta: 'Попробовать бесплатно',
  },
  {
    name: 'Премиум',
    description: 'Для крупных компаний',
    price: '249 000 ₸',
    period: '/мес',
    icon: Crown,
    highlight: false,
    features: [
      'Безлимит товаров',
      'Полная аналитика + отчёты',
      'Персональный менеджер',
      '1% комиссия',
      'Полный API',
      'Топ в результатах поиска',
      'Интеграция с 1С',
      'White-label решение',
    ],
    afterTrial: 'Индивидуальные условия',
    cta: 'Связаться с нами',
  },
]

export default function TariffsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Тарифы</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Тарифы для <span className="text-primary">поставщиков</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Первые 3 месяца — без комиссии. Начните продавать без рисков.
            </p>
            <p className="text-muted-foreground">
              500+ поставщиков уже на платформе. Средняя конверсия — 12%.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`bg-card border rounded-3xl p-8 relative flex flex-col transition-all hover:scale-[1.02] ${
                  plan.highlight
                    ? 'border-primary/50 shadow-lg shadow-primary/10'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Самый популярный
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.afterTrial}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/register?role=supplier"
                  className={`w-full py-4 rounded-full text-lg font-semibold text-center block transition-all ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border hover:border-primary/50 text-foreground hover:text-primary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Сравнение тарифов</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Возможность</th>
                      <th className="text-center p-4 font-semibold">Старт</th>
                      <th className="text-center p-4 font-semibold text-primary">Бизнес</th>
                      <th className="text-center p-4 font-semibold">Премиум</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Товары', start: '100', business: '5 000', premium: 'Безлимит' },
                      { feature: 'Комиссия', start: '0% (3 мес)', business: '3%', premium: '1%' },
                      { feature: 'Аналитика', start: 'Базовая', business: 'Расширенная', premium: 'Полная + отчёты' },
                      { feature: 'API', start: '—', business: 'Да', premium: 'Полный' },
                      { feature: 'Поддержка', start: 'Стандарт', business: 'Приоритет', premium: 'Персональный менеджер' },
                      { feature: 'Интеграция с 1С', start: '—', business: '—', premium: 'Да' },
                      { feature: 'White-label', start: '—', business: '—', premium: 'Да' },
                    ].map(row => (
                      <tr key={row.feature} className="border-b border-border/50">
                        <td className="p-4">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.start}</td>
                        <td className="p-4 text-center font-medium text-primary">{row.business}</td>
                        <td className="p-4 text-center">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Вопросы о тарифах</h2>
            <div className="space-y-4 text-left">
              {[
                { q: 'Что будет после пробного периода?', a: 'После 3 месяцев без комиссии вы можете выбрать любой тариф. Если не выберете — аккаунт перейдёт в режим "только просмотр" до оплаты.' },
                { q: 'Можно ли сменить тариф?', a: 'Да, вы можете повысить или понизить тариф в любой момент. Разница рассчитывается пропорционально оставшимся дням.' },
                { q: 'Есть ли скрытые платежи?', a: 'Нет. Вы платите только фиксированную абонентскую плату. Комиссия с продаж указана в тарифе. Никаких дополнительных сборов.' },
              ].map(item => (
                <div key={item.q} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Начните продавать уже сегодня</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              3 месяца без комиссии. 500+ поставщиков. 5 000+ активных покупателей. Регистрация — за 1 минуту.
            </p>
            <Link href="/auth/register?role=supplier" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2">
              Стать поставщиком
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
