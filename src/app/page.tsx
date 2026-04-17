import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import {
  MessageCircle,
  Send,
  Building2,
  Truck,
  BarChart3,
  Shield,
  ArrowRight,
  Check,
  Star,
  Clock,
  Users,
  Brain,
  Globe,
  History,
  MapPin,
  Smartphone,
  Wallet,
  Camera,
  Package,
  FolderOpen,
  Bell,
  Calculator,
  FileText,
  Repeat,
  ScanLine,
  Zap,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* ===== 1. HERO — Lead with outcome ===== */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 bg-accent-surface rounded-full px-4 py-1.5 mb-8">
                  <div className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
                  <span className="text-primary text-sm font-medium">
                    Заказ стройматериалов за минуту
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Просто напишите —{' '}
                  <span className="text-primary">мы сделаем всё остальное</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  Пишите на сленге, на казахском, с ошибками — мы поймём. Получите
                  готовый заказ с лучшей ценой и доставкой прямо в WhatsApp или Telegram.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
                  <a
                    href="https://wa.me/77001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Написать в WhatsApp
                  </a>
                  <a
                    href="https://t.me/stroymaterial_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-telegram text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Telegram
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <div className="flex flex-wrap gap-8">
                  {[
                    { value: '30 сек', label: 'на подбор' },
                    { value: 'до 30%', label: 'экономии' },
                    { value: '24/7', label: 'без выходных' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* WhatsApp chat mockup */}
            <ScrollReveal direction="right" delay={200} className="hidden lg:block">
              <div className="glass rounded-3xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Stroymaterial.kz</div>
                    <div className="text-xs text-muted-foreground">онлайн</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-accent-surface rounded-2xl rounded-tr-none p-3 ml-auto max-w-[85%]">
                    <p className="text-sm">нужен цемент м500 20тонн на алмалинский район</p>
                    <p className="text-[10px] text-muted-foreground text-right mt-1">14:32</p>
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[90%]">
                    <p className="text-sm font-medium mb-2">Готово! Вот лучший вариант:</p>
                    <div className="space-y-2">
                      <div className="bg-background/50 rounded-lg p-2 text-xs">
                        <span className="font-semibold">Цемент М500</span>
                        <span className="block">20 тонн &times; 18 500 &#8376;/т = <span className="font-bold text-primary">370 000 &#8376;</span></span>
                        <span className="block text-primary font-medium">Доставка: завтра, Алмалинский р-н</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-2">14:32</p>
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[90%]">
                    <p className="text-sm">
                      Оплатить сейчас?{' '}
                      <span className="font-semibold">Онлайн-оплата</span> в 1 клик.
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">14:32</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 2. TRUST BAR ===== */}
      <section className="py-8 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Алматы</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Астана</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Караганда</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Шымкент</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Актау</span>
              </div>
              <span className="text-primary font-semibold">12 000+ заказов оформлено</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 3. HOW IT WORKS + COMPARISON ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
              <p className="text-muted-foreground text-lg">
                3 шага — от сообщения до доставки
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Steps */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              {
                step: '01',
                icon: MessageCircle,
                title: 'Пишете в WhatsApp',
                desc: '«Нужен цемент М500, 20 тонн, Алмалинский район» — обычным языком, можно с опечатками и на казахском.',
              },
              {
                step: '02',
                icon: BarChart3,
                title: 'AI подбирает лучший вариант',
                desc: 'Помощник мгновенно находит лучшую цену, проверяет наличие и рассчитывает доставку в ваш район.',
              },
              {
                step: '03',
                icon: Shield,
                title: 'Удобная оплата',
                desc: 'Получаете готовый заказ с итоговой ценой — оплачиваете любым удобным способом прямо в чате. Доставка на объект.',
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full relative">
                  <div className="text-5xl font-extrabold text-primary/10 mb-3">{s.step}</div>
                  <div className="w-10 h-10 bg-accent-surface rounded-lg flex items-center justify-center mb-4 icon-animate">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Comparison Table */}
          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-center mb-6">
                Обзвон поставщиков vs Stroymaterial.kz
              </h3>
              <div className="glass rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-medium text-muted-foreground">Параметр</div>
                  <div className="font-medium text-muted-foreground text-center">Обзвон</div>
                  <div className="font-medium text-primary text-center">Stroymaterial.kz</div>

                  {[
                    ['Время подбора', '2-4 часа', '~30 секунд'],
                    ['Сравнение цен', '3-5 звонков', 'Автоматически'],
                    ['Понимание запроса', 'Нужно точное название', 'Сленг, казахский, опечатки'],
                    ['Оплата', 'Перевод на счёт', 'Онлайн в 1 клик'],
                    ['Повторный заказ', 'Записывать вручную', 'Помощник помнит историю'],
                    ['Канал заказа', 'Звонки, переписки', 'WhatsApp / Telegram'],
                  ].map((row, i) => (
                    <div key={`row-${i}`} className="contents">
                      <div className="py-3 border-t border-border text-foreground">{row[0]}</div>
                      <div className="py-3 border-t border-border text-center text-muted-foreground">
                        {row[1]}
                      </div>
                      <div className="py-3 border-t border-border text-center text-primary font-semibold">
                        {row[2]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline CTA */}
              <div className="text-center mt-8">
                <a
                  href="https://wa.me/77001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-whatsapp text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Попробовать бесплатно
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 4. SOCIAL PROOF — Testimonials ===== */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Тысячи строителей уже экономят
              </h2>
              <p className="text-muted-foreground text-lg">
                Реальные результаты от реальных строителей
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Айдер Касымов',
                role: 'Прораб, ТОО "АлматыСтрой"',
                text: 'Написал в WhatsApp «нужен цемент 20 тонн» — через минуту получил готовый заказ с ценой и доставкой. Раньше на это уходило полдня.',
                savings: '4 часа/нед экономии',
                avatar: 'АК',
              },
              {
                name: 'Данияр Нурланов',
                role: 'Частный застройщик, Астана',
                text: 'Помощник понял мой запрос на казахском с ошибками. Подобрал лучшую цену рядом с объектом. Оплатил онлайн — материалы привезли на следующий день.',
                savings: 'Доставка за 1 день',
                avatar: 'ДН',
              },
              {
                name: 'Марат Сериков',
                role: 'Снабженец, СК "Нурлы Жол"',
                text: 'Раньше обзванивал 15 компаний. Сейчас пишу помощнику — он сам подбирает лучшую цену и помнит, что я заказывал раньше.',
                savings: '200 000 ₸/мес экономии',
                avatar: 'МС',
              },
            ].map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="bg-accent-surface rounded-lg px-3 py-1.5 inline-block mb-4 self-start">
                    <span className="text-primary font-semibold text-sm">{review.savings}</span>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">
                        {review.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Inline CTA after social proof */}
          <ScrollReveal delay={300}>
            <p className="text-center mt-10 text-muted-foreground">
              Присоединяйтесь —{' '}
              <a
                href="https://wa.me/77001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-whatsapp font-semibold hover:underline"
              >
                напишите в WhatsApp
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 5. AI CAPABILITIES ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Почему помощник понимает <span className="text-primary">именно вас</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Не просто чат — AI, обученный на строительном рынке Казахстана
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Globe,
                title: 'Сленг, казахский, опечатки',
                desc: '«цимент», «құм», «армтура» — помощник поймёт правильно. 3 885 терминов на русском, казахском и строительном жаргоне.',
              },
              {
                icon: MapPin,
                title: 'Лучшая цена в вашем районе',
                desc: 'Автоматически подбирает лучший вариант по цене, наличию и близости к вашему объекту.',
              },
              {
                icon: History,
                title: 'Помнит ваши заказы',
                desc: '«Тот же цемент, как в прошлый раз» — и помощник повторит заказ. Вся история сохраняется.',
              },
              {
                icon: Brain,
                title: 'Уточняет, если нужно',
                desc: 'Не указали марку или объём — помощник спросит сам. Общается как живой менеджер, только быстрее.',
              },
            ].map((ai, i) => (
              <ScrollReveal key={ai.title} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 bg-accent-surface rounded-lg flex items-center justify-center mb-4 icon-animate">
                    <ai.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{ai.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ai.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. LOGISTICS CHAIN — Automated pipeline ===== */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Полная автоматизация —{' '}
                <span className="text-primary">от оплаты до доставки</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                После подтверждения заказа вся цепочка работает автоматически.
                Каждый участник получает уведомления — ни одного звонка координатору.
              </p>
            </div>
          </ScrollReveal>

          {/* Pipeline — horizontal on desktop, vertical on mobile */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-0">
              {[
                {
                  role: 'Клиент',
                  roleColor: 'bg-primary/10 text-primary',
                  icon: Wallet,
                  title: 'Оплата онлайн',
                  desc: 'Клиент оплачивает заказ через чат или приложение. Деньги замораживаются до подтверждения доставки.',
                  notify: 'Push + WhatsApp',
                  notifyIcon: Bell,
                },
                {
                  role: 'Поставщик',
                  roleColor: 'bg-emerald-500/10 text-emerald-600',
                  icon: Package,
                  title: 'Сборка заказа',
                  desc: 'Поставщик получает заявку в Telegram. Отмечает каждую позицию — система автоматически определяет готовность.',
                  notify: 'Telegram-бот',
                  notifyIcon: Send,
                },
                {
                  role: 'Система',
                  roleColor: 'bg-yellow-500/10 text-yellow-600',
                  icon: Truck,
                  title: 'Поиск водителя',
                  desc: 'Когда заказ собран — заявка автоматически уходит водителям: адрес забора, адрес доставки, сумма, тип транспорта.',
                  notify: 'Автопубликация',
                  notifyIcon: Zap,
                },
                {
                  role: 'Водитель',
                  roleColor: 'bg-blue-500/10 text-blue-600',
                  icon: MapPin,
                  title: 'Доставка',
                  desc: 'Водитель принимает заказ в Telegram. Обновляет статус: забрал → в пути → доставил. Клиент видит всё в реальном времени.',
                  notify: 'Telegram-бот',
                  notifyIcon: Send,
                },
                {
                  role: 'Клиент',
                  roleColor: 'bg-primary/10 text-primary',
                  icon: Check,
                  title: 'Получение',
                  desc: 'Push-уведомление на каждом этапе: водитель назначен, груз в пути, доставлено. Подтвердил — заказ завершён.',
                  notify: 'Push на каждый этап',
                  notifyIcon: Bell,
                },
              ].map((step, i) => (
                <div key={step.title} className="flex flex-col lg:flex-row lg:items-start flex-1">
                  {/* Step card */}
                  <ScrollReveal delay={i * 100}>
                    <div className="glass rounded-2xl p-5 lg:min-h-[280px] flex flex-col">
                      <div
                        className={`inline-flex self-start rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3 ${step.roleColor}`}
                      >
                        {step.role}
                      </div>
                      <div className="w-10 h-10 bg-accent-surface rounded-lg flex items-center justify-center mb-3 icon-animate">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-1.5">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                        {step.desc}
                      </p>
                      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border">
                        <step.notifyIcon className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs text-muted-foreground">{step.notify}</span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Connector between steps */}
                  {i < 4 && (
                    <ScrollReveal delay={i * 100 + 50}>
                      {/* Desktop connector — horizontal */}
                      <div className="hidden lg:flex flex-col items-center justify-center px-1 pt-16">
                        <div className="w-6 h-px bg-primary/30" />
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center my-0.5">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                        <div className="w-6 h-px bg-primary/30" />
                      </div>
                      {/* Mobile connector — vertical */}
                      <div className="flex lg:hidden flex-row items-center justify-center py-2">
                        <div className="h-6 w-px bg-primary/30" />
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mx-1">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                        <div className="h-6 w-px bg-primary/30" />
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <ScrollReveal delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {[
                { value: '0 звонков', label: 'координатору' },
                { value: '5 этапов', label: 'отслеживания' },
                { value: '3 канала', label: 'уведомлений' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 7. MOBILE APP — Full feature showcase ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Top area: phone mockup + intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            {/* Phone mockup */}
            <ScrollReveal direction="left" delay={100}>
              <div className="relative max-w-xs mx-auto">
                <div className="glass rounded-[3rem] p-3 border-2 border-border">
                  <div className="bg-card rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-primary px-6 py-3 flex items-center justify-between">
                      <span className="text-primary-foreground text-xs font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-primary-foreground/70 rounded-sm" />
                        <div className="w-3 h-2 bg-primary-foreground/70 rounded-sm" />
                        <div className="w-6 h-3 border border-primary-foreground/70 rounded-sm">
                          <div className="w-4 h-full bg-primary-foreground/70 rounded-sm" />
                        </div>
                      </div>
                    </div>
                    {/* App header */}
                    <div className="bg-primary px-6 pb-6 pt-2">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-primary-foreground/70 text-xs">Добро пожаловать</p>
                          <p className="text-primary-foreground font-bold text-lg">Айдер К.</p>
                        </div>
                        <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">АК</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-primary-foreground/15 rounded-xl p-3">
                          <Wallet className="w-4 h-4 text-primary-foreground/80 mb-1" />
                          <p className="text-primary-foreground font-bold text-lg">12 450 ₸</p>
                          <p className="text-primary-foreground/60 text-xs">Кэшбэк</p>
                        </div>
                        <div className="bg-primary-foreground/15 rounded-xl p-3">
                          <Package className="w-4 h-4 text-primary-foreground/80 mb-1" />
                          <p className="text-primary-foreground font-bold text-lg">8</p>
                          <p className="text-primary-foreground/60 text-xs">Заказов</p>
                        </div>
                      </div>
                    </div>
                    {/* App content */}
                    <div className="px-4 py-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm">Мои проекты</p>
                        <span className="text-xs text-primary">Все</span>
                      </div>
                      <div className="bg-secondary rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-accent-surface rounded-lg flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              ЖК &laquo;Нурлы Тау&raquo;
                            </p>
                            <p className="text-xs text-muted-foreground">Бюджет: 2.4M ₸</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="bg-secondary rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-accent-surface rounded-lg flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">Дом на Абая 52</p>
                            <p className="text-xs text-muted-foreground">Бюджет: 870K ₸</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      {/* Bottom tabs */}
                      <div className="flex items-center justify-around pt-4 border-t border-border mt-4">
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="w-5 h-5 bg-primary rounded-md flex items-center justify-center">
                            <Building2 className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-[9px] text-primary font-medium">Главная</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <Package className="w-5 h-5 text-muted-foreground" />
                          <span className="text-[9px] text-muted-foreground">Заказы</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <MessageCircle className="w-5 h-5 text-muted-foreground" />
                          <span className="text-[9px] text-muted-foreground">Чат</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <Users className="w-5 h-5 text-muted-foreground" />
                          <span className="text-[9px] text-muted-foreground">Профиль</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Intro text */}
            <div>
              <ScrollReveal direction="right">
                <div className="inline-flex items-center gap-2 bg-accent-surface rounded-full px-4 py-1.5 mb-6">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Мобильное приложение</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Всё управление закупками —{' '}
                  <span className="text-primary">в одном приложении</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  WhatsApp — для быстрых заказов. Приложение — для тех, кто хочет
                  управлять стройкой на профессиональном уровне: вести проекты, контролировать
                  бюджет, отслеживать доставки и получать кэшбэк.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    '10+ инструментов',
                    'Работает офлайн',
                    'Бесплатно',
                  ].map((tag) => (
                    <div key={tag} className="flex items-center gap-1.5 bg-accent-surface rounded-full px-3 py-1">
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm font-medium text-primary">{tag}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200}>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <a
                    href="#"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Smartphone className="w-4 h-4" />
                    Скачать приложение
                  </a>
                  <p className="text-xs text-muted-foreground self-center">
                    Скоро в App Store и Google Play
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Full-width feature grid — 10 features */}
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h3 className="text-xl font-bold text-center mb-8">
                Что умеет приложение
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  icon: Brain,
                  title: 'AI-помощник',
                  desc: 'Заказывайте голосом или текстом — AI поймёт любой запрос и подберёт лучшее предложение.',
                },
                {
                  icon: BarChart3,
                  title: 'Сравнение цен',
                  desc: 'Видите min, avg и max цены по рынку. Значок «лучшая цена» — сразу понятно, где выгоднее.',
                },
                {
                  icon: FolderOpen,
                  title: 'Проекты и бюджеты',
                  desc: 'Ведите несколько объектов. Привязывайте заказы к проектам, контролируйте бюджет vs расходы.',
                },
                {
                  icon: Wallet,
                  title: 'Кэшбэк до 7%',
                  desc: 'Копите кэшбэк с каждого заказа. Выводите на карту или используйте для следующих покупок.',
                },
                {
                  icon: Truck,
                  title: 'Трекинг доставки',
                  desc: '5 этапов в реальном времени: от подтверждения до прибытия. Контакт водителя, звонок в 1 нажатие.',
                },
                {
                  icon: Calculator,
                  title: 'Калькулятор материалов',
                  desc: 'Рассчитайте цемент, штукатурку, краску, плитку, гипсокартон, утеплитель или ламинат по площади.',
                },
                {
                  icon: ScanLine,
                  title: 'Сканер смет',
                  desc: 'Сфотографируйте смету или накладную — AI распознает материалы и создаст заказ автоматически.',
                },
                {
                  icon: Repeat,
                  title: 'Шаблоны заказов',
                  desc: 'Завершённые заказы сохраняются как шаблоны. Повторный заказ — в одно нажатие.',
                },
                {
                  icon: Bell,
                  title: 'Оповещения о ценах',
                  desc: 'Укажите целевую цену — получите уведомление, когда материал подешевеет до нужного уровня.',
                },
                {
                  icon: Package,
                  title: 'Управление заказами',
                  desc: '8 статусов заказа: от «новый» до «доставлен». Полная детализация, отмена, повторный заказ.',
                },
              ].map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 60}>
                  <div className="glass rounded-xl p-4 h-full">
                    <div className="w-9 h-9 bg-accent-surface rounded-lg flex items-center justify-center mb-3 icon-animate">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. FINAL CTA ===== */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Первый заказ — за 30 секунд
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Напишите нам прямо сейчас. Без регистрации, без скачивания — просто
                отправьте сообщение.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="https://wa.me/77001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-whatsapp text-white px-10 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Написать в WhatsApp
                </a>
                <a
                  href="https://t.me/stroymaterial_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-telegram text-white px-10 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-3"
                >
                  <Send className="w-6 h-6" />
                  Написать в Telegram
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Без регистрации</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Удобная онлайн-оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Ответ мгновенно</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Supplier banner — subtle, not a full section */}
      <div className="border-t border-border bg-secondary/30 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <p className="text-muted-foreground">
              Вы поставщик стройматериалов?
            </p>
            <Link
              href="/suppliers"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              Подключитесь к Stroymaterial.kz
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
