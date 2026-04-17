'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'

const faqs = [
  {
    category: 'Общие вопросы',
    items: [
      {
        q: 'Что такое Stroymaterial.kz?',
        a: 'Stroymaterial.kz — это цифровая платформа для закупки и продажи строительных материалов. Мы объединяем поставщиков, клиентов и логистов, чтобы процесс был быстрым, прозрачным и выгодным. Среднее время оформления заказа — 30 секунд.',
      },
      {
        q: 'Как зарегистрироваться?',
        a: 'Регистрация занимает 1 минуту. Нажмите "Регистрация", выберите роль (клиент, поставщик, логист), укажите номер телефона и БИН. После подтверждения вы получите доступ ко всем функциям платформы.',
      },
      {
        q: 'Stroymaterial.kz бесплатный для клиентов?',
        a: 'Да, для клиентов платформа полностью бесплатна. Вы платите только за товары. Более того, вы получаете кэшбэк 1-5% с каждой покупки, который можно использовать для следующих заказов.',
      },
      {
        q: 'В каких городах работает Stroymaterial.kz?',
        a: 'Сейчас мы работаем в Алматы, Астане, Шымкенте, Караганде и Актобе. К концу 2025 года планируем охватить все крупные города Казахстана.',
      },
    ],
  },
  {
    category: 'Для поставщиков',
    items: [
      {
        q: 'Сколько стоит размещение для поставщика?',
        a: 'Первые 3 месяца — без комиссии. После этого — тариф от 49 000 ₸/мес в зависимости от пакета. Комиссия с продаж — 0% на старте, далее от 3% до 8% в зависимости от категории товаров.',
      },
      {
        q: 'Как быстро я получу первых клиентов?',
        a: 'В среднем поставщик получает первых клиентов в течение первой недели. За первый квартал — рост продаж на 40%. 500+ поставщиков уже на платформе.',
      },
      {
        q: 'Нужно ли подключаться к API?',
        a: 'Нет, API не обязателен. Вы можете управлять товарами и заказами через удобную панель. API доступен для крупных поставщиков, которые хотят автоматизировать синхронизацию складов.',
      },
      {
        q: 'Кто занимается доставкой?',
        a: 'Доставку осуществляют наши партнёры-логисты. Вы передаёте груз, логист доставляет. Вы получаете фото-подтверждение и оплату автоматически.',
      },
    ],
  },
  {
    category: 'Для клиентов',
    items: [
      {
        q: 'Как найти лучшие цены?',
        a: 'Используйте поиск или AI-ассистент. Введите название материала — и получите лучшее предложение с ценой, наличием и сроками доставки. Подбор — за 10 секунд.',
      },
      {
        q: 'Как работает кэшбэк?',
        a: 'С каждой покупки вам начисляется 1-5% кэшбэка. Его можно использовать для оплаты следующих заказов. Средний кэшбэк наших активных клиентов — 67 000 ₸/мес.',
      },
      {
        q: 'Можно ли оформить заказ без регистрации?',
        a: 'Просматривать каталог и сравнивать цены можно без регистрации. Для оформления заказа и получения кэшбэка необходима регистрация — это занимает 1 минуту.',
      },
      {
        q: 'Как отследить заказ?',
        a: 'После оформления заказа вы получаете статус в реальном времени: собран → в пути → доставлен. Фото-подтверждение доставки приходит в приложение.',
      },
    ],
  },
  {
    category: 'Для логистов',
    items: [
      {
        q: 'Сколько зарабатывает логист?',
        a: 'Средний заработок логиста на платформе — от 500 000 ₸/мес. Зависит от количества доставок, расстояния и типа груза. 98% доставок выполняется вовремя.',
      },
      {
        q: 'Какие требования к транспорту?',
        a: 'Грузовой транспорт от 1.5 тонн. Необходим смартфон с мобильным приложением для подтверждения доставок. Страхование груза обязательно.',
      },
      {
        q: 'Как получать заказы?',
        a: 'Заказы появляются в панели логиста. Вы принимаете или отклоняете их. Система автоматически рассчитывает стоимость доставки по маршруту.',
      },
    ],
  },
  {
    category: 'Оплата и безопасность',
    items: [
      {
        q: 'Какие способы оплаты доступны?',
        a: 'Банковские карты (Visa, Mastercard), онлайн-перевод, безналичный расчёт для юрлиц. Для поставщиков — рассрочка 0% на 3 месяца.',
      },
      {
        q: 'Как защищены мои данные?',
        a: 'Мы используем шифрование данных и храним информацию на защищённых серверах. Все транзакции проходят через платёжные системы с PCI DSS сертификацией.',
      },
      {
        q: 'Что если товар не соответствует описанию?',
        a: 'Откройте спор в приложении в течение 24 часов. Наша служба поддержки рассмотрит обращение и обеспечит возврат или замену. Гарантия возврата — 14 дней.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">FAQ</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Часто задаваемые <span className="text-primary">вопросы</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о платформе Stroymaterial.kz. Не нашли ответ? Напишите нам.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqs.map(category => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item, i) => {
                    const key = `${category.category}-${i}`
                    const isOpen = openIndex === key
                    return (
                      <div key={key} className="bg-card border border-border rounded-2xl overflow-hidden transition-all">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                        >
                          <span className="text-lg font-semibold pr-4">{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-muted-foreground">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Не нашли ответ?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Наша служба поддержки работает 24/7. Среднее время ответа — 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2">
                Связаться с нами
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="bg-whatsapp text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
