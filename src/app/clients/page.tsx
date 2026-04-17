import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { MessageCircle, Send, Scan, Zap, TrendingUp, Calculator, ArrowRight, Check } from 'lucide-react'

export default function ClientsPage() {
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
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">WhatsApp-помощник для заказов</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={100}>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Напишите в WhatsApp —{' '}
                  <span className="text-primary">помощник найдёт всё за 30 секунд</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={200}>
                <p className="text-xl text-muted-foreground mb-8">
                  Вместо часов обзвона поставщиков — напишите что нужно обычным языком.
                  AI поймёт даже со сленгом и на казахском, найдёт лучшие цены и оформит заказ.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Написать в WhatsApp
                  </a>
                  <a href="https://t.me/stroymaterial_bot" target="_blank" rel="noopener noreferrer" className="bg-telegram text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Telegram
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={200} className="hidden lg:block">
              <div className="glass rounded-3xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
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
                    <p className="text-sm">Нужно 5 тонн цемента М400 и 2 куба песка для фундамента</p>
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-none p-3 max-w-[90%]">
                    <p className="text-sm">Готово! Лучший вариант для вас:</p>
                    <div className="mt-2 space-y-2">
                      <div className="bg-background/50 rounded-lg p-2 text-xs">
                        <span className="font-semibold">Цемент М400</span> — 18 500 &#8376;/т &times; 5 т
                        <span className="block text-primary font-medium">Итого: 92 500 &#8376;</span>
                      </div>
                      <div className="bg-background/50 rounded-lg p-2 text-xs">
                        <span className="font-semibold">Песок речной</span> — 4 800 &#8376;/м&sup3; &times; 2 м&sup3;
                        <span className="block text-primary font-medium">Доставка: завтра</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как заказать</h2>
              <p className="text-muted-foreground text-lg">Без каталога, без фильтров, без регистрации</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: MessageCircle, title: 'Напишите помощнику', description: 'В WhatsApp или Telegram, обычным языком: «нужен кирпич для перегородки, 500 штук».', badge: '30 секунд' },
              { step: '02', icon: Zap, title: 'AI подбирает', description: 'Помощник мгновенно находит лучшую цену, проверяет наличие и рассчитывает доставку в ваш район.', badge: 'Мгновенно' },
              { step: '03', icon: Check, title: 'Удобная онлайн-оплата', description: 'Получаете готовый заказ с итоговой ценой — оплачиваете любым удобным способом прямо в чате.', badge: '1 клик' },
            ].map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="glass rounded-2xl p-8 relative h-full">
                  <span className="absolute top-4 right-4 text-xs text-primary font-medium bg-accent-surface px-2 py-1 rounded-full">{step.badge}</span>
                  <div className="text-4xl font-extrabold text-primary/15 mb-4">{step.step}</div>
                  <div className="w-12 h-12 bg-accent-surface rounded-xl flex items-center justify-center mb-5 icon-animate">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to request */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как написать помощнику</h2>
              <p className="text-muted-foreground text-lg">Несколько способов — выбирайте удобный</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: MessageCircle, title: 'WhatsApp помощник', description: 'Напишите или скажите голосом что нужно. Помощник поймёт контекст и подберёт лучшие цены.', badge: 'Основной способ' },
              { icon: Send, title: 'Telegram помощник', description: 'Те же возможности в Telegram. Удобно для тех, кто предпочитает этот мессенджер.', badge: 'Альтернатива' },
              { icon: Scan, title: 'Фото сметы', description: 'Сфотографируйте смету или проект — помощник распознает все позиции и подберёт лучшие цены.', badge: 'Скоро' },
            ].map((method, i) => (
              <ScrollReveal key={method.title} delay={i * 100}>
                <div className="glass rounded-2xl p-8 relative h-full">
                  <span className="absolute top-4 right-4 text-xs text-primary font-medium bg-accent-surface px-2 py-1 rounded-full">{method.badge}</span>
                  <div className="w-12 h-12 bg-accent-surface rounded-xl flex items-center justify-center mb-5 icon-animate">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему не каталог?</h2>
                <p className="text-muted-foreground text-lg mb-10">
                  В стройке нет красивых карточек. Каждому проекту нужны разные материалы.
                  AI понимает контекст лучше любого фильтра.
                </p>
                <div className="space-y-5">
                  {[
                    { title: 'Понимает контекст', desc: '«Цемент для фундамента» и «цемент для штукатурки» — AI знает разницу' },
                    { title: 'Находит лучшую цену', desc: 'Не нужно открывать 10 вкладок — помощник покажет лучшее предложение' },
                    { title: 'Помнит ваши заказы', desc: 'Повторяющиеся заказы — «как в прошлый раз» — в 1 сообщение' },
                    { title: 'Работает 24/7', desc: 'Напишите помощнику в любое время — он ответит мгновенно' },
                  ].map(feature => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-accent-surface rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6 text-center">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">30 сек</div>
                  <div className="text-sm text-muted-foreground">Среднее время подбора</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">30%</div>
                  <div className="text-sm text-muted-foreground">Средняя экономия</div>
                </div>
                <Link href="/calculator" className="glass rounded-2xl p-6 hover:border-primary/30 transition-all col-span-2 group">
                  <h4 className="font-semibold mb-2">Калькулятор материалов</h4>
                  <p className="text-sm text-muted-foreground mb-3">Рассчитайте сколько нужно для вашего проекта</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Открыть калькулятор <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="scale">
            <div className="glass rounded-3xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Попробуйте прямо сейчас</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Напишите нам — первый заказ за 30 секунд. Без регистрации.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Написать в WhatsApp
                </a>
                <a href="https://t.me/stroymaterial_bot" target="_blank" rel="noopener noreferrer" className="bg-telegram text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
